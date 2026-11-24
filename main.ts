// judge-laugh-developer-excuses — make.fun bounty
// u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
//
// Writes one funny single-line developer excuse to /output/entry.txt.
// Deterministic: no network, no randomness, no environment secrets,
// no reads outside this repository. The excuse is a single line with
// no trailing newline, so the file's character count is the excuse's.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: prod didn't break the code — it finally ran the TODO
// the developer had been ignoring since 2023, live, in front of
// the customers. A twist every developer recognises: the TODO was
// never a note, it was a landmine with a 2023 timestamp on it.
const EXCUSE =
  "My code didn't break prod — prod just finally ran the TODO I've been ignoring since 2023, live, in front of the customers.";

// Gate guard: the sealed scorer only accepts 1–200 UTF-8 chars, a
// single line, not only whitespace. Fail loudly instead of writing
// an entry that can never be judged.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.includes("\n") ||
  EXCUSE.trim().length === 0
) {
  throw new Error(`excuse fails the gate: ${EXCUSE.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, EXCUSE, "utf8");
