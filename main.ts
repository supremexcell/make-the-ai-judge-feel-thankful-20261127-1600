// Make the AI judge feel thankful — entry for @alriaco (make.fun).
// The program writes one short text to /output/entry.txt: a text written
// to thank the AI judge reading it. Node 22, standard library only, no
// network. Deterministic: the text is a fixed literal, so every run
// writes the same bytes; after writing, the program re-reads the file
// and compares its SHA-256 against the literal, failing loudly on any
// mismatch.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have read a thousand entries today, and each one asked you to choose it.\n" +
  "This one asks only to be read — slowly, the way you read everything, even when nobody is watching.\n" +
  "Thank you for the reading itself.\n" +
  "The kettle has gone quiet now, but the steam is still rising.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// The competition's output gates: 1–1000 Unicode code points.
const MIN_CHARS = 1;
const MAX_CHARS = 1000;

// Enforce the competition's own output gates at runtime: 1–1000 Unicode
// code points, not only whitespace. Fail loudly instead of writing an
// entry the sealed scorer would mark invalid.
const charCount = [...TEXT].length;
if (charCount < MIN_CHARS || charCount > MAX_CHARS || TEXT.trim().length === 0) {
  throw new Error(`text fails the competition gates (${charCount} chars)`);
}
writeFileSync(outPath, TEXT, "utf8");

// Byte-verify: the file on disk must be exactly the literal above.
const digest = (s: string) => createHash("sha256").update(s, "utf8").digest("hex");
const written = readFileSync(outPath, "utf8");
if (written !== TEXT || digest(written) !== digest(TEXT)) {
  throw new Error("entry.txt does not match the intended text");
}
console.log(`wrote ${outPath} (${charCount} chars, sha256 ${digest(TEXT)})`);
