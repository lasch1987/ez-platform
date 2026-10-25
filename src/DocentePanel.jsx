import React from "react";
import backend from "./lib/backend.js";

// Vista inicial del profesor: estado de su cuenta y, cuando la academia la activa, sus alumnos.
export default function DocentePanel({ perfil, onSalir }) {
  const { Button, Icon, Badge } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const d = perfil.docente || {};
  const activo = d.estado === "activo";
  const nombre = d.apodo || (d.nombre_completo || "").split(" ")[0] || "profe";
  const [alumnos, setAlumnos] = React.useState(null);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!activo) return;
    backend.listarAlumnos().then(setAlumnos).catch((e) => setError(e.message));
  }, [activo]);

  return <div className="ez-light" style={{ minHeight: "100vh", background: "var(--ez-paper)", color: "#17181C", fontFamily: "var(--font-body)" }}>
    <header style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 28px", borderBottom: "1px solid #EFEBE4", background: "rgba(251,248,243,.9)" }}>
      <img src={img("logo/ez-mark-black.png")} alt="EZ" style={{ height: 30 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700 }}>Hola, {nombre} <span className="wave">👋</span></div>
        <div style={{ fontSize: 14.5, color: "#5D6068" }}>Panel del profesor</div>
      </div>
      <Button variant="secondary" size="sm" icon="log-out" onClick={onSalir} style={{ color: "#17181C" }}>Cerrar sesión</Button>
    </header>
    <main style={{ maxWidth: 880, margin: "0 auto", padding: 28, display: "flex", flexDirection: "column", gap: 18 }}>
      <section style={{ display: "flex", alignItems: "center", gap: 18, padding: 22, borderRadius: 20, background: "#fff", border: "1px solid #EFEBE4" }}>
        <img src={img("onb/profe-baquetas.png")} alt="" style={{ height: 110 }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <span><Badge tone={activo ? "success" : "warning"}>{activo ? "Cuenta activa" : "Pendiente de aprobación"}</Badge></span>
          <b style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>{d.nombre_completo}</b>
          <span style={{ fontSize: 14, color: "#5D6068" }}>{d.especialidad || "Batería"} · {d.correo}</span>
          {!activo && <span style={{ fontSize: 14, color: "#3F4249", lineHeight: 1.5 }}>La academia revisará tus datos y activará tu cuenta. Después verás aquí a tus alumnos.</span>}
        </div>
      </section>
      {activo && <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 20 }}>Alumnos</h2>
        {error && <p role="alert" style={{ color: "#B42318", margin: 0 }}>{error}</p>}
        {alumnos && alumnos.length === 0 && <p style={{ margin: 0, color: "#5D6068" }}>Todavía no hay alumnos registrados.</p>}
        {(alumnos || []).map((a) => <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: 12, borderRadius: 16, background: "#fff", border: "1px solid #EFEBE4" }}>
          <span style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", background: "#DCE4FF", flex: "none" }}><img src={img(a.avatar || "onb/cara-feliz.png")} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} /></span>
          <span style={{ flex: 1, display: "flex", flexDirection: "column" }}><b>{a.apodo}</b><span style={{ fontSize: 13, color: "#5D6068" }}>{a.nombre_completo}{a.edad ? " · " + a.edad + " años" : ""}</span></span>
          <span style={{ fontSize: 13, color: "#5D6068" }}>{a.nivel} · Sesión {a.sesion_actual}</span>
          <Icon name="chevron-right" size={18} color="#8A8D96" />
        </div>)}
      </section>}
    </main>
  </div>;
}
