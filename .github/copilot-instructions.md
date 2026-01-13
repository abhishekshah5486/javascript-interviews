# Copilot Instructions: javascript-interviews

## Overview
- This repo is a collection of standalone Node.js scripts for JavaScript interview prep. There is no `package.json`, build step, or test framework.
- Each file is self-contained and demonstrates a specific topic via `console.log` outputs, inline comments, and small examples.
- Keep changes minimal and local to the file; do not introduce cross-file imports unless explicitly requested.

## Run & Debug
- Run any script directly with Node:
  - `node arrays.js`
  - `node string.js`
  - `node js01.js`
  - `node truthyfalsy.js`
- Prefer quick iteration with `console.log`. Comment out unrelated blocks to focus on a single example.

## Project Conventions
- Use `var` for declarations (matches existing files). Avoid refactors to `let/const` unless asked.
- Emphasize built-in JavaScript APIs and show both mutating vs non-mutating behaviors when relevant.
- Keep examples concise; group related snippets and annotate with short comments explaining intent.
- Avoid external dependencies and module systems; scripts are executed standalone.

## File Highlights
- [arrays.js](arrays.js): Demonstrates `Array.isArray`, `Array.from`, `Array.of`, mutating methods (`push`, `pop`, `unshift`, `shift`, `splice`), and reordering (`sort`, `reverse`). Shows how `splice` returns removed elements and how custom comparators affect `sort`.
- [string.js](string.js): Covers splitting and joining, manual tokenization via `substring` + index tracking, trim variants, case conversion, search (`startsWith`, `endsWith`, `indexOf`, `lastIndexOf`, `includes`), replacements (`replace`, `replaceAll`), slicing (`slice`, `substring`), padding (`padStart`, `padEnd`), concatenation (template strings, `concat`, `+`), and index APIs (`charAt`, `at`).
- [js01.js](js01.js): Basics: variables, `for`/`while`/`do-while`, `if/else`, and iterating arrays with `for...of`.
- [truthyfalsy.js](truthyfalsy.js): Demonstrates truthy/falsy checks and documents all falsy values.

## Adding New Examples
- Create a new top-level file (e.g., `numbers.js`, `objects.js`). Keep it standalone.
- Structure:
  - Introduce input data.
  - Show the API usage or pattern.
  - Log outputs and briefly explain behavior, noting mutation vs pure operations.
- Example skeleton:
  
  ```js
  // Topic: Map vs forEach
  var nums = [1, 2, 3];
  // Pure transform
  var doubled = nums.map(function(n) { return n * 2; });
  console.log(doubled);
  // Side-effect iteration
  nums.forEach(function(n, i) { console.log(i, n); });
  ```

## Git Workflow
- Default branch is `main`. Create feature branches and open PRs targeting `main`.
- If working locally on another branch (e.g., `master`), rebase or merge into `main` via PR.
- Keep commit messages descriptive (topic + change summary). No changelog tooling is used.

## Helpful Patterns to Reuse
- Manual tokenization pattern in [string.js](string.js) (tracking `startIdx` and pushing substrings) is a common approach for custom split requirements.
- `splice` usage in [arrays.js](arrays.js) shows add/remove/replace with the returned removed elements—use this to illustrate in-place edits vs copies.

---
If any conventions feel unclear or you want to introduce modules/tests, tell me which direction you prefer and I’ll adapt these instructions accordingly.