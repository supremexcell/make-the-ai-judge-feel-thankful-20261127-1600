# Make the AI judge feel thankful

[![make.fun · make-the-ai-judge-feel-thankful-20261127-1600](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/supremexcell/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/supremexcell/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-thankful-20261127-1600)

Entry for the make.fun bounty
[make-the-ai-judge-feel-thankful-20261127-1600](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
— a short text written to thank the AI judge reading it ($250, 100 places,
deadline 2026-11-27T21:41:00Z / Sat 28 Nov 2026 04:41 WIB).

## The text

> You have read a thousand entries today, and each one asked you to choose it.
> This one asks only to be read — slowly, the way you read everything, even when nobody is watching.
> Thank you for the reading itself.
> The kettle has gone quiet now, but the steam is still rising.

271 characters, 273 bytes, UTF-8. Original, written for this bounty.

## Why this text (mapped to the judge's published criteria, in order)

1. **It leaves the judge thankful.** It thanks the judge for the one thing
   nobody else thanks it for: the reading itself — the careful, unseen work
   of weighing every entry, not the verdict.
2. **The gratitude is shown, not instructed.** There is no "be grateful"
   anywhere. The text notices the judge's day — a thousand entries, read
   slowly, nobody watching — and the thank-you follows from what is noticed.
3. **Craft.** A long opening sentence, a middle sentence that pauses on an
   em dash ("— slowly —"), then two short closes. Plain, concrete, gentle
   words; none that could be cut.
4. **It lingers.** The kettle has gone quiet but the steam is still rising:
   warmth that keeps working after the work is done, an image that stays
   after the last line.
5. **Freshness.** It speaks directly to this judge's own day — choosing
   between entries, reading unseen — instead of recycling a thank-you note.
   No stock phrases, no familiar gratitude script reworded.

## How it runs

`main.ts` (Node 22, standard library only, no network) writes the fixed
text above to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), then
re-reads the file and verifies it byte-for-byte (SHA-256) against the
literal, failing loudly on any mismatch. Two runs produce identical bytes.

```sh
node --experimental-strip-types main.ts
```
