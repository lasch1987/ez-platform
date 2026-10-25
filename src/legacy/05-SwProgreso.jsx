(() => {
const { Icon, Button } = window.EZDrumSchoolDesignSystem_874c26;
const img = window.SW_IMG;

function Nivel() {
  return <Panel i={1} title="Tu nivel actual" style={{ justifyContent: "space-between" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <img src={img("badge/medalla-nivel.png")} alt="" className="medal" style={{ width: 92 }} />
      <div><div style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 800, lineHeight: 1 }}>Nivel 1</div><div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#3F4249", marginTop: 4 }}>PULSO</div></div>
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
      {[1, 2, 3].map(n => <React.Fragment key={n}>
        {n > 1 && <span style={{ width: 34, height: 3, background: "#ECE7DF" }} />}
        <span style={{ width: 42, height: 42, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, background: n === 1 ? "var(--accent)" : "#F1ECE4", color: n === 1 ? "#fff" : "#5D6068", boxShadow: n === 1 ? "var(--shadow-glow-accent)" : "none" }}>{n}</span>
      </React.Fragment>)}
    </div>
  </Panel>;
}

function Resumen() {
  return <Panel i={2} title="Resumen de tu progreso" icon={<Icon name="chart-no-axes-column-increasing" size={22} />}>
    <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
      <Ring value={65} size={200} stroke={26} color="var(--accent)"><b style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1 }}><CountUp to={65} suffix="%" /></b><span style={{ fontSize: 15, color: "#3F4249", marginTop: 4 }}>Completado</span></Ring>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, fontSize: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}><i style={{ width: 14, height: 14, borderRadius: 7, background: "var(--accent)" }} /><span style={{ flex: 1 }}>Completadas</span><b style={{ fontSize: 22 }}><CountUp to={13} /></b></div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}><i style={{ width: 14, height: 14, borderRadius: 7, background: "#D9D3C8" }} /><span style={{ flex: 1 }}>Pendientes</span><b style={{ fontSize: 22 }}><CountUp to={7} /></b></div>
        <div style={{ borderTop: "1px solid #EFEBE4", paddingTop: 14 }}><div style={{ color: "#3F4249" }}>Total de sesiones</div><b style={{ fontFamily: "var(--font-display)", fontSize: 26 }}>20</b></div>
      </div>
    </div>
  </Panel>;
}

function Competencias() {
  const rows = [["music", "#3B74F0", "Pulso y tempo", 90], ["drum", "#F26B3A", "Dinámica", 70], ["arrow-left-right", "#34B76C", "Independencia", 60], ["book-open", "#7C4DEB", "Lectura", 50]];
  const [hover, setHover] = React.useState(null);
  return <Panel i={3} title="Tus competencias" icon={<img src={img("music/estrella.png")} alt="" style={{ width: 28 }} />}>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {rows.map(([ic, c, l, v], i) => <div key={l} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ display: "flex", alignItems: "center", gap: 14, cursor: "default" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: c, color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", transform: hover === i ? "scale(1.1) rotate(-6deg)" : "none", transition: "transform .3s cubic-bezier(.34,1.56,.64,1)", boxShadow: "0 6px 14px " + c + "55" }}><Icon name={ic} size={22} /></span>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}><span style={{ fontSize: 14.5, color: "#17181C" }}>{l}</span><Bar value={v} color={c} height={11} /></div>
        <b style={{ width: 48, textAlign: "right", fontSize: 18 }}><CountUp to={v} suffix="%" /></b>
      </div>)}
    </div>
  </Panel>;
}

function Actividad() {
  const rows = [["circle-check", "#34B76C", "Completaste la Sesión 5 · Dinámica en la caja", "Hoy, 4:30 PM"], ["circle-play", "#3B74F0", "Realizaste tu Misión 15", "Ayer, 6:20 PM"], ["star", "#F2A516", "Lograste el nivel 1", "Ayer, 5:15 PM"]];
  return <Panel i={4} title="Tu actividad reciente" icon={<Icon name="calendar" size={22} />} action={<a href="#" style={{ fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>Ver todo <Icon name="arrow-right" size={16} /></a>}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {rows.map(([ic, c, t, w], i) => <div key={t} className="rv row-hover" style={{ "--i": i + 5, display: "flex", alignItems: "center", gap: 14, padding: "12px 8px", borderTop: "1px solid #EFEBE4", borderRadius: 10 }}><Icon name={ic} size={24} color={c} /><span style={{ flex: 1, fontSize: 14.5 }}>{t}</span><span style={{ fontSize: 13.5, color: "#8A8D96" }}>{w}</span></div>)}
    </div>
  </Panel>;
}

function Mision() {
  return <Panel i={5} title="Tu próxima misión" icon={<img src={img("music/diana.png")} alt="" style={{ width: 28 }} />}>
    <div style={{ position: "relative", borderRadius: 18, padding: 20, minHeight: 150, background: "linear-gradient(120deg, var(--accent-soft), #fff 80%)", overflow: "hidden", display: "flex", alignItems: "center", gap: 16 }}>
      <window.Ripples color="rgba(47,87,245,.25)" size={200} style={{ right: 10, top: -20 }} />
      <span className="tick" style={{ width: 58, height: 58, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 16px rgba(23,24,28,.1)", flex: "none" }}><Icon name="timer" size={30} color="#17181C" /></span>
      <div style={{ flex: 1, position: "relative" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700 }}>Misión 15</div>
        <div style={{ fontSize: 14, color: "#3F4249", margin: "2px 0 14px" }}>Practica 5 días esta semana</div>
        <Button iconRight="arrow-right">Ir a mi misión</Button>
      </div>
      <img src={img("kit/pad-mision.png")} alt="" className="floaty" style={{ position: "relative", width: 150, mixBlendMode: "multiply" }} />
    </div>
  </Panel>;
}

function SwProgreso() {
  return <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
    <div className="sw-split" style={{ "--side": "330px", alignItems: "stretch" }}>
      <HeroStage variant="burst" title="Tu progreso" body="Ves cómo avanzas en tu aprendizaje." art="mateo/bateria-baquetas-arriba.png" artStyle={{ right: 40, height: 300 }} height={270}>
        <div className="glint" style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", borderRadius: 18, background: "rgba(255,255,255,.75)", backdropFilter: "blur(8px)", maxWidth: 440, position: "relative", overflow: "hidden" }}>
          <img src={img("icon3d/trofeo.png")} alt="" className="wiggle" style={{ width: 62, mixBlendMode: "multiply" }} />
          <div><div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700 }}>¡Vas muy bien!</div><div style={{ fontSize: 14, color: "#3F4249" }}>Ya completaste el 65% de tu programa.</div></div>
        </div>
      </HeroStage>
      <Nivel />
    </div>
    <div className="sw-2"><Resumen /><Competencias /></div>
    <div className="sw-2"><Actividad /><Mision /></div>
  </div>;
}
Object.assign(window, { SwProgreso });
})();
