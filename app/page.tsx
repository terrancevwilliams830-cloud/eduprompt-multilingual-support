import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fffd 0%, #eefcff 50%, #ffffff 100%)",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#ccfbf1",
            color: "#0f766e",
            padding: "10px 22px",
            borderRadius: "999px",
            fontWeight: 800,
            marginBottom: "30px",
          }}
        >
          EduPrompt Multilingual Support
        </div>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: 1.05,
            marginBottom: "26px",
            fontWeight: 900,
          }}
        >
          Build Classroom-Ready Supports
          <br />
          for Multilingual Learners
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.7,
            color: "#475569",
            maxWidth: "820px",
            margin: "0 auto 44px",
          }}
        >
          Create language objectives, vocabulary scaffolds, sentence frames,
          chunked directions, visual supports, and differentiated tasks in minutes.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "70px",
          }}
        >
          <Link href="/support">
            <button style={primaryButton}>Open Support Builder</button>
          </Link>

          <Link href="/about">
            <button style={secondaryButton}>Learn More</button>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            "Language Objectives",
            "Vocabulary Scaffolds",
            "Sentence Frames",
            "Chunked Directions",
            "Visual Supports",
            "Differentiated Output",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "22px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{item}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Teacher-friendly supports designed to improve access without lowering the learning target.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const primaryButton: React.CSSProperties = {
  background: "#0d9488",
  color: "white",
  border: "none",
  padding: "18px 32px",
  borderRadius: "14px",
  fontSize: "18px",
  fontWeight: 800,
  cursor: "pointer",
};

const secondaryButton: React.CSSProperties = {
  background: "white",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  padding: "18px 32px",
  borderRadius: "14px",
  fontSize: "18px",
  fontWeight: 800,
  cursor: "pointer",
};
