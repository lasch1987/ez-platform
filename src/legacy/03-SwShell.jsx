(() => {
const { SidebarNav, Icon, Badge } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;
// Alumno activo de la sesión (lo fija App al entrar). apodo = cómo le gusta que le llamen.
const actual = () => (window.EZSesion && window.EZSesion.alumno) || {};
const apodo = () => actual().apodo || "";
const sesion = () => actual().sesion_actual || 1;
const caraAlumno = () => img(actual().avatar || "mateo/cara-feliz.png");

const NAV = [
  { id: "inicio", label: "Inicio", icon: "house" }, { id: "camino", label: "Tu camino", icon: "circle-play" },
  { id: "clases", label: "Clases", icon: "calendar" }, { id: "progreso", label: "Mi progreso", icon: "chart-no-axes-column-increasing" },
  { id: "repertorio", label: "Tu repertorio", icon: "music" }, { id: "rudimentos", label: "Rudimentos", icon: "drum" },
  { id: "caja", label: "Caja de herramientas", icon: "wrench" }, { id: "daw", label: "Mini DAW", icon: "audio-waveform" }, { id: "libro", label: "Mi libro", icon: "book-open" },
  { id: "portafolio", label: "Portafolio", icon: "folder" }, { id: "sp", divider: true },
  { id: "notif", label: "Notificaciones", icon: "bell", badge: 3 }, { id: "buscar", label: "Buscar", icon: "search" }
];

function useNarrow(q = "(max-width: 1100px)") {
  const [n, setN] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => { const m = window.matchMedia(q), h = () => setN(m.matches); m.addEventListener("change", h); return () => m.removeEventListener("change", h); }, []);
  return n;
}
function PerfilMenu({ narrow }) {
  const [open, setOpen] = React.useState(false);
  const A = window.EZAcciones || {};
  const varios = window.EZSesion && window.EZSesion.perfil && window.EZSesion.perfil.alumnos.length > 1;
  const item = { display: "flex", alignItems: "center", gap: 10, width: "100%", height: 40, padding: "0 10px", border: "none", borderRadius: 10, background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13.5, textAlign: "left" };
  return <div style={{ position: "relative" }}>
    {open && <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: 0, width: 220, padding: 6, borderRadius: 14, background: "#24252B", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 16px 36px rgba(0,0,0,.45)", zIndex: 5 }}>
      <button style={item} className="ez-menu-item" onClick={() => { setOpen(false); A.cambiar && A.cambiar(); }}><Icon name="users" size={16} />{varios ? "Cambiar de alumno" : "Agregar otro alumno"}</button>
      <button style={item} className="ez-menu-item" onClick={() => { setOpen(false); A.salir && A.salir(); }}><Icon name="log-out" size={16} />Cerrar sesión</button>
    </div>}
    <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={"Perfil de " + apodo()} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: 10, borderRadius: 14, border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.04)", color: "#fff", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)" }}>
      <span style={{ width: 42, height: 42, borderRadius: "50%", overflow: "hidden", background: "#FFE6B8", flex: "none" }}><img src={caraAlumno()} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></span>
      {!narrow && <span style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}><b style={{ fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{apodo()}</b><span style={{ fontSize: 12, color: "rgba(255,255,255,.55)" }}>Alumno</span></span>}
      {!narrow && <Icon name={open ? "chevron-down" : "chevron-up"} size={16} />}
    </button>
  </div>;
}
function SwSidebar({ active, onSelect }) {
  const narrow = useNarrow();
  return <aside style={{ width: narrow ? 76 : 232, flex: "none", position: "sticky", top: 0, height: "100vh", background: "radial-gradient(120% 50% at 0% 0%, rgba(47,87,245,.16), transparent 60%), #141518", padding: "22px 14px 14px", display: "flex", flexDirection: "column", gap: 22, overflow: "hidden" }}>
    <img src={img(narrow ? "logo/ez-mark-white.png" : "logo/evams-zapata-white.png")} alt="Evams Zapata" style={{ width: narrow ? 46 : 150, alignSelf: "center" }} />
    <SidebarNav items={NAV} active={active} onSelect={onSelect} collapsed={narrow} style={{ flex: 1, gap: 6 }} />
    <PerfilMenu narrow={narrow} />
  </aside>;
}

function SwTopbar({ sub, search }) {
  return <header className="rv" style={{ "--i": 0, display: "flex", alignItems: "center", gap: 16, padding: "14px 28px", borderBottom: "1px solid #EFEBE4", background: "rgba(251,248,243,.78)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", position: "sticky", top: 0, zIndex: 10 }}>
    <span className="hello" style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", background: "#FFE6B8", flex: "none" }}><img src={caraAlumno()} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></span>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "#17181C", whiteSpace: "nowrap" }}>Hola, {apodo()} <span className="wave">👋</span></div>
      <div style={{ fontSize: 14.5, color: "#5D6068" }}>{sub}</div>
    </div>
    {search && <label className="sw-search" style={{ display: "flex", alignItems: "center", gap: 8, width: 300, height: 42, padding: "0 14px", borderRadius: 12, background: "#F1ECE4", color: "#8A8D96" }}><Icon name="search" size={16} /><input placeholder={search} style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-body)", fontSize: 14, color: "#17181C" }} /></label>}
    <button aria-label="Notificaciones" style={{ position: "relative", width: 42, height: 42, borderRadius: 12, border: "none", background: "transparent", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#17181C" }}><Icon name="bell" size={21} /><span className="ping" style={{ position: "absolute", top: 9, right: 10, width: 8, height: 8, borderRadius: 4, background: "var(--ez-danger)" }} /></button>
    <span style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(160deg,#EEF2FF,#DCE4FF)", display: "inline-flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden", flex: "none", boxShadow: "inset 0 0 0 2px #fff" }}><img src={img("bit/saludando.png")} alt="Bit" style={{ height: 50 }} /></span>
  </header>;
}

function SwPlaceholder({ label }) {
  return <div className="rv" style={{ "--i": 1, margin: 28, minHeight: 520, border: "2px dashed #E5DFD5", borderRadius: 22, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, textAlign: "center", color: "#5D6068" }}>
    <img src={img("bit/pensando.png")} alt="" className="bob" style={{ height: 140 }} />
    <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "#17181C" }}>{label}</span>
    <span style={{ fontSize: 14, maxWidth: 380 }}>Esta sección aún no tiene referencia de diseño. Se deja en blanco a propósito.</span>
  </div>;
}

function SwInicio({ go }) {
  const { Button } = window.EZDrumSchoolDesignSystem_874c26;
  const tiles = [["camino", "icon3d/tu-camino.png", "Tu camino", "Sesión " + sesion() + " de 20", Math.round((sesion() - 1) / 20 * 100), "#F0533F"], ["progreso", "icon3d/tu-progreso.png", "Tu progreso", "Racha de 7 días", 65, "#2E9E6E"], ["repertorio", "icon3d/tu-repertorio.png", "Tu repertorio", "R1 · Firmes en fe", 80, "#7C4DEB"], ["caja", "icon3d/caja.png", "Caja de herramientas", "18 herramientas", 40, "#F26B3A"]];
  return <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
    <HeroStage variant="spot" eyebrow={"GROOVE CON PROPÓSITO · SESIÓN " + sesion()} title={"¡Hola, " + apodo() + "!"} subtitle={"Hoy trabajamos " + (window.EZ_SESIONES[sesion() - 1] || "")} art="mateo/bateria-baquetas-arriba.png" bit="bit/celebrando.png" tagline="¡A tocar!" height={280}>
      <div style={{ marginTop: 14 }}><Button size="lg" icon="play" onClick={() => go("camino")}>Iniciar clase</Button></div>
    </HeroStage>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
      {tiles.map(([id, ic, t, s, v, c], i) => <button key={id} onClick={() => go(id)} className="rv lift tile" style={{ "--i": i + 1, textAlign: "left", background: "#fff", border: "1px solid #EFEBE4", borderRadius: 20, padding: 18, cursor: "pointer", display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-body)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}><img src={img(ic)} alt="" className="tile-ic" style={{ width: 56, height: 56, borderRadius: 14 }} /><Icon name="arrow-up-right" size={18} color="#8A8D96" /></div>
        <div><div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "#17181C" }}>{t}</div><div style={{ fontSize: 13, color: "#5D6068", marginTop: 2 }}>{s}</div></div>
        <Bar value={v} color={c} height={7} />
      </button>)}
    </div>
  </div>;
}

Object.assign(window, { SwSidebar, SwTopbar, SwPlaceholder, SwInicio });
})();
