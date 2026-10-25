(() => {
const { Icon, Button } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;

const LEVELS = [
  { n: 1, name: "PULSO", desc: "Bases sólidas y control del tempo", meta: "Semanas 1–4 · Sesiones 1–8", done: 4, total: 8, art: "mateo/cara-audifonos.png", tint: "#DCE8FF",
    s: [[1, "Mi punto", "de partida"], [2, "El pulso", "por dentro"], [3, "Groove", "estable"], [4, "Click en", "2 y 4"], [5, "Dinámica", "en la caja"], [6, "Silencio", "y precisión"], [7, "Golpe doble", "y rebote"], [8, "Mi primer", "mini fill"]] },
  { n: 2, name: "DINÁMICA", desc: "Control de la intensidad y más recursos", meta: "Semanas 5–7 · Sesiones 9–15", done: 0, total: 7, art: "mateo/audifonos-bateria.png", tint: "#FFEBC7",
    s: [[9, "Ghost notes", "y 4 intensidades"], [10, "Crescendo", "con redoble"], [11, "Tresillos", "en el groove"], [12, "Flams", "y adornos"], [13, "Toms y", "colores"], [14, "Control", "remoto en vivo"], [15, "Mi mini", "solo"]] },
  { n: 3, name: "PROPÓSITO", desc: "Estilos, lectura y tu propio solo", meta: "Semanas 8–10 · Sesiones 16–20", done: 0, total: 5, art: "mateo/celebrando-baqueta.png", tint: "#FFDAD5",
    s: [[16, "Leo grooves", "de semicorcheas"], [17, "Cuatro estilos,", "un tempo"], [18, "Secuencias", "como en el culto"], [19, "Mi solo", "y mi firma"], [20, "Toma final", "y celebración"]] }
];
const CURRENT = 5;

function Node({ n, a, b, x, y, onPick, picked }) {
  const done = n < CURRENT, cur = n === CURRENT;
  return <button onClick={() => onPick(n)} className={"node" + (cur ? " node-cur" : "")} style={{ position: "absolute", left: x + "%", top: y, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: (100 / 8.5) + "%", minWidth: 64, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", padding: 0 }}>
    <span style={{ position: "relative", width: cur ? 46 : 40, height: cur ? 46 : 40, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: cur ? 19 : 16,
      background: done ? "#34B76C" : cur ? "var(--accent)" : "#fff", color: done || cur ? "#fff" : "#2C2E33",
      boxShadow: cur ? "0 0 0 5px #fff, 0 0 0 7px var(--accent), var(--shadow-glow-accent)" : done ? "0 0 0 4px #fff, 0 4px 10px rgba(52,183,108,.35)" : "0 0 0 4px #fff, 0 0 0 5px #E8E3DA", outline: picked ? "2px dashed var(--accent)" : "none", outlineOffset: 8 }}>
      {n}
      {done && <span style={{ position: "absolute", right: -5, bottom: -3, width: 17, height: 17, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="circle-check" size={16} color="#34B76C" /></span>}
      {cur && <span className="halo" />}
    </span>
    {cur && <b style={{ fontSize: 14, color: "#17181C", marginBottom: -4 }}>Ahora</b>}
    <span style={{ fontSize: 12, lineHeight: 1.3, color: cur ? "#17181C" : "#5D6068", textAlign: "center" }}>{a}<br />{b}</span>
  </button>;
}

function Path({ s, onPick, picked }) {
  const n = s.length, xs = s.map((_, i) => 6 + i * (88 / (n - 1))), ys = s.map((_, i) => (i % 2 ? 26 : 12));
  const P = xs.map((x, i) => [x * 10, ys[i] + 21]), dx = (P[1][0] - P[0][0]) / 2;
  const d = "M " + P[0].join(" ") + P.slice(1).map((p, i) => " C " + (P[i][0] + dx) + " " + P[i][1] + ", " + (p[0] - dx) + " " + p[1] + ", " + p[0] + " " + p[1]).join("");
  return <div style={{ position: "relative", flex: 1, minWidth: 0, height: 150 }}>
    <svg viewBox="0 0 1000 150" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <path d={d + " C 990 60, 1010 110, 990 150"} fill="none" stroke="#D9D3C8" strokeWidth="2" strokeDasharray="6 7" vectorEffect="non-scaling-stroke" className="march" />
    </svg>
    {s.map(([num, a, b], i) => <Node key={num} n={num} a={a} b={b} x={xs[i]} y={ys[i]} onPick={onPick} picked={picked === num} />)}
  </div>;
}

function LevelCard({ L, i, onPick, picked }) {
  const LP = window.SW_LEVEL[L.n];
  return <section className="rv lift" style={{ "--i": i, background: "#fff", borderRadius: 22, border: "1px solid #EFEBE4", boxShadow: "0 10px 30px rgba(23,24,28,.05)", padding: "16px 20px 10px", display: "flex", flexDirection: "column", gap: 4, overflow: "hidden", position: "relative" }}>
    <header style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
      <LevelPill n={L.n}>NIVEL {L.n}</LevelPill>
      <b style={{ fontFamily: "var(--font-display)", fontSize: 23, fontWeight: 800, letterSpacing: ".01em", color: "#17181C" }}>{L.name}</b>
      <span style={{ fontSize: 13.5, color: "#5D6068", flex: 1 }}>{L.desc}</span>
      <span style={{ fontSize: 12.5, color: "#8A8D96" }}>{L.meta}</span>
      <Bar value={(L.done / L.total) * 100} color="#34B76C" height={8} style={{ width: 74 }} />
      <span style={{ fontSize: 12.5, color: "#5D6068" }}>{L.done} / {L.total} completadas</span>
    </header>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ position: "relative", width: 128, height: 128, flex: "none" }}>
        <span style={{ position: "absolute", inset: 6, borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #fff, " + LP.solid + "55 70%)" }} />
        <img src={img(L.art)} alt="" className="floaty" style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", height: 132, maxWidth: 150, objectFit: "contain", objectPosition: "bottom" }} />
      </div>
      <Path s={L.s} onPick={onPick} picked={picked} />
    </div>
  </section>;
}

function SessionSheet({ n, onClose }) {
  const all = LEVELS.flatMap(L => L.s.map(s => ({ L, s })));
  const it = all.find(x => x.s[0] === n);
  if (!it) return null;
  const done = n < CURRENT, cur = n === CURRENT;
  return <div className="sheet" style={{ position: "fixed", right: 28, bottom: 28, width: 340, zIndex: 30, background: "#17181C", color: "#fff", borderRadius: 22, padding: 20, boxShadow: "0 30px 60px rgba(23,24,28,.35)", display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
    <img src={img(cur ? "bit/celebrando.png" : done ? "bit/corazon.png" : "bit/pensando.png")} alt="" style={{ position: "absolute", right: 8, top: 8, height: 84, opacity: .95 }} />
    <LevelPill n={it.L.n} solid>NIVEL {it.L.n} · {it.L.name}</LevelPill>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700 }}>Sesión {n}</div>
    <div style={{ fontSize: 15, color: "rgba(255,255,255,.75)", marginTop: -8 }}>{it.s[1]} {it.s[2]}</div>
    <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
      <Button icon={done ? "rotate-ccw" : cur ? "play" : "lock"} disabled={!done && !cur}>{done ? "Repasar" : cur ? "Iniciar sesión" : "Bloqueada"}</Button>
      <Button variant="ghost" onClick={onClose} style={{ color: "#fff" }}>Cerrar</Button>
    </div>
  </div>;
}

function Side() {
  const days = ["L", "M", "X", "J", "V", "S", "D"];
  return <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
    <Panel i={1} title="Mi progreso general">
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <Ring value={25} size={136} stroke={13} color="var(--accent)"><b style={{ fontFamily: "var(--font-display)", fontSize: 32 }}><CountUp to={25} suffix="%" /></b><span style={{ fontSize: 12, color: "#5D6068" }}>5 de 20<br />sesiones</span></Ring>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, fontSize: 13.5 }}>
          {[["circle-check", "#34B76C", "Completadas", 4], ["circle-dot", "var(--accent)", "En curso", 1], ["circle", "#B4B6BD", "Por hacer", 15]].map(([ic, c, l, v]) => <div key={l} style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name={ic} size={18} color={c} /><span style={{ flex: 1, color: "#3F4249" }}>{l}</span><b>{v}</b></div>)}
        </div>
      </div>
    </Panel>
    <Panel i={2} title="Mi racha de práctica">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}><img src={img("music/fuego.png")} alt="" className="flicker" style={{ width: 46 }} /><b style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 700 }}><CountUp to={7} /> días seguidos</b></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>{days.map((d, i) => <span key={d} className="rv" style={{ "--i": i + 4, width: 32, height: 32, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12.5, fontWeight: 700, background: i < 5 ? "#34B76C" : "#F1ECE4", color: i < 5 ? "#fff" : "#8A8D96" }}>{d}</span>)}</div>
    </Panel>
    <Panel i={3} title="Mis logros" action={<a href="#" style={{ fontSize: 13.5, fontWeight: 600 }}>Ver todos</a>}>
      <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
        {[["badge/pulso-estable.png", "Pulso estable", "3 sesiones"], ["badge/primera-cancion.png", "Primera canción", "completa"], ["badge/cuatro-intensidades.png", "4 intensidades", "S9"]].map(([b, t, s]) => <div key={t} className="badge-pop" style={{ width: 92, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><img src={img(b)} alt="" style={{ width: 64 }} /><span style={{ fontSize: 12.5, fontWeight: 600, color: "#17181C" }}>{t}</span><span style={{ fontSize: 12, color: "#8A8D96" }}>{s}</span></div>)}
      </div>
    </Panel>
    <Panel i={4} title="Recompensa final" icon={<img src={img("icon3d/trofeo.png")} alt="" style={{ width: 28, borderRadius: 6 }} />}>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ flex: 1 }}><div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600 }}>Tu toma final</div><p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.5, color: "#5D6068" }}>Al completar las 20 sesiones grabarás tu versión final. ¡Será increíble!</p></div>
        <span style={{ width: 70, height: 84, borderRadius: 14, background: "#17181C", display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}><span className="spin-slow" style={{ position: "absolute", inset: -20, background: "conic-gradient(from 0deg, var(--accent), #7C4DEB, #EE4433, var(--accent))", opacity: .55 }} /><span style={{ position: "relative", width: 38, height: 38, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="play" size={18} color="#17181C" /></span></span>
      </div>
    </Panel>
  </div>;
}

function SwCamino() {
  const [picked, setPicked] = React.useState(null);
  const meta = <div style={{ display: "flex", gap: 18, marginTop: 14, fontSize: 13.5, color: "#3F4249", flexWrap: "wrap" }}>{[["calendar", "26 oct – 30 dic 2026"], ["clock", "10 semanas"], ["calendar-check", "20 sesiones"]].map(([i, t]) => <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Icon name={i} size={18} />{t}</span>)}</div>;
  return <div className="sw-split" style={{ padding: 24, "--side": "320px" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 18, minWidth: 0 }}>
      <HeroStage variant="staff" title="Tu camino" subtitle="Groove con propósito" body="Un recorrido de 20 sesiones para desarrollar tu técnica, tu groove y tu propio estilo tocando las canciones que te gustan." meta={meta} art="mateo/bateria-tocando.png" artStyle={{ right: 120, height: 270 }} bit="bit/baqueta.png" tagline="¡Un paso a la vez!" height={250} />
      {LEVELS.map((L, i) => <LevelCard key={L.n} L={L} i={i + 1} onPick={setPicked} picked={picked} />)}
    </div>
    <Side />
    {picked && <SessionSheet key={picked} n={picked} onClose={() => setPicked(null)} />}
  </div>;
}
Object.assign(window, { SwCamino });
})();
