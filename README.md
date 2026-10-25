# EZ Platform · Web del alumno

Plataforma web de EZ DrumSchool. Incluye la portada, el registro, el inicio de sesión y todas las secciones del alumno diseñadas en Claude Design: Inicio, Tu camino, Clases, Mi progreso, Tu repertorio, Rudimentos, Caja de herramientas, Mini DAW y Mi libro.

## Cómo funciona el registro

- **El padre, la madre o el tutor crea la cuenta.** Primero escribe sus datos (nombre, relación, correo, celular y contraseña) y luego los de su hijo(a).
- **Cada alumno tiene un apodo:** es cómo le gusta que le llamen. La app lo usa para saludarlo ("Hola, Mati") en la barra superior, en el inicio y en su perfil.
- **El alumno entra con la cuenta de su papá o mamá.** Si la familia tiene varios hijos, al entrar aparece "¿Quién va a tocar hoy?" para elegir el perfil. Desde ahí también se pueden agregar más hijos.
- **Los profesores se registran solos,** pero su cuenta queda *pendiente* hasta que la academia la activa. Recién activa, el profesor ve la lista de alumnos.

## Base de datos (Supabase)

El archivo `supabase/migrations/20261025000000_registro.sql` crea:

| Tabla | Qué guarda |
| --- | --- |
| `tutores` | Padre, madre o tutor: nombre, relación, correo, celular, notificaciones |
| `alumnos` | Cada hijo(a): nombre completo, **apodo**, edad, fecha de nacimiento, género, avatar, programa, nivel y sesión actual |
| `docentes` | Profesores: nombre, cómo los llaman, correo, celular, especialidad y estado (`pendiente`, `activo` o `inactivo`) |
| `administradores` | Usuarios de la academia que ven todo y activan profesores |

Un trigger en `auth.users` llena estas tablas al registrarse. Las reglas de seguridad (RLS) hacen que cada familia vea solo a sus hijos, que un profesor no pueda activarse solo y que nadie sin sesión vea datos.

## Puesta en marcha

### 1. Crear el proyecto en Supabase (gratis)

1. Entra a [supabase.com](https://supabase.com) y crea una cuenta. Puedes usar la de GitHub.
2. Pulsa **New project**:
   - **Name:** `ez-platform`.
   - **Database password:** una contraseña segura (guárdala).
   - **Region:** la más cercana, por ejemplo *South America (São Paulo)*.
3. Cuando el proyecto esté listo, abre **SQL Editor → New query**, pega todo el contenido de `supabase/migrations/20261025000000_registro.sql` y pulsa **Run**. Debe terminar con "Success".
4. En **Authentication → URL Configuration**, pon en **Site URL** la dirección donde publicarás la web, por ejemplo `https://ez-platform.vercel.app`. Mientras pruebas en tu computadora, usa `http://localhost:5173`.
5. Correo de confirmación: Supabase pide confirmar el correo por defecto, y la app ya lo maneja con la pantalla "Revisa tu correo". Para probar rápido puedes desactivarlo en **Authentication → Sign In / Providers → Email → Confirm email**.
6. En **Project Settings → API** copia la **Project URL** y la **anon public key**.

### 2. Conectar la web

```bash
cp .env.example .env.local   # pega ahí la URL y la anon key
npm install
npm run dev                  # abre http://localhost:5173
```

Sin `.env.local` la web funciona en **modo demo**: las cuentas se guardan solo en ese navegador y arriba aparece el aviso "Modo demo".

### 3. Publicar (Vercel)

1. En [vercel.com](https://vercel.com) elige **Add New → Project** e importa este repositorio.
2. En **Environment Variables** agrega `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
3. Pulsa **Deploy**. Vercel detecta que es un proyecto Vite.
4. Copia la dirección que te da Vercel en el **Site URL** de Supabase (paso 1.4).

### 4. Activar a un profesor y darte permisos de academia

En Supabase, **SQL Editor**:

```sql
-- Tu propio usuario como administrador (busca tu id en Authentication → Users)
insert into administradores values ('ID-DE-TU-USUARIO');

-- Activar a un profesor
update docentes set estado = 'activo' where correo = 'profe@correo.com';
```

## Estructura

```
src/
  App.jsx            Sesión, elegir alumno y navegación entre secciones
  DocentePanel.jsx   Vista inicial del profesor
  lib/backend.js     Supabase (o modo demo): registro, ingreso, alumnos
  lib/sesiones.js    Las 20 sesiones del programa
  legacy/            Secciones del diseño de Claude Design (componentes y pantallas)
    12-SwOnboarding.jsx  Portada, registro e ingreso
public/r/            Ilustraciones y logos
public/icons/        Íconos Lucide usados (npm run iconos para regenerar)
supabase/migrations/ Script de la base de datos
```

## Pendiente

- Las secciones (camino, progreso, repertorio, etc.) todavía muestran datos de ejemplo del diseño. Los siguientes pasos son guardar en Supabase el avance, las prácticas de la Misión 15 y la asistencia.
- Faltan el panel de administración para activar profesores desde la web y la pantalla para cambiar la contraseña después de "¿Olvidaste tu contraseña?".
