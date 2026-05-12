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
