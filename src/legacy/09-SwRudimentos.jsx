(() => {
const { Icon, Button, Tabs } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;
const T = ["#FFF3D6", "#E1ECFF", "#FFE1DD", "#EDE5FE", "#FFE9DA", "#DDF5E7"];
const C = ["#E19A00", "#2F57F5", "#EE4433", "#7C4DEB", "#F26B3A", "#2E9E6E"];
const tint = [0, 1, 2, 3, 4, 5, 0, 1, 2, 5, 3, 2, 1, 5, 3];
const RUD = [
  ["Single Stroke Roll", "R L R L R L R L", "basicos", 80], ["Double Stroke Roll", "R R L L R R L L", "basicos", 60], ["Paradiddle", ">R L R R >L R L L", "dobles", 40],
  ["Flam", "lR rL lR rL", "flama", 20], ["Flam Accent", "lR L R rL R L", "flama", 0], ["Drag", "llR L rrL R", "redoble", 0],
  ["Single Paradiddle", ">R L R R >L R L L", "dobles", 0], ["Double Paradiddle", ">R L R L R R >L R L R L L", "dobles", 0], ["Paradiddle Diddle", ">R L R R L L", "dobles", 0],
  ["Swiss Army Triplet", "rR L R rR L R", "hibridos", 0], ["Inverted Paradiddle", "R L L R L R R L", "dobles", 0], ["Six Stroke Roll", ">R L L R R >L", "acento", 0],
  ["Seven Stroke Roll", "R R L L R R >L", "redoble", 0], ["Nine Stroke Roll", "R R L L R R L L >R", "redoble", 0], ["Ten Stroke Roll", "R R L L R R L L >R >L", "redoble", 0]
].map(([t, s, c, p], i) => ({ id: i + 1, t, s: s.split(" "), c, p, ti: tint[i], art: "rudimentos/pad-" + String(i + 1).padStart(2, "0") + ".png" }));
const CATS = [["todos", "Todos"], ["stick", "Stick Control"], ["basicos", "P. Básicos"], ["dobles", "P. Dobles"], ["flama", "P. de flama"], ["acento", "P. de acento"], ["redoble", "P. de redoble"], ["hibridos", "P. híbridos"]];
const parse = tk => ({ acc: tk[0] === ">", grace: /^[lr]+[RL]$/.test(tk) ? tk.slice(0, -1).toUpperCase() : "", hand: tk.slice(-1) });

function Sticking({ s, cur = -1, size = 13, color = "#17181C" }) {
  return <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", gap: 2, fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: size, minHeight: size * 2 }}>
    {s.map((tk, i) => { const p = parse(tk), on = i === cur; return <span key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1, color: on ? "var(--accent)" : color, transform: on ? "translateY(-3px) scale(1.25)" : "none", transition: "transform .08s, color .08s" }}>
      <span style={{ fontSize: size * .75, height: size * .8, opacity: p.acc ? 1 : 0 }}>{">"}</span>
      <span>{p.grace && <sup style={{ fontSize: size * .6, opacity: .7 }}>{p.grace.toLowerCase()}</sup>}{p.hand}</span>
    </span>; })}
  </div>;
}

function RudCard({ r, i, sel, onSel }) {
  return <button onClick={onSel} className="rv lift tool" style={{ "--i": Math.min(i, 12), textAlign: "left", padding: 0, cursor: "pointer", borderRadius: 16, overflow: "hidden", background: "#fff", border: "1.5px solid " + (sel ? "var(--accent)" : "#EFEBE4"), boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 12px 26px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)", fontFamily: "var(--font-body)", display: "flex", flexDirection: "column" }}>
    <div style={{ background: T[r.ti], padding: "10px 10px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ width: 22, height: 22, borderRadius: "50%", background: C[r.ti], color: "#fff", fontSize: 11.5, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{r.id}</span><b style={{ fontSize: 13, color: "#17181C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.t}</b></div>
      <img src={img(r.art)} alt="" className="tool-art" style={{ width: "100%", height: 74, objectFit: "cover", objectPosition: "center 30%", mixBlendMode: "multiply", display: "block" }} />
    </div>
    <div style={{ padding: "8px 10px 10px", display: "flex", flexDirection: "column", gap: 8 }}>
      <Sticking s={r.s.length > 8 ? r.s.slice(0, 8) : r.s} size={r.s.length > 8 ? 11 : 12} />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Bar value={r.p} color={C[r.ti]} height={7} style={{ flex: 1 }} /><span style={{ fontSize: 11.5, color: "#5D6068", width: 28, textAlign: "right" }}>{r.p}%</span></div>
    </div>
  </button>;
}

function Notation({ s, cur }) {
  const n = s.length, W = 300, step = (W - 20) / n;
  return <svg viewBox={"0 0 " + W + " 64"} style={{ width: "100%" }}>
    {[0, 1, 2, 3, 4].map(i => <line key={i} x1="0" x2={W} y1={10 + i * 7} y2={10 + i * 7} stroke="#D9DADF" strokeWidth="1" />)}
    <rect x="14" y="4" width={step * (n - 1) + 4} height="3.5" fill="#17181C" rx="1" />
    {s.map((tk, i) => { const x = 16 + i * step, on = i === cur, p = parse(tk); return <g key={i} style={{ transition: "all .08s" }}>
      <line x1={x + 4} x2={x + 4} y1="6" y2="38" stroke={on ? "var(--accent)" : "#17181C"} strokeWidth="1.6" />
      <ellipse cx={x} cy="39" rx="5" ry="3.6" fill={on ? "var(--accent)" : "#17181C"} transform={"rotate(-20 " + x + " 39)"} />
      {p.acc && <text x={x} y="56" fontSize="10" textAnchor="middle" fill="#17181C">{">"}</text>}
      {on && <circle cx={x} cy="39" r="10" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity=".5" />}
    </g>; })}
  </svg>;
}

function Detail({ r }) {
  const [tab, setTab] = React.useState("res");
  const [bpm, setBpm] = React.useState(90);
  const [play, setPlay] = React.useState(false);
  const [cur, setCur] = React.useState(-1);
  const [vid, setVid] = React.useState(false);
  const [vt, setVt] = React.useState(0);
  const timer = React.useRef();
  React.useEffect(() => { setPlay(false); setCur(-1); setTab("res"); }, [r.id]);
  React.useEffect(() => {
    clearInterval(timer.current); if (!play) { setCur(-1); return; }
    let i = 0; const ms = 60000 / bpm / 2;
    const tick = () => { const p = parse(r.s[i % r.s.length]); if (p.grace) window.EZAudio.play("stick", 0, .35); setTimeout(() => window.EZAudio.play("stick", 0, p.acc ? 1 : .55), p.grace ? 30 : 0); setCur(i % r.s.length); i++; };
    tick(); timer.current = setInterval(tick, ms); return () => clearInterval(timer.current);
  }, [play, bpm, r.id]);
  React.useEffect(() => { if (!vid) return; const t = setInterval(() => setVt(v => v >= 84 ? 0 : v + 1), 1000); return () => clearInterval(t); }, [vid]);
  const fmt = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  const bars = React.useMemo(() => Array.from({ length: 34 }, (_, i) => 5 + Math.abs(Math.sin(i * .8) * 12 + Math.sin(i * 2.1) * 4)), []);
  return <aside className="rv" style={{ "--i": 2, background: "#fff", borderRadius: 22, border: "1px solid #EFEBE4", boxShadow: "0 16px 40px rgba(23,24,28,.08)", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name="arrow-left" size={20} /><b style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700 }}>{r.id}. {r.t}</b><img src={img("music/estrella.png")} alt="" className="wiggle" style={{ width: 28 }} /></div>
    <Tabs active={tab} onChange={setTab} items={[{ id: "res", label: "Resumen" }, { id: "como", label: "Cómo hacerlo" }, { id: "ej", label: "Ejercicios" }, { id: "ap", label: "Aplicación" }, { id: "pr", label: "Progreso" }]} />
    {tab === "res" ? <div key={r.id} className="swap" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr)", gap: 12 }}>
        <div style={{ borderRadius: 14, overflow: "hidden", background: "#17181C", position: "relative" }}><img src={img("rudimentos/detalle-manos.png")} alt="" className={play ? "hit" : ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", animationDuration: (60 / bpm / 2) + "s" }} /></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
          <div style={{ borderRadius: 14, border: "1px solid #EFEBE4", padding: 10 }}><b style={{ fontSize: 13.5 }}>Notación</b><Notation s={r.s} cur={cur} /><Sticking s={r.s} cur={cur} size={11.5} /></div>
          <div style={{ borderRadius: 14, border: "1px solid #EFEBE4", padding: 10, display: "flex", flexDirection: "column", gap: 8 }}>
            <b style={{ fontSize: 13.5 }}>Audioplay</b>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button onClick={() => setPlay(!play)} aria-label="Reproducir" style={{ width: 34, height: 34, borderRadius: "50%", border: "none", background: "var(--accent)", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-glow-accent)", flex: "none" }}><Icon name={play ? "pause" : "play"} size={15} /></button>
              <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 2, height: 28 }}>{bars.map((h, i) => <i key={i} className={play ? "eqw" : ""} style={{ flex: 1, height: h, borderRadius: 2, background: play && i % r.s.length === cur ? "var(--accent)" : "#C9D3F5", animationDelay: (i % 5) * .1 + "s" }} />)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <button onClick={() => setBpm(Math.max(40, bpm - 5))} style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #E5DFD5", background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="minus" size={14} /></button>
              <span style={{ flex: 1, textAlign: "center", height: 30, lineHeight: "30px", borderRadius: 10, background: "#F7F4EE", fontWeight: 700, fontSize: 14 }}>{bpm} BPM</span>
              <button onClick={() => setBpm(Math.min(200, bpm + 5))} style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #E5DFD5", background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="plus" size={14} /></button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ display: "flex", gap: 10, padding: 12, borderRadius: 14, border: "1px solid #EFEBE4" }}><img src={img("music/diana.png")} alt="" style={{ width: 32, height: 32 }} /><div><b style={{ fontSize: 13.5 }}>Objetivo</b><p style={{ margin: "4px 0 0", fontSize: 12, lineHeight: 1.5, color: "#5D6068" }}>Desarrollar control, igualdad de sonido y resistencia.</p></div></div>
        <div style={{ display: "flex", gap: 10, padding: 12, borderRadius: 14, background: "var(--accent-soft)" }}><img src={img("mateo/cara-feliz.png")} alt="" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }} /><div><b style={{ fontSize: 13.5 }}>Consejos de Mateo</b><p style={{ margin: "4px 0 0", fontSize: 12, lineHeight: 1.5, color: "#3F4249" }}>"Mantén las manos relajadas. El sonido debe ser igual en cada golpe."</p></div></div>
      </div>
      <b style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>Video demostración</b>
      <div onClick={() => setVid(!vid)} style={{ position: "relative", height: 190, borderRadius: 16, overflow: "hidden", cursor: "pointer", background: "#0E0F14" }}>
        <img src={img("rudimentos/video.png")} alt="" className={vid ? "kenburns" : ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        {!vid && <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><span className="play-pulse" style={{ width: 58, height: 58, borderRadius: "50%", background: "rgba(255,255,255,.25)", backdropFilter: "blur(6px)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="play" size={24} color="#fff" /></span></span>}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "18px 12px 10px", background: "linear-gradient(0deg, rgba(0,0,0,.75), transparent)", color: "#fff", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,.3)" }}><i style={{ display: "block", height: "100%", width: (vt / 84 * 100) + "%", background: "var(--accent)", borderRadius: 2, transition: "width 1s linear" }} /></span>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12 }}><Icon name={vid ? "pause" : "play"} size={16} />{fmt(vt)} / 1:24<span style={{ flex: 1 }} /><Icon name="settings" size={16} /><Icon name="maximize" size={16} /></span>
        </div>
      </div>
    </div> : <div style={{ fontSize: 13, color: "#8A8D96", padding: "16px 0" }}>Contenido no incluido en la referencia.</div>}
  </aside>;
}

function StatCards() {
  const glass = { borderRadius: 18, padding: "12px 16px", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", color: "#fff", display: "flex", flexDirection: "column", gap: 8, minWidth: 170 };
  return <>
    <div className="rv" style={{ "--i": 2, ...glass }}><span style={{ fontSize: 13, opacity: .75 }}>Tu nivel actual</span><div style={{ display: "flex", alignItems: "center", gap: 10 }}><img src={img("music/estrella.png")} alt="" style={{ width: 28 }} /><b style={{ fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: ".04em" }}>GROOVE</b></div><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Bar value={30} color="#5FE0C4" track="rgba(255,255,255,.18)" height={7} style={{ flex: 1 }} /><span style={{ fontSize: 12.5 }}>12 / 40</span></div></div>
    <div className="rv" style={{ "--i": 3, ...glass, flexDirection: "row", alignItems: "center", gap: 14 }}><Ring value={30} size={70} stroke={8} color="#5FE0C4" track="rgba(255,255,255,.16)"><b style={{ fontSize: 16 }}><CountUp to={30} suffix="%" /></b></Ring><div><span style={{ fontSize: 13, opacity: .75 }}>Rudimentos practicados</span><div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600 }}>12 de 40</div></div></div>
  </>;
}

function SwRudimentos() {
  const [cat, setCat] = React.useState("todos");
  const [sel, setSel] = React.useState(1);
  const shown = RUD.filter(r => cat === "todos" || r.c === cat);
  const r = RUD.find(x => x.id === sel);
  const checks = <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>{["Mejor control", "Más velocidad", "Más musicalidad"].map((t, i) => <span key={t} className="rv" style={{ "--i": i + 2, display: "inline-flex", alignItems: "center", gap: 10, color: "#fff", fontSize: 15 }}><span style={{ width: 22, height: 22, borderRadius: "50%", background: "#5FE0C4", color: "#0E1214", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={14} /></span>{t}</span>)}</div>;
  return <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
    <HeroStage variant="studio" title="Rudimentos" subtitle="La base de todo gran baterista." meta={checks} art="mateo/baquetas-arriba-v2.png" artStyle={{ right: 470, height: 250, bottom: -16 }} bit="bit/con-baquetas.png" bitStyle={{ right: 390, height: 120 }} height={250} aside={<StatCards />} />
    <div className="sw-stats-inline" style={{ display: "none", gap: 12, padding: 14, borderRadius: 20, background: "#131B1E" }}><StatCards /></div>
    <div className="sw-split" style={{ "--side": "430px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
        <div className="rv" style={{ "--i": 1, display: "flex", gap: 8, flexWrap: "wrap" }}>{CATS.map(([id, l]) => <Chip key={id} active={cat === id} onClick={() => setCat(id)}>{l}</Chip>)}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12 }}>{shown.map((x, i) => <RudCard key={x.id} r={x} i={i + 2} sel={x.id === sel} onSel={() => setSel(x.id)} />)}
          {!shown.length && <div style={{ gridColumn: "1 / -1", padding: 40, textAlign: "center", color: "#8A8D96", fontSize: 14 }}>Aún no hay rudimentos en esta categoría.</div>}</div>
      </div>
      <div className="sw-sticky"><Detail r={r} /></div>
    </div>
  </div>;
}
Object.assign(window, { SwRudimentos });
})();
