import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
        color: "#0f172a",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#0d9488", fontWeight: 800 }}>
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: "48px", marginTop: "30px" }}>
          About EduPrompt Multilingual Support
        </h1>

        <p style={{ fontSize: "20px", lineHeight: 1.8, color: "#475569" }}>
          EduPrompt Multilingual Support helps teachers create classroom-ready
          supports for English learners and multilingual students.
        </p>

        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#64748b" }}>
          The tool generates language objectives, vocabulary scaffolds,
          sentence frames, chunked directions, partner talk prompts, visual
          support ideas, modified student tasks, and assessment supports.
        </p>

        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#64748b" }}>
          This standalone app is part of the EduPrompt Solutions ecosystem,
          designed to help teachers plan faster while improving access for all
          learners.
        </p>

        <Link href="/support">
          <button
            style={{
              background: "#0d9488",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "16px 26px",
              fontSize: "16px",
              fontWeight: 800,
              cursor: "pointer",
              marginTop: "24px",
            }}
          >
            Open Support Builder →
          </button>
        </Link>
      </div>
    </main>
  );
}
