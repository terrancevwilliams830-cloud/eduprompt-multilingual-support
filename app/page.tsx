"use client";

import Link from "next/link";
import { useState } from "react";

const T = {
  navy: "#0d1f3c",
  navyDeep: "#071429",
  blue: "#1d4ed8",
  teal: "#0d9488",
  tealLight: "#ccfbf1",
  tealMid: "#14b8a6",
  white: "#ffffff",
  offWhite: "#f8fafc",
  border: "#e2e8f0",
  muted: "#64748b",
  mutedDark: "#475569",
};

const features = [
  {
    icon: "🎯",
    title: "Language Objectives",
    desc: "Generate WIDA-aligned language objectives for multilingual learners.",
    href: "/support",
    color: "#ccfbf1",
  },
  {
    icon: "📚",
    title: "Greek & Latin Roots",
    desc: "Help students decode academic vocabulary using roots, prefixes, suffixes, and cognates.",
    href: "/roots",
    color: "#ede9fe",
  },
  {
    icon: "💬",
    title: "Sentence Frames",
    desc: "Create scaffolded sentence starters for multilingual learners.",
    href: "/support",
    color: "#dbeafe",
  },
  {
    icon: "📋",
    title: "Chunked Directions",
    desc: "Break classroom directions into clear student-friendly steps.",
    href: "/support",
    color: "#fce7f3",
  },
  {
    icon: "🖼️",
    title: "Visual Supports",
    desc: "Generate visual scaffolding ideas for classroom instruction.",
    href: "/support",
    color: "#dcfce7",
  },
  {
    icon: "🌍",
    title: "Multilingual Learning",
    desc: "Support ELL, ESOL, bilingual, and multilingual classrooms.",
    href: "/about",
    color: "#fef3c7",
  },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link:hover { color: ${T.tealMid} !important; }
        .feature-card:hover { transform: translateY(-5px); }
        .main-btn:hover { transform: translateY(-2px); }

        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
        }

        @media (min-width: 861px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 1.75rem",
            height: 74,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link href="/" style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 800, fontSize: "1.2rem", color: T.navy }}>
              EduPrompt
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                color: T.tealMid,
                fontWeight: 800,
                letterSpacing: "0.08em",
              }}
            >
              MULTILINGUAL SUPPORT
            </span>
          </Link>

          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Link href="/" className="nav-link" style={navLink}>
              Home
            </Link>
            <Link href="/support" className="nav-link" style={navLink}>
              Support Builder
            </Link>
            <Link href="/roots" className="nav-link" style={navLink}>
              Roots Guide
            </Link>
            <Link href="/about" className="nav-link" style={navLink}>
              About
            </Link>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                style={{
                  width: 24,
                  height: 2,
                  background: T.navy,
                  display: "block",
                }}
              />
            ))}
          </button>
        </div>

        {mobileOpen && (
          <div
            className="mobile-menu"
            style={{
              background: T.white,
              borderTop: `1px solid ${T.border}`,
              padding: "1.25rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Link href="/" style={mobileLink}>
              Home
            </Link>
            <Link href="/support" style={mobileLink}>
              Support Builder
            </Link>
            <Link href="/roots" style={mobileLink}>
              Roots Guide
            </Link>
            <Link href="/about" style={mobileLink}>
              About
            </Link>
          </div>
        )}
      </header>

      <main
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(150deg, #f0fdfa 0%, #ffffff 45%, #eff6ff 100%)",
          color: T.navy,
        }}
      >
        <section style={{ padding: "5.5rem 1.75rem 4rem" }}>
          <div
            className="hero-grid"
            style={{
              maxWidth: 1160,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: T.tealLight,
                  color: T.teal,
                  borderRadius: 100,
                  padding: "0.45rem 1rem",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  marginBottom: "1.6rem",
                }}
              >
                WIDA-Aligned • ELL Support
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.6rem)",
                  lineHeight: 1.08,
                  fontWeight: 900,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.04em",
                }}
              >
                Build Classroom-Ready Supports for Multilingual Learners
              </h1>

              <p
                style={{
                  color: T.muted,
                  fontSize: "1.15rem",
                  lineHeight: 1.8,
                  maxWidth: 620,
                  marginBottom: "2.5rem",
                }}
              >
                Create WIDA-aligned language objectives, vocabulary supports,
                sentence frames, Greek & Latin roots instruction, chunked
                directions, and scaffolded activities in minutes.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/support">
                  <button className="main-btn" style={primaryButton}>
                    Open Support Builder →
                  </button>
                </Link>

                <Link href="/roots">
                  <button className="main-btn" style={outlineButton}>
                    Open Roots Guide →
                  </button>
                </Link>
              </div>
            </div>

            <div
              style={{
                background: T.white,
                border: `1px solid ${T.border}`,
                borderRadius: 26,
                padding: "2rem",
                boxShadow: "0 24px 72px rgba(13,31,60,0.1)",
              }}
            >
              <p
                style={{
                  color: T.teal,
                  fontWeight: 900,
                  marginBottom: "1.2rem",
                  fontSize: "0.85rem",
                }}
              >
                SAMPLE OUTPUT PREVIEW
              </p>

              {[
                ["Language Objective", "Students will explain the water cycle using sequence words."],
                ["Key Vocabulary", "evaporation, condensation, precipitation, cycle"],
                ["Sentence Frame", '"First, water ____. Then, it ____ because ____."'],
                ["Roots Support", "hydro = water, cycle = circle or repeated process"],
              ].map(([label, value]) => (
                <div key={label} style={{ marginBottom: "1rem" }}>
                  <p style={{ fontWeight: 900, marginBottom: "0.4rem" }}>{label}</p>
                  <div
                    style={{
                      background: T.offWhite,
                      borderLeft: `4px solid ${T.tealMid}`,
                      borderRadius: 10,
                      padding: "0.85rem 1rem",
                      color: T.mutedDark,
                      lineHeight: 1.6,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "3rem 1.75rem 6rem", background: T.white }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p
                style={{
                  color: T.teal,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                  fontSize: "0.8rem",
                  marginBottom: "0.7rem",
                }}
              >
                CLASSROOM TOOLS
              </p>

              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
                Everything teachers need in one place
              </h2>

              <p
                style={{
                  color: T.muted,
                  maxWidth: 680,
                  margin: "0 auto",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                }}
              >
                Use the support builder for full scaffolds or open the roots
                guide for academic vocabulary support.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href}>
                  <div
                    className="feature-card"
                    style={{
                      background: T.white,
                      border: `1px solid ${T.border}`,
                      borderRadius: 22,
                      padding: "2rem",
                      height: "100%",
                      boxShadow: "0 8px 30px rgba(15,23,42,0.05)",
                      transition: "0.25s ease",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 16,
                        background: feature.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                        marginBottom: "1.3rem",
                      }}
                    >
                      {feature.icon}
                    </div>

                    <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
                      {feature.title}
                    </h3>

                    <p style={{ color: T.muted, lineHeight: 1.7 }}>
                      {feature.desc}
                    </p>

                    <p
                      style={{
                        color: T.blue,
                        marginTop: "1.2rem",
                        fontWeight: 800,
                      }}
                    >
                      Open Tool →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const navLink: React.CSSProperties = {
  fontSize: "0.95rem",
  fontWeight: 700,
  color: "#475569",
};

const mobileLink: React.CSSProperties = {
  color: "#0d1f3c",
  fontWeight: 800,
  fontSize: "1rem",
};

const primaryButton: React.CSSProperties = {
  background: "#1d4ed8",
  color: "white",
  border: "none",
  borderRadius: 14,
  padding: "1rem 1.8rem",
  fontSize: "1rem",
  fontWeight: 800,
  cursor: "pointer",
  transition: "0.2s",
};

const outlineButton: React.CSSProperties = {
  background: "white",
  color: "#0d1f3c",
  border: "1.5px solid #e2e8f0",
  borderRadius: 14,
  padding: "1rem 1.8rem",
  fontSize: "1rem",
  fontWeight: 800,
  cursor: "pointer",
  transition: "0.2s",
};
