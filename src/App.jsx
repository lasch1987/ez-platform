import React from "react";
import backend, { alCambiarSesion, modoDemo } from "./lib/backend.js";
import DocentePanel from "./DocentePanel.jsx";

const ACCENT = "#2F57F5";
const SUBS = {
  inicio: ["Sigue tu camino. Toca, practica y disfruta.", "Buscar..."],
  camino: ["Sigue tu camino. Toca, practica y disfruta.", "Buscar..."],
  progreso: ["Mide tu avance y celebra tus logros.", null],
  repertorio: ["Explora, aprende y toca las canciones que te inspiran.", "Buscar canciones..."],
  caja: ["Aquí tienes tus herramientas para sonar cada vez mejor.", "Buscar herramientas..."],
  clases: ["Tu agenda, tus tareas y tus grabaciones en un solo lugar.", null],
  rudimentos: ["Practica cada golpe con calma y precisión.", "Buscar rudimento..."],
  daw: ["Arma tus grooves, escúchalos y grábalos.", null],
  libro: ["Lee, practica y marca tus páginas favoritas.", "Buscar en mi libro..."],
};
const LABELS = { portafolio: "Portafolio", notif: "Notificaciones", buscar: "Buscar" };
const ALUMNO_KEY = "ez-alumno-activo";

function accentVars(c) {
  const mix = (o, p) => `color-mix(in oklab, ${c}, ${o} ${p}%)`;
  return {
    "--accent": c, "--accent-hover": mix("white", 15), "--accent-press": mix("black", 15), "--accent-soft": mix("white", 92),
    "--accent-ring": `color-mix(in oklab, ${c} 24%, transparent)`,
    "--accent-gradient": `linear-gradient(180deg, ${mix("white", 12)} 0%, ${c} 100%)`,
    "--shadow-glow-accent": `0 8px 24px color-mix(in oklab, ${c} 34%, transparent)`,
    "--shadow-nav-active": `0 0 0 1px color-mix(in oklab, ${c} 55%, transparent), 0 8px 22px color-mix(in oklab, ${c} 35%, transparent)`,
  };
}

function guardarAlumno(id) {
  try { id ? localStorage.setItem(ALUMNO_KEY, id) : localStorage.removeItem(ALUMNO_KEY); } catch (e) { /* sin almacenamiento */ }
}
function alumnoGuardado() {
  try { return localStorage.getItem(ALUMNO_KEY); } catch (e) { return null; }
}

export default function App() {
  const [cargando, setCargando] = React.useState(true);
  const [perfil, setPerfil] = React.useState(null);
  const [alumnoId, setAlumnoId] = React.useState(null);
  // null = dentro de la app; "splash" = portada; "elegir" = elegir o agregar alumno
  const [onb, setOnb] = React.useState("splash");
  const [error, setError] = React.useState("");
  const [page, setPage] = React.useState("inicio");

  const aplicar = React.useCallback((p) => {
    setPerfil(p);
    if (!p) { setAlumnoId(null); setOnb("splash"); return; }
    if (p.rol === "docente") { setOnb(null); return; }
    const guardado = p.alumnos.find((a) => a.id === alumnoGuardado());
    if (guardado) { setAlumnoId(guardado.id); setOnb(null); }
    else if (p.alumnos.length === 1) { setAlumnoId(p.alumnos[0].id); guardarAlumno(p.alumnos[0].id); setOnb(null); }
    else setOnb("elegir");
  }, []);

  const recargar = React.useCallback(() => {
    backend.sesion()
      .then(aplicar)
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, [aplicar]);

  React.useEffect(() => { recargar(); return alCambiarSesion(recargar); }, [recargar]);

  const go = (p) => { setPage(p); window.scrollTo({ top: 0 }); };
  const alumno = perfil && perfil.alumnos ? perfil.alumnos.find((a) => a.id === alumnoId) : null;

  // Las secciones del diseño leen estos datos para saludar al alumno por su apodo.
  window.EZSesion = { perfil, alumno };
  window.EZAcciones = {
    cambiar: () => setOnb("elegir"),
    salir: async () => { await backend.salir(); guardarAlumno(null); setPerfil(null); setAlumnoId(null); setPage("inicio"); setOnb("splash"); },
  };

  if (cargando) {
    return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#120F0E", color: "#fff", fontFamily: "var(--font-body)" }}>Cargando…</div>;
  }

  const Onboarding = window.SwOnboarding;
  if (!perfil || onb) {
    return <div style={accentVars(ACCENT)}>
      <Onboarding
        key={onb || "splash"}
        inicio={perfil ? onb : "splash"}
        perfil={perfil}
        onListo={(p, id) => { setPerfil(p); setAlumnoId(id); guardarAlumno(id); setPage("inicio"); setOnb(null); }}
        onSalir={() => { guardarAlumno(null); setPerfil(null); setAlumnoId(null); }}
      />
      {error && <p role="alert" style={{ position: "fixed", top: 12, left: 12, zIndex: 90, margin: 0, padding: "8px 12px", borderRadius: 10, background: "#fff", color: "#B42318", fontSize: 13 }}>{error}</p>}
      {modoDemo && <DemoAviso />}
    </div>;
  }

  if (perfil.rol === "docente") {
    return <div style={accentVars(ACCENT)}><DocentePanel perfil={perfil} onSalir={window.EZAcciones.salir} />{modoDemo && <DemoAviso />}</div>;
  }

  const { SwSidebar, SwTopbar, SwPlaceholder, SwInicio, SwCamino, SwProgreso, SwRepertorio, SwCaja, SwClases, SwRudimentos, SwDaw, SwLibro } = window;
  const [sub, search] = SUBS[page] || ["", null];
  const View = { inicio: () => <SwInicio go={go} />, camino: SwCamino, progreso: SwProgreso, repertorio: SwRepertorio, caja: SwCaja, clases: SwClases, rudimentos: SwRudimentos, daw: SwDaw, libro: SwLibro }[page];

  return <div style={{ ...accentVars(ACCENT), display: "flex", minHeight: "100vh" }}>
    <div className="bg-blobs" aria-hidden="true">
      <i style={{ width: 520, height: 520, left: "20%", top: -160, background: ACCENT, opacity: .14 }} />
      <i style={{ width: 460, height: 460, right: -120, top: "30%", background: "#FFC36B", opacity: .22, animationDelay: "-7s" }} />
      <i style={{ width: 420, height: 420, left: "40%", bottom: -200, background: "#F26B3A", opacity: .12, animationDelay: "-14s" }} />
    </div>
    <div className="bg-grain" aria-hidden="true" />
    <SwSidebar active={page} onSelect={go} />
    <main key={page + (alumno ? alumno.id : "")} style={{ flex: 1, minWidth: 0, position: "relative", zIndex: 2 }}>
      <SwTopbar sub={sub || "Sigue tu camino. Toca, practica y disfruta."} search={search} />
      {View ? <View /> : <SwPlaceholder label={LABELS[page]} />}
    </main>
    {modoDemo && <DemoAviso />}
  </div>;
}

function DemoAviso() {
  return <div role="status" style={{ position: "fixed", left: "50%", top: 8, transform: "translateX(-50%)", zIndex: 95, padding: "5px 12px", borderRadius: 999, background: "rgba(23,24,28,.88)", color: "#fff", fontFamily: "var(--font-body)", fontSize: 12, whiteSpace: "nowrap", pointerEvents: "none" }}>
    <b>Modo demo</b> · las cuentas se guardan solo en este navegador
  </div>;
}
