"use client";

import Link from "next/link";

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
    desc: "Decode academic vocabulary using roots, prefixes, suffixes, and cognates.",
    href: "/roots",
    color: "#ede9fe",
  },
  {
    icon: "💬",
    title: "Sentence Frames",
    desc: "Create scaffolded academic sentence frames for classroom discussions.",
    href: "/support",
    color: "#dbeafe",
  },
  {
    icon: "📝",
    title: "Vocabulary Supports",
    desc: "Generate multilingual vocabulary lists and academic language supports.",
    href: "/support",
    color: "#fef3c7",
  },
  {
    icon: "📋",
    title: "Chunked Directions",
    desc: "Break down classroom instructions into accessible student-friendly steps.",
    href: "/support",
    color: "#fce7f3",
  },
  {
    icon: "🌍",
    title: "Multilingual Learning",
    desc: "Support ELL, ESOL, bilingual, and multilingual classrooms with ease.",
    href: "/about",
    color: "#dcfce7",
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #f8fafc 100%)",
        color: "#0d1f3c",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "90px 20px 70px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#ccfbf1",
              color: "#0f766e",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "14px",
              marginBottom: "28px",
            }}
          >
            🌍 WIDA-Aligned Multilingual Learning Tools
          </div>

          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 1.05,
              marginBottom: "24px",
              fontWeight: 800,
              letterSpacing: "-2px",
            }}
          >
            EduPrompt
            <br />
            Multilingual Support
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "20px",
              lineHeight: 1.8,
              color: "#64748b",
            }}
          >
            Create classroom-ready multilingual supports including language
            objectives, sentence frames, vocabulary scaffolds, Greek & Latin
            roots instruction, and differentiated learning tools for ELL and
            ESOL classrooms.
          </p>

          <div
            style={{
              marginTop: "42px",
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/support">
              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(37,99,235,0.25)",
                }}
              >
                Open Support Builder →
              </button>
            </Link>

            <Link href="/roots">
              <button
                style={{
                  background: "white",
                  color: "#0d1f3c",
                  border: "1.5px solid #e2e8f0",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Open Roots Guide →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "30px 20px 90px",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            <p
              style={{
                color: "#0f766e",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "13px",
                marginBottom: "12px",
              }}
            >
              Classroom Tools
            </p>

            <h2
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                marginBottom: "16px",
                fontWeight: 800,
              }}
            >
              Everything teachers need in one place
            </h2>

            <p
              style={{
                maxWidth: "680px",
                margin: "0 auto",
                color: "#64748b",
                fontSize: "18px",
                lineHeight: 1.7,
              }}
            >
              Designed for multilingual learners, ELL instruction, ESOL
              classrooms, literacy intervention, and academic vocabulary
              support.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "24px",
                    padding: "32px",
                    height: "100%",
                    transition: "0.2s ease",
                    boxShadow: "0 8px 30px rgba(15,23,42,0.04)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "18px",
                      background: feature.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      marginBottom: "24px",
                    }}
                  >
                    {feature.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "24px",
                      marginBottom: "14px",
                      fontWeight: 700,
                      color: "#0d1f3c",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      color: "#64748b",
                      lineHeight: 1.8,
                      fontSize: "16px",
                    }}
                  >
                    {feature.desc}
                  </p>

                  <div
                    style={{
                      marginTop: "22px",
                      color: "#2563eb",
                      fontWeight: 700,
                      fontSize: "15px",
                    }}
                  >
                    Open Tool →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0d1f3c",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
              marginBottom: "20px",
              fontWeight: 800,
            }}
          >
            Support every multilingual learner
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              fontSize: "19px",
              marginBottom: "36px",
            }}
          >
            Build classroom-ready multilingual supports in minutes with
            EduPrompt Multilingual Support.
          </p>

          <Link href="/support">
            <button
              style={{
                background: "#14b8a6",
                color: "white",
                border: "none",
                padding: "18px 34px",
                borderRadius: "16px",
                fontWeight: 700,
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              Launch Support Builder →
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#071429",
          color: "rgba(255,255,255,0.7)",
          padding: "28px 20px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} EduPrompt Solutions • Multilingual Support
      </footer>
    </main>
  );
}
