// Capa de datos de EZ DrumSchool.
// Con VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY usa Supabase (Auth + Postgres).
// Sin ellas funciona en "modo demo": guarda todo en el navegador para poder probar el flujo.
import { createClient } from "@supabase/supabase-js";

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = URL && KEY ? createClient(URL, KEY) : null;
export const modoDemo = !supabase;

const ERRORES = [
  [/invalid login credentials/i, "Correo o contraseña incorrectos."],
  [/already registered|already been registered|user already exists/i, "Ese correo ya tiene una cuenta. Inicia sesión."],
  [/email not confirmed/i, "Primero confirma tu correo: te enviamos un enlace al registrarte."],
  [/password should be at least/i, "La contraseña debe tener al menos 6 caracteres."],
  [/rate limit|too many/i, "Demasiados intentos. Espera un momento y vuelve a intentar."],
  [/unable to validate email|invalid email/i, "Ese correo no es válido."],
];
function traducir(error) {
  const msg = (error && error.message) || String(error);
  const hit = ERRORES.find(([re]) => re.test(msg));
  return new Error(hit ? hit[1] : msg);
}

// Datos que el registro manda a la base. El apodo es cómo quiere que le llamen al niño(a).
function limpiarAlumno(a) {
  const nombre = (a.nombre_completo || "").trim();
  return {
    nombre_completo: nombre,
    apodo: (a.apodo || "").trim() || nombre.split(/\s+/)[0],
    fecha_nacimiento: a.fecha_nacimiento || null,
    edad: a.edad ? Number(a.edad) : null,
    genero: a.genero || null,
    avatar: a.avatar || null,
  };
}

/* ---------------- Supabase ---------------- */

async function perfilSupabase(user) {
  if (!user) return null;
  const rol = user.user_metadata && user.user_metadata.rol;
  if (rol === "docente") {
    const { data, error } = await supabase.from("docentes").select("*").eq("id", user.id).maybeSingle();
    if (error) throw traducir(error);
    return { user: { id: user.id, email: user.email }, rol, docente: data, alumnos: [] };
  }
  const [{ data: tutor, error: e1 }, { data: alumnos, error: e2 }] = await Promise.all([
    supabase.from("tutores").select("*").eq("id", user.id).maybeSingle(),
    supabase.from("alumnos").select("*").eq("tutor_id", user.id).order("creado_en"),
  ]);
  if (e1) throw traducir(e1);
  if (e2) throw traducir(e2);
  return { user: { id: user.id, email: user.email }, rol: "tutor", tutor, alumnos: alumnos || [] };
}

const viaSupabase = {
  async sesion() {
    const { data } = await supabase.auth.getSession();
    return perfilSupabase(data.session && data.session.user);
  },
  async registrarTutor({ tutor, alumnos, password }) {
    const { data, error } = await supabase.auth.signUp({
      email: tutor.correo.trim(),
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          rol: "tutor",
          nombre_completo: tutor.nombre_completo.trim(),
          relacion: tutor.relacion,
          telefono: tutor.telefono || null,
          notificaciones: !!tutor.notificaciones,
          alumnos: alumnos.map(limpiarAlumno),
        },
      },
    });
    if (error) throw traducir(error);
    // Supabase no avisa con error si el correo ya existe: devuelve un usuario sin identidades.
    if (data.user && data.user.identities && data.user.identities.length === 0) throw traducir("already registered");
    if (!data.session) return { confirmarCorreo: true };
    return { perfil: await perfilSupabase(data.user) };
  },
  async registrarDocente({ docente, password }) {
    const { data, error } = await supabase.auth.signUp({
      email: docente.correo.trim(),
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          rol: "docente",
          nombre_completo: docente.nombre_completo.trim(),
          apodo: (docente.apodo || "").trim() || null,
          telefono: docente.telefono || null,
          especialidad: docente.especialidad || null,
        },
      },
    });
    if (error) throw traducir(error);
    if (data.user && data.user.identities && data.user.identities.length === 0) throw traducir("already registered");
    if (!data.session) return { confirmarCorreo: true };
    return { perfil: await perfilSupabase(data.user) };
  },
  async ingresar(correo, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email: correo.trim(), password });
    if (error) throw traducir(error);
    return perfilSupabase(data.user);
  },
  async salir() {
    await supabase.auth.signOut();
  },
  async agregarAlumno(alumno) {
    const { data: s } = await supabase.auth.getSession();
    const uid = s.session && s.session.user.id;
    const { data, error } = await supabase.from("alumnos").insert({ ...limpiarAlumno(alumno), tutor_id: uid }).select().single();
    if (error) throw traducir(error);
    return data;
  },
  async listarAlumnos() {
    const { data, error } = await supabase.from("alumnos").select("id, apodo, nombre_completo, edad, nivel, sesion_actual, avatar").order("creado_en");
    if (error) throw traducir(error);
    return data || [];
  },
  async recuperarClave(correo) {
    const { error } = await supabase.auth.resetPasswordForEmail(correo.trim(), { redirectTo: window.location.origin });
    if (error) throw traducir(error);
  },
};

/* ---------------- Modo demo (navegador) ---------------- */

const DB_KEY = "ez-demo-db";
const SES_KEY = "ez-demo-sesion";
function leer() {
  try { return JSON.parse(localStorage.getItem(DB_KEY)) || { usuarios: [], tutores: [], alumnos: [], docentes: [] }; }
  catch (e) { return { usuarios: [], tutores: [], alumnos: [], docentes: [] }; }
}
function guardar(db) { localStorage.setItem(DB_KEY, JSON.stringify(db)); }
async function hash(t) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t));
  return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("");
}
const id = () => crypto.randomUUID();
const ahora = () => new Date().toISOString();
function perfilDemo(uid) {
  const db = leer();
  const u = db.usuarios.find(x => x.id === uid);
  if (!u) return null;
  const user = { id: u.id, email: u.correo };
  if (u.rol === "docente") return { user, rol: "docente", docente: db.docentes.find(d => d.id === uid) || null, alumnos: [] };
  return { user, rol: "tutor", tutor: db.tutores.find(t => t.id === uid) || null, alumnos: db.alumnos.filter(a => a.tutor_id === uid) };
}
async function crearUsuarioDemo(correo, password, rol) {
  const db = leer();
  correo = correo.trim().toLowerCase();
  if (password.length < 6) throw traducir("password should be at least 6");
  if (db.usuarios.some(u => u.correo === correo)) throw traducir("already registered");
  const u = { id: id(), correo, clave: await hash(password), rol };
  db.usuarios.push(u);
  guardar(db);
  return u;
}

const viaDemo = {
  async sesion() { return perfilDemo(localStorage.getItem(SES_KEY)); },
  async registrarTutor({ tutor, alumnos, password }) {
    const u = await crearUsuarioDemo(tutor.correo, password, "tutor");
    const db = leer();
    db.tutores.push({ id: u.id, nombre_completo: tutor.nombre_completo.trim(), relacion: tutor.relacion, correo: u.correo, telefono: tutor.telefono || null, notificaciones: !!tutor.notificaciones, creado_en: ahora() });
    alumnos.forEach(a => db.alumnos.push({ id: id(), tutor_id: u.id, ...limpiarAlumno(a), programa: "Groove con propósito", nivel: "PULSO", sesion_actual: 1, activo: true, creado_en: ahora() }));
    guardar(db);
    localStorage.setItem(SES_KEY, u.id);
    return { perfil: perfilDemo(u.id) };
  },
  async registrarDocente({ docente, password }) {
    const u = await crearUsuarioDemo(docente.correo, password, "docente");
    const db = leer();
    db.docentes.push({ id: u.id, nombre_completo: docente.nombre_completo.trim(), apodo: (docente.apodo || "").trim() || null, correo: u.correo, telefono: docente.telefono || null, especialidad: docente.especialidad || null, estado: "pendiente", creado_en: ahora() });
    guardar(db);
    localStorage.setItem(SES_KEY, u.id);
    return { perfil: perfilDemo(u.id) };
  },
  async ingresar(correo, password) {
    const db = leer();
    const u = db.usuarios.find(x => x.correo === correo.trim().toLowerCase());
    if (!u || u.clave !== await hash(password)) throw traducir("invalid login credentials");
    localStorage.setItem(SES_KEY, u.id);
    return perfilDemo(u.id);
  },
  async salir() { localStorage.removeItem(SES_KEY); },
  async agregarAlumno(alumno) {
    const uid = localStorage.getItem(SES_KEY);
    const db = leer();
    const fila = { id: id(), tutor_id: uid, ...limpiarAlumno(alumno), programa: "Groove con propósito", nivel: "PULSO", sesion_actual: 1, activo: true, creado_en: ahora() };
    db.alumnos.push(fila);
    guardar(db);
    return fila;
  },
  async listarAlumnos() { return leer().alumnos; },
  async recuperarClave() {
    throw new Error("En el modo demo no se envían correos. Conecta Supabase para recuperar contraseñas.");
  },
};

const backend = modoDemo ? viaDemo : viaSupabase;
export default backend;

// Avisa a la app cuando la sesión cambia (por ejemplo, al volver del enlace de confirmación del correo).
export function alCambiarSesion(cb) {
  if (!supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange((evento) => {
    if (evento === "SIGNED_IN" || evento === "SIGNED_OUT") cb();
  });
  return () => data.subscription.unsubscribe();
}
