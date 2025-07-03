export default function ContactPage() {
  return (
    <section style={{ maxWidth: 500, margin: "0 auto", padding: "2.5rem 1rem" }}>
      <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.2rem", color: "#1F6FEB", marginBottom: "2rem", textAlign: "center" }}>
        Contact Us
      </h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2.5rem" }}>
        <label style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, color: "#1F6FEB" }}>
          Name
          <input type="text" name="name" required style={{ width: "100%", padding: "0.7rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4, fontFamily: "var(--font-open-sans)" }} />
        </label>
        <label style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, color: "#1F6FEB" }}>
          Email
          <input type="email" name="email" required style={{ width: "100%", padding: "0.7rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4, fontFamily: "var(--font-open-sans)" }} />
        </label>
        <label style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, color: "#1F6FEB" }}>
          Message
          <textarea name="message" rows={5} required style={{ width: "100%", padding: "0.7rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4, fontFamily: "var(--font-open-sans)" }} />
        </label>
        <button type="submit" style={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 700,
          fontSize: "1.1rem",
          padding: "0.8rem 2rem",
          borderRadius: 32,
          background: "#1F6FEB",
          color: "#fff",
          border: "none",
          marginTop: 8,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(31,111,235,0.10)",
          transition: "background 0.2s"
        }}>
          Send Message
        </button>
      </form>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.05rem", color: "#333", marginBottom: 4 }}>
          <strong>Email:</strong> hello@aitoolsschool.com
        </div>
        <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.05rem", color: "#333" }}>
          <strong>Phone:</strong> (555) 123-4567
        </div>
      </div>
      <div style={{ width: "100%", height: 220, background: "#F5F5F5", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "1.1rem" }}>
        [Map embed placeholder]
      </div>
    </section>
  );
} 