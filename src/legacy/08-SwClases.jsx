(() => {
const { Icon, Button, Tabs } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;

const CLASSES = [
  { n: 4, t: "Groove básico", d: "Jue 22 OCT", st: "done", th: "clases/thumb-4.png" },
  { n: 5, t: "Dinámica en la caja", d: "Lun 26 OCT", st: "next", th: "clases/thumb-5.png" },
  { n: 6, t: "Independencia", d: "Jue 29 OCT", st: "live", th: "clases/thumb-6.png" },
  { n: 7, t: "Fills con propósito", d: "Lun 02 NOV", st: "lock", th: "clases/thumb-7.png" },
  { n: 8, t: "Aplicación en canción", d: "Jue 05 NOV", st: "lock", th: "clases/thumb-8.png" }
];
const ST = { done: ["Completada", "#DDF5E7", "#1D7A47"], next: ["Próxima", "var(--accent)", "#fff"], live: ["En curso", "#E3EBFE", "#1F4FD1"], lock: ["Bloqueada", "#EEEDEA", "#4A4C52"] };
const MOMENTS = [["Conectamos", "#34B76C", "#E4F6EB"], ["Calentamos", "#3B74F0", "#E3EBFE"], ["Aprendemos", "#F2A516", "#FFF2D6"], ["Practicamos", "#EE4433", "#FFE3DF"], ["Grabamos", "#7C4DEB", "#EDE5FE"], ["Cerramos", "#2E9E6E", "#DDF5EF"]];
const EVENTS = { 22: ["#34B76C"], 24: ["#3B74F0", "#EE4433"], 26: ["var(--accent)"], 29: ["#34B76C"], 30: ["#EE4433"], 31: ["#7C4DEB"] };
const LEGEND = [["Clase", "#34B76C"], ["Tarea", "#3B74F0"], ["Evaluación", "#EE4433"], ["Evento", "#7C4DEB"]];

function NextClass({ onOpen }) {
  return <div className="rv lift" style={{ "--i": 2, position: "relative", display: "flex", alignItems: "stretch", minHeight: 184, borderRadius: 20, overflow: "hidden", background: "linear-gradient(110deg,#15161B 0%,#1E2030 60%,#2A2140 100%)", color: "#fff", boxShadow: "0 18px 40px rgba(23,24,28,.18)" }}>
    <img src={img("clases/proxima.png")} alt="" style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "46%", objectFit: "cover", maskImage: "linear-gradient(90deg, transparent, #000 40%)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 40%)" }} />
    <window.Ripples color="rgba(138,164,255,.5)" size={220} style={{ right: 60, top: -20 }} />
    <div style={{ position: "relative", padding: 18, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ width: 76, padding: "8px 0", borderRadius: 14, background: "#fff", color: "#17181C", textAlign: "center", display: "flex", flexDirection: "column", boxShadow: "0 8px 18px rgba(0,0,0,.3)" }}><span style={{ fontSize: 14 }}>Lun</span><b style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1 }}>26</b><span style={{ fontSize: 12, letterSpacing: ".1em" }}>OCT</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 14, opacity: .8 }}>Sesión 5</span>
          <b style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600 }}>Dinámica en la caja</b>
          <span style={{ display: "flex", gap: 16, fontSize: 13, opacity: .8 }}><span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="clock" size={15} />60 min</span><span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="user-round" size={15} />Presencial</span></span>
        </div>
      </div>
      <div><Button onClick={onOpen} style={{ minWidth: 220 }}>Ver clase</Button></div>
    </div>
  </div>;
}

function Calendar({ sel, onSel }) {
  const days = []; for (let i = 0; i < 3; i++) days.push(null); for (let d = 1; d <= 31; d++) days.push(d);
  return <Panel i={3} title="Mi calendario" action={<a href="#" style={{ fontSize: 13.5, fontWeight: 600 }}>Ver mes</a>} pad={16}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", rowGap: 4, textAlign: "center", fontSize: 12.5 }}>
      {["L", "M", "X", "J", "V", "S", "D"].map(d => <span key={d} style={{ color: "#8A8D96", fontWeight: 600, paddingBottom: 4 }}>{d}</span>)}
      {days.map((d, i) => d ? <button key={i} onClick={() => onSel(d)} className="cal-day" style={{ position: "relative", height: 30, border: "none", borderRadius: 9, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: d === 26 || d === sel ? 700 : 500, background: d === 26 ? "var(--accent)" : d === sel ? "var(--accent-soft)" : "transparent", color: d === 26 ? "#fff" : "#2C2E33" }}>
        {d}
        {EVENTS[d] && d !== 26 && <span style={{ position: "absolute", left: 0, right: 0, bottom: 2, display: "flex", justifyContent: "center", gap: 2 }}>{EVENTS[d].map((c, j) => <i key={j} style={{ width: 5, height: 5, borderRadius: 3, background: c }} />)}</span>}
      </button> : <span key={i} />)}
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#5D6068" }}>{LEGEND.map(([l, c]) => <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><i style={{ width: 8, height: 8, borderRadius: 4, background: c }} />{l}</span>)}</div>
  </Panel>;
}

function ClassCard({ c, i, sel, onSel }) {
  const [l, bg, fg] = ST[c.st];
  return <button onClick={onSel} className="rv lift tool" style={{ "--i": i, textAlign: "left", padding: 0, cursor: "pointer", background: "#fff", borderRadius: 16, overflow: "hidden", border: "1.5px solid " + (sel ? "var(--accent)" : "#EFEBE4"), boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 12px 26px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)", fontFamily: "var(--font-body)", display: "flex", flexDirection: "column" }}>
    <div style={{ position: "relative", height: 92, overflow: "hidden", background: "#17181C" }}>
      <img src={img(c.th)} alt="" className="tool-art" style={{ width: "100%", height: "100%", objectFit: "cover", filter: c.st === "lock" ? "grayscale(.6) brightness(.7)" : "none" }} />
      {c.st === "done" && <span style={{ position: "absolute", top: 8, right: 8, width: 26, height: 26, borderRadius: "50%", background: "#34B76C", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={15} /></span>}
      {c.st === "lock" && <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(0,0,0,.45)", backdropFilter: "blur(4px)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="lock" size={16} color="#fff" /></span></span>}
      {c.st === "live" && <span className="ping" style={{ position: "absolute", top: 10, left: 10, width: 10, height: 10, borderRadius: 5, background: "#3B74F0" }} />}
    </div>
    <div style={{ padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 12, color: "#5D6068" }}>Sesión {c.n}</span>
      <b style={{ fontSize: 14, color: "#17181C", lineHeight: 1.25, minHeight: 35 }}>{c.t}</b>
      <span style={{ fontSize: 12, color: "#5D6068", display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="calendar" size={13} />{c.d}</span>
      <span style={{ fontSize: 12, color: "#5D6068", display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="clock" size={13} />60 min · Presencial</span>
      <span style={{ marginTop: 6, alignSelf: "flex-start", height: 24, padding: "0 10px", borderRadius: 8, background: bg, color: fg, fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}>{c.st === "lock" && <Icon name="lock" size={12} />}{l}</span>
    </div>
  </button>;
}

function Moments() {
  const [a, setA] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setA(x => (x + 1) % 6), 1800); return () => clearInterval(t); }, []);
  return <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
    {MOMENTS.map(([l, c, bg], i) => <React.Fragment key={l}>
      {i > 0 && <Icon name="arrow-right" size={16} color={i <= a ? c : "#C9CAD0"} style={{ transition: "background-color .4s" }} />}
      <div onMouseEnter={() => setA(i)} className="rv" style={{ "--i": i + 6, flex: 1, minWidth: 0, borderRadius: 14, overflow: "hidden", background: "#fff", border: "1.5px solid " + (i === a ? c : "#EFEBE4"), boxShadow: i === a ? "0 12px 24px " + c + "40" : "none", transform: i === a ? "translateY(-4px)" : "none", transition: "all .45s cubic-bezier(.34,1.56,.64,1)", cursor: "default" }}>
        <div style={{ height: 78, background: bg, overflow: "hidden" }}><img src={img("clases/momento-" + (i + 1) + ".png")} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transform: i === a ? "scale(1.08)" : "none", transition: "transform .6s" }} /></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", fontSize: 13, fontWeight: 600 }}><span style={{ width: 22, height: 22, borderRadius: "50%", background: c, color: "#fff", fontSize: 12, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span>{l}</div>
      </div>
    </React.Fragment>)}
  </div>;
}

function Detail({ c }) {
  const [tab, setTab] = React.useState("res");
  const [goals, setGoals] = React.useState([true, true, false]);
  React.useEffect(() => setTab("res"), [c.n]);
  const mats = [["kit/bateria-electronica.png", "Batería electrónica"], ["kit/baquetas.png", "Baquetas"], ["music/metronomo.png", "Metrónomo"], ["kit/tablet.png", "Tableta"]];
  const G = ["Controlar volumen y acentos", "Aplicar dinámica en un groove simple", "Escuchar y corregir con grabación"];
  return <aside className="rv" style={{ "--i": 2, background: "#fff", borderRadius: 22, border: "1px solid #EFEBE4", boxShadow: "0 16px 40px rgba(23,24,28,.08)", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name="arrow-left" size={20} /><b style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600 }}>Detalle de la clase</b></div>
    <div key={c.n} className="swap" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ position: "relative", height: 150, borderRadius: 16, overflow: "hidden", background: "#17181C" }}>
        <img src={img(c.th)} alt="" className="kenburns" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <span style={{ position: "absolute", top: 10, left: 10, height: 24, padding: "0 10px", borderRadius: 7, background: ST[c.st][1], color: ST[c.st][2], fontSize: 11.5, fontWeight: 800, letterSpacing: ".04em", display: "inline-flex", alignItems: "center" }}>{ST[c.st][0].toUpperCase()}</span>
        <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><span className="play-pulse" style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,.22)", backdropFilter: "blur(6px)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="play" size={20} color="#fff" /></span></span>
      </div>
      <div><span style={{ fontSize: 15, color: "#5D6068" }}>Sesión {c.n}</span><div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, lineHeight: 1.15 }}>{c.t}</div></div>
      <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 13, color: "#3F4249", flexWrap: "wrap" }}><span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="clock" size={15} />60 min</span><span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="user-round" size={15} />Presencial</span><LevelPill n={1}>Nivel 1 · PULSO</LevelPill></div>
      <Tabs active={tab} onChange={setTab} items={[{ id: "res", label: "Resumen" }, { id: "act", label: "Actividades" }, { id: "mat", label: "Materiales" }, { id: "tar", label: "Tarea" }]} />
      {tab === "res" ? <>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#3F4249" }}>Hoy trabajaremos el control de la dinámica en la caja para que tu groove suene más musical y expresivo.</p>
        <b style={{ fontSize: 14.5 }}>Objetivos de la clase</b>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{G.map((g, i) => <button key={g} onClick={() => setGoals(x => x.map((v, j) => j === i ? !v : v))} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13.5, color: "#3F4249", textAlign: "left" }}><span style={{ width: 20, height: 20, borderRadius: "50%", background: goals[i] ? "var(--accent)" : "#fff", border: "1.5px solid " + (goals[i] ? "var(--accent)" : "#C9CAD0"), color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "all .25s cubic-bezier(.34,1.56,.64,1)", transform: goals[i] ? "scale(1)" : "scale(.9)" }}>{goals[i] && <Icon name="check" size={13} />}</span><span style={{ textDecoration: goals[i] ? "none" : "none" }}>{g}</span></button>)}</div>
        <b style={{ fontSize: 14.5 }}>Materiales</b>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>{mats.map(([p, l]) => <div key={l} className="badge-pop" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, textAlign: "center", fontSize: 11.5, color: "#5D6068" }}><span style={{ width: "100%", height: 58, borderRadius: 12, background: "#F7F4EE", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={img(p)} alt="" style={{ maxWidth: "80%", maxHeight: 46, mixBlendMode: "multiply" }} /></span>{l}</div>)}</div>
      </> : <div style={{ fontSize: 13, color: "#8A8D96", padding: "16px 0" }}>Contenido no incluido en la referencia.</div>}
    </div>
    <Button size="lg" icon="play" fullWidth disabled={c.st === "lock"}>{c.st === "done" ? "Repasar clase" : "Iniciar clase"}</Button>
  </aside>;
}

function SwClases() {
  const [tab, setTab] = React.useState("prox");
  const [sel, setSel] = React.useState(5);
  const [day, setDay] = React.useState(26);
  const c = CLASSES.find(x => x.n === sel);
  const TABS = [["prox", "calendar", "Próximas clases"], ["mis", "calendar-days", "Mis clases"], ["tar", "clipboard-check", "Tareas"], ["grab", "film", "Grabaciones"], ["eval", "file-check", "Evaluaciones"]];
  return <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
    <HeroStage variant="night" title="Clases" subtitle="Aquí empiezan tus grandes momentos." art="escena/bateria-riendo.png" artStyle={{ right: 250, height: 250, bottom: -4 }} bit="bit/animado.png" bitStyle={{ right: 170, height: 120 }} tagline="¡Cada clase te acerca a tu mejor versión!" height={230} />
    <div className="sw-split" style={{ "--side": "350px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
        <div className="rv" style={{ "--i": 1, display: "flex", gap: 6, flexWrap: "wrap", padding: 5, borderRadius: 16, background: "#fff", border: "1px solid #EFEBE4", alignSelf: "flex-start" }}>
          {TABS.map(([id, ic, l]) => <button key={id} onClick={() => setTab(id)} style={{ height: 40, padding: "0 14px", borderRadius: 12, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: tab === id ? 700 : 500, background: tab === id ? "var(--accent)" : "transparent", color: tab === id ? "#fff" : "#3F4249", boxShadow: tab === id ? "var(--shadow-glow-accent)" : "none", transition: "all .25s" }}><Icon name={ic} size={16} />{l}</button>)}
        </div>
        {tab === "prox" ? <>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(260px,1fr)", gap: 18 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}><b style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600 }}>Tu próxima clase</b><NextClass onOpen={() => setSel(5)} /></div>
            <Calendar sel={day} onSel={setDay} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}><b style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600 }}>Todas tus clases</b><a href="#" style={{ fontSize: 13.5, fontWeight: 600 }}>Ver todas</a></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12 }}>{CLASSES.map((x, i) => <ClassCard key={x.n} c={x} i={i + 3} sel={x.n === sel} onSel={() => setSel(x.n)} />)}</div>
          <b style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600 }}>Momentos de una clase</b>
          <Moments />
        </> : <window.SwPlaceholder label={TABS.find(t => t[0] === tab)[2]} />}
      </div>
      <div className="sw-sticky"><Detail c={c} /></div>
    </div>
  </div>;
}
Object.assign(window, { SwClases });
})();
