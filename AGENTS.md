<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Website

Single-page Next.js 16 (App Router) + React 19 + Tailwind v4 portfolio for Sahas Uppalapati. Content is JSON-driven.

## Commands

- Use **Bun**, not npm: `bun install --frozen-lockfile`, `bun run dev`, `bun run build`, `bun run lint`
- No test suite, no CI, no `typecheck` script — `bun run build` is the typecheck
- Repo has both `bun.lock` and `package-lock.json`: never regenerate both; diagnose before switching package managers
- README predates the content refresh (see below) — do not trust its JSON format reference

## Content model

- Content lives in `data/` JSON, typed by `data/portfolio.types.ts`. Schema changes go in types first, then components and JSON
- Current schema (post-refresh): `AboutData` uses `headline`/`heroCopy` (no `pageHeader`/`pageDescription`); `Project` has `category`, `featured`, optional `importance`/`image`/`imageAlt`/`demo`; `skills.json` is `SkillGroup[]` (grouped), not a flat string list
- `projects.json` array order is display order; do not add a rank field
- `components/portfolio/tech-icon.tsx` maps skill names to icons; an unmapped skill must still render its label

## Refresh status (read the docs before editing content)

- `docs/portfolio-update.md` is the authoritative spec and is **implemented** (compact hero, featured projects, project index, grouped skills, visible details, no TerminalIntro/AboutCarousel)
- `docs/remaining-work.md` tracks what is still **not** done: DAG/Event Streaming completion gates, `public/projects/*.webp` visuals, resume PDF, Playwright multi-viewport audit, link verification
- Do **not** promote Parallel DAG Workflow Engine or High-Performance Event Streaming Engine to `featured: true` or add metrics/highlights until their completion gates pass (spec §9.1, §9.3); they are currently non-featured with empty highlights
- `image`/`imageAlt` are wired in `featured-project.tsx` but no assets exist in `public/projects/` yet — do not fabricate images or benchmark charts
- Claim constraints in the spec are binding (e.g., correct metric values, no unsupported/projected claims, excluded repos like `code-aware-docs`)

## Framework quirks

- Tailwind v4 is CSS-first: **no** `tailwind.config` file. Theme via `@theme`/`@import "tailwindcss"` in `app/globals.css`; do not add a config file
- Google fonts (Geist, Geist_Mono) via `next/font/google` in `app/layout.tsx`
- `next.config.ts` rewrites `/ingest/*` to PostHog and sets `skipTrailingSlashRedirect: true`

## Analytics (PostHog)

- Client instrumentation in root `instrumentation-client.ts`; requires `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` (in local `.env.local`, gitignored — never commit it)
- Current events: `nav_link_clicked`, `resume_viewed`, `resume_downloaded`, `contact_link_clicked`, `featured_project_repo_clicked`, `featured_project_demo_clicked`, `project_index_repo_clicked`, `project_index_demo_clicked`
- Events fire inline via `posthog-js` in `app/page.tsx`, `site-nav.tsx`, `featured-project.tsx`, `project-index.tsx`; deleting a component means deleting its captured events
- `local-test-scripts/posthog-setup-report.md` is stale (references deleted events/components) and the whole dir is gitignored
- PostHog App Router reference: `.claude/skills/integration-nextjs-app-router/SKILL.md`

## Structure

- `app/page.tsx` assembles the single page; `app/layout.tsx` metadata; `components/portfolio/` has `experience-card`, `featured-project`, `project-index`, `section-shell`, `site-nav`, `tech-icon`; `components/ui/` has `button`, `badge`, `card`; `lib/utils.ts` exports `cn()`
- `docs/` = planning docs; `local-test-scripts/` and `projects-info/` = stale notes/reports (gitignored, not runnable)
