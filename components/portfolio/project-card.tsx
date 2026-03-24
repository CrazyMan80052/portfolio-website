"use client";

import { ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechIcon } from "@/components/portfolio/tech-icon";

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  repo?: string;
  tech: string[];
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="group relative"
    >
      <Card className="h-full overflow-hidden transition duration-300 group-hover:border-blue-400/50 group-hover:shadow-[0_20px_45px_rgba(37,99,235,.22)]">
        <CardHeader>
          <div className="mb-3 flex items-start justify-between gap-3">
            <CardTitle className="text-balance text-xl">{project.title}</CardTitle>
            <Badge variant="secondary" className="shrink-0">
              Project
            </Badge>
          </div>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechIcon key={t} label={t} />
            ))}
          </div>

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200"
            >
              <FolderGit2 className="h-4 w-4" />
              Open repository
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <p className="text-sm text-slate-400">Repository coming soon</p>
          )}
        </CardContent>
      </Card>

      <div className="pointer-events-none absolute inset-0 hidden rounded-xl border border-blue-300/35 bg-slate-900/95 p-6 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 md:block">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Details</p>
        <ul className="space-y-2 text-sm text-slate-200">
          {project.highlights.map((h) => (
            <li key={h} className="list-inside list-disc">
              {h}
            </li>
          ))}
        </ul>
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-blue-300/60 bg-blue-400/15 px-3 py-2 text-sm text-blue-100 transition hover:bg-blue-400/25"
          >
            <FolderGit2 className="h-4 w-4" />
            GitHub project
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
