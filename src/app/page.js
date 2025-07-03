'use client';
import Link from "next/link";
import styles from "./page.module.css";
import { useRef, useState, useEffect, useCallback } from "react";

const programs = [
  {
    title: "ChatGPT for Talent Acquisition",
    slug: "chatgpt-talent-acquisition",
    description: "Find and hire smarter with AI-powered tools.",
    bg: "/images/logo.png", // Example image, replace with real backgrounds
  },
  {
    title: "ChatGPT for Sales People",
    slug: "chatgpt-sales",
    description: "Boost your sales workflow and close more deals using AI.",
    bg: "/public/globe.svg",
  },
  {
    title: "AI for Educators",
    slug: "ai-educators",
    description: "Empower your classroom and teaching with the latest AI tools.",
    bg: "/public/window.svg",
  },
];

function ProgramCarousel() {
  const carouselRef = useRef(null);
  const [centerIdx, setCenterIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardCount = programs.length;

  // Scroll to a card by index
  const scrollToCard = useCallback((idx) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const card = carousel.children[idx];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % cardCount);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, cardCount]);

  // Scroll to center card when centerIdx changes
  useEffect(() => {
    scrollToCard(centerIdx);
  }, [centerIdx, scrollToCard]);

  // Update centerIdx on manual scroll
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const { scrollLeft, offsetWidth } = carousel;
    let minDist = Infinity;
    let idx = 0;
    for (let i = 0; i < cardCount; i++) {
      const card = carousel.children[i];
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const carouselCenter = scrollLeft + offsetWidth / 2;
      const dist = Math.abs(carouselCenter - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        idx = i;
      }
    }
    setCenterIdx(idx);
  };

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`${styles.carouselArrow} ${styles.left}`}
        aria-label="Scroll left"
        onClick={() => setCenterIdx((prev) => (prev - 1 + cardCount) % cardCount)}
        tabIndex={0}
        type="button"
      >
        &#8592;
      </button>
      <div
        className={styles.carousel}
        ref={carouselRef}
        onScroll={handleScroll}
        tabIndex={0}
        role="region"
        aria-label="Programs carousel"
      >
        {programs.map((program, idx) => (
          <article
            key={program.slug}
            className={
              idx === centerIdx
                ? `${styles.carouselCard} ${styles.focused}`
                : styles.carouselCard
            }
            style={{
              backgroundImage: `url('${program.bg}')`,
              fontFamily: "var(--font-open-sans)",
            }}
            tabIndex={0}
            aria-label={program.title}
            onClick={() => window.location.href = `/programs/${program.slug}`}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                window.location.href = `/programs/${program.slug}`;
              }
            }}
          >
            <h2 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.2rem", color: "#1F6FEB", margin: 0, textShadow: "0 2px 8px #fff8" }}>{program.title}</h2>
            <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1rem", color: "#333", margin: 0, textShadow: "0 1px 4px #fff8" }}>{program.description}</p>
            <Link
              href={`/programs/${program.slug}`}
              style={{
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
              }}
              tabIndex={-1}
              onClick={e => e.stopPropagation()}
            >
              View Program
            </Link>
          </article>
        ))}
      </div>
      <button
        className={`${styles.carouselArrow} ${styles.right}`}
        aria-label="Scroll right"
        onClick={() => setCenterIdx((prev) => (prev + 1) % cardCount)}
        tabIndex={0}
        type="button"
      >
        &#8594;
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <section style={{ position: "relative", width: "100%", minHeight: 420, marginBottom: "2.5rem", overflow: "hidden", borderRadius: 18, boxShadow: "0 2px 16px rgba(31,111,235,0.08)" }}>
      <video
        src="/videos/hero-typing.mp4"
        autoPlay
        muted
        playsInline
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        poster=""
        loop={false}
        controls={false}
        preload="auto"
        onEnded={e => e.target.pause()}
      />
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4.5rem 1rem 4rem 1rem", background: "rgba(31,111,235,0.10)" }}>
        <h1 style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "2.5rem", color: "#1F6FEB", marginBottom: "1rem", textAlign: "center", textShadow: "0 2px 8px #fff8" }}>
          Learn AI Tools with Confidence
        </h1>
        <p style={{ fontFamily: "var(--font-open-sans)", fontSize: "1.25rem", color: "#333", maxWidth: 600, margin: "0 auto", textAlign: "center", textShadow: "0 1px 4px #fff8" }}>
          Friendly, clear, and playful guidance to help you master the latest AI tools—no tech jargon required.
        </p>
      </div>
      <ProgramCarousel />
      <Link href="/programs" className={styles.showAllBtn} style={{ fontFamily: "var(--font-montserrat)" }}>
        Show me all programs
      </Link>
    </section>
  );
}
