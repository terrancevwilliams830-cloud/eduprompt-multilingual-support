import Link from "next/link";

export default function DashboardRootsPage() {
  return (
    <div>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Roots & Vocabulary
      </h1>

      <p
        style={{
          color: "#64748b",
          fontSize: "18px",
          lineHeight: 1.7,
          maxWidth: "760px",
          marginBottom: "28px",
        }}
      >
        Open the Greek & Latin Roots vocabulary guide for academic vocabulary,
        cognates, prefixes, suffixes, and word attack strategies.
      </p>

      <div
        style={{
          background: "white",
          border: "1px solid #e2e8f0",
          borderRadius: "22px",
          padding: "30px",
          boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>Vocabulary System</h2>

        <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: "22px" }}>
          The full Roots Guide is currently available as a standalone page while
          we prepare the advanced dashboard vocabulary system.
        </p>

        <Link href="/roots">
          <button
            style={{
              background: "#5c4a8a",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "14px 22px",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Open Roots Guide →
          </button>
        </Link>
      </div>
    </div>
  );
}
