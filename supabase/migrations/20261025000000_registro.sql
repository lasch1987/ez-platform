-- EZ DrumSchool · Registro de familias, alumnos y docentes
-- Pega este archivo completo en Supabase > SQL Editor > New query y pulsa "Run".
--
-- Cómo funciona:
--   * El padre, madre o tutor crea la cuenta (auth.users) y en el mismo paso registra a su hijo(a).
--   * Al crearse el usuario, el trigger registrar_usuario() lee los datos del registro
--     (raw_user_meta_data) y llena tutores + alumnos, o docentes.
--   * apodo = cómo le gusta al alumno que le llamen; la app lo usa para saludarlo.
--   * Las políticas RLS hacen que cada familia vea solo a sus hijos, y cada docente solo su perfil
--     (y la lista de alumnos cuando la academia lo activa).

-- ============ Tablas ============

create table if not exists public.tutores (
  id              uuid primary key references auth.users (id) on delete cascade,
  nombre_completo text not null,
  relacion        text not null default 'Madre',
  correo          text not null,
  telefono        text,
  notificaciones  boolean not null default true,
  creado_en       timestamptz not null default now()
);

create table if not exists public.alumnos (
  id               uuid primary key default gen_random_uuid(),
  tutor_id         uuid not null references public.tutores (id) on delete cascade,
  nombre_completo  text not null check (length(trim(nombre_completo)) > 0),
  apodo            text not null check (length(trim(apodo)) > 0),
  fecha_nacimiento date,
  edad             smallint check (edad between 3 and 99),
  genero           text,
  avatar           text,
  programa         text not null default 'Groove con propósito',
  nivel            text not null default 'PULSO',
  sesion_actual    smallint not null default 1 check (sesion_actual between 1 and 20),
  activo           boolean not null default true,
  creado_en        timestamptz not null default now()
);
create index if not exists alumnos_tutor_id_idx on public.alumnos (tutor_id);

create table if not exists public.docentes (
  id              uuid primary key references auth.users (id) on delete cascade,
  nombre_completo text not null,
  apodo           text,
  correo          text not null,
  telefono        text,
  especialidad    text,
  estado          text not null default 'pendiente' check (estado in ('pendiente', 'activo', 'inactivo')),
  creado_en       timestamptz not null default now()
);

-- Quien administra la academia. Se agrega a mano: insert into administradores values ('<uuid del usuario>');
create table if not exists public.administradores (
  id uuid primary key references auth.users (id) on delete cascade
);

-- ============ Funciones de apoyo ============

create or replace function public.es_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from administradores where id = auth.uid());
$$;

create or replace function public.es_docente_activo()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from docentes where id = auth.uid() and estado = 'activo');
$$;

-- Crea las filas de perfil a partir de los datos que envía la app al registrarse.
create or replace function public.registrar_usuario()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  m jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  a jsonb;
  nombre text;
begin
  if m->>'rol' = 'tutor' then
    insert into tutores (id, nombre_completo, relacion, correo, telefono, notificaciones)
    values (
      new.id,
      coalesce(nullif(trim(m->>'nombre_completo'), ''), split_part(new.email, '@', 1)),
      coalesce(nullif(m->>'relacion', ''), 'Madre'),
      new.email,
      nullif(m->>'telefono', ''),
      coalesce((m->>'notificaciones')::boolean, true)
    );
    for a in select * from jsonb_array_elements(coalesce(m->'alumnos', '[]'::jsonb)) loop
      nombre := trim(coalesce(a->>'nombre_completo', ''));
      continue when nombre = '';
      insert into alumnos (tutor_id, nombre_completo, apodo, fecha_nacimiento, edad, genero, avatar)
      values (
        new.id,
        nombre,
        coalesce(nullif(trim(a->>'apodo'), ''), split_part(nombre, ' ', 1)),
        nullif(a->>'fecha_nacimiento', '')::date,
        nullif(a->>'edad', '')::smallint,
        nullif(a->>'genero', ''),
        nullif(a->>'avatar', '')
      );
    end loop;
  elsif m->>'rol' = 'docente' then
    insert into docentes (id, nombre_completo, apodo, correo, telefono, especialidad)
    values (
      new.id,
      coalesce(nullif(trim(m->>'nombre_completo'), ''), split_part(new.email, '@', 1)),
      nullif(trim(m->>'apodo'), ''),
      new.email,
      nullif(m->>'telefono', ''),
      nullif(m->>'especialidad', '')
    );
  end if;
  return new;
end;
$$;

drop trigger if exists al_crear_usuario on auth.users;
create trigger al_crear_usuario
  after insert on auth.users
  for each row execute function public.registrar_usuario();

-- Un docente no puede activarse a sí mismo: solo un administrador cambia "estado".
create or replace function public.proteger_estado_docente()
returns trigger language plpgsql set search_path = public as $$
begin
  if new.estado is distinct from old.estado and not es_admin() then
    raise exception 'Solo la academia puede cambiar el estado de un docente';
  end if;
  return new;
end;
$$;

drop trigger if exists docentes_estado on public.docentes;
create trigger docentes_estado
  before update on public.docentes
  for each row execute function public.proteger_estado_docente();

-- ============ Seguridad por filas (RLS) ============

alter table public.tutores         enable row level security;
alter table public.alumnos         enable row level security;
alter table public.docentes        enable row level security;
alter table public.administradores enable row level security;

-- Tutores: cada adulto ve y edita sus datos; la academia ve todos.
drop policy if exists tutores_select on public.tutores;
create policy tutores_select on public.tutores for select to authenticated
  using (id = auth.uid() or es_admin());
drop policy if exists tutores_update on public.tutores;
create policy tutores_update on public.tutores for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

-- Alumnos: la familia ve, agrega y edita a sus hijos; docentes activos y la academia los ven.
drop policy if exists alumnos_select on public.alumnos;
create policy alumnos_select on public.alumnos for select to authenticated
  using (tutor_id = auth.uid() or es_docente_activo() or es_admin());
drop policy if exists alumnos_insert on public.alumnos;
create policy alumnos_insert on public.alumnos for insert to authenticated
  with check (tutor_id = auth.uid());
drop policy if exists alumnos_update on public.alumnos;
create policy alumnos_update on public.alumnos for update to authenticated
  using (tutor_id = auth.uid() or es_admin()) with check (tutor_id = auth.uid() or es_admin());
drop policy if exists alumnos_delete on public.alumnos;
create policy alumnos_delete on public.alumnos for delete to authenticated
  using (tutor_id = auth.uid() or es_admin());

-- Docentes: cada uno ve y edita su perfil; la academia ve y activa a todos.
drop policy if exists docentes_select on public.docentes;
create policy docentes_select on public.docentes for select to authenticated
  using (id = auth.uid() or es_admin());
drop policy if exists docentes_update on public.docentes;
create policy docentes_update on public.docentes for update to authenticated
  using (id = auth.uid() or es_admin()) with check (id = auth.uid() or es_admin());

drop policy if exists administradores_select on public.administradores;
create policy administradores_select on public.administradores for select to authenticated
  using (id = auth.uid());

-- Los campos del programa (nivel, sesión) los cambia la academia, no la familia.
revoke update on public.alumnos from authenticated;
grant update (nombre_completo, apodo, fecha_nacimiento, edad, genero, avatar) on public.alumnos to authenticated;
revoke insert on public.alumnos from authenticated;
grant insert (tutor_id, nombre_completo, apodo, fecha_nacimiento, edad, genero, avatar) on public.alumnos to authenticated;
