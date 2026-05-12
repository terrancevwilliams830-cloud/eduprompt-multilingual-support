import Link from "next/link";

export default function DashboardSupportBuilderPage() {
  return (
    <div>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Support Builder
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
        Generate WIDA-aligned multilingual supports including language
        objectives, sentence frames, vocabulary scaffolds, chunked directions,
        visual supports, and modified tasks.
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
        <h2 style={{ marginBottom: "12px" }}>Current Builder</h2>

        <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: "22px" }}>
          Your working Support Builder already exists on the main route. This
          dashboard page connects teachers to that tool while we build the
          advanced dashboard version.
        </p>

        <Link href="/support">
          <button
            style={{
              background: "#0d9488",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "14px 22px",
              fontWeight: 800,
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Open Full Support Builder →
          </button>
        </Link>
      </div>
    </div>
  );
}
