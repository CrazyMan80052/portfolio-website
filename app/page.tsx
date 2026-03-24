"use client";

import { Download, ExternalLink, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { AboutCarousel } from "@/components/portfolio/about-carousel";
import { ProjectCard, type Project } from "@/components/portfolio/project-card";
import { SectionShell } from "@/components/portfolio/section-shell";
import { SiteNav } from "@/components/portfolio/site-nav";
import { TechIcon } from "@/components/portfolio/tech-icon";
import { TerminalIntro } from "@/components/portfolio/terminal-intro";
import { Button } from "@/components/ui/button";

const projects: Project[] = [
  {
    title: "Amazon Internal Tooling",
    summary:
      "Built full-stack internal systems for recommendation model testing and production-log analytics at scale.",
    highlights: [
      "Built Java APIs with Lambda + API Gateway for event-driven systems handling 8k+ TPS.",
      "Reduced Athena query cost by 90% with partitioning, caching, and SQL tuning.",
      "Cut analysis runtime from up to 15 minutes to under 3 minutes.",
    ],
    tech: ["Java", "AWS", "React"],
  },
  {
    title: "Nokia Deployment Automation",
    summary:
      "Automated deployment, validation, and observability workflows for production-facing data integration systems.",
    highlights: [
      "Reduced manual testing by 70% with Bash-driven deployment automation.",
      "Implemented CI/CD with Jenkins and GitHub pipelines.",
      "Set up monitoring stack with Prometheus, Datadog, and Fluent Bit.",
    ],
    tech: ["Jenkins", "Kubernetes", "Docker"],
  },
  {
    title: "Boss MechAInic Chatbot Tool",
    summary: "Agentic vehicle-diagnosis chatbot platform connecting customers and auto shops.",
    highlights: [
      "Built with Next.js + TypeScript and deployed on Vercel.",
      "Integrated Redis, Auth.js, and PostgreSQL for state and persistence.",
      "Enabled shops to review conversations for faster follow-up support.",
    ],
    repo: "https://github.com/CrazyMan80052/boss-chatbot-tool/tree/main",
    tech: ["Next.js", "TypeScript", "Redis", "PostgreSQL"],
  },
  {
    title: "Finance Data Pipeline",
    summary: "Serverless ETL pipeline for stock market ingestion, transformation, and analytics.",
    highlights: [
      "Used Python Lambda jobs to fetch Alpha Vantage market data.",
      "Transformed data with PySpark and stored partitioned Parquet on S3.",
      "Scheduled fully automated runs every 12 hours using CloudWatch.",
    ],
    repo: "https://github.com/CrazyMan80052/finance-data-pipeline",
    tech: ["Python", "AWS"],
  },
  {
    title: "Automated Video Creation Tool",
    summary: "Automated Reddit-style short-form video generation and publishing pipeline.",
    highlights: [
      "Rendered and uploaded videos in under 4 minutes end-to-end.",
      "Automated thumbnails, tags, subtitles, and descriptions with NLP + LLM workflows.",
      "Containerized with Docker for reliable cross-platform execution.",
    ],
    repo: "https://github.com/CrazyMan80052/Reddit-Video-Uploader",
    tech: ["Python", "Docker"],
  },
  {
    title: "Stock Price Movement Classifier",
    summary: "ML pipeline predicting next-day stock movement from large historical datasets.",
    highlights: [
      "Trained XGBoost and Random Forest models on 2M rows.",
      "Engineered 15+ technical indicators for feature quality.",
      "Improved precision by 10% with preprocessing and feature tuning.",
    ],
    repo: "https://github.com/CrazyMan80052/Quantathon2025",
    tech: ["Python", "PyTorch"],
  },
  {
    title: "Hack AI Infrared Analysis",
    summary: "Computer vision search-and-rescue assistant using infrared drone imagery.",
    highlights: [
      "Trained YOLOv8 + PyTorch detection model with 80% accuracy.",
      "Prepared and cleaned a 7,800-image infrared dataset.",
      "Designed Q-learning inspired swarm pathfinding for 20% better coverage.",
    ],
    repo: "https://github.com/CrazyMan80052/HackAIInfraredAnalysis",
    tech: ["Python", "PyTorch"],
  },
  {
    title: "Club Discovery System",
    summary: "Redesigned a university club discovery platform with modern filtering and recommendations.",
    highlights: [
      "Implemented React/Next.js discovery features and recommendation flows.",
      "Led 8-person team with Agile delivery and Git-based collaboration.",
      "Contributed to deployment candidate for a 60,000+ student environment.",
    ],
    repo: "https://github.com/Collaborative-Software-Development-Club/fall-2025-web-clubhub",
    tech: ["Next.js", "React", "TypeScript"],
  },
];

const aboutTopics = [
  {
    title: "Background",
    body: "I am a CS builder focused on shipping reliable software at scale. My work spans full-stack product features, backend systems, and production data tooling.",
  },
  {
    title: "Interests",
    body: "I enjoy distributed systems, machine learning workflows, developer experience improvements, and solving problems where performance and product quality both matter.",
  },
  {
    title: "Goals",
    body: "I want to build systems that are fast, maintainable, and genuinely useful. Long term, I aim to lead projects that combine product intuition with strong engineering.",
  },
  {
    title: "Working Style",
    body: "I like to move quickly with clean abstractions, measurable outcomes, and strong team communication. I value iteration, feedback loops, and pragmatic execution.",
  },
];

const coreTech = [
  "Next.js",
  "TypeScript",
  "React",
  "Java",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "Redis",
  "PostgreSQL",
  "PyTorch",
];

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone ? <TerminalIntro onFinish={() => setIntroDone(true)} /> : null}

      <div className="relative min-h-screen bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_55%)]" />
        <SiteNav />

        <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-12 sm:px-6">
          <section id="home" className="scroll-mt-24 space-y-8 pt-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="space-y-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300/90">Home</p>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Sahas - Computer Science Engineer building scalable and modern software.
              </h1>
              <p className="max-w-3xl text-lg text-slate-300">
                I specialize in full-stack development, backend APIs, cloud-native systems, and
                practical AI/ML applications with measurable impact.
              </p>
              <div className="flex flex-wrap gap-2">
                {coreTech.map((tech) => (
                  <TechIcon key={tech} label={tech} />
                ))}
              </div>
            </motion.div>
          </section>

          <SectionShell
            id="projects"
            title="Projects"
            subtitle="Real systems, productized experiments, and high-impact engineering."
          >
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </SectionShell>

          <SectionShell
            id="about"
            title="About"
            subtitle="A quick snapshot of how I think, build, and grow."
          >
            <AboutCarousel topics={aboutTopics} />
          </SectionShell>

          <SectionShell id="resume" title="Resume" subtitle="View or download my latest resume.">
            <div className="flex flex-wrap gap-3">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="hover:-translate-y-0.5">
                  <ExternalLink className="h-4 w-4" />
                  View Resume
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button variant="outline" className="hover:-translate-y-0.5">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-400">
              Add your file at <code className="rounded bg-slate-800 px-1 py-0.5">public/resume.pdf</code>.
            </p>
          </SectionShell>

          <SectionShell id="contact" title="Contact" subtitle="Minimal friction, easy reach-out.">
            <div className="flex flex-wrap gap-3">
              <a href="mailto:sahasu06@gmail.com">
                <Button variant="secondary" className="hover:-translate-y-0.5">
                  <Mail className="h-4 w-4" />
                  Email me
                </Button>
              </a>
              <a
                href="https://github.com/CrazyMan80052"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="hover:-translate-y-0.5">
                  GitHub
                </Button>
              </a>
              <a
                              href="https://www.linkedin.com/in/sahas-uppalapati/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="hover:-translate-y-0.5">
                  LinkedIn
                </Button>
              </a>
            </div>
          </SectionShell>
        </main>
      </div>
    </>
  );
}
