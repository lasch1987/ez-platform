(() => {
const { Icon, Button } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;

function Letters({ text, delay = 0, step = 45 }) {
  let k = 0;
  return <>{text.split("\n").map((line, li) => <React.Fragment key={li}>{li > 0 && <br />}{line.split("").map((ch, i) => <span key={i} className="ltr" style={{ display: "inline-block", whiteSpace: "pre", animationDelay: (delay + (k++) * step) + "ms" }}>{ch}</span>)}</React.Fragment>)}</>;
}
const px = (d) => ({ transform: "translate3d(calc(var(--mx,0) * " + d + "px), calc(var(--my,0) * " + d + "px), 0)", transition: "transform .25s ease-out" });
function EqStrip({ n = 48, h = 46 }) {
  return <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: h, display: "flex", alignItems: "flex-end", gap: 3, padding: "0 2vw", opacity: .5, pointerEvents: "none", zIndex: 1 }}>{Array.from({ length: n }, (_, i) => <i key={i} className="eq" style={{ flex: 1, height: h, borderRadius: "3px 3px 0 0", background: i % 5 === 0 ? "var(--accent)" : "rgba(255,200,140,.55)", transformOrigin: "bottom", animationDuration: (.5 + (i % 7) * .09) + "s", animationDelay: (i * .037) + "s" }} />)}</div>;
}
function Marquee({ text }) {
  const row = Array.from({ length: 8 }, () => text).join("   ✦   ");
  return <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 52, overflow: "hidden", whiteSpace: "nowrap", zIndex: 1, pointerEvents: "none", maskImage: "linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)" }}><div className="marquee" style={{ display: "inline-block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 64, letterSpacing: ".06em", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,.14)" }}>{row}   ✦   {row}</div></div>;
}
function Molinos({ warm }) {
  const blade = (c, n) => "repeating-conic-gradient(from 0deg, " + c + " 0deg " + (180 / n) + "deg, transparent " + (180 / n) + "deg " + (360 / n) + "deg)";
  return <div aria-hidden="true" style={{ position: "absolute", inset: -30, overflow: "hidden", pointerEvents: "none", ...px(-14) }}>
    <div className="molino" style={{ position: "absolute", width: 1400, height: 1400, left: "58%", top: "50%", marginLeft: -700, marginTop: -700, background: blade("rgba(255,190,110,.07)", 12), maskImage: "radial-gradient(circle, #000 10%, transparent 62%)", WebkitMaskImage: "radial-gradient(circle, #000 10%, transparent 62%)" }} />
    <div className="molino rev" style={{ position: "absolute", width: 900, height: 900, left: "58%", top: "52%", marginLeft: -450, marginTop: -450, background: blade("rgba(90,124,255,.16)", 8), maskImage: "radial-gradient(circle, #000 8%, transparent 60%)", WebkitMaskImage: "radial-gradient(circle, #000 8%, transparent 60%)", animationDuration: "26s" }} />
    {[[12, 18, 220, "rgba(255,170,80,.12)", 18], [86, 80, 260, "rgba(124,77,235,.14)", 22], [90, 14, 160, "rgba(90,124,255,.16)", 14]].map(([x, y, s, c, d], i) => <div key={i} className={"molino" + (i % 2 ? " rev" : "")} style={{ position: "absolute", left: x + "%", top: y + "%", width: s, height: s, marginLeft: -s / 2, marginTop: -s / 2, borderRadius: "50%", background: blade(c, 6), animationDuration: d + "s", maskImage: "radial-gradient(circle, #000 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, #000 20%, transparent 70%)" }} />)}
    {[0, 1, 2].map(i => <span key={i} className="beam" style={{ position: "absolute", top: -80, left: (44 + i * 16) + "%", width: 140, height: "120%", background: "linear-gradient(180deg, " + (i === 1 ? "rgba(90,124,255,.35)" : "rgba(255,180,100,.28)") + ", transparent 70%)", transformOrigin: "top center", filter: "blur(10px)", mixBlendMode: "screen", animationDelay: (i * -2.2) + "s" }} />)}
    {Array.from({ length: 34 }, (_, i) => <i key={i} className="bokeh" style={{ position: "absolute", left: ((i * 37) % 100) + "%", top: ((i * 53) % 100) + "%", width: 4 + (i % 5) * 4, height: 4 + (i % 5) * 4, borderRadius: "50%", background: i % 4 ? "rgba(255,200,140,.55)" : "rgba(140,170,255,.6)", filter: "blur(" + (i % 3) + "px)", opacity: .35, animationDelay: (i * .27) + "s" }} />)}
    {Array.from({ length: 9 }, (_, i) => <img key={i} src={img(["music/nota-azul.png", "music/nota-roja.png", "music/estrella.png"][i % 3])} alt="" className="drift" style={{ position: "absolute", left: (8 + i * 10) + "%", bottom: -30, width: 22 + (i % 3) * 8, animationDelay: (i * .9) + "s", animationDuration: (8 + i % 4) + "s" }} />)}
  </div>;
}

const Field = ({ label, children, hint }) => <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, color: "#3F4249", fontWeight: 500 }}>{label}{children}{hint && <span style={{ fontSize: 11.5, color: "#8A8D96", fontWeight: 400 }}>{hint}</span>}</label>;
const box = { display: "flex", alignItems: "center", gap: 10, height: 46, padding: "0 14px", borderRadius: 12, border: "1.5px solid #E8E2D8", background: "#fff", transition: "border-color .2s, box-shadow .2s" };
function TextIn({ value, onChange, placeholder, type = "text", right, ok, left }) {
  const [f, setF] = React.useState(false);
  return <span style={{ ...box, borderColor: f ? "var(--accent)" : "#E8E2D8", boxShadow: f ? "0 0 0 4px var(--accent-ring)" : "none" }}>{left}<input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-body)", fontSize: 15, color: "#17181C" }} />{ok && <span className="cellin" style={{ width: 22, height: 22, borderRadius: "50%", background: "#34B76C", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={14} /></span>}{right}</span>;
}
const Sel = ({ value, onChange, opts }) => <span style={{ ...box, position: "relative" }}><select value={value} onChange={e => onChange(e.target.value)} style={{ flex: 1, appearance: "none", WebkitAppearance: "none", border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-body)", fontSize: 15, color: "#17181C" }}>{opts.map(o => <option key={o}>{o}</option>)}</select><Icon name="chevron-down" size={16} /></span>;

function Progress({ step, total = 4 }) {
  return <span style={{ display: "flex", gap: 6, flex: 1, justifyContent: "center" }}>{Array.from({ length: total }, (_, i) => <i key={i} style={{ width: i === step ? 36 : 22, height: 5, borderRadius: 3, background: i <= step ? "var(--accent)" : "#E5DFD5", transition: "all .4s cubic-bezier(.34,1.56,.64,1)" }} />)}</span>;
}
function Head({ onBack, step, skip, onSkip, total = 3 }) {
  return <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
    <button type="button" onClick={onBack} aria-label="Atrás" style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "#F1ECE4", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="arrow-left" size={18} /></button>
    {step >= 0 ? <Progress step={step} total={total} /> : <span style={{ flex: 1 }} />}
    {skip ? <button type="button" onClick={onSkip} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14, color: "#3F4249" }}>{skip}</button> : <span style={{ width: 40 }} />}
  </div>;
}
const Bubble = ({ bit, children }) => <div className="rv" style={{ "--i": 6, display: "flex", alignItems: "flex-end", gap: 8 }}><img src={img(bit)} alt="Bit" className="bob" style={{ height: 96, flex: "none" }} /><div style={{ position: "relative", padding: "12px 16px", borderRadius: "18px 18px 18px 4px", background: "#fff", boxShadow: "0 10px 26px rgba(23,24,28,.10)", fontSize: 14, lineHeight: 1.45, color: "#2C2E33", marginBottom: 28 }}>{children}</div></div>;

function Splash({ go }) {
  const [dot, setDot] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setDot(d => (d + 1) % 4), 2600); return () => clearInterval(t); }, []);
  return <div className="onb-splash" style={{ position: "relative", zIndex: 2, flex: 1, display: "grid", gridTemplateColumns: "minmax(340px, 480px) minmax(0,1fr)", alignItems: "center", gap: 40, padding: "40px 6vw" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 22, color: "#fff" }}>
      <img src={img("logo/ez-drumschool-wordmark-white.png")} alt="EZ DrumSchool" className="rv logo-glow" style={{ "--i": 0, width: 260 }} />
      <span className="rv" style={{ "--i": 1, fontSize: 14, fontWeight: 600, letterSpacing: ".34em", lineHeight: 1.8, color: "rgba(255,255,255,.85)" }}>MÁS QUE BATERÍA,<br />ES TU HISTORIA.</span>
      <span className="rv wiggle" style={{ "--i": 2, fontFamily: "var(--font-hand)", fontSize: 40, lineHeight: 1.05, color: "#fff", transform: "rotate(-4deg)", alignSelf: "flex-start" }}><Letters text={"Un ritmo para\ncada etapa"} delay={500} /></span>
      <div className="rv" style={{ "--i": 3, display: "flex", flexDirection: "column", gap: 12, marginTop: 10, maxWidth: 380 }}>
        <Button size="lg" fullWidth onClick={() => go("rol")} iconRight="arrow-right" className="cta-shine">Comenzar</Button>
        <Button variant="secondary" size="lg" fullWidth onClick={() => go("login")} style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,.7)" }}>Ya tengo una cuenta</Button>
      </div>
      <span className="rv" style={{ "--i": 4, display: "flex", gap: 8 }}>{[0, 1, 2, 3].map(i => <i key={i} style={{ width: i === dot ? 26 : 9, height: 9, borderRadius: 5, background: i === dot ? "var(--accent)" : "rgba(255,255,255,.45)", transition: "all .4s" }} />)}</span>
      <span className="rv" style={{ "--i": 5, fontSize: 12, fontWeight: 600, letterSpacing: ".34em", color: "rgba(255,255,255,.7)" }}>APRENDE · PRACTICA · AVANZA</span>
    </div>
    <div className="onb-art" style={{ position: "relative", height: "min(78vh, 680px)" }}>
      <div className="rings" style={{ position: "absolute", left: "50%", top: "58%", width: 520, height: 520, marginLeft: -260, marginTop: -260 }}><span className="beat-ring" style={{ position: "absolute", inset: 90, borderRadius: "50%", background: "radial-gradient(circle, rgba(90,124,255,.35), transparent 65%)" }} />{[0, 1, 2].map(i => <span key={i} className="ripple" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(140,170,255,.55)", animationDelay: i * 1.2 + "s" }} />)}</div>
      <div style={{ position: "absolute", inset: 0, ...px(10) }}><img src={img("onb/bateria.png")} alt="" className="beat" style={{ position: "absolute", left: "50%", bottom: 0, width: "min(620px, 92%)", marginLeft: "calc(min(620px, 92%) / -2)", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.5))" }} /></div>
      <div style={{ position: "absolute", inset: 0, ...px(22) }}><img src={img("onb/mateo-baquetas.png")} alt="Mateo" className="hero-mateo" style={{ position: "absolute", left: "50%", bottom: "14%", height: "78%", transform: "translateX(-58%)", filter: "drop-shadow(0 24px 30px rgba(0,0,0,.45))" }} /></div>
      <div style={{ position: "absolute", inset: 0, ...px(34) }}><img src={img("onb/bit-saludo.png")} alt="Bit" className="bob" style={{ position: "absolute", left: "58%", bottom: "6%", height: "26%" }} /></div>
      <img src={img("bit/celebrando.png")} alt="" className="spark-pop" style={{ position: "absolute", right: "8%", top: "6%", height: 90, opacity: .0 }} />
      {[[18, 18, "music/nota-azul.png", 44], [78, 22, "music/estrella.png", 48], [12, 52, "music/nota-roja.png", 36], [84, 58, "music/corona.png", 54]].map(([x, y, s, w], i) => <img key={i} src={img(s)} alt="" className="orbit" style={{ position: "absolute", left: x + "%", top: y + "%", width: w, animationDelay: i * -1.5 + "s", translate: "calc(var(--mx,0) * " + (40 + i * 8) + "px) calc(var(--my,0) * " + (40 + i * 8) + "px)" }} />)}
    </div>
  </div>;
}

const AVATARS = ["onb/cara-feliz.png", "onb/cara-lentes.png", "onb/cara-audifonos.png", "onb/cara-riendo.png", "onb/cara-tranquilo.png"];
function Avatar({ src, size = 150, tint = "linear-gradient(160deg,#DCE4FF,#B8C8FF)" }) {
  return <div style={{ position: "relative", width: size, height: size, alignSelf: "center" }}>
    <span className="avatar-ring" style={{ position: "absolute", inset: -8, borderRadius: "50%", background: "conic-gradient(from 0deg, var(--accent), #7C4DEB, #EE4433, var(--accent))", opacity: .9 }} />
    <span style={{ position: "absolute", inset: -3, borderRadius: "50%", background: "#fff" }} />
    <span key={src} className="cellin" style={{ position: "absolute", inset: 0, borderRadius: "50%", overflow: "hidden", background: tint }}><img src={img(src)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></span>
    <span style={{ position: "absolute", right: -2, bottom: 6, width: 42, height: 42, borderRadius: "50%", background: "#fff", boxShadow: "0 4px 12px rgba(23,24,28,.18)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="camera" size={19} /></span>
  </div>;
}

const okMail = m => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((m || "").trim());
const Err = ({ children }) => children ? <span className="swap" role="alert" style={{ fontSize: 13, color: "var(--ez-danger)", display: "flex", gap: 6, alignItems: "flex-start", lineHeight: 1.4 }}><Icon name="circle-alert" size={16} style={{ marginTop: 1 }} />{children}</span> : null;
const Aviso = ({ children }) => <div className="swap" style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 14px", borderRadius: 14, background: "var(--accent-soft)", color: "#1B2A6B", fontSize: 13.5, lineHeight: 1.45 }}><Icon name="info" size={17} style={{ marginTop: 1 }} /><span>{children}</span></div>;
function Clave({ value, onChange, placeholder = "Mínimo 6 caracteres", ok }) {
  const [show, setShow] = React.useState(false);
  return <TextIn type={show ? "text" : "password"} value={value} onChange={onChange} placeholder={placeholder} ok={ok} left={<Icon name="lock" size={17} color="#8A8D96" />} right={<button type="button" onClick={e => { e.preventDefault(); setShow(!show); }} aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex" }}><Icon name={show ? "eye-off" : "eye"} size={18} color="#5D6068" /></button>} />;
}
const Celular = ({ value, onChange }) => <TextIn value={value} onChange={onChange} placeholder="987 654 321" left={<span style={{ display: "inline-flex", alignItems: "center", gap: 8, paddingRight: 10, borderRight: "1px solid #E8E2D8", fontSize: 15, color: "#17181C" }}><span style={{ width: 22, height: 15, borderRadius: 2, background: "linear-gradient(90deg,#D91023 33%,#fff 33% 66%,#D91023 66%)", boxShadow: "0 0 0 1px #eee" }} />+51</span>} />;
const Titulo = ({ t, d }) => <div className="rv" style={{ "--i": 1 }}><h1 style={{ margin: "4px 0 4px", fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 800, lineHeight: 1.1 }}>{t}</h1><p style={{ margin: 0, fontSize: 15, color: "#5D6068" }}>{d}</p></div>;

function Login({ go, onEntrar, aviso }) {
  const B = window.EZBackend;
  const [u, setU] = React.useState("");
  const [p, setP] = React.useState("");
  const [err, setErr] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const submit = async e => {
    e && e.preventDefault();
    if (!okMail(u) || !p) { setErr("Escribe el correo y la contraseña de la cuenta."); return; }
    setBusy(true); setErr("");
    try { onEntrar(await B.ingresar(u, p)); } catch (x) { setErr(x.message); setBusy(false); }
  };
  const olvido = async e => {
    e.preventDefault(); setErr(""); setMsg("");
    if (!okMail(u)) { setErr("Escribe primero tu correo y luego toca “¿Olvidaste tu contraseña?”."); return; }
    try { await B.recuperarClave(u); setMsg("Te enviamos un correo para crear una nueva contraseña."); } catch (x) { setErr(x.message); }
  };
  return <form onSubmit={submit} style={{ display: "contents" }}>
    <Head onBack={() => go("splash")} step={-1} />
    <Titulo t="¡Hola de nuevo!" d="Entra y sigue tocando donde lo dejaste." />
    {aviso && <Aviso>{aviso}</Aviso>}
    <div className="rv" style={{ "--i": 2, display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Correo de la cuenta" hint="La cuenta del alumno la crea su papá, mamá o tutor."><TextIn type="email" value={u} onChange={v => { setU(v); setErr(""); }} placeholder="maria.torres@email.com" ok={okMail(u)} left={<Icon name="mail" size={17} color="#8A8D96" />} /></Field>
      <Field label="Contraseña"><Clave value={p} onChange={v => { setP(v); setErr(""); }} placeholder="••••••••" /></Field>
      <a href="#" onClick={olvido} style={{ alignSelf: "flex-end", fontSize: 13.5, fontWeight: 600 }}>¿Olvidaste tu contraseña?</a>
      <Err>{err}</Err>
      {msg && <Aviso>{msg}</Aviso>}
    </div>
    <div className="rv" style={{ "--i": 3, display: "flex", flexDirection: "column", gap: 12 }}><Button type="submit" size="lg" fullWidth iconRight="arrow-right" disabled={busy}>{busy ? "Entrando…" : "Entrar"}</Button><span style={{ textAlign: "center", fontSize: 14, color: "#5D6068" }}>¿Eres nuevo? <a href="#" onClick={e => { e.preventDefault(); go("rol"); }} style={{ fontWeight: 700 }}>Crea una cuenta</a></span></div>
    <Bubble bit="onb/bit-saludo.png">¡Qué bueno verte! Tu batería te estaba esperando.</Bubble>
  </form>;
}

function Rol({ go, setAviso }) {
  const R = [
    ["padre", "Padre / Madre", "Registro a mi hijo(a) y acompaño su progreso.", "onb/abrazo.png", "linear-gradient(120deg,#E5F7EC,#C9EDD7)"],
    ["alumno", "Alumno", "Mi papá o mamá crea mi cuenta. Yo entro a tocar.", "onb/mateo-audifonos.png", "linear-gradient(120deg,#E6ECFF,#C9D6FF)"],
    ["profesor", "Profesor", "Quiero enseñar y gestionar mis clases.", "onb/profe-baquetas.png", "linear-gradient(120deg,#FFEDE6,#FFD3C4)"]
  ];
  const elegir = id => {
    if (id === "padre") go("padre");
    else if (id === "profesor") go("docente");
    else { setAviso("Los alumnos entran con la cuenta de su papá, mamá o tutor. Si todavía no tienen cuenta, pídeles que te registren desde “Soy Padre / Madre”."); go("login"); }
  };
  return <>
    <Head onBack={() => go("splash")} step={0} total={3} />
    <Titulo t="¿Quién eres?" d="Elige tu rol para empezar." />
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{R.map(([id, t, d, a, bg], i) => <button key={id} onClick={() => elegir(id)} className="rv role" style={{ "--i": i + 2, position: "relative", display: "flex", alignItems: "center", minHeight: 138, padding: "0 18px 0 0", borderRadius: 20, border: "none", cursor: "pointer", overflow: "hidden", background: bg, textAlign: "left", fontFamily: "var(--font-body)" }}>
      <img src={img(a)} alt="" className="role-art" style={{ width: "48%", height: 150, objectFit: "contain", objectPosition: "bottom", alignSelf: "flex-end" }} />
      <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "#17181C" }}>Soy</span><b style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 800, lineHeight: 1, color: "#17181C" }}>{t}</b><span style={{ fontSize: 13.5, color: "#3F4249", marginTop: 6, lineHeight: 1.35 }}>{d}</span></span>
      <span className="role-go" style={{ position: "absolute", right: 14, bottom: 14, width: 36, height: 36, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(23,24,28,.12)" }}><Icon name="chevron-right" size={18} /></span>
    </button>)}</div>
    <Bubble bit="onb/bit-baquetas.png"><b>¡Genial!</b><br />Cada uno vive la música a su manera. <span style={{ color: "var(--accent)" }}>♪</span></Bubble>
  </>;
}

// Paso 1 del registro: el adulto responsable crea la cuenta.
function Padre({ go, form, set }) {
  const [err, setErr] = React.useState("");
  const seguir = () => {
    if (!form.pname.trim()) return setErr("Escribe tu nombre completo.");
    if (!okMail(form.mail)) return setErr("Escribe un correo válido. Lo usarás para entrar.");
    if (form.pass.length < 6) return setErr("La contraseña debe tener al menos 6 caracteres.");
    if (form.pass !== form.pass2) return setErr("Las contraseñas no coinciden.");
    setErr(""); go("registro");
  };
  return <>
    <Head onBack={() => go("rol")} step={1} total={3} />
    <Titulo t="Datos del padre o madre" d="Tú creas la cuenta y registras a tu hijo(a). Con este correo entrarán los dos." />
    <div className="rv" style={{ "--i": 2, display: "flex", justifyContent: "center", padding: "8px 0" }}><Avatar src="onb/mama.png" size={120} tint="linear-gradient(160deg,#FFE8DE,#FFD3C4)" /></div>
    <div className="rv" style={{ "--i": 3, display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Tu nombre completo"><TextIn value={form.pname} onChange={v => set({ pname: v })} placeholder="María Torres" /></Field>
      <Field label="Relación con el alumno"><Sel value={form.rel} onChange={v => set({ rel: v })} opts={["Madre", "Padre", "Tutor(a)", "Otro familiar"]} /></Field>
      <Field label="Correo electrónico"><TextIn type="email" value={form.mail} onChange={v => set({ mail: v })} placeholder="maria.torres@email.com" right={<Icon name="mail" size={18} />} ok={okMail(form.mail)} /></Field>
      <Field label="Número de celular"><Celular value={form.phone} onChange={v => set({ phone: v })} /></Field>
      <Field label="Crea una contraseña"><Clave value={form.pass} onChange={v => set({ pass: v })} ok={form.pass.length >= 6} /></Field>
      <Field label="Repite la contraseña"><Clave value={form.pass2} onChange={v => set({ pass2: v })} placeholder="Repítela" ok={form.pass2.length >= 6 && form.pass2 === form.pass} /></Field>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "4px 0" }}><span style={{ flex: 1 }}><b style={{ fontSize: 14 }}>Recibir notificaciones</b><br /><span style={{ fontSize: 12, color: "#8A8D96" }}>Te enviaremos avances, reportes y avisos importantes.</span></span>
        <button type="button" role="switch" aria-checked={form.notif} onClick={() => set({ notif: !form.notif })} aria-label="Recibir notificaciones" style={{ width: 52, height: 30, borderRadius: 15, border: "none", background: form.notif ? "var(--accent)" : "#D9D3C8", position: "relative", cursor: "pointer", transition: "background .25s" }}><i style={{ position: "absolute", top: 3, left: form.notif ? 25 : 3, width: 24, height: 24, borderRadius: 12, background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,.2)", transition: "left .3s cubic-bezier(.34,1.56,.64,1)" }} /></button></div>
      <Err>{err}</Err>
    </div>
    <div className="rv" style={{ "--i": 4 }}><Button size="lg" fullWidth iconRight="arrow-right" onClick={seguir}>Siguiente: datos de tu hijo(a)</Button></div>
    <Bubble bit="onb/bit-corazon.png"><b>¡Gracias!</b><br />Tu apoyo hace que este viaje sea especial. <span style={{ color: "#EE4433" }}>♥</span></Bubble>
  </>;
}

// Paso 2: los datos del niño(a), con el nombre con el que le gusta que le llamen.
const EDADES = Array.from({ length: 14 }, (_, i) => (i + 5) + " años");
function Registro({ go, form, set, onCrear, agregar }) {
  const [err, setErr] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const primero = form.name.trim().split(/\s+/)[0] || "";
  const saludo = form.apodo.trim() || primero;
  const crear = async () => {
    if (!form.name.trim()) return setErr("Escribe el nombre completo de tu hijo(a).");
    setErr(""); setBusy(true);
    try { await onCrear(); } catch (x) { setErr(x.message); setBusy(false); }
  };
  return <>
    <Head onBack={() => go(agregar ? "elegir" : "padre")} step={agregar ? -1 : 2} total={3} />
    <Titulo t={agregar ? "Agregar alumno" : "Datos de tu hijo(a)"} d="Así armamos su perfil y lo saludamos por su nombre." />
    <div className="rv" style={{ "--i": 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "8px 0" }}>
      <Avatar src={form.avatar} size={120} />
      {saludo && <span className="swap" key={saludo} style={{ fontFamily: "var(--font-hand)", fontSize: 30, color: "#17181C", transform: "rotate(-3deg)" }}>¡Hola, {saludo}!</span>}
    </div>
    <div className="rv" style={{ "--i": 3, display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Nombre completo del alumno(a)"><TextIn value={form.name} onChange={v => set({ name: v })} placeholder="Mateo Moreno Aguilar" /></Field>
      <Field label="¿Cómo le gusta que le llamen?" hint={"Así lo saludaremos en la app" + (primero ? ". Si lo dejas vacío, usaremos “" + primero + "”." : ".")}><TextIn value={form.apodo} onChange={v => set({ apodo: v })} placeholder="Mati" left={<Icon name="smile" size={17} color="#8A8D96" />} /></Field>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 12 }}><Field label="Edad"><Sel value={form.age} onChange={v => set({ age: v })} opts={EDADES} /></Field><Field label="Fecha de nacimiento"><TextIn type="date" value={form.dob} onChange={v => set({ dob: v })} /></Field></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={{ fontSize: 13, color: "#3F4249", fontWeight: 500 }}>Género <span style={{ color: "#8A8D96", fontWeight: 400 }}>(opcional)</span></span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{[["Masculino", "mars"], ["Femenino", "venus"], ["Prefiero no decir", null]].map(([g, ic]) => { const on = form.gender === g; return <button type="button" key={g} aria-pressed={on} onClick={() => set({ gender: on ? "" : g })} style={{ height: 38, padding: "0 14px", borderRadius: 10, border: "1.5px solid " + (on ? "var(--accent)" : "#E8E2D8"), background: on ? "var(--accent)" : "#fff", color: on ? "#fff" : "#2C2E33", fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: on ? 700 : 500, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, transition: "all .2s" }}>{on && <Icon name="circle-check" size={15} />}{!on && ic && <Icon name={ic} size={15} />}{g}</button>; })}</div></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={{ fontSize: 13, color: "#3F4249", fontWeight: 600 }}>Elige su avatar</span>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>{AVATARS.map(a => { const on = form.avatar === a; return <button type="button" key={a} onClick={() => set({ avatar: a })} aria-label="Elegir avatar" aria-pressed={on} style={{ width: 62, height: 62, padding: 0, borderRadius: 14, overflow: "hidden", cursor: "pointer", border: "3px solid " + (on ? "var(--accent)" : "transparent"), background: "#F1ECE4", boxShadow: on ? "var(--shadow-glow-accent)" : "none", transform: on ? "translateY(-3px)" : "none", transition: "all .25s cubic-bezier(.34,1.56,.64,1)" }}><img src={img(a)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></button>; })}</div></div>
      <Err>{err}</Err>
    </div>
    <div className="rv" style={{ "--i": 4 }}><Button size="lg" fullWidth iconRight="arrow-right" disabled={busy} onClick={crear}>{busy ? "Guardando…" : agregar ? "Agregar alumno" : "Crear cuenta"}</Button></div>
  </>;
}

function Docente({ go, form, set, onCrear }) {
  const [err, setErr] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const crear = async () => {
    if (!form.tname.trim()) return setErr("Escribe tu nombre completo.");
    if (!okMail(form.tmail)) return setErr("Escribe un correo válido. Lo usarás para entrar.");
    if (form.tpass.length < 6) return setErr("La contraseña debe tener al menos 6 caracteres.");
    if (form.tpass !== form.tpass2) return setErr("Las contraseñas no coinciden.");
    setErr(""); setBusy(true);
    try { await onCrear(); } catch (x) { setErr(x.message); setBusy(false); }
  };
  return <>
    <Head onBack={() => go("rol")} step={1} total={2} />
    <Titulo t="Registro de profesor" d="Crea tu cuenta. La academia la activa antes de asignarte alumnos." />
    <div className="rv" style={{ "--i": 3, display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Nombre completo"><TextIn value={form.tname} onChange={v => set({ tname: v })} placeholder="Evams Zapata" /></Field>
      <Field label="¿Cómo te llaman tus alumnos?" hint="Por ejemplo: Profe Evams"><TextIn value={form.tapodo} onChange={v => set({ tapodo: v })} placeholder="Profe Evams" /></Field>
      <Field label="Correo electrónico"><TextIn type="email" value={form.tmail} onChange={v => set({ tmail: v })} right={<Icon name="mail" size={18} />} ok={okMail(form.tmail)} /></Field>
      <Field label="Número de celular"><Celular value={form.tphone} onChange={v => set({ tphone: v })} /></Field>
      <Field label="Especialidad"><Sel value={form.tesp} onChange={v => set({ tesp: v })} opts={["Batería", "Percusión", "Batería y percusión", "Otra"]} /></Field>
      <Field label="Crea una contraseña"><Clave value={form.tpass} onChange={v => set({ tpass: v })} ok={form.tpass.length >= 6} /></Field>
      <Field label="Repite la contraseña"><Clave value={form.tpass2} onChange={v => set({ tpass2: v })} placeholder="Repítela" ok={form.tpass2.length >= 6 && form.tpass2 === form.tpass} /></Field>
      <Err>{err}</Err>
    </div>
    <div className="rv" style={{ "--i": 4 }}><Button size="lg" fullWidth iconRight="arrow-right" disabled={busy} onClick={crear}>{busy ? "Creando cuenta…" : "Crear cuenta"}</Button></div>
  </>;
}

function Confirmar({ go, correo }) {
  return <>
    <Head onBack={() => go("splash")} step={-1} />
    <Titulo t="Revisa tu correo" d="Ya casi terminamos." />
    <div className="rv" style={{ "--i": 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "10px 0", textAlign: "center" }}>
      <span style={{ width: 84, height: 84, borderRadius: "50%", background: "var(--accent-soft)", color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><Icon name="mail-check" size={40} /></span>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "#3F4249" }}>Te enviamos un enlace a <b>{correo}</b>. Ábrelo para activar la cuenta y luego entra con tu correo y contraseña.</p>
    </div>
    <Button size="lg" fullWidth iconRight="arrow-right" onClick={() => go("login")}>Ya confirmé, entrar</Button>
  </>;
}

// Después de entrar: el adulto elige qué hijo(a) va a practicar.
function Elegir({ go, perfil, onElegir, onSalir }) {
  const alumnos = perfil ? perfil.alumnos : [];
  return <>
    <Head onBack={onSalir} step={-1} />
    <Titulo t="¿Quién va a tocar hoy?" d={"Hola, " + ((perfil && perfil.tutor && perfil.tutor.nombre_completo.split(" ")[0]) || "") + ". Elige el perfil."} />
    <div className="rv" style={{ "--i": 2, display: "flex", flexDirection: "column", gap: 10 }}>
      {alumnos.map(a => <button key={a.id} onClick={() => onElegir(a.id)} className="row-hover" style={{ display: "flex", alignItems: "center", gap: 14, padding: 12, borderRadius: 18, border: "1.5px solid #E8E2D8", background: "#fff", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)" }}>
        <span style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", background: "linear-gradient(160deg,#DCE4FF,#B8C8FF)", flex: "none" }}><img src={img(a.avatar || AVATARS[0])} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></span>
        <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b style={{ fontFamily: "var(--font-display)", fontSize: 19, color: "#17181C" }}>{a.apodo}</b><span style={{ fontSize: 13, color: "#5D6068" }}>{a.nombre_completo}{a.edad ? " · " + a.edad + " años" : ""}</span></span>
        <Icon name="chevron-right" size={18} />
      </button>)}
      <button onClick={() => go("nuevoAlumno")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 52, borderRadius: 18, border: "1.5px dashed #CFC7BA", background: "transparent", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: 600, color: "#3F4249" }}><Icon name="plus" size={17} />Agregar otro hijo(a)</button>
    </div>
    <button onClick={onSalir} style={{ alignSelf: "center", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13.5, color: "#5D6068", textDecoration: "underline" }}>Cerrar sesión</button>
  </>;
}

function Confetti() {
  const C = ["#2F57F5", "#EE4433", "#34B76C", "#7C4DEB", "#FFB547", "#fff"];
  return <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 3 }}>{Array.from({ length: 60 }, (_, i) => <i key={i} className="confetti" style={{ position: "absolute", left: ((i * 17) % 100) + "%", top: -20, width: 6 + (i % 3) * 3, height: 10 + (i % 4) * 3, background: C[i % C.length], borderRadius: i % 3 ? 2 : "50%", animationDelay: (i % 20) * .12 + "s", animationDuration: (2.6 + (i % 5) * .4) + "s", "--x": ((i % 7) - 3) * 30 + "px", "--r": (i * 47) % 720 + "deg" }} />)}</div>;
}

function Listo({ done, perfil }) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => { const t = [600, 1200, 1800].map((ms, i) => setTimeout(() => setN(i + 1), ms)); return () => t.forEach(clearTimeout); }, []);
  const docente = perfil && perfil.rol === "docente";
  const alumno = perfil && perfil.alumnos && perfil.alumnos[perfil.alumnos.length - 1];
  const nombre = docente ? ((perfil.docente && (perfil.docente.apodo || perfil.docente.nombre_completo.split(" ")[0])) || "") : (alumno ? alumno.apodo : "");
  const pasos = docente
    ? ["Tu cuenta de profesor fue creada", "La academia revisará y activará tu perfil", "Mientras tanto, ya puedes explorar"]
    : ["La cuenta de la familia fue creada", (alumno ? alumno.apodo : "Tu hijo(a)") + " ya tiene su perfil", "Ya pueden explorar la app"];
  return <div style={{ position: "relative", zIndex: 2, flex: 1, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(340px,460px)", alignItems: "center", gap: 40, padding: "40px 6vw" }} className="onb-splash">
    <Confetti />
    <div className="onb-art" style={{ position: "relative", height: "min(78vh, 660px)" }}>
      <div style={{ position: "absolute", left: "50%", top: "55%", width: 560, height: 560, marginLeft: -280, marginTop: -280 }}>{[0, 1, 2].map(i => <span key={i} className="ripple" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(255,200,140,.5)", animationDelay: i * 1.2 + "s" }} />)}</div>
      <img src={img("onb/bateria.png")} alt="" style={{ position: "absolute", left: "50%", bottom: 0, width: "min(620px, 92%)", transform: "translateX(-50%)" }} />
      <img src={img(docente ? "onb/profe-baquetas.png" : "onb/mateo-puno.png")} alt="" className="jump" style={{ position: "absolute", left: "50%", bottom: "16%", height: "74%", transform: "translateX(-60%)", filter: "drop-shadow(0 24px 30px rgba(0,0,0,.45))" }} />
      <img src={img("onb/bit-corona.png")} alt="Bit" className="bob" style={{ position: "absolute", left: "56%", bottom: "6%", height: "28%" }} />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 18, color: "#fff" }}>
      <h1 className="rv pop-title" style={{ "--i": 0, margin: 0, fontFamily: "var(--font-display)", fontSize: 60, fontWeight: 800, lineHeight: 1 }}><Letters text={nombre ? "¡Todo listo,\n" + nombre + "!" : "¡Todo listo!"} delay={200} step={60} /></h1>
      <span className="rv" style={{ "--i": 1, fontSize: 22, lineHeight: 1.3 }}>Bienvenido a<br /><b>EZ DrumSchool</b></span>
      <div className="rv" style={{ "--i": 2, display: "flex", flexDirection: "column", gap: 14, padding: 22, borderRadius: 20, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
        {pasos.map((t, i) => <span key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, opacity: i < n ? 1 : .35, transition: "opacity .4s" }}><span style={{ width: 26, height: 26, flex: "none", borderRadius: "50%", background: i < n ? "#34B76C" : "rgba(255,255,255,.2)", display: "inline-flex", alignItems: "center", justifyContent: "center", transform: i < n ? "scale(1)" : "scale(.7)", transition: "all .4s cubic-bezier(.34,1.56,.64,1)" }}>{i < n && <Icon name="check" size={15} color="#fff" />}</span>{t}</span>)}
      </div>
      <div className="rv" style={{ "--i": 3 }}><Button size="lg" fullWidth iconRight="arrow-right" onClick={done}>Comenzar</Button></div>
      <span className="rv wiggle" style={{ "--i": 4, fontFamily: "var(--font-hand)", fontSize: 38, lineHeight: 1.05, alignSelf: "center", transform: "rotate(-6deg)", textAlign: "center" }}><Letters text={"Ahora sí...\n¡A tocar!"} delay={2200} step={55} /></span>
    </div>
  </div>;
}

function SideArt({ step }) {
  const A = {
    login: ["onb/mateo-guino-baquetas.png", "Bienvenido de vuelta"],
    rol: ["onb/mateo-pulgar.png", "Tu historia empieza aquí"],
    padre: ["onb/mama-selfie.png", "Juntos suena mejor"],
    registro: ["onb/mateo-redoblante.png", "Un perfil, mil ritmos"],
    nuevoAlumno: ["onb/mateo-redoblante.png", "Un perfil, mil ritmos"],
    docente: ["onb/profe-baquetas.png", "Enseñar también es tocar"],
    confirmar: ["onb/mateo-guino-baquetas.png", "Ya casi"],
    elegir: ["onb/mateo-pulgar.png", "¿Quién toca hoy?"]
  }[step] || ["onb/mateo-pulgar.png", ""];
  return <div className="onb-art" style={{ position: "relative", flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", alignSelf: "stretch" }}>
    <span key={step + "t"} className="rv wiggle" style={{ position: "absolute", top: "10%", left: "8%", fontFamily: "var(--font-hand)", fontSize: 44, lineHeight: 1, color: "#fff", transform: "rotate(-6deg)" }}>{A[1]}</span>
    <img src={img("logo/ez-drumschool-wordmark-white.png")} alt="EZ DrumSchool" style={{ position: "absolute", top: 34, right: 40, width: 150, opacity: .9 }} />
    <div style={{ position: "absolute", left: "50%", bottom: "22%", width: 460, height: 460, marginLeft: -230 }}>{[0, 1, 2].map(i => <span key={i} className="ripple" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(140,170,255,.45)", animationDelay: i * 1.2 + "s" }} />)}</div>
    <img key={step} src={img(A[0])} alt="" className="art-swap" style={{ ...px(18), position: "relative", height: "min(70vh, 600px)", maxWidth: "90%", objectFit: "contain", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.5))" }} />
  </div>;
}

const FORM0 = { name: "", apodo: "", age: "10 años", dob: "", gender: "", avatar: AVATARS[0], pname: "", rel: "Madre", mail: "", phone: "", pass: "", pass2: "", notif: true, tname: "", tapodo: "", tmail: "", tphone: "", tesp: "Batería", tpass: "", tpass2: "" };
const alumnoDelForm = f => ({ nombre_completo: f.name, apodo: f.apodo, edad: parseInt(f.age, 10) || null, fecha_nacimiento: f.dob || null, genero: f.gender || null, avatar: f.avatar });

// inicio: "splash" (portada), "elegir" (cambiar de alumno). onListo(perfil, alumnoId) entra a la app.
function SwOnboarding({ inicio = "splash", perfil: perfil0 = null, onListo, onSalir }) {
  const B = window.EZBackend;
  const [step, setStep] = React.useState(inicio);
  const [perfil, setPerfil] = React.useState(perfil0);
  const [aviso, setAviso] = React.useState("");
  const [form, setForm] = React.useState(FORM0);
  const set = p => setForm(f => ({ ...f, ...p }));
  const go = s => { if (s !== "login") setAviso(""); setStep(s); };
  const card = step !== "splash" && step !== "listo";
  const root = React.useRef(null);
  const [bursts, setBursts] = React.useState([]);
  const move = e => { const el = root.current; if (!el) return; const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; el.style.setProperty("--mx", (x - .5).toFixed(3)); el.style.setProperty("--my", (y - .5).toFixed(3)); el.style.setProperty("--px", (x * 100).toFixed(1) + "%"); el.style.setProperty("--py", (y * 100).toFixed(1) + "%"); };
  const click = e => { if (!e.target.closest("button")) return; const id = Date.now() + Math.random(); setBursts(b => [...b, { id, x: e.clientX, y: e.clientY }]); setTimeout(() => setBursts(b => b.filter(q => q.id !== id)), 800); };

  // Tras iniciar sesión decide a dónde ir según el rol y cuántos hijos tiene la cuenta.
  const entrar = p => {
    setPerfil(p);
    if (!p) return go("login");
    if (p.rol === "docente") return onListo(p, null);
    if (p.alumnos.length === 0) return go("nuevoAlumno");
    if (p.alumnos.length === 1) return onListo(p, p.alumnos[0].id);
    go("elegir");
  };
  const crearFamilia = async () => {
    const r = await B.registrarTutor({ tutor: { nombre_completo: form.pname, relacion: form.rel, correo: form.mail, telefono: form.phone ? "+51 " + form.phone : null, notificaciones: form.notif }, alumnos: [alumnoDelForm(form)], password: form.pass });
    if (r.confirmarCorreo) return go("confirmar");
    setPerfil(r.perfil); go("listo");
  };
  const crearDocente = async () => {
    const r = await B.registrarDocente({ docente: { nombre_completo: form.tname, apodo: form.tapodo, correo: form.tmail, telefono: form.tphone ? "+51 " + form.tphone : null, especialidad: form.tesp }, password: form.tpass });
    if (r.confirmarCorreo) return go("confirmar");
    setPerfil(r.perfil); go("listo");
  };
  const agregarAlumno = async () => {
    const nuevo = await B.agregarAlumno(alumnoDelForm(form));
    const p = { ...perfil, alumnos: [...perfil.alumnos, nuevo] };
    setPerfil(p); setForm(FORM0);
    onListo(p, nuevo.id);
  };
  const salir = async () => { await B.salir(); setPerfil(null); setForm(FORM0); if (onSalir) onSalir(); go("splash"); };
  const terminar = () => {
    if (!perfil) return go("login");
    if (perfil.rol === "docente") return onListo(perfil, null);
    const ult = perfil.alumnos[perfil.alumnos.length - 1];
    onListo(perfil, ult && ult.id);
  };

  return <div ref={root} onMouseMove={move} onClickCapture={click} style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex", overflow: "auto", background: "radial-gradient(60% 80% at 70% 40%, rgba(120,70,30,.55), transparent 70%), radial-gradient(50% 60% at 10% 100%, rgba(47,87,245,.25), transparent 70%), linear-gradient(160deg,#120F0E 0%,#1B1512 50%,#0E0D12 100%)" }}>
    <Molinos />
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, background: "radial-gradient(420px circle at var(--px,60%) var(--py,40%), rgba(140,170,255,.16), transparent 60%)" }} />
    {(step === "splash" || step === "listo") && <><EqStrip /><Marquee text={step === "splash" ? "APRENDE · PRACTICA · AVANZA" : "¡A TOCAR!"} /></>}
    {bursts.map(b => <span key={b.id} aria-hidden="true" style={{ position: "fixed", left: b.x, top: b.y, zIndex: 80, pointerEvents: "none" }}>{Array.from({ length: 10 }, (_, i) => <i key={i} className="burst" style={{ position: "absolute", width: 7, height: 7, marginLeft: -3.5, marginTop: -3.5, borderRadius: "50%", background: ["#2F57F5", "#EE4433", "#34B76C", "#FFB547", "#fff"][i % 5], "--a": (i * 36) + "deg" }} />)}<i className="burst-ring" style={{ position: "absolute", width: 60, height: 60, marginLeft: -30, marginTop: -30, borderRadius: "50%", border: "2px solid rgba(255,255,255,.8)" }} /></span>)}
    <div className="bg-grain" aria-hidden="true" style={{ position: "absolute" }} />
    {step === "splash" && <Splash go={go} />}
    {step === "listo" && <Listo done={terminar} perfil={perfil} />}
    {card && <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", alignItems: "stretch", gap: 30, padding: "28px 4vw" }}>
      <SideArt step={step} />
      <div key={step} className="card-in" style={{ transform: "perspective(1400px) rotateY(calc(var(--mx,0) * -4deg)) rotateX(calc(var(--my,0) * 3deg))", transition: "transform .3s ease-out", width: "min(470px, 100%)", flex: "none", alignSelf: "center", maxHeight: "calc(100vh - 56px)", overflow: "auto", background: "#FBF8F3", borderRadius: 30, padding: "24px 26px 22px", display: "flex", flexDirection: "column", gap: 18, boxShadow: "0 40px 80px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.08)" }}>
        {step === "login" && <Login go={go} onEntrar={entrar} aviso={aviso} />}
        {step === "rol" && <Rol go={go} setAviso={setAviso} />}
        {step === "padre" && <Padre go={go} form={form} set={set} />}
        {step === "registro" && <Registro go={go} form={form} set={set} onCrear={crearFamilia} />}
        {step === "nuevoAlumno" && <Registro go={go} form={form} set={set} onCrear={agregarAlumno} agregar />}
        {step === "docente" && <Docente go={go} form={form} set={set} onCrear={crearDocente} />}
        {step === "confirmar" && <Confirmar go={go} correo={form.mail || form.tmail} />}
        {step === "elegir" && <Elegir go={go} perfil={perfil} onElegir={id => onListo(perfil, id)} onSalir={salir} />}
      </div>
    </div>}
  </div>;
}

Object.assign(window, { SwOnboarding });
})();
