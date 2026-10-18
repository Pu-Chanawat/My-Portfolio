#!/usr/bin/env node
/**
 * Builds projects/comprog-data.js from the C++ solutions in ComputerProgramming/.
 *
 * Run after adding / renaming / editing solutions:
 *   node tools/build-comprog-data.mjs
 *
 * Folders are discovered automatically, so a new topic folder (05_String, a new
 * contest, ...) shows up without editing this file. KNOWN_GROUPS below only
 * controls the display name and the order of folders that already exist.
 *
 * Only .cpp files that look like real solutions are included; everything that
 * is skipped is reported at the end of the run.
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "ComputerProgramming");
const OUT = join(ROOT, "projects", "comprog-data.js");

const SKIP_NAMES = new Set(["tempCodeRunnerFile.cpp", "test.cpp", "index.cpp"]);
const SKIP_REASONS = {
  "tempCodeRunnerFile.cpp": "scratch file (code-runner temp)",
  "test.cpp": "scratch file (test)",
  "index.cpp": "scratch file (index)"
};

/** Display name + position for folders that already exist. */
const KNOWN_GROUPS = [
  { dir: "Grader_1_1/Grader/01_Expr", group: "Grader 1.1 · Expression" },
  { dir: "Grader_1_1/Grader/02_If", group: "Grader 1.1 · Condition" },
  { dir: "Grader_1_1/Grader/03_Loop", group: "Grader 1.1 · Loop" },
  { dir: "Grader_1_1/Grader/04_Array", group: "Grader 1.1 · Array" },
  { dir: "Grader_1_1/Grader/Mock_Midterm", group: "Grader 1.1 · Mock Midterm" },
  { dir: "Grader_1_1/Mock_Midterm_2023", group: "Mock Midterm 2023" },
  { dir: "Grader_1_1/Mock_Midterm_CEDTGrader", group: "Mock Midterm · CEDT Grader" },
  { dir: "CEDT_Ovenbreak_2026/Practice_path", group: "CEDT Ovenbreak 2026 · Practice", topic: "Practice" },
  { dir: "CEDT_Ovenbreak_2026/Exam_path", group: "CEDT Ovenbreak 2026 · Exam", topic: "Exam" }
];

const SECTION_NAMES = {
  Expr: "Expression",
  Str: "String",
  If: "Condition",
  Loop: "Loop",
  Array: "Array",
  Vector: "Vector",
  Set: "Set",
  Map: "Map",
  Recur: "Recursion",
  String: "String"
};

const LEVEL_BY_STARS = { 1: "easy", 2: "medium", 3: "hard" };
const LEVEL_RANK = { easy: 0, medium: 1, hard: 2 };
const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

const humanize = (s) => s.replace(/_/g, " ").replace(/\s+/g, " ").trim();
const isCpp = (name) => name.toLowerCase().endsWith(".cpp");

function isDir(entry) {
  return entry.isDirectory() && !entry.name.startsWith(".");
}

/** Every directory that directly holds at least one .cpp, as posix-ish paths. */
function discoverDirs(abs, relParts, acc) {
  for (const e of readdirSync(abs, { withFileTypes: true })) {
    if (!isDir(e)) continue;
    const subAbs = join(abs, e.name);
    const subRel = [...relParts, e.name];
    if (readdirSync(subAbs, { withFileTypes: true }).some((x) => x.isFile() && isCpp(x.name))) {
      acc.push(subRel.join("/"));
    }
    discoverDirs(subAbs, subRel, acc);
  }
  return acc;
}

/** A file counts as a solution only if it has at least one non-comment line. */
function hasCode(source) {
  return source.split("\n").some((line) => {
    const t = line.trim();
    return t !== "" && !t.startsWith("//") && !t.startsWith("/*") && !t.startsWith("*");
  });
}

/** Safe JS template-literal body for arbitrary source text. */
function tplLiteral(text) {
  return (
    "`" +
    text
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${") +
    "`"
  );
}

/**
 * Kind is decided by the filename, not the folder, so new topic folders work
 * without configuration:  05_Str_★_X.cpp is parsed as a grader problem even
 * when it lands in a folder this script has never seen.
 */
function parseFileName(fileName, fallbackTopic) {
  const base = fileName.replace(/\.cpp$/i, "");

  if (/^\d{2}_[A-Za-z]+_/.test(base)) return parseGrader(base);

  if (/^P\d+$/i.test(base)) return { title: base, topic: fallbackTopic || "", level: null };

  if (/^\d+$/.test(base)) {
    return { title: `Question ${base}`, topic: fallbackTopic || "", level: null };
  }

  return { title: humanize(base), topic: fallbackTopic || "", level: null };
}

function parseGrader(base) {
  const parts = base.split("_");

  parts.shift(); // section number — already implied by the group name
  const codeRaw = parts.shift(); // "Expr" | "Str" | "If" | ... ("if" occurs too)
  const code = codeRaw.charAt(0).toUpperCase() + codeRaw.slice(1).toLowerCase();
  const topics = [];

  topics.push(SECTION_NAMES[code] || humanize(codeRaw));

  if (parts[0] === "FC") {
    parts.shift();
    topics.push("Flowchart");
  }

  let level = null;
  if (parts[0] && /^★+$/.test(parts[0])) {
    level = LEVEL_BY_STARS[parts.shift().length] || null;
  } else if (parts[0] && /^\d+$/.test(parts[0]) && parts.length > 1) {
    level = LEVEL_BY_STARS[Number(parts.shift())] || null;
  }

  const title = parts.join(" ").replace(/\s*\(flowchart\)/i, "").replace(/\s+/g, " ").trim();

  return { title, topic: topics.join(" · "), level };
}

const problems = [];
const skipped = [];
const newFolders = [];

const dirs = discoverDirs(SRC, [], []).sort(collator.compare);
const knownIndex = new Map(KNOWN_GROUPS.map((g, i) => [g.dir, i]));

const ordered = dirs
  .map((dir) => {
    const known = KNOWN_GROUPS.find((g) => g.dir === dir);
    const rank = knownIndex.has(dir) ? knownIndex.get(dir) : KNOWN_GROUPS.length + dirs.indexOf(dir);
    return {
      dir,
      rank,
      group: known ? known.group : humanize(dir.split("/").pop()),
      topic: known && known.topic ? known.topic : "",
      known: Boolean(known)
    };
  })
  .sort((a, b) => a.rank - b.rank || collator.compare(a.dir, b.dir));

for (const spec of ordered) {
  if (!spec.known) newFolders.push(`${spec.dir}  →  shown as "${spec.group}"`);

  const dirAbs = join(SRC, ...spec.dir.split("/"));
  const names = readdirSync(dirAbs, { withFileTypes: true })
    .filter((e) => e.isFile() && isCpp(e.name))
    .map((e) => e.name);

  const batch = [];

  for (const name of names) {
    if (SKIP_NAMES.has(name)) {
      skipped.push({ path: `${spec.dir}/${name}`, why: SKIP_REASONS[name] || "scratch file" });
      continue;
    }

    const raw = readFileSync(join(dirAbs, name), "utf8").replace(/\r\n/g, "\n");
    if (!hasCode(raw)) {
      skipped.push({ path: `${spec.dir}/${name}`, why: "no code (blank or comment-only)" });
      continue;
    }

    const info = parseFileName(name, spec.topic);

    batch.push({
      title: info.title || name,
      group: spec.group,
      topic: info.topic || "",
      level: info.level,
      file: name,
      path: `${spec.dir}/${name}`,
      code: raw.replace(/\s+$/, "") + "\n"
    });
  }

  batch.sort((a, b) => {
    const ra = a.level ? LEVEL_RANK[a.level] : 3;
    const rb = b.level ? LEVEL_RANK[b.level] : 3;
    return ra - rb || collator.compare(a.title, b.title) || collator.compare(a.file, b.file);
  });

  problems.push(...batch);
}

problems.forEach((p, i) => {
  p.id = String(i + 1).padStart(3, "0");
});

const counts = new Map();
for (const p of problems) counts.set(p.group, (counts.get(p.group) || 0) + 1);

const body = problems
  .map((p) => {
    return [
      "  {",
      `    id: ${JSON.stringify(p.id)},`,
      `    title: ${JSON.stringify(p.title)},`,
      `    group: ${JSON.stringify(p.group)},`,
      `    topic: ${JSON.stringify(p.topic)},`,
      `    level: ${JSON.stringify(p.level)},`,
      `    file: ${JSON.stringify(p.file)},`,
      `    path: ${JSON.stringify(p.path)},`,
      `    code: ${tplLiteral(p.code)}`,
      "  }"
    ].join("\n");
  })
  .join(",\n");

const out = [
  "// ===================================================================",
  "//   AUTO-GENERATED — do not edit by hand.",
  "//   Source of truth: ComputerProgramming/ (*.cpp files)",
  "//   Regenerate with: node tools/build-comprog-data.mjs",
  "// ===================================================================",
  "window.COMPROG_PROBLEMS = [",
  body,
  "];",
  ""
].join("\n");

writeFileSync(OUT, out, "utf8");

console.log(`wrote ${OUT}`);
console.log(`${problems.length} problems`);
for (const [g, n] of counts) console.log(`  ${String(n).padStart(3)}  ${g}`);

if (skipped.length) {
  console.log(`\nskipped ${skipped.length} file(s):`);
  for (const s of skipped) console.log(`  - ${s.path}  (${s.why})`);
}

if (newFolders.length) {
  console.log("\nnew folder(s) detected — add them to KNOWN_GROUPS in");
  console.log("tools/build-comprog-data.mjs to rename or re-order them:");
  for (const f of newFolders) console.log(`  - ${f}`);
}
