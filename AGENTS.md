<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Website

Single-page Next.js 16 (App Router) + React 19 + Tailwind v4 portfolio. Content is JSON-driven.

## Commands

- Use **Bun**, not npm: `bun install`, `bun run dev`, `bun run build`, `bun run lint`
- `bun run lint` runs ESLint (flat config `eslint.config.mjs`, `core-web-vitals` + `typescript` presets)
- No test suite and no CI; there is no `typecheck` script — `bun run build` also typechecks
- Repo has both `bun.lock` and `package-lock.json`: do not regenerate both. Prefer `bun install --frozen-lockfile`

## Content model

- All page content lives in `data/` JSON (`about.json`, `projects.json`, `skills.json`, `work-experience.json`), typed by `data/portfolio.types.ts`
- Editing content = edit JSON only. Schema changes must be made in types first, then components
- `components/portfolio/tech-icon.tsx` maps skill names to icons; a skill without a mapping must still render its label

## Refresh spec vs. current code (drift is intentional)

- `docs/portfolio-update.md` is the approved target state (compact hero, featured projects, project categories/images, grouped skills, visible-detail layout, a11y) — it is **not yet implemented**
- Current code is still the old version: `TerminalIntro` gate and `AboutCarousel` in `app/page.tsx`, and the old `Project` type (no `category`, `importance`, `featured`, `image`, `demo`)
- Treat the doc as the plan; do not assume the code matches it. Reconcile `data/portfolio.types.ts`, the JSON, and components when implementing

## Framework quirks

- Tailwind v4 is CSS-first: there is **no** `tailwind.config` file. Theming is done via `@theme`/`@import "tailwindcss"` in `app/globals.css`; do not add a config file
- Google fonts (Geist, Geist_Mono) via `next/font/google` in `app/layout.tsx`
- `next.config.ts` defines `/ingest/*` rewrites for PostHog and sets `skipTrailingSlashRedirect: true`

## Analytics (PostHog)

- Client instrumentation lives in root `instrumentation-client.ts`; requires `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` (present in local `.env.local` — never commit it)
- Events fire inline via `posthog-js` imports in `app/page.tsx` and several `components/portfolio/*` files; deleting a component means deleting its captured events
- PostHog App Router skill with reference files: `.claude/skills/integration-nextjs-app-router/SKILL.md`

## Structure

- `components/portfolio/` — page-section components; `components/ui/` — primitives (`button`, `badge`, `card`); `lib/utils.ts` exports `cn()`
- `local-test-scripts/` and `projects-info/` contain planning notes/reports, not runnable scripts
