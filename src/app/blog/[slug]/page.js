import React from "react";

const mockPosts = {
  "ai-changing-workplace": {
    title: "How AI is Changing the Workplace",
    date: "2024-06-01",
    body: `<p>Artificial intelligence is transforming the way we work, from automating repetitive tasks to enabling smarter decision-making. In this post, we explore the latest trends and real-world examples of AI in action.</p><ul><li>Automation of routine tasks</li><li>Enhanced data analysis</li><li>Personalized customer experiences</li></ul><p>As AI continues to evolve, staying informed and adaptable is key to thriving in the modern workplace.</p>`
  },
  "prompt-engineering-101": {
    title: "Prompt Engineering 101: Tips for Better Results",
    date: "2024-06-10",
    body: `<p>Prompt engineering is the art of crafting effective inputs for AI models like ChatGPT. Here are some tips:</p><ol><li>Be specific and clear</li><li>Provide context</li><li>Iterate and experiment</li></ol><p>With practice, you can unlock more accurate and useful responses from AI tools.</p>`
  },
  "ai-for-educators": {
    title: "AI for Educators: Classroom Success Stories",
    date: "2024-06-15",
    body: `<p>Teachers around the world are using AI to engage students and save time. Success stories include:</p><ul><li>Automated grading and feedback</li><li>Personalized learning plans</li><li>Interactive AI-powered lessons</li></ul><p>AI is helping educators focus on what matters most: inspiring students.</p>`
  }
};

export default function PostDetailPage({ params }) {
  const { slug } = params;
  const post = mockPosts[slug] || {
    title: "Post Not Found",
    date: "",
    body: "<p>Sorry, we couldn't find that post.</p>"
  };

  return (
    <article style={{ maxWidth: 700, margin: "0 auto", padding: "2.5rem 1rem" }}>
      <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.2rem", color: "#1F6FEB", marginBottom: "1rem" }}>{post.title}</h1>
      <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "0.98rem", color: "#555", marginBottom: "2rem" }}>
        {post.date && new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
      </div>
      <div style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.08rem", color: "#333" }} dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  );
} 