const team = [
  { name: "Alex Morgan", role: "Founder & Lead Instructor", photo: null },
  { name: "Jamie Lee", role: "AI Curriculum Designer", photo: null },
  { name: "Taylor Kim", role: "Community Manager", photo: null },
  { name: "Jordan Patel", role: "Support & Onboarding", photo: null },
];

const logos = [
  { alt: "Acme Corp", src: "/globe.svg" },
  { alt: "BetaSoft", src: "/window.svg" },
  { alt: "NextGenAI", src: "/next.svg" },
  { alt: "Vercel", src: "/vercel.svg" },
];

export default function AboutPage() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1rem" }}>
      {/* Mission/Story */}
      <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.2rem", color: "#1F6FEB", marginBottom: "1rem" }}>
          Our Mission
        </h1>
        <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.15rem", color: "#333", maxWidth: 650, margin: "0 auto" }}>
          We believe everyone can master AI tools with the right guidance. Our mission is to make learning AI friendly, clear, and confidence-building—so you can use these technologies to do your best work.
        </p>
      </header>

      {/* Team Grid */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.15rem", color: "#1F6FEB", marginBottom: "1.5rem", textAlign: "center" }}>
          Meet the Team
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", justifyContent: "center" }}>
          {team.map((member, idx) => (
            <div key={idx} style={{ background: "#F5F5F5", borderRadius: 16, padding: "1.5rem 1rem", textAlign: "center", boxShadow: "0 2px 8px rgba(31,111,235,0.06)" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#e0e7ef", margin: "0 auto 1rem auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#1F6FEB", fontWeight: 700 }}>
                {member.photo ? <img src={member.photo} alt={member.name} style={{ width: 64, height: 64, borderRadius: "50%" }} /> : member.name[0]}
              </div>
              <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.05rem", color: "#1F6FEB" }}>{member.name}</div>
              <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.98rem", color: "#555" }}>{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials/Logos */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.15rem", color: "#1F6FEB", marginBottom: "1.5rem", textAlign: "center" }}>
          Trusted by Teams & Clients
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", justifyContent: "center", alignItems: "center" }}>
          {logos.map((logo, idx) => (
            <div key={idx} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(31,111,235,0.06)", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 100, minHeight: 60 }}>
              <img src={logo.src} alt={logo.alt} style={{ maxHeight: 40, maxWidth: 80, objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
} 