import Link from "next/link";

const courses = [
  {
    title: "ChatGPT for Talent Acquisition",
    slug: "chatgpt-talent-acquisition",
    description: "Find and hire smarter with AI-powered tools.",
    nextDate: "July 15, 2024",
  },
  {
    title: "ChatGPT for Sales People",
    slug: "chatgpt-sales",
    description: "Boost your sales workflow and close more deals using AI.",
    nextDate: "August 2, 2024",
  },
  {
    title: "AI for Educators",
    slug: "ai-educators",
    description: "Empower your classroom and teaching with the latest AI tools.",
    nextDate: "September 10, 2024",
  },
  {
    title: "Prompt Engineering Basics",
    slug: "prompt-engineering-basics",
    description: "Master the art of writing effective prompts for AI systems.",
    nextDate: "July 29, 2024",
  },
];

function ProgramsList() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "2.5rem 1rem" }}>
      <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.2rem", color: "#1F6FEB", marginBottom: "2.5rem", textAlign: "center" }}>
        All Programs
      </h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: "2rem",
        justifyContent: "center"
      }}>
        {courses.map((course) => (
          <article key={course.slug} style={{
            border: "1px solid #eee",
            borderRadius: 16,
            boxShadow: "0 2px 8px rgba(31,111,235,0.06)",
            padding: "1.5rem 1.25rem",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "0.75rem"
          }}>
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.15rem", color: "#1F6FEB", margin: 0 }}>{course.title}</h2>
            <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", color: "#333", margin: 0 }}>{course.description}</p>
            <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.98rem", color: "#555", margin: "0.5rem 0 0.5rem 0" }}>
              <strong>Next date:</strong> {course.nextDate}
            </div>
            <Link href={`/programs/${course.slug}`} style={{
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
            }}>View / Sign up</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return <ProgramsList />;
}
  