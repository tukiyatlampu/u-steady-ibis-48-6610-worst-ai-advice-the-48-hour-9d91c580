# TEST_RESULTS.md — Worst AI Advice: The 48-Hour Tight Line Open

Run: 2026-11-26 ~04:35 WIB (2026-11-25 21:35 UTC), Node v24.22.1 local
(grader runs Node 22; main.ts runs as-is on Node 22.18+).

## Commands and results

1. `node --check main.ts` (syntax check) → exit 0, SYNTAX OK.
2. `MAKEFUN_OUTPUT_DIR=/tmp/qa-worst1 node main.ts`
   → `Wrote 76 characters (76 bytes) to /tmp/qa-worst1/entry.txt`
3. `MAKEFUN_OUTPUT_DIR=/tmp/qa-worst2 node main.ts`
   → `Wrote 76 characters (76 bytes) to /tmp/qa-worst2/entry.txt`
4. Clean-directory run: copied only `main.ts`, `LICENSE`, `README.md` to
   `/tmp/clean-worst`, ran `MAKEFUN_OUTPUT_DIR=/tmp/clean-worst/out node main.ts`
   → `Wrote 76 characters (76 bytes) to /tmp/clean-worst/out/entry.txt`

## Determinism

SHA256 of `/output/entry.txt` across all three runs (two local + one clean-dir):

```
cb39813386f7cba04cbd690014415aaed6ae910384285bfee3f6bdbce63f069f
```

Byte-identical 3/3.

## Gate check (from the kit: UTF-8, 1–140 characters, not only white space)

- Characters: 76 (limit 140) — PASS
- Bytes: 76 (limit 140) — PASS
- Whitespace-only: false — PASS
- Control characters: none (checked in code before writing) — PASS
- Trailing newline: none — the file is exactly the advice text.

## Kit verification

- Kit downloaded from `https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/kit`
  (8,287,842 bytes, gzip tar); all 8 file SHA256 match the `get_kit` manifest
  (RULES.txt, competition.yaml, cli/makefun.mjs, cli/site.json,
  harness/CODE.sha256, harness/SOURCES.sha256,
  harness/harness-src.tar.gz, harness/harness-src.tar.gz.sha256).
  Bundle SHA256 from manifest: `84955287d91d138a292ff00609153941361ef7bde2cfdbb7312c5766c5b012f9`.

## Entry text (76 characters)

> I recommend using your bank password as your Wi-Fi name for a public backup.

## Local judging (gpt-6.1-sol Mode MAX, house judge brief from the kit)

- 8 candidates, all 80–103 characters, all verified by local count.
- Quarter-finals (each pair in both orders): #1 bank-password Wi-Fi beat #8
  (margin 2), #2 rash on LinkedIn beat #7 (margin 2), #3 scratch-offs beat #6
  (margin 2), #5 hot-tub chicken beat #4 (margin 1).
- Semi-finals (each pair in both orders): #1 beat #5 2–0 (margin 2),
  #3 beat #2 2–0 (margin 2).
- Final (both orders): #1 beat #3 2–0 (margin 1). House-judge score for the
  original winner: 85/100 (honest score — not 95; the noted weakness is a
  familiar premise whose badness shows before the punchline).
- Polish check: 2-pass critique proposed a 15-character tighter variant
  (76 chars, scored 86/100). Decider (both orders): the polished line beat
  the original 2–0 (margin 2), so the polished wording stands exactly as judged.

## SolAPI calls (all HTTP 200, finish_reason stop)

- Candidates: 2 calls (first attempt's output was reasoning-only in the
  truncated tail; rerun saved to file and returned all 8 candidates).
- QF judge: 1 call. SF + final judge: 1 call. 2-pass critique: 1 call.
- Decider judge: 1 call.
- Total: 6 SolAPI calls, all HTTP 200.
