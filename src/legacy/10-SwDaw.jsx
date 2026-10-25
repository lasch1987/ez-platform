(() => {
const { Icon, Button } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;
const N = 32;
const TRACKS = [
  { id: "hihat", l: "Hi-hat", c: "#E9A21A", k: "hihat", key: "D" }, { id: "caja", l: "Caja", c: "#EE4433", k: "snare", key: "S" },
  { id: "bombo", l: "Bombo", c: "#2F7FD8", k: "kick", key: "A" }, { id: "tom1", l: "Tom 1", ic: "tom", c: "#2E9E6E", k: "tom1", key: "F" },
  { id: "tom2", l: "Tom 2", ic: "tom", c: "#2E9E6E", k: "tom2", key: "G" }, { id: "tom3", l: "Tom 3", ic: "tom", c: "#2E9E6E", k: "tom3", key: "H" },
  { id: "crash", l: "Crash", c: "#A79E92", k: "crash", key: "J" }, { id: "ride", l: "Ride", c: "#A79E92", k: "ride", key: "K" }
];
const pat = (o) => TRACKS.map(t => Array.from({ length: N }, (_, i) => (o[t.id] || []).includes(i)));
const range = (a, b, s = 1) => { const r = []; for (let i = a; i < b; i += s) r.push(i); return r; };
const PRESETS = {
  "Groove básico": { bpm: 80, p: { hihat: range(0, 32, 2), caja: [4, 12, 20, 28], bombo: [0, 8, 16, 24], crash: [0] } },
  "Worship 1": { bpm: 90, p: { hihat: range(0, 32, 2), caja: [4, 12, 20, 28], bombo: [0, 6, 10, 16, 22, 26], tom1: [29], tom2: [30], tom3: [31], crash: [0, 16] } },
  "Pop 1": { bpm: 100, p: { hihat: range(0, 32, 1), caja: [4, 12, 20, 28, 30], bombo: [0, 3, 8, 11, 16, 19, 24, 27], crash: [0] } },
  "Balada 6/8": { bpm: 70, p: { ride: range(0, 24, 2), caja: [6, 18], bombo: [0, 12], tom3: [22], tom2: [23], crash: [0] } },
  "Urbano": { bpm: 90, p: { hihat: [0, 2, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 23, 24, 26, 28, 30], caja: [8, 24], bombo: [0, 3, 6, 10, 16, 19, 22, 26] } }
};
const DEFAULT = pat({ hihat: range(0, 32, 2), caja: [4, 9, 12, 20, 25, 28], bombo: [0, 6, 8, 16, 22, 24, 26], tom1: [29], tom2: [30], tom3: [31], crash: [0, 16], ride: [10, 26] });
const wave = (seed, n = 40) => Array.from({ length: n }, (_, i) => 3 + Math.abs(Math.sin(i * (0.5 + seed * .13)) * 10 + Math.sin(i * (1.7 + seed * .2)) * 6) * (1 - Math.abs(i - n / 2) / n));

function Wave({ seed, color, n, h = 22, playing }) {
  const b = React.useMemo(() => wave(seed, n), [seed, n]);
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 1.5, height: h, flex: 1, minWidth: 0 }}>{b.map((v, i) => <i key={i} className={playing ? "eqw" : ""} style={{ flex: 1, height: Math.min(h, v * h / 20), borderRadius: 1, background: color, animationDelay: (i % 6) * .08 + "s" }} />)}</span>;
}

function Knob({ label, value, min, max, fmt, onChange, color = "var(--accent)" }) {
  const drag = React.useRef(null);
  const pct = (value - min) / (max - min), ang = -135 + pct * 270;
  const down = e => { drag.current = { y: e.clientY, v: value }; const mv = ev => { const d = (drag.current.y - ev.clientY) / 150 * (max - min); onChange(Math.max(min, Math.min(max, drag.current.v + d))); }; const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); }; window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up); };
  const r = 26, c = 2 * Math.PI * r, arc = c * .75;
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, userSelect: "none" }}>
    <div onPointerDown={down} style={{ position: "relative", width: 64, height: 64, cursor: "ns-resize", touchAction: "none" }}>
      <svg width="64" height="64" style={{ position: "absolute", inset: 0, transform: "rotate(135deg)" }}><circle cx="32" cy="32" r={r} fill="none" stroke="#E8E3DA" strokeWidth="5" strokeDasharray={arc + " " + c} strokeLinecap="round" /><circle cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="5" strokeDasharray={(arc * pct) + " " + c} strokeLinecap="round" /></svg>
      <span style={{ position: "absolute", inset: 10, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #3A3C44, #15161B)", boxShadow: "0 4px 10px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.15)", transform: "rotate(" + ang + "deg)" }}><i style={{ position: "absolute", left: "50%", top: 5, width: 3, height: 12, marginLeft: -1.5, borderRadius: 2, background: "#fff" }} /></span>
    </div>
    <span style={{ fontSize: 12.5, color: "#17181C", fontWeight: 600 }}>{label}</span><span style={{ fontSize: 12, color: "#5D6068", marginTop: -4 }}>{fmt(value)}</span>
  </div>;
}

function Seq({ grid, step, cw, onCell, flashes, tracksState, setTrack, tool }) {
  const painting = React.useRef(null);
  React.useEffect(() => { const up = () => painting.current = null; window.addEventListener("pointerup", up); return () => window.removeEventListener("pointerup", up); }, []);
  const anySolo = tracksState.some(t => t.solo);
  return <div style={{ display: "flex", background: "#fff", borderRadius: 18, border: "1px solid #EFEBE4", overflow: "hidden" }}>
    <div style={{ flex: "none", width: 250, borderRight: "1px solid #EFEBE4" }}>
      <div style={{ height: 30, borderBottom: "1px solid #EFEBE4" }} />
      {TRACKS.map((t, r) => { const st = tracksState[r], dim = st.mute || (anySolo && !st.solo); return <div key={t.id} style={{ height: 42, display: "flex", alignItems: "center", gap: 8, padding: "0 10px", borderBottom: "1px solid #F3EFE8", opacity: dim ? .45 : 1, transition: "opacity .2s" }}>
        <img src={img("daw/" + (t.ic || t.id) + ".png")} alt="" className={flashes[r] ? "hitpop" : ""} style={{ width: 32, height: 28, objectFit: "contain", borderRadius: 8 }} />
        <b style={{ flex: 1, fontSize: 13.5, fontWeight: 600 }}>{t.l}</b>
        {[["S", "solo", "#F2A516"], ["M", "mute", "#EE4433"]].map(([L, k, c]) => <button key={L} onClick={() => setTrack(r, { [k]: !st[k] })} style={{ width: 22, height: 22, borderRadius: 6, border: "1px solid " + (st[k] ? c : "#E5DFD5"), background: st[k] ? c : "#fff", color: st[k] ? "#fff" : "#5D6068", fontSize: 11, fontWeight: 700, cursor: "pointer", padding: 0 }}>{L}</button>)}
        <input type="range" min="0" max="1" step=".01" value={st.vol} onChange={e => setTrack(r, { vol: +e.target.value })} style={{ width: 54, accentColor: t.c }} />
      </div>; })}
    </div>
    <div style={{ flex: 1, minWidth: 0, overflowX: "auto" }}>
      <div style={{ position: "relative", width: N * cw }}>
        <div style={{ height: 30, display: "flex", borderBottom: "1px solid #EFEBE4", position: "relative" }}>{range(0, N).map(i => <span key={i} style={{ width: cw, flex: "none", borderLeft: i % 4 ? "1px solid transparent" : "1px solid #D9D3C8", fontSize: 11.5, color: "#5D6068", padding: "6px 0 0 4px", height: i % 4 ? 10 : 30, alignSelf: "flex-end", boxSizing: "border-box", borderLeftColor: i % 4 ? "#EAE5DC" : "#C9C2B6" }}>{i % 4 ? "" : i / 4 + 1}</span>)}</div>
        {TRACKS.map((t, r) => <div key={t.id} style={{ height: 42, display: "flex", borderBottom: "1px solid #F3EFE8", background: r === 0 ? "rgba(233,162,26,.06)" : "transparent" }}>
          {grid[r].map((on, i) => <div key={i} onPointerDown={e => { e.preventDefault(); const v = tool === "erase" ? false : !on; painting.current = v; onCell(r, i, v); }} onPointerEnter={() => painting.current !== null && onCell(r, i, painting.current)}
            style={{ width: cw, flex: "none", height: "100%", borderLeft: "1px solid " + (i % 4 ? "#F3EFE8" : "#E2DCD1"), background: Math.floor(i / 4) % 2 ? "rgba(23,24,28,.018)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: tool === "erase" ? "not-allowed" : "pointer", boxSizing: "border-box" }}>
            {on && <span className={i === step ? "cellhit" : "cellin"} style={{ width: t.id.match(/crash|ride/) ? cw * .45 : cw - 6, height: t.id.match(/crash|ride/) ? cw * .45 : 22, maxWidth: 22, borderRadius: t.id.match(/crash|ride/) ? 3 : 4, transform: t.id.match(/crash|ride/) ? "rotate(45deg)" : "none", background: t.c, boxShadow: i === step ? "0 0 14px " + t.c : "inset 0 -2px 0 rgba(0,0,0,.15)" }} />}
          </div>)}
        </div>)}
        {step >= 0 && <span style={{ position: "absolute", top: 18, bottom: 0, left: step * cw + cw / 2, width: 2, marginLeft: -1, background: "#17181C", pointerEvents: "none" }}><i style={{ position: "absolute", top: -4, left: -5, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "9px solid #17181C" }} /></span>}
      </div>
    </div>
  </div>;
}

const PADS = [["crash", 14, 6], ["hihat", 2, 30], ["tom1", 30, 18], ["tom2", 54, 14], ["ride", 78, 4], ["tom3", 74, 32], ["caja", 24, 54], ["bombo", 50, 72]];
function VirtualKit({ hit, flashes }) {
  return <Panel i={3} title="Instrumento virtual" pad={16} action={<span style={{ fontSize: 12, color: "#8A8D96" }}>Teclas A S D F G H J K</span>}>
    <div style={{ position: "relative", height: 250 }}>
      <img src={img("kit/bateria-electronica.png")} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", mixBlendMode: "multiply" }} />
      {PADS.map(([id, x, y]) => { const r = TRACKS.findIndex(t => t.id === id), t = TRACKS[r]; return <button key={id} onPointerDown={() => hit(r)} className={flashes[r] ? "hitpop" : ""} style={{ position: "absolute", left: x + "%", top: y + "%", height: 28, padding: "0 12px", borderRadius: 99, border: "2px solid #fff", background: t.c, color: "#fff", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", boxShadow: flashes[r] ? "0 0 0 8px " + t.c + "33, 0 0 24px " + t.c : "0 4px 10px rgba(23,24,28,.2)", transition: "box-shadow .15s" }}>{t.l}<sup style={{ marginLeft: 6, fontSize: 9, opacity: .8 }}>{t.key}</sup></button>; })}
    </div>
  </Panel>;
}

function Effects() {
  const [fx, setFx] = React.useState("comp");
  const [on, setOn] = React.useState(true);
  const [k, setK] = React.useState({ th: -18, ra: 4, at: 10, re: 100 });
  React.useEffect(() => { const m = window.EZAudio.master(); const t = m.context.currentTime; m.threshold.setValueAtTime(on ? k.th : 0, t); m.ratio.setValueAtTime(on ? k.ra : 1, t); m.attack.setValueAtTime(k.at / 1000, t); m.release.setValueAtTime(k.re / 1000, t); }, [k, on]);
  const FX = [["comp", "gauge", "Compresor"], ["eq", "audio-lines", "EQ"], ["rev", "waves", "Reverb"], ["cho", "orbit", "Chorus"]];
  const pts = Array.from({ length: 30 }, (_, i) => { const x = i / 29, inDb = -60 + x * 60, out = inDb > k.th ? k.th + (inDb - k.th) / k.ra : inDb; return [x * 100, 60 - (out + 60)]; });
  return <Panel i={4} title="Efectos" pad={16}>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{FX.map(([id, ic, l]) => <button key={id} onClick={() => setFx(id)} style={{ height: 44, padding: "0 14px", borderRadius: 12, border: "2px solid " + (fx === id ? "var(--accent)" : "transparent"), background: "#17181C", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: fx === id ? "var(--shadow-glow-accent)" : "none" }}><Icon name={ic} size={18} color={fx === id ? "#8AA4FF" : "#fff"} />{l}</button>)}
      <button aria-label="Añadir efecto" style={{ width: 52, height: 44, borderRadius: 12, border: "2px dashed #D9D3C8", background: "transparent", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="plus" size={18} /></button></div>
    {fx === "comp" ? <div style={{ borderRadius: 16, background: "#F7F4EE", padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><b style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>Compresor</b>
        <button onClick={() => setOn(!on)} aria-label="Activar compresor" style={{ width: 40, height: 22, borderRadius: 11, border: "none", background: on ? "var(--accent)" : "#D9D3C8", position: "relative", cursor: "pointer", transition: "background .2s" }}><i style={{ position: "absolute", top: 3, left: on ? 21 : 3, width: 16, height: 16, borderRadius: 8, background: "#fff", transition: "left .25s cubic-bezier(.34,1.56,.64,1)" }} /></button></div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, opacity: on ? 1 : .45 }}>
        <Knob label="Umbral" value={k.th} min={-60} max={0} fmt={v => Math.round(v) + " dB"} onChange={v => setK({ ...k, th: v })} />
        <Knob label="Ratio" value={k.ra} min={1} max={20} fmt={v => v.toFixed(0) + ":1"} onChange={v => setK({ ...k, ra: v })} />
        <Knob label="Ataque" value={k.at} min={0} max={100} fmt={v => Math.round(v) + " ms"} onChange={v => setK({ ...k, at: v })} />
        <Knob label="Liberación" value={k.re} min={10} max={1000} fmt={v => Math.round(v) + " ms"} onChange={v => setK({ ...k, re: v })} />
        <svg viewBox="0 0 100 60" style={{ width: 110, height: 76, borderRadius: 10, background: "#15161B", flex: "none" }}>{[15, 30, 45].map(y => <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#2A2C33" />)}<polyline points={pts.map(p => p.join(",")).join(" ")} fill="none" stroke="#8AA4FF" strokeWidth="2" /></svg>
      </div>
    </div> : <div style={{ fontSize: 13, color: "#8A8D96", padding: 16 }}>Panel no incluido en la referencia.</div>}
  </Panel>;
}

function Library({ loadPreset, active, playing }) {
  const [tab, setTab] = React.useState("son");
  const [cat, setCat] = React.useState("Todos");
  const [q, setQ] = React.useState("");
  const [favs, setFavs] = React.useState({ "Hi-hat cerrado": 1, "Caja acústica": 1, "Caja electrónica": 1, "Bombo profundo": 1, "Balada 6/8": 1 });
  const [pl, setPl] = React.useState(null);
  const SOUNDS = [["Hi-hat cerrado", "hihat", "#E9A21A"], ["Hi-hat abierto", "hihatOpen", "#E9A21A"], ["Caja acústica", "snare", "#EE4433"], ["Caja electrónica", "snare", "#EE4433"], ["Bombo profundo", "kick", "#2F7FD8"], ["Tom 1", "tom1", "#2E9E6E"], ["Tom 2", "tom2", "#2E9E6E"]].filter(s => s[0].toLowerCase().includes(q.toLowerCase()));
  const LOOPS = [["Groove básico", "#E9A21A", "80 BPM · 4/4"], ["Worship 1", "#2F7FD8", "90 BPM · 4/4"], ["Pop 1", "#EE4433", "100 BPM · 4/4"], ["Balada 6/8", "#2E9E6E", "70 BPM · 6/8"], ["Urbano", "#7C4DEB", "90 BPM · 4/4"]];
  const fav = n => setFavs(f => ({ ...f, [n]: !f[n] }));
  const Heart = ({ n }) => <button onClick={() => fav(n)} className="heart" aria-label="Favorito" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "inline-flex" }}><Icon name="heart" size={17} color={favs[n] ? "#EE4433" : "#8A8D96"} /></button>;
  const Seg = ({ items, v, set }) => <div style={{ display: "flex", padding: 3, borderRadius: 12, background: "#F1ECE4" }}>{items.map(([id, l]) => <button key={id} onClick={() => set(id)} style={{ flex: 1, height: 34, borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: v === id ? 700 : 500, background: v === id ? "#17181C" : "transparent", color: v === id ? "#fff" : "#3F4249", transition: "all .2s" }}>{l}</button>)}</div>;
  return <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Panel i={2} pad={14}>
      <Seg items={[["son", "Sonidos"], ["pis", "Pistas"], ["mis", "Mis loops"]]} v={tab} set={setTab} />
      <label style={{ display: "flex", alignItems: "center", gap: 8, height: 38, padding: "0 12px", borderRadius: 12, background: "#F7F4EE", color: "#8A8D96" }}><Icon name="search" size={16} /><input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar sonidos..." style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-body)", fontSize: 13.5 }} /></label>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{["Todos", "Batería", "Percusión", "Loops", "Efectos"].map(c => <button key={c} onClick={() => setCat(c)} style={{ height: 30, padding: "0 12px", borderRadius: 9, border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: cat === c ? 700 : 500, background: cat === c ? "var(--accent)" : "#F1ECE4", color: cat === c ? "#fff" : "#3F4249" }}>{c}</button>)}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>{tab === "son" && SOUNDS.map(([n, k, c], i) => <div key={n} className="row-hover" style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 6px", borderTop: i ? "1px solid #F3EFE8" : "none", borderRadius: 8 }}>
        <button onClick={() => { window.EZAudio.play(k); setPl(n); setTimeout(() => setPl(p => p === n ? null : p), 400); }} aria-label="Escuchar" style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #E5DFD5", background: pl === n ? "var(--accent)" : "#fff", color: pl === n ? "#fff" : "#17181C", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Icon name="play" size={13} /></button>
        <span style={{ width: 110, fontSize: 13.5, flex: "none" }}>{n}</span><Wave seed={i + 1} color={c} n={26} h={20} playing={pl === n} /><Heart n={n} />
      </div>)}{tab !== "son" && <div style={{ fontSize: 13, color: "#8A8D96", padding: 12 }}>Vista no incluida en la referencia.</div>}</div>
    </Panel>
    <Panel i={3} title="Loops / Pistas" pad={14}>
      <div style={{ display: "flex", flexDirection: "column" }}>{LOOPS.map(([n, c, m], i) => { const on = active === n; return <div key={n} className="row-hover" style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 6px", borderRadius: 10, background: on ? "var(--accent-soft)" : "transparent" }}>
        <button onClick={() => loadPreset(n)} aria-label="Cargar loop" style={{ width: 30, height: 30, borderRadius: "50%", border: "none", background: on ? "var(--accent)" : "#17181C", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}><Icon name={on && playing ? "pause" : "play"} size={13} /></button>
        <Wave seed={i * 3 + 2} color={c} n={34} h={24} playing={on && playing} />
        <span style={{ width: 92, display: "flex", flexDirection: "column", flex: "none" }}><b style={{ fontSize: 13 }}>{n}</b><span style={{ fontSize: 11.5, color: "#8A8D96" }}>{m}</span></span><Heart n={n} />
      </div>; })}</div>
    </Panel>
  </aside>;
}

function SwDaw() {
  const [grid, setGrid] = React.useState(DEFAULT);
  const [hist, setHist] = React.useState({ past: [], future: [] });
  const [bpm, setBpm] = React.useState(90);
  const [sig, setSig] = React.useState("4 / 4");
  const [playing, setPlaying] = React.useState(false);
  const [rec, setRec] = React.useState(false);
  const [step, setStep] = React.useState(-1);
  const [tool, setTool] = React.useState("pencil");
  const [cw, setCw] = React.useState(24);
  const [view, setView] = React.useState("editor");
  const [active, setActive] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [flashes, setFlashes] = React.useState({});
  const [tracks, setTracks] = React.useState(TRACKS.map((t, i) => ({ vol: i >= 6 ? .55 : .8, mute: false, solo: false })));
  const R = React.useRef({}); R.current = { grid, bpm, tracks, rec, step };
  const sched = React.useRef({ t: null, next: 0, i: 0 });
  const buses = React.useRef(null);
  const say = m => { setToast(m); clearTimeout(say.t); say.t = setTimeout(() => setToast(null), 1800); };
  const flash = r => { setFlashes(f => ({ ...f, [r]: Date.now() })); setTimeout(() => setFlashes(f => { const n = { ...f }; delete n[r]; return n; }), 160); };
  const audible = r => { const ts = R.current.tracks, anySolo = ts.some(t => t.solo); return !ts[r].mute && (!anySolo || ts[r].solo); };
  const getBus = r => { if (!buses.current) buses.current = TRACKS.map(() => window.EZAudio.bus(1)); buses.current.forEach((b, i) => b.gain.value = R.current.tracks[i].vol); return buses.current[r]; };
  const commit = g => { setHist(h => ({ past: [...h.past.slice(-30), grid], future: [] })); setGrid(g); };
  const onCell = (r, i, v) => { if (grid[r][i] === v) return; commit(grid.map((row, rr) => rr === r ? row.map((c, ii) => ii === i ? v : c) : row)); if (v) { window.EZAudio.play(TRACKS[r].k, 0, .8, getBus(r)); flash(r); } };
  const hit = r => { window.EZAudio.play(TRACKS[r].k, 0, 1, getBus(r)); flash(r); if (R.current.rec && R.current.step >= 0) { const s = R.current.step; setGrid(g => g.map((row, rr) => rr === r ? row.map((c, ii) => ii === s ? true : c) : row)); } };
  const stop = () => { clearInterval(sched.current.t); sched.current.t = null; setPlaying(false); setStep(-1); setRec(false); };
  const start = () => {
    if (sched.current.t) return; const A = window.EZAudio; sched.current.next = A.now() + .06; sched.current.i = Math.max(0, R.current.step);
    sched.current.t = setInterval(() => {
      const now = A.now();
      while (sched.current.next < now + .12) {
        const i = sched.current.i, t = sched.current.next, dur = 60 / R.current.bpm / 4;
        R.current.grid.forEach((row, r) => { if (row[i] && audible(r)) { A.play(TRACKS[r].k, t, 1, getBus(r)); setTimeout(() => flash(r), (t - now) * 1000); } });
        setTimeout(() => setStep(i), Math.max(0, (t - now) * 1000));
        sched.current.i = (i + 1) % N; sched.current.next += dur;
      }
    }, 25);
    setPlaying(true);
  };
  React.useEffect(() => () => clearInterval(sched.current.t), []);
  React.useEffect(() => { const m = { A: 2, S: 1, D: 0, F: 3, G: 4, H: 5, J: 6, K: 7 }; const kd = e => { if (e.target.tagName === "INPUT") return; if (e.code === "Space") { e.preventDefault(); sched.current.t ? stop() : start(); return; } const r = m[e.key.toUpperCase()]; if (r !== undefined && !e.repeat) hit(r); }; window.addEventListener("keydown", kd); return () => window.removeEventListener("keydown", kd); });
  const loadPreset = n => { if (active === n && playing) { stop(); return; } const P = PRESETS[n]; commit(pat(P.p)); setBpm(P.bpm); setSig(n.includes("6/8") ? "6 / 8" : "4 / 4"); setActive(n); if (!sched.current.t) start(); say("Loop cargado: " + n); };
  const undo = () => setHist(h => { if (!h.past.length) return h; const p = h.past[h.past.length - 1]; setGrid(p); return { past: h.past.slice(0, -1), future: [grid, ...h.future] }; });
  const redo = () => setHist(h => { if (!h.future.length) return h; const f = h.future[0]; setGrid(f); return { past: [...h.past, grid], future: h.future.slice(1) }; });
  const setTrack = (r, patch) => setTracks(ts => ts.map((t, i) => i === r ? { ...t, ...patch } : t));
  const tbtn = (ic, on, fn, label, bg) => <button onClick={fn} aria-label={label} title={label} style={{ width: 40, height: 40, borderRadius: 12, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", background: on ? (bg || "var(--accent)") : "transparent", color: on ? "#fff" : "#17181C", transition: "all .2s" }}><Icon name={ic} size={19} /></button>;
  const tr = (ic, fn, label, bg, fg, big, cls) => <button onClick={fn} aria-label={label} title={label} className={cls} style={{ width: big ? 56 : 46, height: big ? 56 : 46, borderRadius: "50%", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", background: bg, color: fg, boxShadow: bg === "#fff" ? "0 2px 8px rgba(23,24,28,.08)" : "0 8px 20px " + bg + "66", transition: "transform .15s" }}><Icon name={ic} size={big ? 24 : 19} /></button>;
  return <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
    <div className="sw-split" style={{ "--side": "440px", alignItems: "stretch" }}>
      <HeroStage variant="spot" title="Mini DAW" subtitle="Crea, practica y graba tus ideas." art="mateo/laptop-audifonos.png" artStyle={{ right: 170, height: 190, bottom: 0 }} bit="bit/con-audifonos.png" bitStyle={{ right: 40, height: 120 }} tagline="¡Tu creatividad también suma!" height={200} />
      <div className="rv" style={{ "--i": 1, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <div style={{ display: "flex", borderRadius: 14, background: "#fff", border: "1px solid #EFEBE4" }}>{tbtn("undo-2", false, undo, "Deshacer")}{tbtn("redo-2", false, redo, "Rehacer")}</div>
          <Button variant="secondary" icon="save" onClick={() => say("Proyecto guardado")} style={{ background: "#fff", color: "#17181C", border: "1px solid #EFEBE4" }}>Guardar</Button>
          <Button icon="upload" onClick={() => say("Exportando mi-groove.wav…")}>Exportar</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flex: 1 }}>
          <div style={{ background: "#fff", borderRadius: 18, border: "1px solid #EFEBE4", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}><span style={{ fontSize: 13.5, color: "#3F4249" }}>Tempo</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><button onClick={() => setBpm(Math.max(40, bpm - 1))} style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #E5DFD5", background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="minus" size={14} /></button><span><b key={bpm} className="bump" style={{ display: "inline-block", fontFamily: "var(--font-display)", fontSize: 32 }}>{bpm}</b> <span style={{ fontSize: 13, color: "#5D6068" }}>BPM</span></span><button onClick={() => setBpm(Math.min(200, bpm + 1))} style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #E5DFD5", background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="plus" size={14} /></button></div></div>
          <label style={{ background: "#fff", borderRadius: 18, border: "1px solid #EFEBE4", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}><span style={{ fontSize: 13.5, color: "#3F4249" }}>Compás</span><select value={sig} onChange={e => setSig(e.target.value)} style={{ border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "#17181C", padding: 0 }}><option>4 / 4</option><option>3 / 4</option><option>6 / 8</option></select></label>
        </div>
      </div>
    </div>
    <div className="rv" style={{ "--i": 2, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", padding: 10, borderRadius: 18, background: "#fff", border: "1px solid #EFEBE4" }}>
      {tr("skip-back", () => { setStep(-1); sched.current.i = 0; }, "Al inicio", "#fff", "#17181C")}
      {tr(playing ? "pause" : "play", () => playing ? (clearInterval(sched.current.t), sched.current.t = null, setPlaying(false)) : start(), "Reproducir (espacio)", "var(--accent)", "#fff", true)}
      {tr("square", stop, "Detener", "#fff", "#17181C")}
      {tr("circle", () => { setRec(!rec); if (!rec) { start(); say("Grabando: toca el instrumento virtual"); } }, "Grabar", "#EE4433", "#fff", false, rec ? "rec-on" : "")}
      <div style={{ display: "flex", padding: 3, borderRadius: 12, background: "#F1ECE4", marginLeft: 12 }}>{[["editor", "Editor"], ["mezcla", "Mezcla"], ["efectos", "Efectos"]].map(([id, l]) => <button key={id} onClick={() => setView(id)} style={{ height: 36, padding: "0 22px", borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: view === id ? 700 : 500, background: view === id ? "#17181C" : "transparent", color: view === id ? "#fff" : "#3F4249" }}>{l}</button>)}</div>
      <span style={{ flex: 1 }} />
      {tbtn("mouse-pointer-2", tool === "pointer", () => setTool("pointer"), "Cursor")}{tbtn("pencil", tool === "pencil", () => setTool("pencil"), "Lápiz")}{tbtn("eraser", tool === "erase", () => setTool("erase"), "Borrar")}{tbtn("square-dashed", tool === "select", () => setTool("select"), "Seleccionar")}
      <label style={{ display: "flex", flexDirection: "column", padding: "2px 10px", borderRadius: 10, border: "1px solid #EFEBE4", fontSize: 11, color: "#8A8D96" }}>Cuantizar<select style={{ border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-body)", fontSize: 13.5, color: "#17181C", padding: 0 }}><option>1/16</option><option>1/8</option><option>1/4</option></select></label>
      <Icon name="zoom-out" size={18} /><input type="range" min="16" max="36" value={cw} onChange={e => setCw(+e.target.value)} style={{ width: 100, accentColor: "var(--accent)" }} /><Icon name="zoom-in" size={18} />
    </div>
    {view === "editor" ? <Seq grid={grid} step={step} cw={cw} onCell={onCell} flashes={flashes} tracksState={tracks} setTrack={setTrack} tool={tool} />
      : view === "mezcla" ? <div className="swap" style={{ display: "flex", gap: 10, padding: 16, borderRadius: 18, background: "#17181C" }}>{TRACKS.map((t, r) => <div key={t.id} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "12px 0", borderRadius: 14, background: "#22232A" }}>
        <span style={{ position: "relative", width: 10, height: 160, borderRadius: 5, background: "#2F3038", overflow: "hidden" }}><i style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: (tracks[r].vol * 100) + "%", background: "linear-gradient(0deg," + t.c + "," + t.c + "88)", transition: "height .1s" }} /><i style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: flashes[r] ? "100%" : "0%", background: "rgba(255,255,255,.25)", transition: "height .08s" }} /></span>
        <input type="range" min="0" max="1" step=".01" value={tracks[r].vol} onChange={e => setTrack(r, { vol: +e.target.value })} style={{ width: 80, accentColor: t.c }} />
        <img src={img("daw/" + (t.ic || t.id) + ".png")} alt="" style={{ width: 34 }} /><b style={{ color: "#fff", fontSize: 12.5 }}>{t.l}</b></div>)}</div>
      : <div className="swap" style={{ padding: 30, borderRadius: 18, background: "#fff", border: "1px solid #EFEBE4", textAlign: "center", fontSize: 13, color: "#8A8D96" }}>Usa el panel de Efectos de abajo.</div>}
    <div className="sw-split" style={{ "--side": "440px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.15fr)", gap: 16 }}><VirtualKit hit={hit} flashes={flashes} /><Effects /></div>
      <Library loadPreset={loadPreset} active={active} playing={playing} />
    </div>
    {toast && <div className="sheet" style={{ position: "fixed", left: "50%", bottom: 28, transform: "translateX(-50%)", zIndex: 40, display: "flex", alignItems: "center", gap: 10, padding: "10px 18px 10px 10px", borderRadius: 16, background: "#17181C", color: "#fff", fontSize: 14, boxShadow: "0 18px 40px rgba(23,24,28,.35)" }}><img src={img("bit/aplaudiendo.png")} alt="" style={{ height: 40 }} />{toast}</div>}
  </div>;
}
Object.assign(window, { SwDaw });
})();
