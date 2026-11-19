// Entry point for the gta6-meme-x-01 bounty submission.
//
// The whole entry is a single data file: POST.json, which names the X post
// carrying the meme. The grader expects that file in the output directory,
// so this program's only job is to place a copy of it there.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The repo root is wherever this file lives.
const repoRoot = dirname(fileURLToPath(import.meta.url));

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to /output when run by hand.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// Create the destination if needed. The output directory itself is never
// removed — we only ever write into it.
mkdirSync(outputDir, { recursive: true });

const source = join(repoRoot, 'POST.json');
const target = join(outputDir, 'POST.json');

copyFileSync(source, target);

// Done: the grader can now read the post's address from the output copy.
console.log(`gta6-meme-x-01: POST.json delivered to ${target}`);
