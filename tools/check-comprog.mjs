// Quick smoke check for projects/comprog.html + comprog-data.js
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const html = readFileSync(join(ROOT, "projects", "comprog.html"), "utf8");

let failed = 0;
const check = (label, cond, extra = "") => {
  if (!cond) failed++;
  console.log(`${cond ? "PASS" : "FAIL"}  ${label}${extra ? "  " + extra : ""}`);
};

// --- tag balance (ignores script/style bodies) ---
const stripped = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<!--[\s\S]*?-->/g, "");

for (const tag of ["html", "head", "body", "div", "section", "table", "thead", "tbody", "tr", "th", "td", "span", "main", "header", "footer", "pre", "a", "button", "select", "label"]) {
  const open = (stripped.match(new RegExp("<" + tag + "(?=[\\s>/])", "g")) || []).length;
  const close = (stripped.match(new RegExp("</" + tag + ">", "g")) || []).length;
  check(`tag balance <${tag}>`, open === close, `open=${open} close=${close}`);
}

// --- data file present and shaped correctly ---
globalThis.window = {};
const dataPath = join(ROOT, "projects", "comprog-data.js");
let problems = [];
try {
  // eslint-disable-next-line no-eval
  (0, eval)(readFileSync(dataPath, "utf8"));
  problems = window.COMPROG_PROBLEMS || [];
} catch (e) {
  check("comprog-data.js evaluates", false, e.message);
}
check("comprog-data.js loaded", problems.length > 0, `${problems.length} problems`);

const required = ["id", "title", "group", "topic", "level", "file", "path", "code"];
check(
  "every problem has all fields",
  problems.every((p) => required.every((k) => k in p))
);
check(
  "ids unique",
  new Set(problems.map((p) => p.id)).size === problems.length
);
check(
  "paths unique",
  new Set(problems.map((p) => p.path)).size === problems.length
);
check(
  "no CR in code (normalised)",
  problems.every((p) => !p.code.includes("\r"))
);
check(
  "code non-empty",
  problems.every((p) => p.code.trim().length > 0)
);

// every embedded code body must match the real file on disk
let mismatched = 0;
for (const p of problems) {
  const real = readFileSync(join(ROOT, "ComputerProgramming", ...p.path.split("/")), "utf8")
    .replace(/\r\n/g, "\n")
    .replace(/\s+$/, "") + "\n";
  if (real !== p.code) {
    mismatched++;
    console.log(`      mismatch: ${p.path}`);
  }
}
check("embedded code matches source files", mismatched === 0, `${mismatched} mismatched`);

// --- HTML references the right pieces ---
check("loads comprog-data.js", html.includes('<script src="comprog-data.js"></script>'));
check("window controls have data-window", (html.match(/data-window/g) || []).length >= 2);
check("search input present", html.includes('id="q"'));
check("group filter present", html.includes('id="groupFilter"'));
check("links shared stylesheet", html.includes('href="../style.css"'));
check("links shared script", html.includes('src="../script.js"'));

// required element ids referenced by the inline script
const ids = ["problemRows", "rowCount", "q", "groupFilter", "codeView", "codeGutter", "codeName", "lineStat", "dlBtn", "srcBtn", "copyBtn", "list-title"];
for (const id of ids) {
  check(`element #${id} exists`, html.includes(`id="${id}"`));
}

console.log(failed ? `\n${failed} check(s) failed` : "\nAll checks passed");
process.exit(failed ? 1 : 0);
