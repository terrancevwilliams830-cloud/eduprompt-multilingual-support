"use client";

import { useEffect, useState } from "react";

interface RootData {
  root: string;
  origin: string;
  meaning: string;
  chips: string[];
  breakdown: string;
  cogs: {
    es: string;
    fr: string;
    ht: string;
  };
  color: string;
}

const ROOTS: Record<string, RootData[]> = {
  "🌿 Life, Earth & Nature": [
    {
      root: "bio",
      origin: "Greek",
      meaning: "life",
      chips: ["biology", "biography", "antibiotic"],
      breakdown:
        'bio + logy → "study of life"\nauto + bio + graphy → "writing about one’s own life"',
      cogs: { es: "biología", fr: "biologie", ht: "biyoloji" },
      color: "sage",
    },
    {
      root: "geo",
      origin: "Greek",
      meaning: "earth",
      chips: ["geography", "geology", "geothermal"],
      breakdown:
        'geo + graphy → "writing about the earth"\ngeo + logy → "study of the earth"',
      cogs: { es: "geografía", fr: "géographie", ht: "jewografi" },
      color: "sage",
    },
    {
      root: "terr",
      origin: "Latin",
      meaning: "land, earth",
      chips: ["territory", "terrestrial", "terrain"],
      breakdown:
        'terr + itory → "area of land"\nterr + estrial → "related to the earth/land"',
      cogs: { es: "territorio", fr: "territoire", ht: "teritwa" },
      color: "sage",
    },
    {
      root: "hydro",
      origin: "Greek",
      meaning: "water",
      chips: ["hydroelectric", "hydrogen", "hydration"],
      breakdown: 'hydro + electric → "electricity from water"',
      cogs: {
        es: "hidroeléctrico",
        fr: "hydroélectrique",
        ht: "idwoelektrik",
      },
      color: "teal",
    },
    {
      root: "aqua",
      origin: "Latin",
      meaning: "water",
      chips: ["aquatic", "aquarium", "aqueduct"],
      breakdown: 'aqua + tic → "related to water"',
      cogs: { es: "acuático", fr: "aquatique", ht: "akwatik" },
      color: "teal",
    },
    {
      root: "therm",
      origin: "Greek",
      meaning: "heat",
      chips: ["thermometer", "thermostat", "geothermal"],
      breakdown: 'therm + o + meter → "instrument that measures heat"',
      cogs: { es: "termómetro", fr: "thermomètre", ht: "tèmomèt" },
      color: "orange",
    },
    {
      root: "photo",
      origin: "Greek",
      meaning: "light",
      chips: ["photosynthesis", "photograph", "photon"],
      breakdown: 'photo + synthesis → "making food using light"',
      cogs: { es: "fotografía", fr: "photographie", ht: "fotografi" },
      color: "teal",
    },
    {
      root: "luc / lum",
      origin: "Latin",
      meaning: "light",
      chips: ["translucent", "illuminate", "luminous"],
      breakdown: 'trans + luc + ent → "light passes through it"',
      cogs: { es: "iluminar", fr: "illuminer", ht: "iliminen" },
      color: "gold",
    },
    {
      root: "marine",
      origin: "Latin",
      meaning: "sea",
      chips: ["submarine", "marine life", "marina"],
      breakdown: 'sub + marine → "under the sea"',
      cogs: { es: "marino", fr: "marin", ht: "maren" },
      color: "blue",
    },
    {
      root: "ann / enn",
      origin: "Latin",
      meaning: "year",
      chips: ["annual", "anniversary", "biennial"],
      breakdown:
        'ann + ual → "happening every year"\nbi + enn + ial → "every two years"',
      cogs: { es: "anual", fr: "annuel", ht: "anyèl" },
      color: "rose",
    },
  ],

  "🔬 Senses, Size & Measurement": [
    {
      root: "micro",
      origin: "Greek",
      meaning: "small",
      chips: ["microscope", "microorganism", "microphone"],
      breakdown: 'micro + scope → "tool to see very small things"',
      cogs: { es: "microscopio", fr: "microscope", ht: "mikroskòp" },
      color: "purple",
    },
    {
      root: "macro",
      origin: "Greek",
      meaning: "large",
      chips: ["macroeconomics", "macroscopic"],
      breakdown: 'macro + economics → "large-scale economic systems"',
      cogs: { es: "macroeconomía", fr: "macroéconomie", ht: "makwoekonomik" },
      color: "purple",
    },
    {
      root: "scope",
      origin: "Greek",
      meaning: "see, view",
      chips: ["microscope", "telescope", "periscope"],
      breakdown: 'tele + scope → "instrument to see from far away"',
      cogs: { es: "telescopio", fr: "télescope", ht: "teleskòp" },
      color: "teal",
    },
    {
      root: "tele",
      origin: "Greek",
      meaning: "far, distant",
      chips: ["telegraph", "television", "telephone"],
      breakdown: 'tele + phone → "send sound from far away"',
      cogs: { es: "teléfono", fr: "téléphone", ht: "telefòn" },
      color: "teal",
    },
    {
      root: "phon",
      origin: "Greek",
      meaning: "sound",
      chips: ["telephone", "microphone", "symphony"],
      breakdown: 'micro + phone → "makes small sounds louder"',
      cogs: { es: "fonético", fr: "phonétique", ht: "fonetik" },
      color: "rose",
    },
    {
      root: "meter / metr",
      origin: "Greek",
      meaning: "measure",
      chips: ["thermometer", "metric", "diameter"],
      breakdown:
        'thermo + meter → "measures heat"\ndia + meter → "measures across"',
      cogs: { es: "métrico", fr: "métrique", ht: "metrik" },
      color: "orange",
    },
    {
      root: "aud",
      origin: "Latin",
      meaning: "hear, listen",
      chips: ["audience", "audible", "auditorium"],
      breakdown:
        'aud + ience → "those who listen"\naud + ible → "able to be heard"',
      cogs: { es: "audiencia", fr: "audience", ht: "odyans" },
      color: "blue",
    },
    {
      root: "vis / spect",
      origin: "Latin",
      meaning: "see, look",
      chips: ["visible", "inspect", "perspective"],
      breakdown:
        'in + spect → "look into carefully"\nper + spect + ive → "point of view"',
      cogs: { es: "visible", fr: "visible", ht: "vizib" },
      color: "teal",
    },
  ],

  "✍️ Language, Writing & Time": [
    {
      root: "graph / gram",
      origin: "Greek",
      meaning: "write, record",
      chips: ["paragraph", "autograph", "diagram"],
      breakdown: 'auto + graph → "signed/written by oneself"',
      cogs: { es: "gráfico", fr: "graphique", ht: "grafik" },
      color: "rose",
    },
    {
      root: "scrib / script",
      origin: "Latin",
      meaning: "write",
      chips: ["describe", "manuscript", "inscription"],
      breakdown:
        'manu + script → "written by hand"\nde + scribe → "write down in detail"',
      cogs: { es: "describir", fr: "décrire", ht: "dekri" },
      color: "rose",
    },
    {
      root: "dict",
      origin: "Latin",
      meaning: "say, tell",
      chips: ["predict", "contradict", "dictionary"],
      breakdown:
        'pre + dict → "say before it happens"\ncontra + dict → "say the opposite"',
      cogs: { es: "predecir", fr: "prédire", ht: "predi" },
      color: "gold",
    },
    {
      root: "log / logy",
      origin: "Greek",
      meaning: "word, reason, study of",
      chips: ["dialogue", "monologue", "psychology"],
      breakdown:
        'dia + logue → "words between two people"\nmono + logue → "one person speaking alone"',
      cogs: { es: "diálogo", fr: "dialogue", ht: "dyalòg" },
      color: "purple",
    },
    {
      root: "narr",
      origin: "Latin",
      meaning: "tell a story",
      chips: ["narrate", "narrator", "narrative"],
      breakdown: 'narr + ator → "the one who tells the story"',
      cogs: { es: "narrar", fr: "narrer", ht: "rakonte" },
      color: "blue",
    },
    {
      root: "chron",
      origin: "Greek",
      meaning: "time",
      chips: ["chronological", "synchronize", "anachronism"],
      breakdown:
        'chrono + logical → "arranged in order of time"\nana + chron + ism → "something out of its time"',
      cogs: { es: "cronológico", fr: "chronologique", ht: "kronolojik" },
      color: "orange",
    },
  ],
  "🏗️ Action Roots": [
    {
      root: "port",
      origin: "Latin",
      meaning: "carry",
      chips: ["transport", "export", "portable"],
      breakdown:
        'trans + port → "carry across"\nex + port → "carry out of a country"',
      cogs: {
        es: "transportar",
        fr: "transporter",
        ht: "transpòte",
      },
      color: "teal",
    },
    {
      root: "tract",
      origin: "Latin",
      meaning: "pull, drag",
      chips: ["attract", "subtract", "contract"],
      breakdown:
        'at + tract → "pull toward something"\nsub + tract → "pull away/take away"',
      cogs: {
        es: "atraer",
        fr: "attirer",
        ht: "atire",
      },
      color: "teal",
    },
    {
      root: "ject",
      origin: "Latin",
      meaning: "throw",
      chips: ["inject", "reject", "project"],
      breakdown:
        'in + ject → "throw/push into"\nre + ject → "throw back; refuse"',
      cogs: {
        es: "inyectar",
        fr: "injecter",
        ht: "enjekte",
      },
      color: "rose",
    },
    {
      root: "struct",
      origin: "Latin",
      meaning: "build",
      chips: ["construct", "structure", "instruct"],
      breakdown:
        'con + struct → "build together"\nde + struct + ion → "the act of un-building"',
      cogs: {
        es: "construir",
        fr: "construire",
        ht: "konstrwi",
      },
      color: "sage",
    },
    {
      root: "form",
      origin: "Latin",
      meaning: "shape",
      chips: ["transform", "formation", "reform"],
      breakdown:
        'trans + form → "change the shape/nature of"\nre + form → "shape again; improve"',
      cogs: {
        es: "transformar",
        fr: "transformer",
        ht: "transfòme",
      },
      color: "orange",
    },
    {
      root: "rupt",
      origin: "Latin",
      meaning: "break",
      chips: ["erupt", "interrupt", "disrupt"],
      breakdown:
        'inter + rupt → "break into/break apart"\ne + rupt → "break out"',
      cogs: {
        es: "interrumpir",
        fr: "interrompre",
        ht: "entèwonp",
      },
      color: "rose",
    },
    {
      root: "gress",
      origin: "Latin",
      meaning: "step, go",
      chips: ["progress", "congress", "regress"],
      breakdown:
        'pro + gress → "step forward; advance"\nre + gress → "step backward"',
      cogs: {
        es: "progreso",
        fr: "progrès",
        ht: "pwogrè",
      },
      color: "teal",
    },
    {
      root: "vac",
      origin: "Latin",
      meaning: "empty",
      chips: ["vacuum", "evacuate", "vacant"],
      breakdown: 'e + vacu + ate → "empty out a place"',
      cogs: {
        es: "evacuar",
        fr: "évacuer",
        ht: "evakye",
      },
      color: "gold",
    },
  ],

  "🫀 Body & People": [
    {
      root: "manu",
      origin: "Latin",
      meaning: "hand",
      chips: ["manual", "manuscript", "manufacture"],
      breakdown:
        'manu + script → "written by hand"\nmanu + al → "done by hand"',
      cogs: {
        es: "manual",
        fr: "manuel",
        ht: "manyèl",
      },
      color: "rose",
    },
    {
      root: "ped / pod",
      origin: "Latin/Greek",
      meaning: "foot",
      chips: ["pedal", "podiatrist", "pedestrian"],
      breakdown:
        'ped + al → "pushed with the foot"\nped + estrian → "one who goes on foot"',
      cogs: {
        es: "pedal",
        fr: "pédestre",
        ht: "pedès",
      },
      color: "orange",
    },
    {
      root: "cardi",
      origin: "Greek",
      meaning: "heart",
      chips: ["cardiology", "cardiac", "cardiovascular"],
      breakdown: 'cardi + ology → "study of the heart"',
      cogs: {
        es: "cardiología",
        fr: "cardiologie",
        ht: "kadyoloji",
      },
      color: "rose",
    },
    {
      root: "path",
      origin: "Greek",
      meaning: "feeling, suffering",
      chips: ["empathy", "sympathy", "apathy"],
      breakdown:
        'em + pathy → "feeling what another feels"\na + pathy → "without feeling; not caring"',
      cogs: {
        es: "empatía",
        fr: "empathie",
        ht: "anpati",
      },
      color: "purple",
    },
    {
      root: "demo",
      origin: "Greek",
      meaning: "people",
      chips: ["democracy", "demographic", "epidemic"],
      breakdown:
        'demo + cracy → "rule by the people"\ndemo + graphic → "data about people"',
      cogs: {
        es: "democracia",
        fr: "démocratie",
        ht: "demokrasi",
      },
      color: "sage",
    },
    {
      root: "loc",
      origin: "Latin",
      meaning: "place",
      chips: ["location", "relocate", "local"],
      breakdown:
        'loc + ation → "a specific place"\nre + loc + ate → "move to a new place"',
      cogs: {
        es: "localización",
        fr: "localisation",
        ht: "lokalizasyon",
      },
      color: "teal",
    },
    {
      root: "cycle",
      origin: "Greek",
      meaning: "circle, wheel",
      chips: ["recycle", "bicycle", "cyclone"],
      breakdown:
        're + cycle → "go around again"\nbi + cycle → "two wheels"',
      cogs: {
        es: "reciclar",
        fr: "recycler",
        ht: "resikle",
      },
      color: "orange",
    },
  ],
};

const PREFIXES = [
  {
    affix: "un-",
    meaning: "not, opposite",
    examples: ["unclear", "unknown", "unlikely"],
    es: "in- / no",
    fr: "in- / non-",
    ht: "pa- / non-",
  },
  {
    affix: "re-",
    meaning: "again, back",
    examples: ["rewrite", "recycle", "return"],
    es: "re- (same!)",
    fr: "re- (same!)",
    ht: "re- (same!)",
  },
  {
    affix: "pre-",
    meaning: "before",
    examples: ["preview", "predict", "prefix"],
    es: "pre- (same!)",
    fr: "pré- (same!)",
    ht: "pre- (same!)",
  },
  {
    affix: "post-",
    meaning: "after",
    examples: ["postwar", "posttest", "postpone"],
    es: "post- (same!)",
    fr: "post- (same!)",
    ht: "apre-",
  },
  {
    affix: "mis-",
    meaning: "wrong, badly",
    examples: ["misread", "mislead", "misunderstand"],
    es: "mal-",
    fr: "mal-",
    ht: "mal-",
  },
];
const SUFFIXES = [
  {
    affix: "-ology / -logy",
    meaning: "study of",
    examples: ["biology", "psychology", "geology"],
    es: "-ología",
    fr: "-ologie",
    ht: "-oloji",
  },
  {
    affix: "-tion / -sion",
    meaning: "act, process, state",
    examples: ["narration", "discussion", "decision"],
    es: "-ción / -sión",
    fr: "-tion / -sion",
    ht: "-syon / -yon",
  },
  {
    affix: "-ist",
    meaning: "person who studies/does",
    examples: ["scientist", "journalist", "artist"],
    es: "-ista",
    fr: "-iste",
    ht: "-is",
  },
  {
    affix: "-er / -or",
    meaning: "person who does",
    examples: ["teacher", "actor", "creator"],
    es: "-ador",
    fr: "-eur",
    ht: "-è",
  },
  {
    affix: "-able / -ible",
    meaning: "able to be",
    examples: ["visible", "credible", "portable"],
    es: "-able",
    fr: "-able",
    ht: "-ab",
  },
];

const QUIZ_QS = [
  {
    w: "biography",
    b: "bio (life) + graph (write)",
    a: "A written account of someone’s life",
    o: [
      "A type of science",
      "A written account of someone’s life",
      "A measurement system",
      "A government structure",
    ],
  },
  {
    w: "transport",
    b: "trans (across) + port (carry)",
    a: "To carry something from one place to another",
    o: [
      "To write clearly",
      "To carry something from one place to another",
      "To hear a sound",
      "To study nature",
    ],
  },
  {
    w: "invisible",
    b: "in- (not) + vis (see)",
    a: "Not able to be seen",
    o: [
      "Easy to understand",
      "Full of light",
      "Not able to be seen",
      "Able to be heard",
    ],
  },
];

const PRACTICE_WORDS = [
  {
    word: "biology",
    parts: [
      ["bio", "life"],
      ["+logy", "study of"],
    ],
    meaning: "the study of life",
  },
  {
    word: "transportation",
    parts: [
      ["trans", "across"],
      ["+port", "carry"],
      ["+ation", "process"],
    ],
    meaning: "the process of carrying something across",
  },
  {
    word: "reconstruct",
    parts: [
      ["re-", "again"],
      ["+struct", "build"],
    ],
    meaning: "to build again",
  },
];

const COLOR_MAP: Record<
  string,
  {
    bg: string;
    border: string;
    bar: string;
  }
> = {
  teal: {
    bg: "#d4eaf0",
    border: "#aed4e0",
    bar: "#2d6a7f",
  },
  rose: {
    bg: "#f5dde0",
    border: "#e8bfc5",
    bar: "#a84c5a",
  },
  sage: {
    bg: "#d8eedd",
    border: "#b0d9bc",
    bar: "#4c7a5a",
  },
  purple: {
    bg: "#e5dff5",
    border: "#c8bfe5",
    bar: "#5c4a8a",
  },
  orange: {
    bg: "#fde8d4",
    border: "#f0c9a5",
    bar: "#b8611a",
  },
  gold: {
    bg: "#fdf5dc",
    border: "#e8d68a",
    bar: "#c9a84c",
  },
  blue: {
    bg: "#d4e8f7",
    border: "#a8cfe5",
    bar: "#1e5f8a",
  },
};

const TABS = [
  { id: "roots", label: "📚 Roots" },
  { id: "prefixes", label: "⬅️ Prefixes" },
  { id: "suffixes", label: "➡️ Suffixes" },
  { id: "practice", label: "✍️ Practice" },
  { id: "quiz", label: "✏️ Quiz Me!" },
];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function RootCard({ data }: { data: RootData }) {
  const c = COLOR_MAP[data.color] ?? COLOR_MAP.teal;

  return (
    <div
      style={{
        background: c.bg,
        border: `1.5px solid ${c.border}`,
        borderRadius: 14,
        padding: "1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 5,
          height: "100%",
          background: c.bar,
        }}
      />

      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          marginBottom: "0.2rem",
        }}
      >
        {data.root}
      </div>

      <div
        style={{
          fontSize: "0.65rem",
          textTransform: "uppercase",
          opacity: 0.6,
          marginBottom: "0.35rem",
        }}
      >
        {data.origin}
      </div>

      <div
        style={{
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        = {data.meaning}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.3rem",
          marginBottom: "0.6rem",
        }}
      >
        {data.chips.map((chip) => (
          <span
            key={chip}
            style={{
              background: "rgba(255,255,255,0.7)",
              borderRadius: 999,
              padding: "0.15rem 0.55rem",
              fontSize: "0.68rem",
            }}
          >
            {chip}
          </span>
        ))}
      </div>

      <div
        style={{
          whiteSpace: "pre-line",
          fontSize: "0.72rem",
          color: "#555",
          marginBottom: "0.6rem",
        }}
      >
        {data.breakdown}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.3rem",
        }}
      >
        <span>🇪🇸 {data.cogs.es}</span>
        <span>🇫🇷 {data.cogs.fr}</span>
        <span>🇭🇹 {data.cogs.ht}</span>
      </div>
    </div>
  );
}
