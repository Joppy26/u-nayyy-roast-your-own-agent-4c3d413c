import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My agent spent three hours, four approval cards, and a GitHub rate limit writing this one line, and it still asked me if it was funny.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
