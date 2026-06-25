const decisions = [
  {
    num: "01",
    title: "Runtime JS Execution over Pre-computed Outputs",
    p: [
      "Storing execute arrow functions instead of hardcoded output rows keeps the entire registry under 2,000 lines. Pre-computing outputs for 30 functions × 3 languages × 4 variants each would produce an unmaintainable file.",
      "Runtime execution means adding a new function takes 10 lines, not 200. Output always reflects actual JS behaviour - there is no snapshot to drift out of sync when a function's logic changes.",
    ],
    bullets: [
      "Registry stays under 2,000 lines vs 15,000+ pre-computed",
      "Output always reflects actual JS behaviour",
      "Adding a function requires no snapshot update",
    ],
  },
  {
    num: "02",
    title: "Single Registry over Per-language Files",
    p: [
      "All three languages live inside one FUNCTIONS object keyed by function ID. An earlier version split into pandas_functions.js, polars_functions.js, and pyspark_functions.js - querying 'all null handling functions' required merging three sources.",
      "One file, one import, one source of truth. Atomic commits, no file-coordination, and a single place to audit the full function surface.",
    ],
    bullets: [
      "One FUNCTIONS object keyed by function ID",
      "Cross-language queries from a single source",
      "No file-merging required for any feature",
    ],
  },
  {
    num: "03",
    title: "code as a Language-keyed Object",
    p: [
      "Each variant stores code: { pandas, polars, pyspark } rather than a single string. Omitting a key - for example, Polars has no thresh parameter on dropna - signals no native equivalent cleanly.",
      "The absence of a key is meaningful data, not an oversight. The UI reads this and renders a 'No direct equivalent' badge rather than an empty code block.",
    ],
    bullets: [
      "Omitting a key signals no native equivalent",
      "No placeholder strings or misleading empty values",
      "Type-safe per-language code access",
    ],
  },
  {
    num: "04",
    title: "Deliberate Data Quality Issues in the Dummy Table",
    p: [
      "The shared DATA_TABLE has intentional nulls across four columns, an empty string, a double space, leading/trailing whitespace, a sentinel value of -999, an invalid date string, and two duplicate rows.",
      "Every function category has something real to demonstrate. Clean data would make null-handling functions pointless, deduplication vacuous, and string operations trivial. The data is designed to make every category's purpose visible at a glance.",
    ],
    bullets: [
      "Intentional nulls, empty strings, and a sentinel value of -999",
      "Duplicate rows and mixed casing for real-world demos",
      "Invalid date string to demonstrate errors='coerce' behaviour",
    ],
  },
  {
    num: "05",
    title: "Honest Notes over Pure Documentation",
    p: [
      "Every function variant includes a notes field that explains when NOT to use it, what surprises to expect, and what real-world implications the operation has. Mean imputation warns against use on financial data. dropna warns that empty strings survive the operation.",
      "Documentation that only shows the happy path is incomplete. The notes field is the anti-documentation - it surfaces the edge cases, the gotchas, and the decisions that experienced engineers make silently.",
    ],
    bullets: [
      "Every variant has a notes field - not just a description",
      "Warnings on when NOT to use a function",
      "Real-world implications, not just API surface",
    ],
  },
];

export const DataDictDecisions = () => {
  return (
    <section className="dd-chapters dd-chapters--alt">
      <div className="dd-chapters-header">
        <span className="dd-section-label">Engineering Decisions</span>
        <h2>Key Design Choices</h2>
      </div>

      {decisions.map((d, i) => (
        <div
          key={d.num}
          className={`dd-chapter${i % 2 === 1 ? " dd-chapter--right" : ""}`}
        >
          <span className="dd-chapter-num">{d.num}</span>
          <div className="dd-chapter-body">
            <h3 className="dd-chapter-title">{d.title}</h3>
            {d.p.map((text, j) => (
              <p key={j} className="dd-chapter-p">{text}</p>
            ))}
            <ul className="dd-chapter-list">
              {d.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
