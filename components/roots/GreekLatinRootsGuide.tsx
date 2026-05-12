"use client";

import { useState } from "react";

type RootData = {
  root: string;
  origin: string;
  meaning: string;
  examples: string[];
  breakdown: string;
  cognates: {
    es: string;
    fr: string;
    ht: string;
  };
  color: string;
};

const roots: Record<string, RootData[]> = {
  "🌿 Life, Earth & Nature": [
    {
      root: "bio",
      origin: "Greek",
      meaning: "life",
      examples: ["biology", "biography", "antibiotic"],
      breakdown:
        "bio + logy = study of life\nauto + bio + graphy = writing about one’s own life",
      cognates: {
        es: "biología",
        fr: "biologie",
        ht: "biyoloji",
      },
      color: "#4c7a5a",
    },
    {
      root: "geo",
      origin: "Greek",
      meaning: "earth",
      examples: ["geography", "geology", "geothermal"],
      breakdown:
        "geo + graphy = writing about the earth\ngeo + logy = study of the earth",
      cognates: {
        es: "geografía",
        fr: "géographie",
        ht: "jewografi",
      },
      color: "#4c7a5a",
    },
    {
      root: "hydro",
      origin: "Greek",
      meaning: "water",
      examples: ["hydroelectric", "hydrogen", "hydration"],
      breakdown: "hydro + electric = electricity from water",
      cognates: {
        es: "hidroeléctrico",
        fr: "hydroélectrique",
        ht: "idwoelektrik",
      },
      color: "#2d6a7f",
    },
    {
      root: "therm",
      origin: "Greek",
      meaning: "heat",
      examples: ["thermometer", "thermostat", "geothermal"],
      breakdown: "therm + meter = instrument that measures heat",
      cognates: {
        es: "termómetro",
        fr: "thermomètre",
        ht: "tèmomèt",
      },
      color: "#b8611a",
    },
  ],
  "✍️ Language, Writing & Thinking": [
    {
      root: "scrib / script",
      origin: "Latin",
      meaning: "write",
      examples: ["describe", "manuscript", "inscription"],
      breakdown:
        "manu + script = written by hand\nde + scribe = write down in detail",
      cognates: {
        es: "describir",
        fr: "décrire",
        ht: "dekri",
      },
      color: "#a84c5a",
    },
    {
      root: "dict",
      origin: "Latin",
      meaning: "say or tell",
      examples: ["predict", "contradict", "dictionary"],
      breakdown:
        "pre + dict = say before it happens\ncontra + dict = say the opposite",
      cognates: {
        es: "predecir",
        fr: "prédire",
        ht: "predi",
      },
      color: "#c9a84c",
    },
    {
      root: "log / logy",
      origin: "Greek",
      meaning: "word, reason, study of",
      examples: ["dialogue", "monologue", "psychology"],
      breakdown:
        "dia + logue = words between two people\nmono + logue = one person speaking alone",
      cognates: {
        es: "diálogo",
        fr: "dialogue",
        ht: "dyalòg",
      },
      color: "#5c4a8a",
    },
  ],
  "🏗️ Action Roots": [
    {
      root: "port",
      origin: "Latin",
      meaning: "carry",
      examples: ["transport", "export", "portable"],
      breakdown:
        "trans + port = carry across\nex + port = carry out of a country",
      cognates: {
        es: "transportar",
        fr: "transporter",
        ht: "transpòte",
      },
      color: "#2d6a7f",
    },
    {
      root: "struct",
      origin: "Latin",
      meaning: "build",
      examples: ["construct", "structure", "instruct"],
      breakdown:
        "con + struct = build together\nde + struct + ion = the act of un-building",
      cognates: {
        es: "construir",
        fr: "construire",
        ht: "konstrwi",
      },
      color: "#4c7a5a",
    },
    {
      root: "form",
      origin: "Latin",
      meaning: "shape",
      examples: ["transform", "formation", "reform"],
      breakdown:
        "trans + form = change the shape\nre + form = shape again",
      cognates: {
        es: "transformar",
        fr: "transformer",
        ht: "transfòme",
      },
      color: "#b8611a",
    },
  ],
};

const prefixes = [
  {
    affix: "un-",
    meaning: "not or opposite",
    examples: ["unclear", "unknown", "unlikely"],
  },
  {
    affix: "re-",
    meaning: "again or back",
    examples: ["rewrite", "recycle", "return"],
  },
  {
    affix: "pre-",
    meaning: "before",
    examples: ["preview", "predict", "prefix"],
  },
  {
    affix: "trans-",
    meaning: "across, through, or change",
    examples: ["transport", "translate", "transform"],
  },
  {
    affix: "multi-",
    meaning: "many",
    examples: ["multilingual", "multiply", "multicultural"],
  },
];

const suffixes = [
  {
    affix: "-logy",
    meaning: "study of",
    examples: ["biology", "geology", "psychology"],
  },
  {
    affix: "-tion / -sion",
    meaning: "act, process, or state",
    examples: ["narration", "discussion", "decision"],
  },
  {
    affix: "-able / -ible",
    meaning: "able to be",
    examples: ["visible", "predictable", "credible"],
  },
  {
    affix: "-ly",
    meaning: "in a certain way",
    examples: ["quickly", "clearly", "significantly"],
  },
];

const academicWords = [
  {
    word: "analyze",
    definition: "Break apart and examine closely.",
  },
  {
    word: "compare",
    definition: "Tell how two or more things are alike.",
  },
  {
    word: "contrast",
    definition: "Tell how two or more things are different.",
  },
  {
    word: "infer",
    definition: "Use clues to figure out something not directly stated.",
  },
  {
    word: "cite evidence",
    definition: "Use proof from the text to support your answer.",
  },
  {
    word: "summarize",
    definition: "Tell the most important ideas briefly in your own words.",
  },
  {
    word: "justify",
    definition: "Explain why an answer or claim makes sense.",
  },
  {
    word: "perspective",
    definition: "A person’s point of view or way of seeing something.",
  },
];

const practiceWords = [
  {
    word: "biology",
    parts: "bio = life | logy = study of",
    meaning: "the study of life",
  },
  {
    word: "transportation",
    parts: "trans = across | port = carry | tion = process",
    meaning: "the process of carrying something from one place to another",
  },
  {
    word: "invisible",
    parts: "in = not | vis = see | ible = able to be",
    meaning: "not able to be seen",
  },
  {
    word: "reconstruct",
    parts: "re = again | con = together | struct = build",
    meaning: "to build something again",
  },
];

const quizQuestions = [
  {
    word: "biography",
    clue: "bio = life | graph = write",
    answer: "A written account of someone’s life",
    options: [
      "A written account of someone’s life",
      "A study of rocks",
      "A type of measurement",
      "A sound device",
    ],
  },
  {
    word: "transport",
    clue: "trans = across | port = carry",
    answer: "To carry something from one place to another",
    options: [
      "To carry something from one place to another",
      "To write something down",
      "To make something smaller",
      "To study living things",
    ],
  },
  {
    word: "invisible",
    clue: "in = not | vis = see | ible = able to be",
    answer: "Not able to be seen",
    options: [
      "Not able to be seen",
      "Easy to hear",
      "Very bright",
      "Able to speak many languages",
    ],
  },
];

export default function GreekLatinRootsGuide() {
  const [tab, setTab] = useState("roots");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState("");

  const currentQuestion = quizQuestions[quizIndex];

  function nextQuestion() {
    setSelected("");
    setQuizIndex((prev) => (prev + 1) % quizQuestions.length);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf7f2",
        color: "#1a1a2e",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#1a1a2e",
          color: "#ffffff",
          padding: "36px 24px",
          borderRadius: "0 0 24px 24px",
        }}
      >
        <p
          style={{
            color: "#c9a84c",
            fontWeight: 800,
            letterSpacing: "2px",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Word Detectives • Multilingual Vocabulary Support
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.3rem)",
            lineHeight: 1.1,
            marginBottom: "14px",
          }}
        >
          Word Power: Greek & Latin Roots
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            maxWidth: "760px",
            lineHeight: 1.7,
            fontSize: "17px",
          }}
        >
          Help multilingual learners decode academic vocabulary using roots,
          prefixes, suffixes, cognates, and word attack strategies.
        </p>
      </header>

      <nav
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          padding: "20px",
          justifyContent: "center",
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        {[
          ["roots", "📚 Roots"],
          ["prefixes", "⬅️ Prefixes"],
          ["suffixes", "➡️ Suffixes"],
          ["vocab", "🎯 Academic Words"],
          ["strategy", "🧠 Strategy"],
          ["practice", "✍️ Practice"],
          ["quiz", "✏️ Quiz"],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              background: tab === id ? "#c9a84c" : "#f8fafc",
              color: "#1a1a2e",
              border: "1px solid #e2e8f0",
              borderRadius: "999px",
              padding: "10px 16px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 20px",
        }}
      >
        {tab === "roots" && (
          <>
            {Object.entries(roots).map(([section, items]) => (
              <section key={section} style={{ marginBottom: "32px" }}>
                <h2 style={{ marginBottom: "18px" }}>{section}</h2>

                <div style={gridStyle}>
                  {items.map((item) => (
                    <RootCard key={item.root} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </>
        )}

        {tab === "prefixes" && (
          <CardGrid
            title="Common Prefixes"
            items={prefixes.map((item) => ({
              title: item.affix,
              body: item.meaning,
              footer: item.examples.join(", "),
            }))}
          />
        )}

        {tab === "suffixes" && (
          <CardGrid
            title="Common Suffixes"
            items={suffixes.map((item) => ({
              title: item.affix,
              body: item.meaning,
              footer: item.examples.join(", "),
            }))}
          />
        )}

        {tab === "vocab" && (
          <CardGrid
            title="Academic Vocabulary"
            items={academicWords.map((item) => ({
              title: item.word,
              body: item.definition,
              footer: "Use in reading, writing, and discussion.",
            }))}
          />
        )}

        {tab === "strategy" && (
          <section>
            <h2 style={{ marginBottom: "18px" }}>5-Step Word Attack Strategy</h2>

            <div style={{ display: "grid", gap: "16px" }}>
              {[
                "Look for the prefix.",
                "Find the root or base word.",
                "Look for the suffix.",
                "Use context clues.",
                "Try your meaning in the sentence.",
              ].map((step, index) => (
                <div key={step} style={cardStyle}>
                  <h3 style={{ color: "#c9a84c" }}>Step {index + 1}</h3>
                  <p style={{ color: "#475569", fontSize: "17px" }}>{step}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                ...cardStyle,
                marginTop: "22px",
                background: "#1a1a2e",
                color: "white",
              }}
            >
              <h3 style={{ color: "#c9a84c", marginBottom: "10px" }}>
                Student Sentence Frame
              </h3>
              <p style={{ lineHeight: 1.8 }}>
                I know <strong>_____</strong> means <strong>_____</strong>. The
                word also has <strong>_____</strong>, which means{" "}
                <strong>_____</strong>. So this word probably means{" "}
                <strong>_____</strong>.
              </p>
            </div>
          </section>
        )}

        {tab === "practice" && (
          <CardGrid
            title="Practice Words"
            items={practiceWords.map((item) => ({
              title: item.word,
              body: item.parts,
              footer: `Meaning: ${item.meaning}`,
            }))}
          />
        )}

        {tab === "quiz" && (
          <section>
            <h2 style={{ marginBottom: "18px" }}>Quiz Me</h2>

            <div style={cardStyle}>
              <h3 style={{ fontSize: "30px", color: "#2d6a7f" }}>
                {currentQuestion.word}
              </h3>

              <p style={{ color: "#64748b", marginBottom: "20px" }}>
                Clue: {currentQuestion.clue}
              </p>

              <div style={{ display: "grid", gap: "12px" }}>
                {currentQuestion.options.map((option) => {
                  const isCorrect =
                    selected && option === currentQuestion.answer;
                  const isWrong =
                    selected === option && option !== currentQuestion.answer;

                  return (
                    <button
                      key={option}
                      onClick={() => setSelected(option)}
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                        background: isCorrect
                          ? "#dcfce7"
                          : isWrong
                          ? "#fee2e2"
                          : "#ffffff",
                        cursor: "pointer",
                        textAlign: "left",
                        fontWeight: 700,
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selected && (
                <button
                  onClick={nextQuestion}
                  style={{
                    marginTop: "20px",
                    background: "#1a1a2e",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    padding: "12px 18px",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Next Question →
                </button>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function RootCard({ item }: { item: RootData }) {
  return (
    <div
      style={{
        ...cardStyle,
        borderLeft: `6px solid ${item.color}`,
      }}
    >
      <h3 style={{ fontSize: "28px", color: item.color }}>{item.root}</h3>
      <p style={{ color: "#64748b", fontWeight: 800 }}>{item.origin}</p>

      <p style={{ marginTop: "12px", fontSize: "17px" }}>
        Meaning: <strong>{item.meaning}</strong>
      </p>

      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          margin: "14px 0",
        }}
      >
        {item.examples.map((example) => (
          <span key={example} style={chipStyle}>
            {example}
          </span>
        ))}
      </div>

      <p
        style={{
          color: "#475569",
          lineHeight: 1.6,
          whiteSpace: "pre-line",
          fontSize: "14px",
        }}
      >
        {item.breakdown}
      </p>

      <p
        style={{
          marginTop: "14px",
          color: "#64748b",
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        🇪🇸 {item.cognates.es} | 🇫🇷 {item.cognates.fr} | 🇭🇹{" "}
        {item.cognates.ht}
      </p>
    </div>
  );
}

function CardGrid({
  title,
  items,
}: {
  title: string;
  items: { title: string; body: string; footer: string }[];
}) {
  return (
    <section>
      <h2 style={{ marginBottom: "18px" }}>{title}</h2>

      <div style={gridStyle}>
        {items.map((item) => (
          <div key={item.title} style={cardStyle}>
            <h3 style={{ color: "#2d6a7f", fontSize: "24px" }}>
              {item.title}
            </h3>
            <p style={{ color: "#475569", lineHeight: 1.7 }}>{item.body}</p>
            <p
              style={{
                color: "#64748b",
                marginTop: "12px",
                fontSize: "14px",
              }}
            >
              {item.footer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const cardStyle: React.CSSProperties = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "22px",
  boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
};

const chipStyle: React.CSSProperties = {
  background: "#f1f5f9",
  border: "1px solid #e2e8f0",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: 700,
};
