import Link from "next/link";

const posts = [
  {
    title: "How AI is Changing the Workplace",
    slug: "ai-changing-workplace",
    excerpt: "Discover how artificial intelligence is transforming jobs, workflows, and the future of work.",
    date: "2024-06-01",
  },
  {
    title: "Prompt Engineering 101: Tips for Better Results",
    slug: "prompt-engineering-101",
    excerpt: "Learn the basics of prompt engineering and how to get the most out of AI tools like ChatGPT.",
    date: "2024-06-10",
  },
  {
    title: "AI for Educators: Classroom Success Stories",
    slug: "ai-for-educators",
    excerpt: "Real-world examples of teachers using AI to engage students and save time.",
    date: "2024-06-15",
  },
];

export default function BlogListPage() {
  return (
    <section style={{ maxWidth: 700, margin: "0 auto", padding: "2.5rem 1rem" }}>
      <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.2rem", color: "#1F6FEB", marginBottom: "2rem", textAlign: "center" }}>
        AI Insights & Updates
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {posts.map((post) => (
          <article key={post.slug} style={{ background: "#F5F5F5", borderRadius: 16, padding: "1.5rem 1.25rem", boxShadow: "0 2px 8px rgba(31,111,235,0.06)" }}>
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.25rem", color: "#1F6FEB", margin: 0 }}>
              <Link href={`/blog/${post.slug}`} style={{ color: "#1F6FEB", textDecoration: "none" }}>{post.title}</Link>
            </h2>
            <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.98rem", color: "#555", margin: "0.5rem 0" }}>
              {new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
            </div>
            <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.05rem", color: "#333", margin: 0 }}>{post.excerpt}</p>
            <div style={{ marginTop: "1rem" }}>
              <Link href={`/blog/${post.slug}`} style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#fff",
                background: "#1F6FEB",
                borderRadius: 8,
                padding: "0.5rem 1.25rem",
                textDecoration: "none",
                transition: "background 0.2s"
              }}>Read More</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
} 