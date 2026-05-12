import Link from "next/link";

const cards = [
  {
    title: "Support Builder",
    desc: "Generate WIDA-aligned language objectives, sentence frames, vocabulary supports, and chunked directions.",
    href: "/dashboard/support-builder",
    icon: "🌍",
  },
  {
    title: "Roots & Vocabulary",
    desc: "Open Greek and Latin roots, academic vocabulary, cognates, and word attack strategies.",
    href: "/dashboard/roots",
    icon: "📚",
  },
  {
    title: "Accommodations",
    desc: "Build classroom and testing accommodations for multilingual learners.",
    href: "/dashboard/accommodations",
    icon: "♿",
  },
  {
    title: "Progress Monitoring",
    desc: "Track vocabulary, reading, writing, speaking, and listening growth.",
    href: "/dashboard/progress",
    icon: "📈",
  },
  {
    title: "Parent Communication",
    desc: "Create family-friendly multilingual parent messages and updates.",
    href: "/dashboard/parent-comms",
    icon: "💬",
  },
  {
    title: "Settings",
    desc: "Manage platform preferences and future account settings.",
    href: "/dashboard/settings",
    icon: "⚙️",
  },
];

export default function DashboardHomePage() {
  return (
    <div>
      <h1 style={{ fontSize: "38px", marginBottom: "10px" }}>
        Welcome to EduPrompt Multilingual Support
      </h1>

      <p
        style={{
          color: "#64748b",
          fontSize: "18px",
          lineHeight: 1.7,
          maxWidth: "760px",
          marginBottom: "30px",
        }}
      >
        Use this dashboard to create classroom-ready language supports,
        vocabulary scaffolds, accommodations, parent communication, and progress
        monitoring tools for multilingual learners.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card) => (
          <Link key={card.title} href={card.href} style={{ textDecoration: "none" }}>
            <div
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "20px",
                padding: "26px",
                height: "100%",
                boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "16px" }}>
                {card.icon}
              </div>

              <h2 style={{ fontSize: "22px", color: "#0d1f3c", marginBottom: "10px" }}>
                {card.title}
              </h2>

              <p style={{ color: "#64748b", lineHeight: 1.7 }}>
                {card.desc}
              </p>

              <p style={{ color: "#0d9488", fontWeight: 800, marginTop: "18px" }}>
                Open Tool →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
