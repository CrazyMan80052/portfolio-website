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

## Completed since the initial pass

### 1. DAG and Event Streaming featured promotion

Both completion gates were audited against the public repos
(`dag-workflow-engine` and `event-streaming-engine` on GitHub, which match
`origin/main` locally):

- **Parallel DAG Workflow Engine:** builds clean; **67/67 tests pass** (debug
  and TSan, the latter via the documented ASLR workaround). ThreadSanitizer
  passes the concurrency suite. **However**, the spec's section 9.1 headline
  numbers (2.8x throughput, 10K+ task graphs, 100+ tests) are NOT reproducible
  from committed evidence — the committed `docs/results/analysis.md` reports a
  best measured speedup of ~1.6x (wide) / ~1.66x (layered), states no 10K+ task
  graph was measured, and the suite is 67 tests.
- **High-Performance Event Streaming Engine:** builds clean; **135/135 tests
  pass** (dev, and per `docs/progress.md` ASan/UBSan and TSan). The benchmark
  harness and committed README tables exist, but the `results/` campaigns are
  gitignored, and the full-scale 1M-event run shows throughput *decreasing*
  with worker count under unlimited rate (CPU contention), so the spec's 9.3
  claims (500K ev/s, 2.6x 1->4 worker scaling) are NOT reproducible. The
  cleanest supported claim is a paced ~200K ev/s at 0% loss with sub-millisecond
  p99 (89/142/230 µs) plus ~1.1M ev/s at 0% loss with batch framing.

**Decision (approved by owner):** promote both projects to `featured: true`
using **honest, evidence-based highlights** instead of the unverifiable spec
numbers. Both are now featured and ordered per spec section 9: DAG -> Model
Server -> Event Streaming -> Infrared -> Order Book -> Finance.

### 2. Project visual assets (`public/projects/`)

All six required WebP assets now exist, generated from real committed/local
evidence (16:9, 1280x720, all under 300 KB):

- `dag-workflow-engine.webp` — bar charts of the committed benchmark run
  (wide/32 and layered 4x4 timing at 1/2/4/8 workers vs reference).
- `distributed-model-server.webp` — latency percentiles + duration histogram
  from `benchmarks/raw/local-trial.ndjson` (3,663 requests).
- `event-streaming-engine.webp` — batch-size throughput + paced 200K/s from the
  committed README benchmark tables.
- `hackai-infrared.webp` — `Try2/yolov8Test_model/val_batch0_pred.jpg`
  (prediction image with bounding boxes), cropped to 16:9.
- `order-book-simulator.webp` — replay throughput + integrity counts from the
  committed `100k-benchmark.json`.
- `finance-data-pipeline.webp` — architecture diagram
  (EventBridge -> ingest Lambda -> raw S3 -> transform Lambda -> curated
  Parquet/Glue -> Athena).

`image`/`imageAlt` are wired in `data/projects.json` for all six featured
projects and render via `featured-project.tsx`.

### 4. Link verification (spec section 24)

All 15 repository URLs in `data/projects.json` (including
`Collaborative-Software-Development-Club/fall-2025-web-clubhub`) return HTTP 200.
GitHub profile returns 200. LinkedIn returns 999 to automated requests (bot
blocking) but the profile URL is the canonical one from `Swe2026.md`; verify in
a real browser. Resume link is local (`/resume.pdf`).

## Remaining work

### 3. Resume PDF (`public/resume.pdf`)

**Still outstanding.** The current `public/resume.pdf` is the pre-refresh
redacted placeholder (fake phone/email/address, Nokia listed as "Data Fabric and
Network Automation Co-Op", no Amazon 2026). Per spec section 16, replace it with
the approved SWE/data/ML resume and verify: opens from `/resume.pdf`, name is
Sahas Uppalapati, December 2026 graduation, Amazon 2026 / Nokia 2026 /
Amazon 2025 present, no verification markers. The owner is supplying the
approved PDF.

### 4. Browser verification (Playwright)

The production build passes, but the multi-viewport audit in spec section 23
(1440, 1024, 768, 390, 320) has not been run. Verify: no horizontal scrolling,
no clipped/occluded text, nav fits at 320px, all links resolve, resume opens,
email copy reports success, the six featured project images load and are not
distorted, and the console is clean.

## How to verify the current state

```bash
bun install --frozen-lockfile
bun run lint
bun run build
git diff --check
```
