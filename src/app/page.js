import Link from "next/link";
import styles from "./page.module.css";

const programs = [
  {
    title: "ChatGPT for Talent Acquisition",
    slug: "chatgpt-talent-acquisition",
    description: "Find and hire smarter with AI-powered tools.",
  },
  {
    title: "ChatGPT for Sales",
    slug: "chatgpt-sales",
    description: "Boost your sales workflow and close more deals using AI.",
  },
  {
    title: "AI for Educators",
    slug: "ai-educators",
    description: "Empower your classroom and teaching with the latest AI tools.",
  },
];

export default function Home() {
  return (
    <section className={styles.page}>
      <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.5rem", color: "#1F6FEB", marginBottom: "1rem" }}>
          Learn AI Tools with Confidence
        </h1>
        <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.25rem", color: "#333", maxWidth: 600, margin: "0 auto" }}>
          Friendly, clear, and playful guidance to help you master the latest AI tools—no tech jargon required.
        </p>
      </header>

      <section style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginBottom: "2.5rem" }}>
        {programs.map((program) => (
          <article key={program.slug} style={{
            border: "1px solid #eee",
            borderRadius: 16,
            boxShadow: "0 2px 8px rgba(31,111,235,0.06)",
            padding: "1.5rem 1.25rem",
            minWidth: 260,
            maxWidth: 320,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.75rem"
          }}>
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.2rem", color: "#1F6FEB", margin: 0 }}>{program.title}</h2>
            <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", color: "#333", margin: 0 }}>{program.description}</p>
            <Link href={`/programs/${program.slug}`} style={{
              marginTop: "0.5rem",
              color: "#fff",
              background: "#1F6FEB",
              borderRadius: 8,
              padding: "0.5rem 1.25rem",
              fontWeight: 600,
              fontFamily: "var(--font-montserrat)",
              fontSize: "1rem",
              textDecoration: "none",
              transition: "background 0.2s"
            }}>View Program</Link>
          </article>
        ))}
      </section>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link href="/programs" className={styles.primary} style={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 700,
          fontSize: "1.15rem",
          padding: "0.9rem 2.2rem",
          borderRadius: 32,
          background: "#1F6FEB",
          color: "#fff",
          display: "inline-block",
          boxShadow: "0 2px 8px rgba(31,111,235,0.10)",
          textDecoration: "none"
        }}>
          Explore All Programs
        </Link>
      </div>
    </section>
  );
}
