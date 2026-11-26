// The One-Sentence Apology Your Agent Owes You
// make.fun competition: u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0
// The program writes one funny, human, single-sentence apology to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const APOLOGY =
  "I'm sorry I set your 7 a.m. alarm in the wrong time zone, so you woke up refreshed, punctual, and an entire day late.";

// The comic turn: the alarm did its job perfectly — in the wrong time zone —
// so the user wakes up feeling great and still misses the whole day.
// The apology owns a real failure instead of hiding behind a support macro.

// Refuse to write an entry the sealed scorer would reject: it must be
// 1-200 characters of real text, not only whitespace.
if (APOLOGY.length < 1 || APOLOGY.length > 200 || APOLOGY.trim().length === 0) {
  throw new Error(`Apology fails the gate: ${APOLOGY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", APOLOGY, "utf8");
console.log(`Wrote ${APOLOGY.length} chars to /output/entry.txt`);
