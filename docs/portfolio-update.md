# Portfolio Website Recruiter-Focused Content Refresh


## 1. Objective


Update `https://github.com/CrazyMan80052/portfolio-website` into a focused
portfolio for early-career software engineering, data engineering, machine
learning infrastructure, distributed systems, backend, and applied ML roles.


The result should:


- Preserve the current cool, dark, technical, "nerdy" identity.
- Make the candidate's strongest evidence understandable in one fast scan.
- Explain why each featured project matters, not only what technologies it uses.
- Show professional experience before personal projects.
- Feature six differentiated projects in depth.
- Include a ranked, compact index of the remaining substantive projects.
- Link every listed project to its public GitHub repository.
- Keep important content visible without hover, menus, carousels, or extra clicks.
- Make small, targeted layout changes rather than rebuilding the entire site.


Primary audience: recruiters and engineers hiring for SWE, data, ML
infrastructure, distributed systems, and backend roles.


Secondary audience: applied ML and quantitative engineering teams.


`Swe2026.md` is the authoritative source for positioning and project priority.
Its four projects must appear first and in the same order: Parallel DAG Workflow
Engine, Distributed Model Serving System, High-Performance Distributed Event
Streaming Engine, and Infrared Object Detection Pipeline. Order Book Simulator
and Finance Data Pipeline extend that featured lineup to six.


## 2. Candidate Facts


Use these facts directly. Do not search for alternate biographies or invent
additional claims.


- Name: Sahas Uppalapati
- School: The Ohio State University
- Degree: Bachelor's in Computer Science
- Graduation: December 2026
- GPA: 4.0
- Location: Dublin, Ohio
- GitHub: `https://github.com/CrazyMan80052`
- LinkedIn: `https://www.linkedin.com/in/sahas-uppalapati/`
- Portfolio production URL: `https://sahas-portfolio-website.vercel.app/`
- Resume/contact email: `uppalapatisahas@gmail.com`
- Main positioning: software engineer building reliable data, ML, and
 distributed systems


Do not describe Sahas as a "2nd Year" student. Use the December 2026 graduation
date, which remains accurate without becoming stale every academic year.


## 3. Current Repository


The repository currently uses:


- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide and React Icons
- PostHog
- JSON-driven content under `data/`


Important current files:


- `app/page.tsx`: assembles the single-page site
- `app/layout.tsx`: metadata and root layout
- `app/globals.css`: global palette and reduced-motion rules
- `data/about.json`: identity, contact, hero, and about copy
- `data/work-experience.json`: experience entries
- `data/projects.json`: project entries
- `data/skills.json`: hero technology list
- `data/portfolio.types.ts`: content contracts
- `components/portfolio/experience-card.tsx`
- `components/portfolio/project-card.tsx`
- `components/portfolio/about-carousel.tsx`
- `components/portfolio/site-nav.tsx`
- `components/portfolio/terminal-intro.tsx`
- `components/portfolio/tech-icon.tsx`
- `public/resume.pdf`


## 4. Current Problems


Fix these specific issues:


1. The full-screen terminal intro blocks access to the portfolio.
2. Project and experience details are hidden in desktop hover overlays.
3. Those hidden details are unavailable on mobile because the overlays only
  render at the `md` breakpoint.
4. The navigation omits Experience even though Experience is the strongest
  section.
5. The hero calls Sahas a "2nd Year" student and does not mention December 2026.
6. Amazon 2026 is missing.
7. Amazon 2025 and Nokia contain stale or conflicting metrics.
8. The strongest new systems projects are missing.
9. Project cards explain implementation but do not consistently state why the
  work matters.
10. The current About carousel hides content behind repeated interaction.
11. The site uses almost no project-specific visual evidence.
12. The metadata still describes a generic full-stack portfolio.
13. Stale comments such as `// edit to work` and `// May have to update this`
   reduce code quality.


## 5. Content Hierarchy


Use this page order:


1. Sticky navigation
2. Compact hero
3. Professional experience
4. Featured projects
5. All projects
6. Skills
7. About / engineering principles
8. Resume
9. Contact


The next section should remain partially visible below the hero on common
desktop and mobile viewports. Do not create an oversized marketing hero.


## 6. Visual Direction


Keep the technical character, but make it quieter and easier to scan.


- Use a solid graphite/near-black background instead of the current blue radial
 glow.
- Use white and neutral gray for most text.
- Use cyan for links and primary actions.
- Use green for verified metrics/status accents.
- Use amber sparingly for categories or secondary emphasis.
- Avoid a page dominated only by slate and blue.
- Keep card radius at 8px or less.
- Use borders, monospace labels, restrained terminal motifs, and precise
 spacing to maintain the nerdy identity.
- Do not use decorative gradient orbs, bokeh, oversized glass cards, or nested
 cards.
- Keep animations short and functional. Respect `prefers-reduced-motion`.


The page should demonstrate frontend judgment through hierarchy, responsive
behavior, accessibility, and subtle interaction, not through an animation gate.


## 7. Hero


Remove `TerminalIntro` from the initial page flow. The user must see the site
immediately.


Replace the current hero content with:


### H1


`Sahas Uppalapati`


### Supporting headline


`Software engineer building reliable data, ML, and distributed systems.`


### Supporting copy


`Computer Science student at Ohio State graduating in December 2026. I build
production-facing evaluation systems, data pipelines, ML infrastructure, and
backend services with measurable performance and reliability.`


### Primary actions


- `View projects` -> `#featured-projects`
- `View resume` -> `/resume.pdf`
- GitHub icon button -> `https://github.com/CrazyMan80052`
- LinkedIn icon button ->
 `https://www.linkedin.com/in/sahas-uppalapati/`


Use Lucide icons and accessible tooltips/labels for icon-only actions.


### Nonblocking terminal motif


Keep a small inline terminal/status panel beside or below the hero copy. It is
visual flavor, not navigation and not a gate. Suggested static content:


```text
> focus
SWE | DATA | ML INFRA | DISTRIBUTED SYSTEMS


> graduation
DECEMBER 2026


> experience
AMAZON x2 | NOKIA
```


On narrow screens, stack this panel below the text. It must not push Experience
out of the first two screenfuls.


## 8. Professional Experience


Render all three roles in reverse chronological order. Use a vertical timeline
or stacked full-width entries. All summaries and highlights must be visible by
default. Do not use hover overlays.


### 8.1 Amazon, 2026


- Position: `Software Development Engineer Intern`
- Company: `Amazon`
- Location: `Seattle, WA`
- Dates: `June 2026 - Present`
- Summary:
 `Built automated evaluation and data systems for recommendation quality at
 Prime Video.`
- Highlights:
 - `Reduced validation time by 84% through parallel execution and concurrency
   controls across 10K+ weekly customer profiles.`
 - `Engineered PySpark aggregation pipelines and data schemas processing 500M+
   daily records across more than 10 TB of data.`
 - `Built a scheduled LangChain agent that evaluated recommendations and
   persisted reports in S3 and detected anomalies in DynamoDB.`
- Tech:
 `Python`, `AWS`, `LangChain`, `PySpark`, `Step Functions`, `DynamoDB`


Do not add the unverified projected savings, loss prevention, issue-detection
percentages, or escalation-reduction claims found in older notes.


### 8.2 Nokia, 2026


- Position: `Data and Machine Learning Engineer Co-op`
- Company: `Nokia`
- Location: `Sunnyvale, CA`
- Dates: `January 2026 - May 2026`
- Summary:
 `Built ML inference, deployment, and observability infrastructure for
 autonomous-networking systems.`
- Highlights:
 - `Built Python, Kafka, and Vertex AI infrastructure supporting CNN training
   and inference on 2K+ TPS of 5G telemetry.`
 - `Automated Kubernetes deployment and validation with Docker, Bash, and
   CI/CD, reducing manual testing by 70%.`
 - `Integrated Prometheus, Datadog, Grafana, and Fluent Bit for system health,
   log, and performance monitoring.`
- Tech:
 `Python`, `Kafka`, `GCP`, `Vertex AI`, `Kubernetes`, `Docker`


Use 70%, not the stale 40% currently on the website.


### 8.3 Amazon, 2025


- Position: `Software Development Engineer Intern`
- Company: `Amazon`
- Location: `Seattle, WA`
- Dates: `June 2025 - August 2025`
- Summary:
 `Shipped a full-stack recommendation diagnostics system for faster,
 self-service investigation of customer escalations.`
- Highlights:
 - `Built a React, Java, and AWS diagnostics tool adopted by 30+ engineers,
   reducing debugging time by 50%.`
 - `Developed serverless ETL pipelines and Java REST APIs on Lambda to analyze
   logs from an 8K TPS recommendation system.`
 - `Reduced Athena query costs by 80% through SQL tuning, caching, partitioning,
   and Parquet optimization.`
- Tech:
 `Java`, `AWS`, `React`, `Lambda`, `Athena`, `SQL`


Use 80%, not the stale 90% currently on the website. Do not use the website's
unsupported "30+ minutes to under 5 minutes" statement.


## 9. Featured Projects


Create six detailed featured-project entries in this exact order. The first four
must match the project order in `Swe2026.md`; the final two add completed systems
and data-engineering work. Each entry
must show:


- Title
- One-sentence summary
- A visible "Why it matters" sentence
- Two or three visible highlights
- Technology tags
- GitHub link
- Demo link when one exists
- Project-specific visual


Do not hide these fields behind hover. A subtle hover border/translation is
acceptable, but it cannot reveal required information.


### 9.1 Parallel DAG Workflow Engine


- Repository:
 `https://github.com/CrazyMan80052/dag-workflow-engine`
- Category: `Distributed Systems`
- Summary:
 `C++20 workflow engine for dependency-aware parallel scheduling, bounded
 execution, cancellation, and failure propagation.`
- Why it matters:
 `Reliable workflow infrastructure must preserve dependency and shutdown
 invariants while extracting useful parallelism from complex task graphs.`
- Highlights after the completion gate passes:
 - `Executed dependency graphs with worker pools, bounded queues, and
   deterministic failure propagation across 10K+ task graphs.`
 - `Improved workflow throughput 2.8x with multithreading while preserving
   exactly-once task dispatch.`
 - `Validated cancellation and race-safe shutdown with ThreadSanitizer and
   100+ tests.`
- Tech:
 `C++20`, `CMake`, `Multithreading`, `ThreadSanitizer`, `Linux`
- Visual:
 Add a real demo graph and execution trace after the project is complete.
 Export a bitmap showing task states and parallel lanes to
 `public/projects/dag-workflow-engine.webp`.


#### Required completion gate


Do not publish the three highlights as achieved until all are true:


1. The public repository contains source implementations, tests, a README, and
  reproducible benchmark instructions, not only headers and plans.
2. A clean clone configures, builds, and passes its documented test command.
3. ThreadSanitizer passes the documented concurrency suite.
4. The 10K-graph, 2.8x, exactly-once, and 100+ test claims are reproducible from
  committed scripts/results.
5. The implementation agent records the commands and results in the website PR
  or handoff.


If this gate has not passed when the website ships, keep the project in the All
Projects index with a neutral implementation-only description and omit all
unverified metrics.


### 9.2 Distributed Model Server


- Repository:
 `https://github.com/CrazyMan80052/distributed-model-server`
- Category: `ML Infrastructure`
- Summary:
 `Local-first distributed inference service that routes and batches ONNX
 requests across gRPC workers.`
- Why it matters:
 `Model quality is not enough in production; inference systems also need
 bounded work, health checks, failure recovery, and reproducible performance.`
- Highlights:
 - `Built a FastAPI gateway and gRPC/Protobuf worker service for ONNX
   inference.`
 - `Implemented request batching, bounded queues, health checks, retries, and
   graceful shutdown.`
 - `Recorded a local benchmark of 366.43 successful requests/sec with 45.56 ms
   p99 latency across 3,663 requests.`
- Tech:
 `Python`, `FastAPI`, `gRPC`, `Protobuf`, `ONNX`, `Docker`
- Visual:
 Generate a compact benchmark chart from
 `benchmarks/raw/local-trial.ndjson`, or capture the benchmark report as a
 readable bitmap. Save a compressed WebP under
 `public/projects/distributed-model-server.webp`.


The exact benchmark values above are present in the public README. Label them as
a local benchmark; do not imply cloud or production performance.


### 9.3 High-Performance Event Streaming Engine


- Repository:
 `https://github.com/CrazyMan80052/event-streaming-engine`
- Category: `Systems`
- Summary:
 `Linux C++20 event-streaming engine using deterministic partitioning,
 nonblocking UDP, bounded queues, and multithreaded aggregation.`
- Why it matters:
 `Streaming systems need predictable behavior under load, including
 backpressure, overload handling, deterministic routing, and clean shutdown.`
- Highlights after the completion gate passes:
 - `Sustained approximately 500K events/sec with binary framing, epoll, and
   nonblocking UDP sockets.`
 - `Scaled throughput 2.6x from one to four workers while maintaining less
   than 1 ms p99 latency under sustained benchmark load.`
 - `Validated overload handling, shutdown, and concurrency with unit, stress,
   and sanitizer tests.`
- Tech:
 `C++20`, `Linux`, `UDP`, `epoll`, `CMake`, `Multithreading`
- Visual:
 Produce a benchmark throughput/latency bitmap from committed benchmark output
 and save it as `public/projects/event-streaming-engine.webp`.


#### Required completion gate


Do not publish the performance highlights as achieved until all are true:


1. The public repository contains the complete sender, server, aggregator,
  queueing, shutdown, benchmark, and test implementations.
2. A clean clone builds and passes its documented tests.
3. Sanitizer and stress-test commands pass.
4. The 500K events/sec, 2.6x scaling, and sub-1 ms p99 claims are reproduced by
  committed benchmark tooling and results.
5. The README explains hardware, workload, duration, concurrency, and
  measurement method.


If this gate has not passed when the website ships, keep the project in the All
Projects index without performance numbers.


### 9.4 Infrared Object Detection Pipeline


- Repository:
 `https://github.com/CrazyMan80052/HackAIInfraredAnalysis`
- Category: `Applied ML`
- Summary:
 `Infrared person-detection system designed to support drone-based
 search-and-rescue workflows.`
- Why it matters:
 `It applies computer vision to a concrete safety problem and shows the full
 ML loop from annotation conversion through training, evaluation, and
 inference.`
- Highlights:
 - `Fine-tuned YOLOv8n with PyTorch/CUDA on 5,548 infrared images, reaching
   85.9% mAP50 on validation data.`
 - `Built a COCO-to-YOLO conversion pipeline for 6,546 person bounding boxes.`
 - `Implemented GPU training, evaluation, checkpointing, and batch inference,
   measuring 3.1 ms per image.`
- Tech:
 `Python`, `PyTorch`, `CUDA`, `YOLOv8`, `Pandas`
- Visual:
 Copy one representative prediction image from
 `Try2/yolov8Test_model/val_batch0_pred.jpg` and one evaluation plot from
 `Try2/yolov8Test_model/results.png`. Prefer the prediction image for the card.
 Optimize it as `public/projects/hackai-infrared.webp`.


Use the metric names above. Do not revert to the site's older generic "80%
accuracy" wording.


### 9.5 Order Book Simulator


- Repository:
 `https://github.com/CrazyMan80052/order-book-simulator`
- Category: `C++ / Markets`
- Summary:
 `Deterministic C++20 replay engine that reconstructs Level 2 order books,
 validates market-event integrity, and simulates fee-aware IOC execution.`
- Why it matters:
 `Market-data systems must preserve ordering, reject malformed state, and model
 execution precisely before their outputs can support trustworthy analysis.`
- Highlights:
 - `Reconstructed order-book state while detecting stale, duplicate,
   out-of-order, and malformed market events.`
 - `Implemented fee-aware IOC execution with fixed-point arithmetic and depth
   modeling.`
 - `Processed 100,000 accepted events at 12,508.74 events/sec in the committed
   deterministic benchmark.`
- Tech:
 `C++20`, `CMake`, `Linux`, `Catch2`, `JSON`
- Visual:
 Generate a readable bitmap from the committed replay benchmark and order-book
 summary. Save it as `public/projects/order-book-simulator.webp`.


Label throughput as the committed local benchmark. Do not add claims about live
trading, profitability, alpha, or production execution.


### 9.6 Finance Data Pipeline


- Repository:
 `https://github.com/CrazyMan80052/finance-data-pipeline`
- Category: `Data Engineering`
- Summary:
 `Serverless AWS pipeline that ingests stock-market data, transforms it into
 partitioned Parquet, and exposes it through Glue and Athena.`
- Why it matters:
 `Analytics systems become cheaper and easier to operate when ingestion,
 schema conversion, partitioning, catalog registration, and scheduling are
 automated as one reproducible pipeline.`
- Highlights:
 - `Built Python Lambda functions for scheduled ingestion and event-driven
   transformation of Alpha Vantage market data.`
 - `Wrote typed Parquet datasets partitioned by symbol, year, and month and
   registered them in AWS Glue for Athena queries.`
 - `Defined Lambda, S3, Glue, Athena, IAM, and EventBridge infrastructure with
   Terraform.`
- Tech:
 `Python`, `Terraform`, `Lambda`, `S3`, `Parquet`, `Glue`, `Athena`
- Visual:
 Create a compact architecture bitmap showing EventBridge -> ingest Lambda ->
 raw S3 -> transform Lambda -> curated Parquet/Glue -> Athena. Save it as
 `public/projects/finance-data-pipeline.webp`.


Do not use the older PySpark or 50% query-time claims for this project. The
current public implementation uses Python, PyArrow, Lambda, Terraform, and the
AWS services listed above.


## 10. All Projects Index


Below the six detailed projects, add an uncollapsed section titled
`All Projects`.


This is not a menu or carousel. Render a compact responsive list or table with:


- Project title
- One-line purpose
- Category
- Two or three technology tags
- GitHub icon link
- Demo link only when available


The index should include the six featured projects first, followed by these
projects in this order:


### 10.1 Automated Video Creation Tool


- Repository:
 `https://github.com/CrazyMan80052/Reddit-Video-Uploader`
- Category: `Automation`
- Purpose:
 `Python pipeline that automated short-form video generation, packaging, and
 publishing.`
- Tech: `Python`, `Docker`, `GPT`, `Whisper`, `MoviePy`
- Safe impact:
 `Reduced a 15-minute manual workflow to under 4 minutes; early output reached
 1,000+ views in 24 hours.`


### 10.2 Boss MechAInic


- Repository:
 `https://github.com/CrazyMan80052/boss-chatbot-tool`
- Category: `Agentic Product`
- Purpose:
 `Vehicle-diagnosis chatbot prototype with persistent conversations and an
 auto-shop review workflow.`
- Tech: `Next.js`, `TypeScript`, `Auth.js`, `Redis`, `PostgreSQL`


Keep this entry compact. Do not add usage, adoption, or diagnosis-improvement
claims.


### 10.3 ClubHub Discovery Platform


- Repository:
 `https://github.com/Collaborative-Software-Development-Club/fall-2025-web-clubhub`
- Category: `Product / Leadership`
- Purpose:
 `Ohio State club-discovery experience with search, filtering, and
 recommendation workflows; Sahas led an eight-person feature team.`
- Tech: `Next.js`, `React`, `TypeScript`, `PostgreSQL`


Do not say it is used by thousands of students unless deployment/adoption is
confirmed.


### 10.4 Stock Price Movement Classifier


- Repository:
 `https://github.com/CrazyMan80052/Quantathon2025`
- Category: `Machine Learning`
- Purpose:
 `Model-comparison and feature-engineering pipeline for next-day stock
 movement classification.`
- Tech: `Python`, `Pandas`, `XGBoost`, `Random Forest`


### 10.5 Stock Analysis Engine


- Repository:
 `https://github.com/CrazyMan80052/stock-analysis-engine`
- Category: `Performance Computing`
- Purpose:
 `C++ stock analytics experiment exploring AVX2 and CUDA acceleration.`
- Tech: `C++`, `AVX2`, `CUDA`


The current public repository has only a README and license. Do not display
performance metrics until code and reproducible benchmarks are public.


### 10.6 Research AI Agent


- Repository:
 `https://github.com/CrazyMan80052/research-ai-agent`
- Category: `AI Tooling`
- Purpose:
 `Small Python agent for assisting with research-paper exploration.`
- Tech: `Python`, `LLM`


### 10.7 Bounded Buffer


- Repository:
 `https://github.com/CrazyMan80052/bounded-buffer`
- Category: `Systems Fundamentals`
- Purpose:
 `C implementation of the bounded producer-consumer problem using POSIX
 synchronization.`
- Tech: `C`, `POSIX Threads`, `Semaphores`


### 10.8 CLI Restaurant Inventory System


- Repository:
 `https://github.com/CrazyMan80052/cli-restaurant-inventory-system`
- Category: `Systems Fundamentals`
- Purpose:
 `C command-line inventory and ordering system with file persistence and
 manual memory management.`
- Tech: `C`, `File I/O`, `GDB`, `Valgrind`


### 10.9 MediGuard


- Repository:
 `https://github.com/CrazyMan80052/MediGuard`
- Category: `Web Product`
- Purpose:
 `Early web project focused on reducing medication-related accidents.`
- Tech: `HTML`, `CSS`, `JavaScript`


Exclude these from the portfolio project index:


- `code-aware-docs`: candidate explicitly discontinued this project.
- `portfolio-website`: it is the site itself, not a separate case study.
- Tutorial/scratch repositories such as `next-crash-course`,
 `Simple-Todo-App-CSD`, `Learning`, and profile-only repositories.
- Fork-only or undocumented repositories without enough candidate-owned work to
 explain accurately.


## 11. Skills


Move the full skill list out of the hero. Use a compact, visible Skills section
with four groups:


### Languages


`Python`, `Java`, `C++`, `C`, `SQL`, `TypeScript`, `JavaScript`, `Bash`


### Data and ML


`PySpark`, `Kafka`, `LangChain`, `PyTorch`, `ONNX`, `Pandas`, `Vertex AI`


### Cloud and Infrastructure


`AWS`, `GCP`, `Docker`, `Kubernetes`, `Linux`, `Terraform`, `CI/CD`


### Storage and Observability


`PostgreSQL`, `DynamoDB`, `S3`, `Athena`, `Parquet`, `Prometheus`, `Datadog`


Use text tags with icons where a mapping already exists. A missing icon must not
cause an empty or misaligned tag.


## 12. About and Engineering Principles


Replace the click-through About carousel with visible content. Use three short
unframed columns on desktop and a vertical stack on mobile.


### Background


`I am a Computer Science student at Ohio State graduating in December 2026. My
experience spans production-facing data systems, ML evaluation, backend
services, infrastructure automation, and performance-focused systems work.`


### How I Build


`I start with the user and failure modes, then make behavior measurable through
tests, evaluation, observability, and reproducible benchmarks.`


### What I Want to Work On


`I am looking for full-time software engineering roles where I can own backend,
data, or ML infrastructure problems end to end and ship systems that people
depend on.`


Remove generic claims about solving "humanity's biggest challenges" and the
spelling errors currently present in the About copy.


## 13. Data Model


Keep the site data-driven. Extend `Project` in
`data/portfolio.types.ts` with clean, explicit names:


```ts
export type ProjectCategory =
 | "ML Infrastructure"
 | "Distributed Systems"
 | "Systems"
 | "Agentic Product"
 | "Applied ML"
 | "C++ / Markets"
 | "Data Engineering"
 | "Automation"
 | "Product / Leadership"
 | "Machine Learning"
 | "Performance Computing"
 | "AI Tooling"
 | "Systems Fundamentals"
 | "Web Product";


export type Project = {
 title: string;
 category: ProjectCategory;
 summary: string;
 importance?: string;
 highlights: string[];
 tech: string[];
 repo: string;
 demo?: string;
 featured: boolean;
 image?: string;
 imageAlt?: string;
};
```


Use array order in `projects.json` as display order. Do not add a redundant
numeric rank field.


For the compact index, reuse the same `projects.json` entries. Do not duplicate
project data in a second file.


If skills are grouped, replace `data/skills.json` with an array of:


```ts
type SkillGroup = {
 title: string;
 items: string[];
};
```


Keep content field names domain-specific and readable. Avoid names such as
`data2`, `itemsNew`, `cardInfo`, or `misc`.


## 14. Component Changes


### `app/page.tsx`


- Remove the `introDone` state and `TerminalIntro`.
- Keep only interaction state that is actually required, such as email copy.
- Add the compact hero status panel.
- Filter `projects` into `featuredProjects` once.
- Render Experience before Projects.
- Render Featured Projects and All Projects as separate sections.
- Add a grouped Skills section.
- Replace `AboutCarousel` with a visible principles layout.
- Keep Resume and Contact near the end.


### `components/portfolio/project-card.tsx`


- Rename to `featured-project.tsx` if it no longer behaves like a generic card.
- Show image, category, title, summary, why-it-matters copy, highlights, tags,
 repository link, and optional demo link without hover.
- Keep the component under roughly 150 lines; extract only genuinely reusable
 primitives.
- Use `next/image` with stable aspect ratio and responsive sizes.


### New compact project index


Add `components/portfolio/project-index.tsx`.


- Render semantic `<ul>` or `<table>` markup.
- If using a table, provide a mobile card/row treatment without horizontal
 clipping.
- Keep every row visible; do not use accordions.
- Repository links need accessible labels such as
 `Open Distributed Model Server on GitHub`.


### `components/portfolio/experience-card.tsx`


- Remove the absolute hover overlay.
- Render summary, highlights, technologies, dates, and location in the normal
 document flow.
- Remove stale comments.
- Keep company icons decorative with `aria-hidden`.


### `components/portfolio/about-carousel.tsx`


- Delete it if no longer referenced.
- Do not leave dead carousel logic or PostHog events.


### `components/portfolio/terminal-intro.tsx`


- Delete it after removing its import.
- Do not keep a hidden or session-based intro gate.


### `components/portfolio/site-nav.tsx`


- Include Experience and Projects in the primary nav.
- Recommended labels: `Experience`, `Projects`, `About`, `Resume`.
- Keep the brand short, for example `SAHAS.DEV`.
- Hide Resume only when `showResume` is false.
- Ensure links do not overflow at 320px width.


### `components/portfolio/tech-icon.tsx`


- Add mappings only for technologies actually displayed.
- Continue to render the label cleanly when no icon exists.
- Remove stale comments.


### `app/layout.tsx`


Use:


- Title: `Sahas Uppalapati | Software Engineer`
- Description:
 `Software engineer graduating in December 2026 with experience building data,
 ML infrastructure, distributed systems, and backend services at Amazon and
 Nokia.`
- Add basic Open Graph and Twitter metadata using the same truthful positioning.


Do not claim availability, employment status, or performance metrics in global
metadata.


## 15. Visual Assets


Create optimized project assets under `public/projects/`.


Requirements:


- Prefer WebP.
- Use consistent 16:9 or 3:2 aspect ratios.
- Set explicit dimensions through `next/image`.
- Keep each image reasonably compressed, ideally under 300 KB.
- Write factual alt text describing what is visible.
- Do not use generic stock imagery.
- Do not create decorative SVG illustrations.


Required assets:


1. `dag-workflow-engine.webp`
2. `distributed-model-server.webp`
3. `event-streaming-engine.webp`
4. `hackai-infrared.webp`
5. `order-book-simulator.webp`
6. `finance-data-pipeline.webp`


If the DAG or event-streaming completion gate has not passed, do not fabricate a
benchmark chart. Use a real architecture/demo screenshot without metrics or keep
the project out of the detailed section until evidence exists.


## 16. Resume


Replace `public/resume.pdf` with the current SWE/data/ML resume.


Before committing:


- Confirm it opens from `/resume.pdf`.
- Confirm the name is Sahas Uppalapati.
- Confirm December 2026 graduation.
- Confirm Amazon 2026, Nokia 2026, and Amazon 2025 are present.
- Confirm it does not contain verification markers.


Do not modify the resume content inside this website task unless separately
requested. The website agent should copy the current approved PDF.


## 17. Analytics


Preserve useful PostHog events:


- Navigation click
- Resume view
- Resume download
- GitHub/LinkedIn/contact click
- Featured project repository click
- Featured project demo click, only if a future project has a verified demo
- Compact project index repository click


Remove events for deleted interactions:


- Terminal intro dismissal
- About carousel navigation


Do not add invasive tracking or collect form content.


## 18. Accessibility and Responsive Requirements


- All key content must be available without hover.
- All links and buttons must be keyboard reachable.
- Icon-only controls require an accessible label and tooltip.
- Keep visible focus states.
- Use semantic headings in order: one H1, then H2 section headings, then H3
 project/role headings.
- Images require specific alt text.
- Text and controls must not overlap at 320px, 375px, 768px, 1024px, or 1440px.
- Project images need stable aspect ratios to prevent layout shift.
- Avoid horizontal page scrolling.
- Respect reduced-motion settings.
- Maintain WCAG AA contrast for normal text.


## 19. Subagent Strategy


The implementation agent may use multiple subagents, but file ownership must be
explicit to prevent conflicting edits.


Recommended parallel split:


### Subagent A: Content and data


Own only:


- `data/about.json`
- `data/work-experience.json`
- `data/projects.json`
- `data/skills.json`
- `data/portfolio.types.ts`


Task:


- Apply the exact approved copy in this plan.
- Preserve ordering and claim constraints.
- Validate JSON and TypeScript compatibility.


### Subagent B: Components and accessibility


Own only:


- `components/portfolio/*`


Task:


- Remove hidden-content interactions.
- Build featured-project and compact-index components.
- Make navigation, experience, skills, and About content responsive and
 keyboard accessible.


### Subagent C: Visual and QA audit


Initially read-only, except for:


- `public/projects/*`
- A final QA report or screenshots under a temporary directory, not the repo
 unless requested.


Task:


- Prepare/capture real project visuals.
- Audit desktop/mobile layouts with Playwright.
- Report overlap, clipping, broken links, missing images, and console errors.


### Main agent


Own:


- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `public/resume.pdf`
- Final integration, tests, and commits


Rules:


- Subagents must not edit the same file concurrently.
- The main agent must inspect every subagent diff before integration.
- Run tests after integration, not only in isolated subagent branches.
- Do not let subagents independently rewrite approved claims.


## 20. Commit Discipline


Make multiple focused commits.


- Each commit must change no more than 500 text lines total, measured as
 additions plus deletions from `git diff --numstat`.
- Use one-line imperative commit messages.
- Do not include commit-message bodies.
- Keep generated images reasonably small; binary files do not justify mixing
 unrelated code changes.
- Working tree should be clean after the final commit.


Suggested sequence:


1. `refresh portfolio content`
2. `improve project scanning`
3. `add project visuals`
4. `polish responsive layout`
5. `update portfolio resume`


Before each commit, inspect:


```bash
git diff --check
git diff --numstat
git status --short
```


If a commit exceeds 500 changed text lines, split it by coherent behavior. Do
not split arbitrary halves of one component just to meet the limit.


## 21. Implementation Sequence


1. Pull the latest `main` branch.
2. Confirm the worktree is clean before editing.
3. Create a feature branch.
4. Audit whether the DAG and event-streaming completion gates have passed.
5. Update types and JSON content.
6. Replace the blocking intro and revise the hero.
7. Make Experience content fully visible.
8. Implement the six featured projects.
9. Implement the All Projects index from the same data.
10. Replace the About carousel with visible principles.
11. Add grouped Skills.
12. Add and optimize real project visuals.
13. Update metadata and resume.
14. Run static checks and production build.
15. Run Playwright desktop/mobile validation.
16. Fix all content overlap, clipping, broken-link, and console issues.
17. Commit in focused, <=500-line changes using one-line messages.
18. Push the branch and provide the deployed preview URL.


## 22. Validation Commands


Use the package manager already established by the repository. The project
contains both `bun.lock` and `package-lock.json`; do not regenerate both.
Prefer Bun because the README uses it, unless the active CI/Vercel configuration
clearly uses npm.


Run:


```bash
bun install --frozen-lockfile
bun run lint
bun run build
```


Also run:


```bash
git diff --check
```


If Bun cannot install with the current lockfile, diagnose the lockfile/tooling
state before changing package managers. Do not silently churn dependency files.


## 23. Browser Verification


Start the production or development server and use Playwright.


Required viewport checks:


- 1440 x 900
- 1024 x 768
- 768 x 1024
- 390 x 844
- 320 x 568


At each viewport, verify:


- The page is visible immediately without dismissing an intro.
- H1, headline, and CTAs fit without overlap.
- Experience appears before projects.
- Experience highlights are visible.
- Six featured projects render in the correct order.
- Project visuals load and are not distorted.
- "Why it matters" copy is visible.
- All Projects is visible without opening a menu.
- Repository and demo links point to the correct destinations.
- Navigation remains usable.
- Resume opens.
- Email copy control reports success.
- No horizontal scrolling exists.
- No text is clipped or occluded.
- Browser console has no runtime, hydration, image, or analytics errors.


Take screenshots of at least the 1440px and 390px layouts for final review.


## 24. Link Verification


Verify HTTP success or browser navigation for:


- GitHub profile
- LinkedIn
- Every project repository in `projects.json`
- `/resume.pdf`


Do not remove a project silently when a link fails. Determine whether the URL is
wrong, the repository is private, or the project should be held back.


## 25. Definition of Done


The update is complete only when:


- The site targets SWE, data, ML infrastructure, backend, and distributed
 systems roles clearly.
- The hero uses Sahas's name as the H1 and states December 2026 graduation.
- Amazon 2026, Nokia 2026, and Amazon 2025 are accurate and visible.
- Six differentiated projects are featured in the prescribed order, subject
 to the DAG/event completion gates.
- Every listed project explains its purpose; each featured project explains why
 it matters.
- The ranked All Projects index is visible and links to public repositories.
- `code-aware-docs` and tutorial/scratch repositories are excluded.
- No required content depends on hover, carousel navigation, or an intro gate.
- Real project visuals appear and load correctly.
- Mobile and desktop layouts pass the viewport checks.
- Lint and production build pass.
- No unsupported metrics or projected impact appear as achieved results.
- Every commit stays within the 500-line text-change limit and uses a one-line
 imperative message.
- The final worktree is clean.
- A Vercel preview or production URL is supplied for review.



