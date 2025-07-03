import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "AI Tools School",
  description: "Learn AI tools with confidence. Friendly, clear, and playful guidance.",
};

function Header() {
  return (
    <header style={{ background: "#1F6FEB", color: "#fff", padding: "1.5rem 0" }}>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 960,
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <Image
            src="/images/logo.png"
            alt="AI Tools School logo"
            width={44}
            height={44}
            style={{ borderRadius: 8, background: "#fff" }}
            priority
          />
          <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "1.5rem", letterSpacing: "-1px", color: "#fff" }}>
            AI Tools School
          </span>
        </Link>
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#F5F5F5", color: "#333333", padding: "2rem 0 1rem 0", fontSize: "0.95rem", marginTop: "3rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <nav>
          <ul style={{ display: "flex", gap: "1.2rem", listStyle: "none", marginBottom: "0.5rem" }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div style={{ color: "#888", fontSize: "0.9em" }}>
          &copy; {new Date().getFullYear()} AI Tools School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body style={{ fontFamily: "var(--font-open-sans)", background: "#fff", color: "#333" }}>
        <Header />
        <main style={{ minHeight: "70vh", maxWidth: 960, margin: "0 auto", padding: "2rem 1rem 0 1rem" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
