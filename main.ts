// Dad Joke Showdown — entry program.
// Writes one original dad joke to /output/entry.txt (gate: 1-200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I leave the fridge door open at night — the little light inside is afraid of the dark, and somebody has to keep it company.";

const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  // Gate: entry must be 1-200 characters, not only white space.
  if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
    throw new Error(`Joke fails the gate: ${JOKE.length} characters`);
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JOKE, "utf8");
  console.log(`Wrote ${JOKE.length} characters to ${OUT}`);
}

main();
