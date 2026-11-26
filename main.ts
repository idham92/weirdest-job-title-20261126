import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const TITLE = "Senior Prompt Archaeologist for a Haunted Legacy Codebase";

// The gate requires 1–60 characters of UTF-8 text; refuse to write an
// out-of-range title rather than submitting an invalid entry.
if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error(`Job title must be 1-60 characters, got ${TITLE.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), TITLE, "utf8");
