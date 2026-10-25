(() => {
const AS = "../../assets/";
const img = p => (window.__resources && window.__resources["a_" + p.replace(/[^a-z0-9]/gi, "_")]) || (AS + p);

function Reveal({ i = 0, as = "div", style, className = "", children, ...rest }) {
  const T = as;
  return <T className={"rv " + className} style={{ "--i": i, ...style }} {...rest}>{children}</T>;
}

function useMounted(delay = 60) {
  const [m, setM] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setM(true), delay); return () => clearTimeout(t); }, []);
  return m;
}

function CountUp({ to, dur = 1100, suffix = "" }) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    let raf, t0;
    const step = t => { if (!t0) t0 = t; const p = Math.min(1, (t - t0) / dur); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{v}{suffix}</>;
}

function Ring({ value = 0, size = 140, stroke = 14, color = "var(--accent)", track = "#EEEAE3", children }) {
  const m = useMounted();
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return <div style={{ position: "relative", width: size, height: size, flex: "none" }}>
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={m ? c * (1 - value / 100) : c} style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(.22,1,.36,1)" }} />
    </svg>
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>{children}</div>
  </div>;
}

function Bar({ value = 0, color = "var(--accent)", height = 8, track = "#EEEAE3", style }) {
  const m = useMounted(120);
  return <div style={{ height, borderRadius: 99, background: track, overflow: "hidden", ...style }}>
    <div className="sheen" style={{ width: (m ? value : 0) + "%", height: "100%", borderRadius: 99, background: color, transition: "width 1.2s cubic-bezier(.22,1,.36,1)" }} />
  </div>;
}

function Eq({ n = 5, color = "#fff", h = 18, playing = true }) {
  return <span style={{ display: "inline-flex", alignItems: "flex-end", gap: 2, height: h }}>
    {Array.from({ length: n }, (_, i) => <i key={i} className={playing ? "eq" : ""} style={{ width: 3, height: h, borderRadius: 2, background: color, transformOrigin: "bottom", transform: playing ? undefined : "scaleY(.3)", animationDelay: (i * 0.13) + "s" }} />)}
  </span>;
}

const NOTES = ["music/nota-azul.png", "music/nota-roja.png", "music/nota-amarilla.png", "music/estrella.png"];
function FloatingNotes({ count = 6, area = { left: "45%", width: "40%" } }) {
  return <div aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, ...area, pointerEvents: "none" }}>
    {Array.from({ length: count }, (_, i) => <img key={i} src={img(NOTES[i % NOTES.length])} className="drift" alt="" style={{ position: "absolute", left: (8 + (i * 37) % 84) + "%", bottom: -10, width: 22 + (i % 3) * 6, animationDelay: (i * 1.1) + "s", animationDuration: (6 + (i % 3)) + "s" }} />)}
  </div>;
}

function Ripples({ color = "rgba(255,255,255,.7)", size = 260, style }) {
  return <div aria-hidden="true" style={{ position: "absolute", width: size, height: size, pointerEvents: "none", ...style }}>
    {[0, 1, 2].map(i => <span key={i} className="ripple" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid " + color, animationDelay: (i * 1.2) + "s" }} />)}
  </div>;
}

const BACKDROPS = {
  staff: { bg: "linear-gradient(120deg,#FFF4EF 0%,#FFE9E1 55%,#FFDCCF 100%)", ink: "#F0533F" },
  burst: { bg: "linear-gradient(120deg,#F1FBF5 0%,#E2F6EA 55%,#CFF0DC 100%)", ink: "#2E9E6E" },
  spot: { bg: "linear-gradient(120deg,#F5F0FF 0%,#ECE3FF 55%,#DDD0FF 100%)", ink: "#7C4DEB" },
  grid: { bg: "linear-gradient(120deg,#FFF5EC 0%,#FFEBDA 55%,#FFDDC2 100%)", ink: "#F26B3A" },
  night: { bg: "radial-gradient(60% 120% at 70% 10%, rgba(90,124,255,.35), transparent 60%), radial-gradient(50% 90% at 95% 100%, rgba(238,68,51,.28), transparent 70%), radial-gradient(40% 80% at 20% 110%, rgba(124,77,235,.30), transparent 70%), linear-gradient(120deg,#0F1016 0%,#171925 60%,#1F1622 100%)", ink: "#8AA4FF", dark: true },
  studio: { bg: "radial-gradient(55% 110% at 75% 0%, rgba(46,196,166,.30), transparent 60%), radial-gradient(45% 90% at 100% 100%, rgba(90,124,255,.30), transparent 70%), linear-gradient(120deg,#0E1214 0%,#131B1E 60%,#161A26 100%)", ink: "#5FE0C4", dark: true }
};
function Backdrop({ variant }) {
  const ink = BACKDROPS[variant].ink;
  if (variant === "staff") return <svg aria-hidden="true" viewBox="0 0 800 260" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .35 }}>
    {[0, 1, 2, 3, 4].map(i => <path key={i} className="staffline" d={"M-20 " + (150 + i * 12) + " C 200 " + (90 + i * 12) + ", 420 " + (230 + i * 12) + ", 820 " + (120 + i * 12)} fill="none" stroke={ink} strokeWidth="1.2" />)}
  </svg>;
  if (variant === "burst") return <div aria-hidden="true" className="spin-slow" style={{ position: "absolute", width: 900, height: 900, right: -260, top: -330, background: "repeating-conic-gradient(from 0deg, rgba(46,158,110,.10) 0deg 8deg, transparent 8deg 20deg)", borderRadius: "50%", maskImage: "radial-gradient(circle, #000 20%, transparent 65%)", WebkitMaskImage: "radial-gradient(circle, #000 20%, transparent 65%)" }} />;
  if (variant === "spot") return <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
    {[0, 1, 2].map(i => <span key={i} className="beam" style={{ position: "absolute", top: -40, left: (52 + i * 14) + "%", width: 120, height: 420, background: "linear-gradient(180deg, rgba(124,77,235,.28), transparent 80%)", transformOrigin: "top center", filter: "blur(6px)", animationDelay: (i * -2.3) + "s" }} />)}
  </div>;
  if (variant === "night" || variant === "studio") return <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
    {[0, 1, 2, 3].map(i => <span key={i} className="beam" style={{ position: "absolute", top: -60, left: (38 + i * 15) + "%", width: 110, height: 460, background: "linear-gradient(180deg, " + ink + "55, transparent 80%)", transformOrigin: "top center", filter: "blur(8px)", mixBlendMode: "screen", animationDelay: (i * -1.9) + "s" }} />)}
    {Array.from({ length: 22 }, (_, i) => <i key={i} className="bokeh" style={{ position: "absolute", left: ((i * 41) % 98) + "%", top: ((i * 23) % 92) + "%", width: 3 + (i % 4) * 3, height: 3 + (i % 4) * 3, borderRadius: "50%", background: i % 3 ? "#fff" : ink, opacity: .14 + (i % 3) * .08, animationDelay: (i * .35) + "s" }} />)}
    {variant === "studio" && <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(95,224,196,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(95,224,196,.08) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "linear-gradient(90deg, transparent 20%, #000 80%)", WebkitMaskImage: "linear-gradient(90deg, transparent 20%, #000 80%)" }} />}
  </div>;
  return <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(242,107,58,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(242,107,58,.12) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "linear-gradient(90deg, transparent 30%, #000 70%)", WebkitMaskImage: "linear-gradient(90deg, transparent 30%, #000 70%)" }} />;
}

function HeroStage({ variant = "staff", eyebrow, title, subtitle, body, meta, art, artStyle, bit, bitStyle, tagline, height = 250, children, aside }) {
  const d = BACKDROPS[variant], dk = !!d.dark;
  return <section className="rv" style={{ "--i": 0, position: "relative", minHeight: height, borderRadius: 22, overflow: "hidden", background: d.bg, containerType: "inline-size", border: "1px solid " + (dk ? "rgba(255,255,255,.06)" : "rgba(23,24,28,.05)") }}>
    <Backdrop variant={variant} />
    <Ripples color={d.ink + "55"} size={300} style={{ right: 150, top: -10 }} />
    <FloatingNotes />
    {art && <img src={img(art)} alt="" className="floaty sw-art" style={{ position: "absolute", right: 90, bottom: -6, height: height + 10, filter: "drop-shadow(0 18px 28px rgba(23,24,28,.18))", ...artStyle }} />}
    {bit && <img src={img(bit)} alt="Bit" className="bob sw-bit" style={{ position: "absolute", right: 22, bottom: 10, height: 104, ...bitStyle }} />}
    {tagline && <span className="wiggle sw-tag" style={{ position: "absolute", right: 36, top: 22, fontFamily: "var(--font-hand)", fontSize: 30, lineHeight: 1, color: dk ? "#fff" : "#17181C", transform: "rotate(-8deg)", textAlign: "center", maxWidth: 190 }}>{tagline}</span>}
    <div style={{ position: "relative", padding: "30px 32px", maxWidth: "min(520px, 56%)", display: "flex", flexDirection: "column", gap: 8 }}>
      {eyebrow && <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".18em", color: dk ? "rgba(255,255,255,.65)" : "#5D6068" }}>{eyebrow}</span>}
      <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 46, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-.02em", color: dk ? "#fff" : "#17181C", textWrap: "balance" }}>{title}</h1>
      {subtitle && <span style={{ fontFamily: "var(--font-display)", fontSize: 24, color: dk ? "rgba(255,255,255,.78)" : "#5D6068" }}>{subtitle}</span>}
      {body && <p style={{ margin: "6px 0 0", fontSize: 14.5, lineHeight: 1.6, color: dk ? "rgba(255,255,255,.75)" : "#3F4249", textWrap: "pretty" }}>{body}</p>}
      {meta}
      {children}
    </div>
    {aside && <div className="sw-aside" style={{ position: "absolute", top: 18, right: 18, display: "flex", gap: 12, zIndex: 3 }}>{aside}</div>}
  </section>;
}

function Panel({ i = 1, title, icon, action, children, style, pad = 20 }) {
  return <section className="rv lift" style={{ "--i": i, background: "#fff", borderRadius: 20, border: "1px solid #EFEBE4", boxShadow: "0 1px 2px rgba(23,24,28,.04), 0 10px 30px rgba(23,24,28,.05)", padding: pad, display: "flex", flexDirection: "column", gap: 14, minWidth: 0, ...style }}>
    {title && <header style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {icon}
      <h3 style={{ margin: 0, flex: 1, fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, color: "#17181C" }}>{title}</h3>
      {action}
    </header>}
    {children}
  </section>;
}

function Chip({ active, onClick, children, icon }) {
  return <button onClick={onClick} className="chip" style={{ height: 38, padding: "0 16px", borderRadius: 12, border: "1px solid " + (active ? "transparent" : "#ECE7DF"), background: active ? "var(--accent)" : "#fff", color: active ? "#fff" : "#2C2E33", fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: active ? 700 : 500, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, boxShadow: active ? "var(--shadow-glow-accent)" : "none", transition: "all .2s cubic-bezier(.22,1,.36,1)", whiteSpace: "nowrap" }}>{icon}{children}</button>;
}

const LEVEL = { 1: { label: "N1 PULSO", bg: "#DCE8FF", fg: "#1F4FD1", solid: "#3B74F0" }, 2: { label: "N2 DINÁMICA", bg: "#FFEBC7", fg: "#9A5B00", solid: "#F2A516" }, 3: { label: "N3 PROPÓSITO", bg: "#FFDAD5", fg: "#B4271A", solid: "#EE4433" } };
function LevelPill({ n, solid, children }) {
  const l = LEVEL[n];
  return <span style={{ display: "inline-flex", alignItems: "center", height: 26, padding: "0 12px", borderRadius: 99, background: solid ? l.solid : l.bg, color: solid ? "#fff" : l.fg, fontSize: 12, fontWeight: 800, letterSpacing: ".02em", whiteSpace: "nowrap" }}>{children || l.label}</span>;
}

Object.assign(window, { SW_IMG: img, Reveal, CountUp, Ring, Bar, Eq, FloatingNotes, Ripples, HeroStage, Panel, Chip, LevelPill, SW_LEVEL: LEVEL });
})();
