"use client";

import { useState } from "react";
import Link from "next/link";

const grades = [
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
];

const subjects = [
  "Reading",
  "Literature",
  "Math",
  "Science",
  "Social Studies",
  "Economics",
  "Personal Finance",
  "CTAE",
  "Art",
  "PE",
];

const states = [
  "Georgia",
  "Alabama",
  "Florida",
  "North Carolina",
  "South Carolina",
  "Tennessee",
  "Texas",
  "California",
  "New York",
  "Other",
];

const levels = [
  "Entering",
  "Emerging",
  "Developing",
  "Expanding",
  "Bridging",
  "Reaching",
];

const languages = [
  "Spanish",
  "Haitian Creole",
  "Arabic",
  "Vietnamese",
  "Chinese",
  "Korean",
  "French",
  "Portuguese",
  "Other",
];

const supportTypes = [
  "Vocabulary Support",
  "Sentence Frames",
  "Chunked Directions",
  "Partner Talk",
  "Visual Supports",
  "Modified Assignment",
  "Assessment Support",
  "Full Support Pack",
];

export default function SupportPage() {
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [state, setState] = useState("");
  const [level, setLevel] = useState("");
  const [language, setLanguage] = useState("");
  const [topic, setTopic] = useState("");
  const [standard, setStandard] = useState("");
  const [teacherGoal, setTeacherGoal] = useState("");
  const [supportType, setSupportType] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  function generateSupportPlan() {
    setLoading(true);

    setTimeout(() => {
      const plan = `
SUPPORT PLAN TITLE:
${topic || "Classroom Support Plan"} — Multilingual Learner Support

GRADE / SUBJECT / PROFICIENCY LEVEL:
Grade: ${grade || "Not selected"}
Subject: ${subject || "Not selected"}
State: ${state || "Not selected"}
English Proficiency Level: ${level || "Not selected"}
Student Language Background: ${language || "Not selected"}

STANDARD:
${standard || "Teacher will add standard."}

CONTENT OBJECTIVE:
Students will understand and apply key concepts related to ${topic || "the lesson topic"} while engaging with grade-level content.

LANGUAGE OBJECTIVE:
Students will use academic language to describe, explain, discuss, and respond to ideas related to ${topic || "the lesson topic"} using appropriate scaffolds.

KEY VOCABULARY:
- Topic vocabulary connected to ${topic || "the lesson"}
- Academic verbs such as identify, explain, describe, compare, analyze
- Content words selected by the teacher

STUDENT-FRIENDLY DEFINITIONS:
Provide simple definitions, visuals, examples, and gestures when introducing new vocabulary. Allow students to repeat the words orally before using them in writing.

SENTENCE FRAMES:
- I notice that ___.
- The main idea is ___.
- One example is ___.
- I agree because ___.
- My answer is ___ because ___.
- The evidence shows ___.

CHUNKED DIRECTIONS:
1. Review the vocabulary words.
2. Look at the visual example or model.
3. Read or listen to the first part of the task.
4. Talk with a partner before writing.
5. Complete the response using the sentence frames.
6. Check your work with the teacher or partner.

VISUAL SUPPORT IDEAS:
- Picture vocabulary cards
- Labeled diagrams
- Anchor chart
- Graphic organizer
- Teacher model
- Step-by-step example
- Word bank

PARTNER TALK PROMPT:
Turn and talk: Explain what you understand about ${topic || "today's lesson"} using at least one vocabulary word.

MODIFIED STUDENT TASK:
Students will complete the same learning target with reduced language load. They may use sentence frames, word banks, visuals, oral rehearsal, labeled drawings, or shorter written responses.

ASSESSMENT SUPPORT:
Assess the content understanding first. Allow students to show understanding through short responses, oral explanation, matching, labeling, drawing, or supported writing.

TEACHER NOTES:
Support Type Selected: ${supportType || "Not selected"}
Teacher Goal: ${teacherGoal || "Not entered"}

Teacher reminder: Provide meaningful access to the content without lowering the standard. Reduce unnecessary language barriers while keeping the academic expectation clear.
      `.trim();

      setOutput(plan);
      setLoading(false);
    }, 800);
  }

  async function copyOutput() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    alert("Support plan copied!");
  }

  function clearForm() {
    setGrade("");
    setSubject("");
    setState("");
    setLevel("");
    setLanguage("");
    setTopic("");
    setStandard("");
    setTeacherGoal("");
    setSupportType("");
    setOutput("");
  }

  function printPlan() {
    window.print();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#0d9488", fontWeight: 800 }}>
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: "50px", marginTop: "28px" }}>
          Multilingual Support Builder
        </h1>

        <p style={{ fontSize: "20px", color: "#475569", marginBottom: "34px" }}>
          Generate classroom-ready supports for multilingual learners, including
          language objectives, vocabulary scaffolds, sentence frames, chunked
          directions, and modified tasks.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(300px, 420px) 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <section style={card}>
            <h2>Support Details</h2>

            <Field label="Grade Level">
              <select value={grade} onChange={(e) => setGrade(e.target.value)} style={input}>
                <option value="">Select grade</option>
                {grades.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Subject">
              <select value={subject} onChange={(e) => setSubject(e.target.value)} style={input}>
                <option value="">Select subject</option>
                {subjects.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="State">
              <select value={state} onChange={(e) => setState(e.target.value)} style={input}>
                <option value="">Select state</option>
                {states.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="English Proficiency Level">
              <select value={level} onChange={(e) => setLevel(e.target.value)} style={input}>
                <option value="">Select level</option>
                {levels.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Student Language Background">
              <select value={language} onChange={(e) => setLanguage(e.target.value)} style={input}>
                <option value="">Select language</option>
                {languages.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>

            <Field label="Lesson Topic">
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Example: The Water Cycle"
                style={input}
              />
            </Field>

            <Field label="Standard">
              <input
                value={standard}
                onChange={(e) => setStandard(e.target.value)}
                placeholder="Example: S6E3 or ELAGSE5RI2"
                style={input}
              />
            </Field>

            <Field label="Teacher Goal">
              <textarea
                value={teacherGoal}
                onChange={(e) => setTeacherGoal(e.target.value)}
                placeholder="What should students be able to do?"
                rows={4}
                style={input}
              />
            </Field>

            <Field label="Support Type">
              <select
                value={supportType}
                onChange={(e) => setSupportType(e.target.value)}
                style={input}
              >
                <option value="">Select support type</option>
                {supportTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>

            <button onClick={generateSupportPlan} style={primaryButton}>
              {loading ? "Generating..." : "Generate Support Plan"}
            </button>

            <button onClick={clearForm} style={secondaryButton}>
              Clear Form
            </button>
          </section>

          <section style={card}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <h2>Generated Support Plan</h2>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={copyOutput} style={darkButton}>
                  Copy
                </button>

                <button onClick={printPlan} style={outlineButton}>
                  Print
                </button>
              </div>
            </div>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "24px",
                minHeight: "620px",
                fontSize: "15px",
                lineHeight: 1.7,
                fontFamily: "Arial, sans-serif",
              }}
            >
              {loading
                ? "Loading animation: Building your multilingual support plan..."
                : output || "Your generated multilingual support plan will appear here."}
            </pre>

            <div
              style={{
                marginTop: "20px",
                padding: "18px",
                background: "#ccfbf1",
                borderRadius: "14px",
                color: "#0f766e",
                fontWeight: 800,
                lineHeight: 1.6,
              }}
            >
              Export Section: Copy or print this support plan, then paste it
              into Canvas, Google Docs, district lesson templates, classroom
              handouts, or student support plans.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "block", marginTop: "18px" }}>
      <strong style={{ display: "block", marginBottom: "8px" }}>{label}</strong>
      {children}
    </label>
  );
}

const card: React.CSSProperties = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "28px",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  boxSizing: "border-box",
};

const primaryButton: React.CSSProperties = {
  width: "100%",
  marginTop: "24px",
  padding: "16px",
  background: "#0d9488",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontWeight: 800,
  fontSize: "16px",
  cursor: "pointer",
};

const secondaryButton: React.CSSProperties = {
  width: "100%",
  marginTop: "12px",
  padding: "15px",
  background: "white",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  borderRadius: "12px",
  fontWeight: 800,
  fontSize: "15px",
  cursor: "pointer",
};

const darkButton: React.CSSProperties = {
  background: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "11px 16px",
  fontWeight: 800,
  cursor: "pointer",
};

const outlineButton: React.CSSProperties = {
  background: "white",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  borderRadius: "10px",
  padding: "11px 16px",
  fontWeight: 800,
  cursor: "pointer",
};
