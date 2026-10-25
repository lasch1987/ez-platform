(() => {
const { Icon, Button } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;

const TOOLS = [
  ["El Pajarito", "Relajación y control", "Técnica"], ["El Metrónomo", "Tu mejor amigo", "Tiempo"], ["El Semáforo", "Autocontrol", "Mental"],
  ["La Escalera de BPM", "Sube paso a paso", "Velocidad"], ["El Ascensor", "4 intensidades", "Dinámica"], ["La Ola", "Crescendo y decrescendo", "Dinámica"],
  ["Manos Separadas", "Control independiente", "Independencia"], ["Pies Poderosos", "Bombo y hi-hat", "Independencia"], ["Ghost Notes", "Caja que habla", "Técnica"],
  ["Toms Creativos", "Llena tu kit", "Creatividad"], ["Fills con Propósito", "Conecta las secciones", "Creatividad"], ["Control Remoto", "Dirige la dinámica", "Tecnología"],
  ["Escucha Activa", "Aprende de tus canciones", "Musicalidad"], ["Graba y Analiza", "Mide tu progreso", "Grabación"], ["Notación Básica", "Lo que tocas en papel", "Teoría"],
  ["Canción por Partes", "Sección por sección", "Estilo"], ["Click en 2 y 4", "Siente el pulso", "Tiempo"], ["Juego Libre", "Tu creatividad", "Creatividad"]
].map(([t, s, c], i) => ({ id: i + 1, t, s, c, art: "tools/tool-" + String(i + 1).padStart(2, "0") + ".png" }));

const CAT = { "Técnica": ["#E3EBFE", "#1F4FD1"], "Tiempo": ["#FDE6E2", "#C2341F"], "Mental": ["#EEEDEA", "#4A4C52"], "Velocidad": ["#DFF1FB", "#0E6E9E"], "Dinámica": ["#EDE5FE", "#6A3BD8"], "Independencia": ["#FDE7DD", "#B4480F"], "Creatividad": ["#DDF5EF", "#0E7A62"], "Tecnología": ["#DDF5E7", "#1D7A47"], "Musicalidad": ["#FDE7DD", "#B4480F"], "Grabación": ["#FFDCD7", "#B4271A"], "Teoría": ["#EEEDEA", "#4A4C52"], "Estilo": ["#EDE5FE", "#6A3BD8"] };
const Cat = ({ c, big }) => <span style={{ display: "inline-flex", alignItems: "center", height: big ? 28 : 24, padding: "0 10px", borderRadius: 8, background: CAT[c][0], color: CAT[c][1], fontSize: big ? 13.5 : 12, fontWeight: 600 }}>{c}</span>;

function ToolCard({ t, i, sel, onSel }) {
  return <button onClick={onSel} className="rv lift tool" style={{ "--i": Math.min(i, 12), textAlign: "left", padding: 0, cursor: "pointer", background: "#fff", borderRadius: 16, border: "1.5px solid " + (sel ? "var(--accent)" : "#EFEBE4"), boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 12px 26px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)", overflow: "hidden", display: "flex", flexDirection: "column", fontFamily: "var(--font-body)" }}>
    <div style={{ height: 104, background: CAT[t.c][0], display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}><img src={img(t.art)} alt="" className="tool-art" style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "multiply" }} /></div>
    <div style={{ padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 3, flex: 1 }}>
      <b style={{ fontSize: 13.5, color: "#17181C" }}>{t.id}. {t.t}</b>
      <span style={{ fontSize: 12, color: "#5D6068" }}>{t.s}</span>
      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}><Cat c={t.c} /><Icon name="chevron-right" size={15} color="#8A8D96" /></span>
    </div>
  </button>;
}

function ToolDetail({ t, onPrev, onNext }) {
  const [tab, setTab] = React.useState("que");
  React.useEffect(() => setTab("que"), [t.id]);
  const isBird = t.id === 1;
  const ex = [["1. Golpes sueltos", "2 min", "profe/con-mateo.png"], ["2. Rebote controlado", "3 min", "mateo/bateria-tocando.png"], ["3. Acentos suaves", "3 min", "profe/baqueta.png"]];
  const { Tabs } = window.EZDrumSchoolDesignSystem_874c26;
  return <aside className="rv" style={{ "--i": 2, background: "#fff", borderRadius: 22, border: "1px solid #EFEBE4", boxShadow: "0 16px 40px rgba(23,24,28,.08)", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <button onClick={onPrev} aria-label="Anterior" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #EFEBE4", background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="arrow-left" size={18} /></button>
      <span style={{ fontSize: 14, color: "#5D6068" }}>{t.id} de 24</span>
      <button onClick={onNext} aria-label="Siguiente" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #EFEBE4", background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="arrow-right" size={18} /></button>
    </div>
    <div key={t.id} className="swap" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ position: "relative", height: 210, borderRadius: 18, overflow: "hidden", background: CAT[t.c][0] }}>
        <window.Ripples color={CAT[t.c][1] + "44"} size={220} style={{ left: "50%", top: "50%", marginLeft: -110, marginTop: -110 }} />
        <img src={img(isBird ? "tools/pajarito-detalle.png" : t.art)} alt="" className="floaty" style={{ position: "relative", width: "100%", height: "100%", objectFit: isBird ? "cover" : "contain", mixBlendMode: "multiply" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}><b style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700 }}>{t.id}. {t.t}</b><Cat c={t.c} big /></div>
      <Tabs active={tab} onChange={setTab} items={[{ id: "que", label: "Qué es" }, { id: "como", label: "Cómo usarla" }, { id: "ej", label: "Ejercicios" }, { id: "video", label: "Video" }]} />
      {tab === "que" ? <>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#3F4249" }}>{isBird ? "Te ayuda a tocar relajado, con las manos sueltas y sin tensión. La baqueta se sostiene como un pajarito: firme pero sin apretarlo." : t.s + "."}</p>
        {isBird && <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: 14, borderRadius: 14, background: "var(--accent-soft)", fontSize: 13.5, lineHeight: 1.5, color: "#2C2E33" }}><Icon name="lightbulb" size={22} color="var(--accent)" /><span>Una mano relajada te da más control, mejor sonido y menor cansancio.</span></div>}
      </> : <div style={{ fontSize: 13, color: "#8A8D96", padding: "10px 0" }}>Contenido no incluido en la referencia.</div>}
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><b style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>Ejercicios sugeridos</b><a href="#" style={{ fontSize: 13.5, fontWeight: 600 }}>Ver todos</a></div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{ex.map(([n, m, p]) => <div key={n} className="row-hover" style={{ display: "flex", alignItems: "center", gap: 12, padding: 8, borderRadius: 14, border: "1px solid #EFEBE4", cursor: "pointer" }}>
      <span style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Icon name="play" size={15} /></span>
      <span style={{ width: 64, height: 44, borderRadius: 8, overflow: "hidden", background: "#F1ECE4", flex: "none" }}><img src={img(p)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></span>
      <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b style={{ fontSize: 13.5 }}>{n}</b><span style={{ fontSize: 12, color: "#8A8D96", display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="clock" size={12} />{m}</span></span>
      <Icon name="chevron-right" size={16} color="#8A8D96" />
    </div>)}</div>
    <Button size="lg" icon="play" fullWidth>Practicar ahora</Button>
  </aside>;
}

function SwCaja() {
  const [f, setF] = React.useState("Todas");
  const [sel, setSel] = React.useState(1);
  const shown = TOOLS.filter(t => f === "Todas" || t.c === f);
  const t = TOOLS.find(x => x.id === sel);
  return <div className="sw-split" style={{ padding: 24, "--side": "340px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
      <HeroStage variant="grid" eyebrow="CAJA DE HERRAMIENTAS" title="Pequeñas herramientas, grandes resultados" body="Explora, aprende y practica cada herramienta. Todas te ayudan a tocar con más control, musicalidad y confianza." art="mateo/celebrando-baqueta.png" artStyle={{ right: 150, height: 250 }} bit="bit/saludando.png" tagline="¡Cada herramienta te hace crecer!" height={240} />
      <div className="rv" style={{ "--i": 1, display: "flex", gap: 8, flexWrap: "wrap" }}>{["Todas", "Técnica", "Tiempo", "Dinámica", "Independencia", "Creatividad", "Grabación", "Teoría", "Estilo"].map(c => <Chip key={c} active={f === c} onClick={() => setF(c)}>{c}</Chip>)}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 14 }}>{shown.map((x, i) => <ToolCard key={x.id} t={x} i={i + 2} sel={x.id === sel} onSel={() => setSel(x.id)} />)}</div>
    </div>
    <div className="sw-sticky"><ToolDetail t={t} onPrev={() => setSel(sel > 1 ? sel - 1 : 18)} onNext={() => setSel(sel < 18 ? sel + 1 : 1)} /></div>
  </div>;
}
Object.assign(window, { SwCaja });
})();
