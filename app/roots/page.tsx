"use client";

import Link from "next/link";
import { useState } from "react";

const roots = [
  {
    root: "bio",
    origin: "Greek",
    meaning: "life",
    examples: ["biology", "biography", "antibiotic"],
    cognates: "Spanish: biología | French: biologie | Haitian Creole: biyoloji",
  },
  {
    root: "geo",
    origin: "Greek",
    meaning: "earth",
    examples: ["geography", "geology", "geothermal"],
    cognates: "Spanish: geografía | French: géographie | Haitian Creole: jewografi",
  },
  {
    root: "hydro",
    origin: "Greek",
    meaning: "water",
    examples: ["hydroelectric", "hydrogen", "hydration"],
    cognates: "Spanish: hidroeléctrico | French: hydroélectrique",
  },
  {
    root: "therm",
    origin: "Greek",
    meaning: "heat",
    examples: ["thermometer", "thermostat", "geothermal"],
    cognates: "Spanish: termómetro | French: thermomètre",
  },
  {
    root: "photo",
    origin: "Greek",
    meaning: "light",
    examples: ["photosynthesis", "photograph", "photon"],
    cognates: "Spanish: fotografía | French: photographie",
  },
  {
    root: "scrib / script",
    origin: "Latin",
    meaning: "write",
    examples: ["describe", "manuscript", "inscription"],
    cognates: "Spanish: describir | French: décrire | Haitian Creole: dekri",
  },
  {
    root: "dict",
    origin: "Latin",
    meaning: "say or tell",
    examples: ["predict", "contradict", "dictionary"],
    cognates: "Spanish: predecir | French: prédire",
  },
  {
    root: "port",
    origin: "Latin",
    meaning: "carry",
    examples: ["transport", "export", "portable"],
    cognates: "Spanish: transportar | French: transporter",
  },
  {
    root: "struct",
    origin: "Latin",
    meaning: "build",
    examples: ["construct", "structure", "instruct"],
    cognates: "Spanish: construir | French: construire",
  },
  {
    root: "vis / spect",
    origin: "Latin",
    meaning: "see or look",
    examples: ["visible", "inspect", "perspective"],
    cognates: "Spanish: visible | French: visible | Haitian Creole: vizib",
  },
];

const prefixes = [
  { affix: "un-", meaning: "not or opposite", examples: "unclear, unknown, unlikely" },
  { affix: "re-", meaning: "again or back", examples: "rewrite, recycle, return" },
  { affix: "pre-", meaning: "before", examples: "preview, predict, prefix" },
  { affix: "trans-", meaning: "across or change", examples: "transport, translate, transform" },
  { affix: "multi-", meaning: "many", examples: "multicultural, multilingual, multiply" },
];

const academicWords = [
  { word: "analyze", meaning: "break apart and study closely" },
  { word: "compare", meaning: "tell how things are alike" },
  { word: "contrast", meaning: "tell how things are different" },
  { word: "infer", meaning: "use clues to figure out meaning" },
  { word: "cite evidence", meaning: "use proof from the text" },
  { word: "summarize", meaning: "tell the most important ideas briefly" },
];

export default function RootsPage() {
  const [tab, setTab] = useState("roots");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf7f2",
        fontFamily: "Arial, sans-serif",
        color: "#1a1a2e",
      }}
    >
      <header
        style={{
          background: "#1a1a2e",
          color: "white",
          padding: "42px 22px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Link href="/" style={{ color: "#c9a84c", fontWeight: 800 }}>
            ← Back to Multilingual Support
          </Link>

          <h1
            style={{
              fontSize: "52px",
              marginTop: "28px",
              marginBottom: "12px",
            }}
          >
            Word Power: Greek & Latin Roots
          </h1>

          <p
            style={{
              fontSize: "19px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "720px",
              lineHeight: 1.7,
            }}
          >
            Help multilingual learners decode academic vocabulary using roots,
            prefixes, cognates, and word attack strategies.
          </p>
        </div>
      </header>

      <nav
        style={{
          background: "white",
          borderBottom: "1px solid #e2e8f0",
          padding: "14px 20px",
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[
          ["roots", "Roots"],
          ["prefixes", "Prefixes"],
          ["vocab", "Academic Words"],
          ["strategy", "Word Strategy"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              background: tab === id ? "#c9a84c" : "#f8fafc",
              color: tab === id ? "#1a1a2e" : "#475569",
              border: "1px solid #e2e8f0",
              borderRadius: "999px",
              padding: "10px 18px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "38px 20px" }}>
        {tab === "roots" && (
          <div>
            <h2 style={sectionTitle}>Greek & Latin Roots</h2>

            <div style={grid}>
              {roots.map((item) => (
                <div key={item.root} style={card}>
                  <h3 style={{ fontSize: "28px", color: "#2d6a7f" }}>{item.root}</h3>
                  <p style={{ fontWeight: 800, color: "#64748b" }}>{item.origin}</p>
                  <p style={{ fontSize: "18px", margin: "12px 0" }}>
                    Meaning: <strong>{item.meaning}</strong>
                  </p>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}>
                    {item.examples.map((example) => (
                      <span key={example} style={chip}>
                        {example}
                      </span>
                    ))}
                  </div>

                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>
                    {item.cognates}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "prefixes" && (
          <div>
            <h2 style={sectionTitle}>Common Prefixes</h2>

            <div style={grid}>
              {prefixes.map((item) => (
                <div key={item.affix} style={card}>
                  <h3 style={{ fontSize: "28px", color: "#a84c5a" }}>{item.affix}</h3>
                  <p style={{ fontSize: "18px" }}>
                    Meaning: <strong>{item.meaning}</strong>
                  </p>
                  <p style={{ color: "#64748b", marginTop: "12px" }}>
                    Examples: {item.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "vocab" && (
          <div>
            <h2 style={sectionTitle}>Academic Vocabulary</h2>

            <div style={grid}>
              {academicWords.map((item) => (
                <div key={item.word} style={card}>
                  <h3 style={{ fontSize: "26px", color: "#4c7a5a" }}>{item.word}</h3>
                  <p style={{ color: "#475569", fontSize: "17px", lineHeight: 1.6 }}>
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "strategy" && (
          <div>
            <h2 style={sectionTitle}>5-Step Word Attack Strategy</h2>

            <div style={{ display: "grid", gap: "18px" }}>
              {[
                "Look for the prefix.",
                "Find the root or base word.",
                "Look for the suffix.",
                "Use context clues from the sentence.",
                "Try your meaning in the sentence.",
              ].map((step, index) => (
                <div key={step} style={card}>
                  <h3 style={{ color: "#c9a84c" }}>Step {index + 1}</h3>
                  <p style={{ fontSize: "19px", color: "#475569" }}>{step}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "28px",
                background: "#1a1a2e",
                color: "white",
                padding: "28px",
                borderRadius: "18px",
              }}
            >
              <h3 style={{ color: "#c9a84c", marginBottom: "14px" }}>
                Student Sentence Frame
              </h3>
              <p style={{ lineHeight: 1.8 }}>
                I know <strong>_____</strong> means <strong>_____</strong>.
                The word also has <strong>_____</strong>, which means{" "}
                <strong>_____</strong>. So this word probably means{" "}
                <strong>_____</strong>.
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

const sectionTitle: React.CSSProperties = {
  fontSize: "36px",
  marginBottom: "24px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
};

const chip: React.CSSProperties = {
  background: "#f1f5f9",
  border: "1px solid #e2e8f0",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: 700,
};
