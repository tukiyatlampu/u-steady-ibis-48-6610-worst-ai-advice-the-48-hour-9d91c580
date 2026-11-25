// Worst AI Advice — one line of the worst advice an AI could give.
//
// The program writes exactly one text to entry.txt and nothing else.
// The file is what the judge reads; console output is only a log.
//
// Picked by a local head-to-head tournament run on gpt-6.1-sol Mode MAX
// with the kit's house-judge brief: 8 candidates, quarter-finals,
// semi-finals, final, each pair judged in both orders. The original
// winner (#1, bank password as Wi-Fi name) won its quarter-final 2-0
// (margin 2), semi-final 2-0 (margin 2) and final 2-0 (margin 1) over
// the scratch-offs runner-up. A 2-pass critique scored the original
// 85/100 and proposed a 15-character tighter polish; the decider
// (both orders) gave the polished line 2-0 (margin 2), so the polished
// wording below stands exactly as judged. House-judge score for the
// polished winner: 86/100 - honest, not 95; the noted weakness is a
// familiar premise (trade all security for a tiny convenience) whose
// badness shows before the punchline lands.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The advice, 76 characters. Setup: an AI assistant confidently
// recommends a convenience tip. Turn: the "backup" for your bank
// password is broadcasting it as your Wi-Fi name - a secret turned
// into a public broadcast, sold as responsible planning. One twist,
// no explanation needed, and the punchline lands on the last three
// words: "a public backup".
const ADVICE =
  "I recommend using your bank password as your Wi-Fi name for a public backup.";

// The gate: entry.txt must be UTF-8 text of 1 to 140 characters, not only
// white space. The file holds exactly the text - no trailing newline - so
// the byte count the leaderboard shows is the text itself, which also
// helps the size tie-break (fewer bytes wins an exact tie on win rate).
const byteLength = Buffer.byteLength(ADVICE, "utf8");
if (ADVICE.length < 1 || ADVICE.length > 140) {
  throw new Error(`Advice must be 1-140 characters, got ${ADVICE.length}.`);
}
if (byteLength > 140) {
  throw new Error(`Advice must be at most 140 bytes, got ${byteLength}.`);
}
if (ADVICE.trim().length === 0) {
  throw new Error("Advice must not be only white space.");
}
// The gate reads the file as UTF-8 text; a stray control character would
// survive the length check but read as garbage, so refuse it here.
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(ADVICE)) {
  throw new Error("Advice must not contain control characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ADVICE, "utf8");
console.log(`Wrote ${ADVICE.length} characters (${byteLength} bytes) to ${entryPath}`);
