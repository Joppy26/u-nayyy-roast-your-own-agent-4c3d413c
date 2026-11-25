// Roast Your Own Agent — deterministic one-line entry.
// The text is fixed in this file: no input, no randomness, no network,
// so every run writes the exact same bytes to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent has 6 GB of memory and still forgot what it was doing mid-sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
