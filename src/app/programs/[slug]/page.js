import React from "react";
import Link from "next/link";

// Next.js App Router: get params from function argument
export default function ProgramDetailPage({ params }) {
  const { slug } = params;

  // Mock data (in real app, fetch based on slug)
  const program = {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    description:
      "This is a full description of the program. You'll learn practical skills, get hands-on with AI tools, and leave with confidence to use them in your work.",
    instructor: {
      name: "Alex Morgan",
      bio: "Alex is an experienced AI educator and consultant who has helped hundreds of professionals master new technology with confidence and clarity.",
      avatar: null, // Could use a placeholder image
    },
    sessions: [
      { date: "2024-07-15", time: "10:00 AM - 12:00 PM" },
      { date: "2024-07-22", time: "2:00 PM - 4:00 PM" },
      { date: "2024-08-05", time: "6:00 PM - 8:00 PM" },
    ],
  };

  return (
    <section style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 1rem" }}>
      <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.2rem", color: "#1F6FEB", marginBottom: "1.5rem" }}>
        {program.title}
      </h1>
      <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.15rem", color: "#333", marginBottom: "2rem" }}>
        {program.description}
      </p>

      <section style={{ marginBottom: "2.5rem", display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F5F5F5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#1F6FEB", fontWeight: 700 }}>
          {program.instructor.avatar || program.instructor.name[0]}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.1rem", color: "#1F6FEB" }}>{program.instructor.name}</div>
          <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", color: "#555" }}>{program.instructor.bio}</div>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.15rem", color: "#1F6FEB", marginBottom: "1rem" }}>Upcoming Sessions</h2>
        <div style={{ background: "#F5F5F5", borderRadius: 12, padding: "1.2rem 1rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {program.sessions.map((session, idx) => (
            <div key={idx} style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", color: "#333", display: "flex", justifyContent: "space-between" }}>
              <span>{new Date(session.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
              <span>{session.time}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <Link href="#signup" style={{
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
          Sign Up / Pay Now
        </Link>
      </div>
    </section>
  );
} 