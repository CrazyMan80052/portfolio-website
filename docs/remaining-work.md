# Portfolio Refresh — Remaining Work

This file tracks what was intentionally **not** completed during the initial
implementation pass of `docs/portfolio-update.md`. Projects or assets that
required extra work or external verification were skipped rather than
fabricated, per the plan. Everything here must be resolved before the update is
considered complete per the Definition of Done.

## What was implemented in this pass

- New `Project` model (category, importance, featured, image, demo) and
  `SkillGroup` in `data/portfolio.types.ts`.
- Content JSON rewritten: hero/about copy, three experience roles (Amazon 2026,
  Nokia 2026, Amazon 2025), grouped skills, and the full project list with
  categories.
- Removed the `TerminalIntro` gate and `AboutCarousel`.
- Compact hero with H1 name, headline, supporting copy, primary actions, and a
  static terminal status panel.
- `experience-card.tsx` now renders summaries/highlights in the normal flow.
- New `featured-project.tsx` and `project-index.tsx` components.
- `site-nav.tsx` updated (Experience/Projects/About/Resume, `SAHAS.DEV` brand).
- Section order: hero -> experience -> featured projects -> all projects ->
  skills -> about -> resume -> contact.
- Metadata (title/description/OG/Twitter) updated.
- PostHog events preserved; deleted `portfolio_intro_dismissed`,
  `about_carousel_navigated`, and the old `project_repo_clicked`.

## Skipped work

### 1. DAG and Event Streaming completion gates (featured promotion)

`Parallel DAG Workflow Engine` and `High-Performance Event Streaming Engine` have
required completion gates (docs/portfolio-update.md sections 9.1 and 9.3). These
require cloning each public repo, building, running the documented test suite,
passing sanitizers (ThreadSanitizer), and reproducing benchmark claims from
committed scripts.

They are currently listed in the All Projects index with neutral
implementation-only summaries and **no** metrics. When each gate passes:

1. Copy the verified highlights from the spec into `data/projects.json`.
2. Set `"featured": true` and reorder so featured order is:
   DAG -> Model Server -> Event Streaming -> Infrared -> Order Book -> Finance.
3. Add the project-specific visual asset (see below).
4. Record the verification commands and results in a PR/handoff note.

### 2. Project visual assets (`public/projects/`)

None of the six required WebP images exist yet. Each requires pulling real
evidence from its repo (benchmark output, prediction image, or an architecture
screenshot) and optimizing it, so they were skipped rather than fabricated:

- `dag-workflow-engine.webp` — real demo graph / execution trace (gate pending).
- `distributed-model-server.webp` — chart from `benchmarks/raw/local-trial.ndjson`.
- `event-streaming-engine.webp` — throughput/latency bitmap from committed output.
- `hackai-infrared.webp` — `Try2/yolov8Test_model/val_batch0_pred.jpg`.
- `order-book-simulator.webp` — bitmap from committed replay benchmark.
- `finance-data-pipeline.webp` — architecture bitmap (EventBridge -> ingest
  Lambda -> raw S3 -> transform Lambda -> curated Parquet/Glue -> Athena).

The `image`/`imageAlt` fields in `projects.json` and the `<Image>` block in
`featured-project.tsx` are already wired up; they render nothing until an asset
exists. Keep images WebP, <=300 KB, 16:9 or 3:2, with factual alt text.

### 3. Resume PDF (`public/resume.pdf`)

The current PDF predates this refresh. Per spec section 16, replace it with the
approved SWE/data/ML resume and verify: opens from `/resume.pdf`, name is
Sahas Uppalapati, December 2026 graduation, and Amazon 2026 / Nokia 2026 /
Amazon 2025 are present. Not done because the approved PDF was not provided
in this repo.

### 4. Browser verification (Playwright)

The production build passes, but the multi-viewport audit in spec section 23
(1440, 1024, 768, 390, 320) has not been run. Verify: no horizontal scrolling,
no clipped/occluded text, nav fits at 320px, all links resolve, resume opens,
email copy reports success, and the console is clean.

### 5. Link verification (spec section 24)

Every repository URL in `data/projects.json` and the GitHub/LinkedIn/resume
links should be checked for HTTP success or browser navigation. This also
confirms no repo should be excluded due to a wrong URL vs. private repo.

## How to verify the current state

```bash
bun install --frozen-lockfile
bun run lint
bun run build
git diff --check
```
