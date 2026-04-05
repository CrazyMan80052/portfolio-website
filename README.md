# Portfolio Website Template

This repository is a customizable portfolio template built with Next.js, TypeScript, and Tailwind CSS.

The goal is simple: clone it, edit JSON content files, and deploy your own portfolio quickly.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- PostHog (optional analytics)

## Quick Start

1. Use this repo as a template or fork it.
2. Clone your copy.
3. Install dependencies.
4. Customize the JSON files in the data folder.
5. Run locally and deploy.

```bash
git clone <your-repo-url>
cd portfolio-website
bun install
bun dev
```

Open http://localhost:3000.

## Data-Driven Content

Most page content is controlled through JSON files in the data folder.

- data/about.json
- data/projects.json
- data/work-experience.json
- data/skills.json

Type contracts for these files are centralized in data/portfolio.types.ts.

## JSON Format Reference

### data/about.json

```json
{
	"name": "Your Name",
	"showResume": true,
	"contact": {
		"email": "you@example.com",
		"github": "https://github.com/your-username",
		"linkedin": "https://www.linkedin.com/in/your-handle/"
	},
	"pageHeader": "Your Name - Short headline",
	"pageDescription": "1-2 sentence summary",
	"aboutTopics": [
		{ "title": "Background", "body": "..." },
		{ "title": "Interests", "body": "..." },
		{ "title": "Goals", "body": "..." },
		{ "title": "Working Style", "body": "..." }
	]
}
```

Resume behavior:
- showResume: true shows the Resume section.
- showResume: false hides the Resume section.
- If showResume is true, add your file as public/resume.pdf.

### data/projects.json

```json
[
	{
		"title": "Project Name",
		"summary": "One-line summary",
		"highlights": ["Impact point 1", "Impact point 2"],
		"repo": "https://github.com/your-username/your-repo",
		"tech": ["Next.js", "TypeScript", "PostgreSQL"]
	}
]
```

Notes:
- repo is optional. If omitted, the UI shows a fallback message.
- highlights are shown in the details overlay.

### data/work-experience.json

```json
[
	{
		"positionTitle": "Software Engineer Intern",
		"company": "Company Name",
		"summary": "Role summary",
		"highlights": ["Achievement 1", "Achievement 2"],
		"tech": ["Java", "AWS", "React"],
		"location": "City, State",
		"dates": "Jun 2026 - Aug 2026"
	}
]
```

### data/skills.json

```json
[
	"Next.js",
	"TypeScript",
	"React",
	"Python",
	"AWS"
]
```

## How To Customize Quickly

1. Replace your personal info in data/about.json.
2. Add or remove projects in data/projects.json.
3. Update internships and jobs in data/work-experience.json.
4. Update your tech stack in data/skills.json.
5. If data/about.json has showResume set to true, add your resume file at public/resume.pdf.

## Deploy Your Own Portfolio

### Option A: Vercel (Fastest)

1. Push your customized repository to GitHub.
2. Import the repo into Vercel.
3. Set the required environment variables.
4. Deploy.

Required environment variables:

```dotenv
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=your_posthog_project_token
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

If you do not want analytics, you can remove PostHog initialization from instrumentation-client.ts.

### Option B: Manual Build

```bash
bun install
bun run build
bun run start
```

## Scripts

- bun dev: start local development server
- bun run build: production build
- bun run start: run production server
- bun run lint: lint the codebase

## Icon Customization

Tech stack badges use React Icons and are mapped in components/portfolio/tech-icon.tsx.

If you add a new skill in data/skills.json and it does not display an icon, add a matching icon import and map entry in components/portfolio/tech-icon.tsx.

Browse available icons here: https://react-icons.github.io/react-icons/

## Contributing

Issues and improvements are welcome. If you use this template, feel free to open a PR with enhancements that help other people launch faster.
