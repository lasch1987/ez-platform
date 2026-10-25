(() => {
const { Icon, Button, Tabs } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;

const SONGS = [
  { id: 1, t: "Firmes en fe", a: "Miel San Marcos", n: 1, bpm: 90, sec: 4, p: 80, g: "Worship", fav: false, hue: ["#2F57F5", "#7C4DEB"] },
  { id: 2, t: "Tu fidelidad", a: "Marcos Witt", n: 1, bpm: 72, sec: 5, p: 40, g: "Worship", fav: false, hue: ["#F26B3A", "#EE4433"] },
  { id: 3, t: "Grande eres tú", a: "Samu Robles", n: 2, bpm: 98, sec: 6, p: 60, g: "Worship", fav: true, hue: ["#F2A516", "#EE4433"] },
  { id: 4, t: "Tu amor me sostiene", a: "Alex Zurdo", n: 3, bpm: 100, sec: 5, p: 20, g: "Urbano", fav: false, hue: ["#2EC4A6", "#2F57F5"] },
  { id: 5, t: "Dios de promesas", a: "Jaime Murrell", n: 3, bpm: 90, sec: 6, p: 0, g: "Pop", fav: false, hue: ["#EE4433", "#7C4DEB"] },
  { id: 6, t: "Nada me separará", a: "Oasis (versión)", n: 2, bpm: 110, sec: 5, p: 40, g: "Rock", fav: false, hue: ["#7C4DEB", "#EE5DA8"] }
];
const MAP = [["Intro", "#7E93B8", "0:00 – 0:18", 18], ["Estrofa", "#F2A516", "0:18 – 1:10", 52], ["Coro", "#F26157", "1:10 – 2:10", 60], ["Puente", "#5AB8F0", "2:10 – 2:50", 40]];

function Stage({ hue, height = 160, playing, children, radius = "18px 18px 0 0" }) {
  return <div className="stage" style={{ position: "relative", height, borderRadius: radius, overflow: "hidden", background: "radial-gradient(70% 90% at 50% 120%, " + hue[0] + "AA, transparent 70%), radial-gradient(40% 60% at 15% 0%, " + hue[1] + "99, transparent 70%), radial-gradient(40% 60% at 85% 0%, " + hue[0] + "88, transparent 70%), #0E0F14" }}>
    {[0, 1, 2, 3].map(i => <span key={i} className="beam" style={{ position: "absolute", top: -30, left: (14 + i * 23) + "%", width: 70, height: height + 80, background: "linear-gradient(180deg," + (i % 2 ? hue[0] : hue[1]) + "88, transparent 75%)", transformOrigin: "top center", filter: "blur(5px)", mixBlendMode: "screen", animationDelay: (i * -1.7) + "s", animationPlayState: playing === false ? "paused" : "running" }} />)}
    {Array.from({ length: 14 }, (_, i) => <i key={i} className="bokeh" style={{ position: "absolute", left: ((i * 53) % 96) + "%", top: (20 + (i * 29) % 60) + "%", width: 4 + (i % 4) * 3, height: 4 + (i % 4) * 3, borderRadius: "50%", background: "#fff", opacity: .18 + (i % 3) * .1, animationDelay: (i * .4) + "s" }} />)}
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "55%", background: "linear-gradient(0deg, rgba(8,8,12,.92), transparent)" }} />
    <div style={{ position: "absolute", inset: 0 }}>{children}</div>
  </div>;
}

function SongCard({ s, i, sel, onSel, onFav }) {
  return <article onClick={onSel} className="rv lift song" style={{ "--i": i, cursor: "pointer", background: "#fff", borderRadius: 18, border: "1px solid " + (sel ? "var(--accent)" : "#EFEBE4"), boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 14px 30px rgba(23,24,28,.10)" : "0 8px 24px rgba(23,24,28,.05)", overflow: "hidden" }}>
    <Stage hue={s.hue} height={150}>
      <button onClick={e => { e.stopPropagation(); onFav(); }} aria-label="Favorita" className="heart" style={{ position: "absolute", top: 12, right: 12, width: 34, height: 34, borderRadius: "50%", border: "none", background: "rgba(0,0,0,.25)", backdropFilter: "blur(6px)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        {s.fav ? <img src={img("music/corazon.png")} alt="" style={{ width: 22 }} /> : <Icon name="heart" size={18} color="#fff" />}
      </button>
      <div style={{ position: "absolute", left: 16, bottom: 12, right: 16, color: "#fff", display: "flex", flexDirection: "column", gap: 4 }}>
        <b style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, textShadow: "0 2px 10px rgba(0,0,0,.4)" }}>R{s.id} · {s.t}</b>
        <span style={{ fontSize: 13.5, opacity: .85 }}>{s.a}</span>
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}><LevelPill n={s.n} solid />{sel && <Eq n={4} h={16} />}</span>
      </div>
    </Stage>
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", fontSize: 13, color: "#3F4249" }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="clock" size={15} />{s.bpm} BPM</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="list-music" size={15} />{s.sec} secciones</span>
      <Bar value={s.p} color={window.SW_LEVEL[s.n].solid} height={8} style={{ flex: 1 }} />
      <b style={{ width: 36, textAlign: "right" }}>{s.p}%</b>
    </div>
  </article>;
}

function Wave({ playing, pos }) {
  const bars = React.useMemo(() => Array.from({ length: 84 }, (_, i) => 6 + Math.abs(Math.sin(i * .55) * 18 + Math.sin(i * 1.7) * 8)), []);
  return <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 2, height: 44 }}>
    {bars.map((h, i) => <i key={i} className={playing ? "eqw" : ""} style={{ flex: 1, height: h, borderRadius: 2, background: i / bars.length < pos ? "var(--accent)" : "#C9D3F5", animationDelay: (i % 7) * .09 + "s" }} />)}
    <span style={{ position: "absolute", left: (pos * 100) + "%", top: -4, bottom: -4, width: 2, background: "#17181C", borderRadius: 2, transition: "left .25s linear" }} />
  </div>;
}

function Detail({ s }) {
  const [tab, setTab] = React.useState("mapa");
  const [playing, setPlaying] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const [res, setRes] = React.useState("pista");
  React.useEffect(() => { setPlaying(false); setPos(0); }, [s.id]);
  React.useEffect(() => { if (!playing) return; const t = setInterval(() => setPos(p => p >= 1 ? 0 : p + 0.006), 100); return () => clearInterval(t); }, [playing]);
  const total = MAP.reduce((a, m) => a + m[3], 0);
  let acc = 0; const curSec = MAP.findIndex(m => { acc += m[3]; return pos < acc / total; });
  const RES = [["pista", "music", "Pista original"], ["click", "timer", "Pista con click"], ["drums", "drum", "Solo batería"], ["vol", "sliders-vertical", "Bajar volumen"], ["loop", "repeat", "Loop A–B"]];
  const checks = [["Escucho y conozco", s.p >= 20], ["Toco el groove", s.p >= 40], ["Control de dinámica", s.p >= 60], ["Toco con la pista", s.p >= 100]];
  return <div key={s.id} className="swap" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <section style={{ borderRadius: 22, overflow: "hidden", background: "#0E0F14", boxShadow: "0 20px 40px rgba(23,24,28,.18)" }}>
      <Stage hue={s.hue} height={240} playing={playing} radius="0">
        <div style={{ position: "absolute", top: 14, right: 14, display: "flex", gap: 8, color: "#fff" }}>{s.fav && <img src={img("music/corazon.png")} alt="" style={{ width: 26 }} />}<Icon name="ellipsis-vertical" size={20} /></div>
        <div style={{ position: "absolute", left: 20, right: 20, bottom: 18, color: "#fff", display: "flex", flexDirection: "column", gap: 8 }}>
          <b style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 700, lineHeight: 1.05 }}>R{s.id} · {s.t}</b>
          <span style={{ fontSize: 16, opacity: .85 }}>{s.a}</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}><LevelPill n={s.n} solid />{[s.g, s.bpm + " BPM", s.sec + " secciones"].map(t => <span key={t} style={{ height: 26, padding: "0 12px", borderRadius: 99, border: "1px solid rgba(255,255,255,.35)", display: "inline-flex", alignItems: "center", fontSize: 12.5 }}>{t}</span>)}</div>
        </div>
      </Stage>
      <div style={{ display: "flex", gap: 10, padding: 14 }}>
        <Button icon={playing ? "pause" : "play"} onClick={() => setPlaying(!playing)} style={{ flex: 1 }}>{playing ? "Pausar pista" : "Reproducir pista original"}</Button>
        <Button variant="secondary" icon="timer" style={{ flex: 1, background: "#fff", color: "#17181C", border: "none" }}>Practicar con click</Button>
      </div>
    </section>
    <Panel i={0} pad={18}>
      <Tabs active={tab} onChange={setTab} items={[{ id: "mapa", label: "Mapa de la canción" }, { id: "partitura", label: "Partitura" }, { id: "video", label: "Video" }, { id: "prog", label: "Mi progreso" }]} />
      {tab === "mapa" ? <>
        <div style={{ display: "flex", gap: 3 }}>{MAP.map(([l, c, tm, w], i) => <div key={l} style={{ flex: w, display: "flex", flexDirection: "column", gap: 8 }}><span style={{ height: 36, borderRadius: 8, background: c, color: "#fff", fontWeight: 700, fontSize: 13.5, display: "flex", alignItems: "center", justifyContent: "center", transform: playing && curSec === i ? "translateY(-3px)" : "none", boxShadow: playing && curSec === i ? "0 8px 18px " + c + "88" : "none", transition: "all .3s" }}>{l}</span><span style={{ fontSize: 12, color: "#5D6068", textAlign: "center" }}>{tm}</span></div>)}</div>
        <Wave playing={playing} pos={pos} />
      </> : <div style={{ height: 110, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#8A8D96" }}>Vista no incluida en la referencia</div>}
    </Panel>
    <Panel i={1} title="Recursos de práctica" pad={18}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>{RES.map(([id, ic, l]) => { const on = res === id; return <button key={id} onClick={() => setRes(id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12, color: "#3F4249", textAlign: "center" }}><span style={{ width: 54, height: 54, borderRadius: 14, display: "inline-flex", alignItems: "center", justifyContent: "center", background: on ? "var(--accent)" : "var(--accent-soft)", color: on ? "#fff" : "var(--accent)", boxShadow: on ? "var(--shadow-glow-accent)" : "none", transition: "all .25s cubic-bezier(.34,1.56,.64,1)", transform: on ? "translateY(-3px)" : "none" }}><Icon name={ic} size={24} /></span>{l}</button>; })}</div>
    </Panel>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
      <Panel i={2} title="Notas de la canción" pad={16}><div style={{ display: "flex", gap: 10, fontSize: 13, lineHeight: 1.55, color: "#3F4249" }}><Icon name="pencil" size={18} /><span>Groove de semicorcheas, dinámica en estrofa y coro. Aplicar lo trabajado en clase.</span></div></Panel>
      <Panel i={3} title="Mi avance" pad={16}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Ring value={s.p} size={78} stroke={9} color="#2EC4A6"><b style={{ fontSize: 17 }}>{s.p}%</b></Ring>
          <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 12 }}>{checks.map(([l, ok]) => <span key={l} style={{ display: "flex", alignItems: "center", gap: 6, color: ok ? "#17181C" : "#8A8D96" }}><Icon name={ok ? "circle-check" : "circle"} size={15} color={ok ? "#34B76C" : "#C9CAD0"} />{l}</span>)}</div>
        </div>
      </Panel>
    </div>
  </div>;
}

function SwRepertorio() {
  const [songs, setSongs] = React.useState(SONGS);
  const [sel, setSel] = React.useState(1);
  const [f, setF] = React.useState("Todas");
  const shown = songs.filter(s => f === "Todas" || (f === "Favoritas" ? s.fav : f === "6/8" ? false : s.g === f));
  const song = songs.find(s => s.id === sel);
  return <div className="sw-split" style={{ padding: 24, "--side": "400px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
      <HeroStage variant="spot" eyebrow="TU REPERTORIO" title="Canciones que te inspiran" body="Aquí están las canciones que trabajamos en clase. Escucha, practica, mira el mapa y toca con propósito." art="mateo/bateria-baquetas-arriba.png" artStyle={{ right: 70, height: 250 }} bit="bit/audifonos.png" tagline="¡Toca lo que te gusta!" height={240} />
      <div className="rv" style={{ "--i": 1, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        {["Todas", "Worship", "Pop", "Rock", "Urbano", "6/8"].map(c => <Chip key={c} active={f === c} onClick={() => setF(c)}>{c}</Chip>)}
        <Chip active={f === "Favoritas"} onClick={() => setF("Favoritas")} icon={<Icon name="star" size={15} color={f === "Favoritas" ? "#fff" : "#EE4433"} />}>Favoritas</Chip>
        <label style={{ marginLeft: "auto", display: "flex", flexDirection: "column", padding: "4px 12px", borderRadius: 12, background: "#fff", border: "1px solid #ECE7DF", fontSize: 11, color: "#8A8D96" }}>Ordenar por<select style={{ border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-body)", fontSize: 13.5, color: "#17181C", padding: 0 }}><option>Más recientes</option><option>Nivel</option><option>BPM</option></select></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
        {shown.map((s, i) => <SongCard key={s.id} s={s} i={i + 2} sel={s.id === sel} onSel={() => setSel(s.id)} onFav={() => setSongs(ss => ss.map(x => x.id === s.id ? { ...x, fav: !x.fav } : x))} />)}
        {!shown.length && <div style={{ gridColumn: "1 / -1", padding: 40, textAlign: "center", color: "#8A8D96", fontSize: 14 }}>No hay canciones en esta categoría todavía.</div>}
      </div>
    </div>
    <div className="sw-sticky"><Detail s={song} /></div>
  </div>;
}
Object.assign(window, { SwRepertorio });
})();
