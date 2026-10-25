(() => {
const { Icon, Button, Tabs } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;
const LEVELS = [["pulso", "PULSO", 1, 8], ["groove", "GROOVE", 2, 4], ["flow", "FLOW", 3, 0], ["click", "CLICK", 4, 0], ["stage", "STAGE", 5, 0], ["firma", "FIRMA", 6, 0]];
const CATS = [["todas", "book-open", "Todas las sesiones"], ["teoria", "book-open-text", "Teoría"], ["ejercicios", "repeat", "Ejercicios"], ["rudimentos", "drum", "Rudimentos"], ["canciones", "music", "Canciones"], ["juegos", "gamepad-2", "Juegos"], ["fav", "heart", "Mis favoritas"]];
const SESS = {
  2: [["Mantén el Groove", "Teoría + Ejercicios", "done", "pencil"], ["Manos coordinadas", "Rudimento + Ejercicios", "cur", "pencil"], ["Dinámica básica", "Teoría + Práctica", "lock", "calendar"], ["Hi-hat con control", "Ejercicios + Canción", "lock", "music"], ["Ritmos en canciones", "Práctica + Juego", "lock", "gamepad-2"]],
  3: [["Fills sencillos", "Rudimento + Ejercicio", "lock", "drum"], ["Independencia 1", "Ejercicios", "lock", "repeat"], ["Groove en canción", "Práctica + Canción", "lock", "music"], ["Control de tempo", "Teoría + Ejercicios", "lock", "calendar"], ["Mi primer cover", "Canción + Grabación", "lock", "mic"]]
};
const ST = { done: ["Completada", "circle-check", "#1D7A47", "#DDF5E7"], cur: ["En curso", "loader", "var(--accent)", "var(--accent-soft)"], lock: ["Bloqueada", "lock", "#4A4C52", "#EEEDEA"] };
const has = (tags, c) => c === "todas" || (c === "teoria" && /Teor/.test(tags)) || (c === "ejercicios" && /Ejercicio/.test(tags)) || (c === "rudimentos" && /Rudimento/.test(tags)) || (c === "canciones" && /Canci/.test(tags)) || (c === "juegos" && /Juego/.test(tags));
const ART = { 2: ["libro/mateo-sentado-baquetas.png", "libro/mateo-puno.png", "libro/mateo-bateria.png", "libro/mateo-audifonos-bateria.png", "libro/mateo-bateria-riendo.png"], 3: ["libro/mateo-bateria-riendo.png", "libro/mateo-bateria.png", "libro/mateo-audifonos-tablet.png", "libro/mateo-pensando-libro.png", "libro/mateo-leyendo-guino.png"] };
const FLOW = [["activity", "#17181C", "PULSO"], ["music", "#3B74F0", "RITMO"], ["drum", "#EE4433", "GROOVE"], ["chart-no-axes-column-increasing", "#2E9E6E", "PROGRESO"]];

function LevelCard({ l, i, active, onPick }) {
  const [id, name, n, done] = l;
  return <button onClick={onPick} className="rv lift lvl" style={{ "--i": i + 1, position: "relative", padding: 0, border: "none", cursor: "pointer", borderRadius: 16, overflow: "hidden", background: "transparent", boxShadow: active ? "0 0 0 3px #fff, 0 0 0 6px var(--accent), 0 16px 30px rgba(23,24,28,.2)" : "0 8px 20px rgba(23,24,28,.10)", transform: active ? "translateY(-4px)" : "none", transition: "all .35s cubic-bezier(.34,1.56,.64,1)" }}>
    <img src={img("libro/nivel-" + id + ".png")} alt={name} className="lvl-art" style={{ display: "block", width: "100%", aspectRatio: "126/180", objectFit: "cover", objectPosition: "top" }} />
    <span style={{ position: "absolute", left: 8, right: 8, bottom: 8, display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderRadius: 10, background: "rgba(255,255,255,.92)", backdropFilter: "blur(6px)" }}><Bar value={done / 12 * 100} color={n === 1 ? "#34B76C" : "var(--accent)"} height={6} style={{ flex: 1 }} /><b style={{ fontSize: 11, color: "#17181C" }}>{done}/12</b></span>
    {n > 2 && <span style={{ position: "absolute", top: 8, right: 8, width: 24, height: 24, borderRadius: "50%", background: "rgba(0,0,0,.35)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="lock" size={12} color="#fff" /></span>}
  </button>;
}

function SessCard({ s, n, k, i, sel, onSel, fav }) {
  const [t, tags, st, ic] = s, S = ST[st];
  return <button onClick={onSel} className="rv lift tool" style={{ "--i": i, textAlign: "left", padding: 0, cursor: "pointer", background: "#fff", borderRadius: 16, overflow: "hidden", border: "2px solid " + (sel ? "var(--accent)" : "#EFEBE4"), boxShadow: sel ? "0 0 0 4px var(--accent-ring), 0 14px 28px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)", fontFamily: "var(--font-body)", display: "flex", flexDirection: "column" }}>
    <div style={{ position: "relative", height: 96, overflow: "hidden" }}>
      <img src={img("libro/s" + n + "-" + (k + 1) + ".png")} alt="" className="tool-art" style={{ width: "100%", height: "100%", objectFit: "cover", filter: st === "lock" ? "saturate(.55)" : "none" }} />
      {fav && <img src={img("music/corazon.png")} alt="" style={{ position: "absolute", top: 6, right: 6, width: 22 }} />}
    </div>
    <div style={{ padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontSize: 12, color: "#5D6068" }}>Sesión {k + 1}</span>
      <b style={{ fontSize: 14, color: "#17181C", lineHeight: 1.25 }}>{t}</b>
      <span style={{ fontSize: 12, color: "#5D6068", display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name={ic} size={13} />{tags}</span>
      <span style={{ marginTop: 6, alignSelf: "flex-start", height: 26, padding: "0 10px", borderRadius: 8, background: S[3], color: S[2], fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name={S[1]} size={14} className={st === "cur" ? "spin-icon" : ""} />{S[0]}</span>
    </div>
  </button>;
}

function Page({ n, k, s, big }) {
  const lvl = LEVELS[n - 1], tilt = big ? 0 : 1;
  return <div className="book-page" style={{ position: "relative", borderRadius: big ? 6 : "6px 14px 14px 6px", overflow: "hidden", padding: big ? "28px 28px 18px" : "18px 18px 12px", background: "linear-gradient(90deg, #E9E2D6 0, #FBF8F2 6%, #FBF8F2 100%)", boxShadow: "inset 6px 0 10px -6px rgba(0,0,0,.25), 0 18px 34px rgba(23,24,28,.18)", display: "flex", flexDirection: "column", gap: 6, minHeight: big ? 520 : 360 }}>
    <span style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 8, background: "repeating-linear-gradient(0deg,#E7E0D3 0 2px,#F6F1E8 2px 4px)" }} />
    <span style={{ alignSelf: "flex-start", height: 26, padding: "0 10px", borderRadius: 6, background: "var(--accent)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: ".04em", display: "inline-flex", alignItems: "center" }}>{lvl[1]}</span>
    <span style={{ fontSize: big ? 18 : 15, color: "#2C2E33" }}>Sesión {k + 1}</span>
    <b style={{ fontFamily: "var(--font-display)", fontSize: big ? 44 : 32, fontWeight: 800, lineHeight: .98, color: "#17181C", maxWidth: "58%", textWrap: "balance" }}>{s[0]}</b>
    <span style={{ fontSize: big ? 16 : 13.5, color: "#3F4249", maxWidth: "48%", marginTop: 4 }}>{k === 0 && n === 2 ? "El Groove empieza con el pulso." : s[1] + "."}</span>
    <img src={img(ART[n][k])} alt="" className="floaty" style={{ position: "absolute", right: big ? 20 : 4, top: big ? 30 : 18, height: big ? 300 : 200, maxWidth: "52%", objectFit: "contain", objectPosition: "top right" }} />
    <img src={img("libro/bit-idea.png")} alt="" className="bob" style={{ position: "absolute", right: big ? 30 : 10, top: big ? 250 : 165, height: big ? 90 : 64 }} />
    <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 4, paddingTop: big ? 40 : 20 }}>
      {FLOW.map(([ic, c, l], i) => <React.Fragment key={l}>
        {i > 0 && <Icon name="arrow-right" size={big ? 20 : 15} color="#17181C" style={{ marginTop: big ? 18 : 13 }} />}
        <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}><span className="flow-dot" style={{ "--d": i * .35 + "s", width: big ? 56 : 42, height: big ? 56 : 42, borderRadius: "50%", background: c, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name={ic} size={big ? 26 : 20} /></span><b style={{ fontSize: big ? 13 : 11, color: "#17181C" }}>{l}</b></span>
      </React.Fragment>)}
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "#5D6068", marginTop: 6 }}><span /><span>{k + 1}</span><img src={img("logo/ez-mark-black.png")} alt="EZ" style={{ height: 14 }} /></div>
  </div>;
}

function Reader({ n, k, onClose }) {
  const s = SESS[n][k];
  const [p, setP] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const go = d => { setDir(d); setP(x => Math.max(0, Math.min(2, x + d))); };
  React.useEffect(() => { const kd = e => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }; window.addEventListener("keydown", kd); return () => window.removeEventListener("keydown", kd); }, []);
  const pages = [<Page key="a" n={n} k={k} s={s} big />,
    <div key="b" className="book-page" style={{ minHeight: 520, borderRadius: 6, padding: 32, background: "linear-gradient(90deg,#E9E2D6 0,#FBF8F2 6%)", display: "flex", flexDirection: "column", gap: 14 }}>
      <b style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800 }}>¿Qué es el groove?</b>
      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#2C2E33", maxWidth: 520 }}>En esta sesión aprenderás qué es el groove y por qué es la base de toda la música. Practicaremos con un patrón simple y lo llevaremos al kit.</p>
      <div style={{ display: "flex", gap: 14, alignItems: "center", padding: 16, borderRadius: 14, background: "var(--accent-soft)", maxWidth: 520 }}><img src={img("onb/cara-pensando.png")} alt="" style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", background: "#fff" }} /><span style={{ fontFamily: "var(--font-hand)", fontSize: 24, lineHeight: 1.15, color: "#17181C" }}>"Si tu cabeza se mueve sola, ¡ya encontraste el groove!"</span></div>
      <img src={img("libro/bit-libro.png")} alt="" className="bob" style={{ alignSelf: "flex-end", height: 130, marginTop: "auto" }} />
    </div>,
    <div key="c" className="book-page" style={{ minHeight: 520, borderRadius: 6, padding: 32, background: "linear-gradient(90deg,#E9E2D6 0,#FBF8F2 6%)", display: "flex", flexDirection: "column", gap: 16 }}>
      <b style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800 }}>Tu primer patrón</b>
      {[["Hi-hat", "#E9A21A", [1, 1, 1, 1, 1, 1, 1, 1]], ["Caja", "#EE4433", [0, 0, 1, 0, 0, 0, 1, 0]], ["Bombo", "#2F7FD8", [1, 0, 0, 0, 1, 0, 0, 0]]].map(([l, c, r]) => <div key={l} style={{ display: "flex", alignItems: "center", gap: 10 }}><b style={{ width: 70, fontSize: 15 }}>{l}</b>{r.map((v, i) => <span key={i} className={v ? "cellin" : ""} style={{ flex: 1, height: 38, borderRadius: 8, background: v ? c : "#EEE8DD", animationDelay: i * .05 + "s" }} />)}</div>)}
      <div style={{ display: "flex", gap: 10, fontSize: 13, color: "#5D6068", paddingLeft: 80 }}>{["1", "y", "2", "y", "3", "y", "4", "y"].map((c, i) => <span key={i} style={{ flex: 1, textAlign: "center" }}>{c}</span>)}</div>
      <p style={{ margin: "auto 0 0", fontSize: 15, color: "#3F4249" }}>Tócalo a 70 BPM, cuatro veces seguidas, sin parar. Luego súbelo a 80.</p>
    </div>];
  return <div className="reader" onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(12,13,18,.72)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 30 }}>
    <div onClick={e => e.stopPropagation()} style={{ width: "min(760px, 100%)", display: "flex", flexDirection: "column", gap: 16, perspective: 1800 }}>
      <div key={p} className={dir > 0 ? "flip-next" : "flip-prev"}>{pages[p]}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff" }}>
        <Button variant="secondary" icon="arrow-left" onClick={() => go(-1)} disabled={p === 0} style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "none" }}>Anterior</Button>
        <span style={{ flex: 1, display: "flex", justifyContent: "center", gap: 8 }}>{pages.map((_, i) => <i key={i} style={{ width: i === p ? 26 : 8, height: 8, borderRadius: 4, background: i === p ? "var(--accent)" : "rgba(255,255,255,.35)", transition: "width .3s" }} />)}</span>
        {p < 2 ? <Button iconRight="arrow-right" onClick={() => go(1)}>Siguiente página</Button> : <Button icon="check" onClick={onClose}>Terminar lectura</Button>}
        <button onClick={onClose} aria-label="Cerrar" style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(255,255,255,.12)", color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="x" size={18} /></button>
      </div>
    </div>
  </div>;
}

function Detail({ n, k, fav, onFav, onOpen }) {
  const s = SESS[n][k];
  const [tab, setTab] = React.useState("res");
  React.useEffect(() => setTab("res"), [n, k]);
  return <aside className="rv" style={{ "--i": 2, background: "#fff", borderRadius: 22, border: "1px solid #EFEBE4", boxShadow: "0 16px 40px rgba(23,24,28,.08)", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon name="arrow-left" size={20} /><b style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600 }}>Detalle de la página</b>
      <button onClick={onFav} className="heart" aria-label="Favorita" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, width: 30, height: 30, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{fav ? <img src={img("music/corazon.png")} alt="" style={{ width: 26 }} /> : <Icon name="heart" size={22} color="#8A8D96" />}</button></div>
    <div key={n + "-" + k} className="page-in" style={{ perspective: 1200 }}><div className="page-tilt"><Page n={n} k={k} s={s} /></div></div>
    <Tabs active={tab} onChange={setTab} items={[{ id: "res", label: "Resumen" }, { id: "act", label: "Actividades" }, { id: "mat", label: "Materiales" }, { id: "not", label: "Notas" }]} />
    {tab === "res" ? <>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "#3F4249" }}>En esta sesión aprenderás qué es el groove y por qué es la base de toda la música. Practicaremos con un patrón simple y lo llevaremos al kit.</p>
      <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", fontSize: 13, color: "#3F4249" }}><span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="clock" size={16} />60 min</span><span style={{ display: "inline-flex", gap: 6, alignItems: "center", height: 28, padding: "0 10px", borderRadius: 8, background: "var(--accent-soft)", color: "var(--accent-press)", fontWeight: 600 }}><Icon name="chart-no-axes-column-increasing" size={15} />Nivel {n} · {LEVELS[n - 1][1]}</span><span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon name="pencil" size={15} />{s[1]}</span></div>
    </> : <div style={{ fontSize: 13, color: "#8A8D96", padding: "10px 0" }}>Contenido no incluido en la referencia.</div>}
    <Button size="lg" icon={s[2] === "lock" ? "lock" : "play"} fullWidth disabled={s[2] === "lock"} onClick={onOpen}>{s[2] === "lock" ? "Página bloqueada" : "Abrir página"}</Button>
  </aside>;
}

function Section({ n, cat, sel, setSel, favs, i0 }) {
  const [open, setOpen] = React.useState(true);
  const list = SESS[n].map((s, k) => ({ s, k })).filter(({ s, k }) => cat === "fav" ? favs[n + "-" + k] : has(s[1], cat));
  return <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <button onClick={() => setOpen(!open)} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, color: "#17181C" }}>Nivel {n} · <b style={{ fontWeight: 800 }}>{LEVELS[n - 1][1]}</b><Icon name="chevron-down" size={18} style={{ transform: open ? "none" : "rotate(-90deg)", transition: "transform .25s" }} /></button>
      <a href="#" style={{ fontSize: 14, fontWeight: 600 }}>Ver todas</a>
    </div>
    {open && <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 12 }}>
      {list.map(({ s, k }, i) => <SessCard key={k} s={s} n={n} k={k} i={i0 + i} sel={sel[0] === n && sel[1] === k} fav={favs[n + "-" + k]} onSel={() => setSel([n, k])} />)}
      {!list.length && <div style={{ gridColumn: "1 / -1", padding: 24, textAlign: "center", fontSize: 13.5, color: "#8A8D96", border: "2px dashed #EAE4DA", borderRadius: 16 }}>Nada en esta categoría para este nivel.</div>}
    </div>}
  </section>;
}

function SwLibro() {
  const [cat, setCat] = React.useState("todas");
  const [sel, setSel] = React.useState([2, 0]);
  const [lvl, setLvl] = React.useState(2);
  const [favs, setFavs] = React.useState({});
  const [reader, setReader] = React.useState(false);
  const key = sel[0] + "-" + sel[1];
  return <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
    <HeroStage variant="night" title="Mi Libro" subtitle="Paso a paso, tu historia en la batería." art="libro/mateo-libro-pulgar.png" artStyle={{ right: 300, height: 240, bottom: -14 }} bit="libro/bit-corazon.png" bitStyle={{ right: 200, height: 130 }} tagline="Cada página te hace sonar mejor." height={220} />
    <div className="sw-split" style={{ "--side": "380px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,minmax(0,1fr))", gap: 12 }}>{LEVELS.map((l, i) => <LevelCard key={l[0]} l={l} i={i} active={lvl === l[2]} onPick={() => setLvl(l[2])} />)}</div>
        <div className="rv" style={{ "--i": 7, display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>{CATS.map(([id, ic, l]) => <Chip key={id} active={cat === id} onClick={() => setCat(id)} icon={<Icon name={ic} size={16} />}>{l}</Chip>)}</div>
        {[2, 3].filter(n => lvl <= 2 || n === lvl || true).map((n, j) => <Section key={n} n={n} cat={cat} sel={sel} setSel={setSel} favs={favs} i0={8 + j * 5} />)}
      </div>
      <div className="sw-sticky"><Detail n={sel[0]} k={sel[1]} fav={!!favs[key]} onFav={() => setFavs(f => ({ ...f, [key]: !f[key] }))} onOpen={() => setReader(true)} /></div>
    </div>
    {reader && <Reader n={sel[0]} k={sel[1]} onClose={() => setReader(false)} />}
  </div>;
}
Object.assign(window, { SwLibro });
})();
