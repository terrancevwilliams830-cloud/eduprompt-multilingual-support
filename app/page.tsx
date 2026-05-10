"use client";

import Link from "next/link";
import { useState } from "react";

/* ── Design tokens ────────────────────────────── */
const T = {
  navy: "#0d1f3c",
  navyDeep: "#071429",
  blue: "#1d4ed8",
  blueMid: "#2563eb",
  teal: "#0d9488",
  tealLight: "#ccfbf1",
  tealMid: "#14b8a6",
  white: "#ffffff",
  offWhite: "#f8fafc",
  slate: "#f1f5f9",
  border: "#e2e8f0",
  muted: "#64748b",
  mutedDark: "#475569",
};

const features = [
  {
    icon: "🎯",
    title: "Language Objectives",
    desc: "Generate WIDA-aligned language objectives that pair with your content objectives.",
    color: T.tealLight,
  },
  {
    icon: "📚",
    title: "Vocabulary Scaffolds",
    desc: "Create tiered vocabulary supports with student-friendly definitions.",
    color: "#dbeafe",
  },
  {
    icon: "💬",
    title: "Sentence Frames",
    desc: "Generate scaffolded sentence starters for multilingual learners.",
    color: "#fef9c3",
  },
  {
    icon: "📋",
    title: "Chunked Directions",
    desc: "Break multi-step directions into simplified student-friendly steps.",
    color: "#fce7f3",
  },
  {
    icon: "🖼️",
    title: "Visual Supports",
    desc: "Get visual scaffolding ideas and classroom support strategies.",
    color: "#ede9fe",
  },
  {
    icon: "⚡",
    title: "Differentiated Output",
    desc: "Generate full support packs or targeted support plans instantly.",
    color: "#dcfce7",
  },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link:hover {
          color: ${T.tealMid} !important;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .feat-card:hover {
          transform: translateY(-5px);
        }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
          }

          .feat-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 861px) {
          .hamburger {
            display: none !important;
          }

          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>

      {/* HEADER */}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.1rem",
                color: T.navy,
              }}
            >
              EduPrompt
            </span>

            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                color: T.tealMid,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Multilingual Support
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {[
              ["Home", "/"],
              ["Support Builder", "/support"],
              ["About", "/about"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="nav-link"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: T.mutedDark,
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 22,
                  height: 2,
                  background: T.navy,
                  display: "block",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="mobile-menu"
            style={{
              padding: "1.25rem",
              borderTop: `1px solid ${T.border}`,
              background: T.white,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              ["Home", "/"],
              ["Support Builder", "/support"],
              ["About", "/about"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: T.navy,
                  fontWeight: 600,
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "5rem 1.75rem",
          background:
            "linear-gradient(150deg, #f0fdfa 0%, #ffffff 45%, #eff6ff 100%)",
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                background: T.tealLight,
                color: T.teal,
                borderRadius: 100,
                padding: "0.35rem 1rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              WIDA-Aligned • ELL Support
            </span>

            <h1
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: T.navy,
                marginBottom: "1.5rem",
              }}
            >
              Build Classroom-Ready Supports for Multilingual Learners
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                color: T.muted,
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: 560,
              }}
            >
              Create WIDA-aligned language objectives, vocabulary supports,
              sentence frames, chunked directions, and scaffolded activities in
              minutes.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/support">
                <button
                  className="btn-primary"
                  style={{
                    background: T.blue,
                    color: T.white,
                    border: "none",
                    borderRadius: 11,
                    padding: "0.9rem 2rem",
                    fontSize: "1rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Open Support Builder →
                </button>
              </Link>

              <Link href="/about">
                <button
                  style={{
                    background: "transparent",
                    border: `1.5px solid ${T.border}`,
                    borderRadius: 11,
                    padding: "0.85rem 1.75rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: T.navy,
                  }}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Preview card */}
          <div
            style={{
              background: T.white,
              borderRadius: 20,
              border: `1px solid ${T.border}`,
              padding: "2rem",
              boxShadow: "0 24px 72px rgba(13,31,60,0.08)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: T.teal,
                marginBottom: "1rem",
              }}
            >
              SAMPLE OUTPUT PREVIEW
            </p>

            {[
              {
                label: "Language Objective",
                value:
                  "Students will explain the water cycle using sequence words.",
              },
              {
                label: "Key Vocabulary",
                value:
                  "evaporation, condensation, precipitation, cycle",
              },
              {
                label: "Sentence Frame",
                value:
                  '"First, water ____. Then, it ____ because ____."',
              },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "1rem" }}>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    marginBottom: "0.3rem",
                    color: T.navy,
                  }}
                >
                  {item.label}
                </p>

                <div
                  style={{
                    background: T.offWhite,
                    padding: "0.7rem",
                    borderRadius: 8,
                    borderLeft: `3px solid ${T.tealMid}`,
                    color: T.mutedDark,
                    fontSize: "0.85rem",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "5rem 1.75rem",
          background: T.white,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.4rem",
                fontWeight: 700,
                color: T.navy,
                marginBottom: "1rem",
              }}
            >
              Six tools. One connected workflow.
            </h2>

            <p
              style={{
                color: T.muted,
                maxWidth: 600,
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              Every output is designed for classroom implementation and can be
              pasted directly into lesson plans or student supports.
            </p>
          </div>

          <div
            className="feat-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.5rem",
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="feat-card"
                style={{
                  background: T.white,
                  border: `1px solid ${T.border}`,
                  borderRadius: 18,
                  padding: "2rem",
                  transition: "0.25s",
                  boxShadow: "0 4px 14px rgba(13,31,60,0.05)",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 12,
                    background: f.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                  }}
                >
                  {f.icon}
                </div>

                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: T.navy,
                    marginBottom: "0.6rem",
                  }}
                >
                  {f.title}
                </h3>

                <p
                  style={{
                    color: T.muted,
                    lineHeight: 1.7,
                    fontSize: "0.88rem",
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
