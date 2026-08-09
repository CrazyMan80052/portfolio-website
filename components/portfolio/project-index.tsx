"use client";

import { FolderGit2 } from "lucide-react";
import posthog from "posthog-js";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/portfolio.types";

type ProjectIndexProps = {
    projects: Project[];
};

export function ProjectIndex({ projects }: ProjectIndexProps) {
    return (
        <ul className="divide-y divide-slate-800 rounded-lg border border-slate-800 bg-slate-900/40">
            {projects.map((project) => (
                <li
                    key={project.title}
                    className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                    <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-medium text-white">{project.title}</h3>
                            <Badge variant="category" className="shrink-0">
                                {project.category}
                            </Badge>
                        </div>
                        <p className="text-sm text-slate-400">{project.summary}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
                        {project.tech.slice(0, 3).map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300"
                            >
                                {t}
                            </span>
                        ))}
                        <div className="flex items-center gap-2 sm:pl-1">
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => posthog.capture("project_index_repo_clicked", { project_title: project.title, repo_url: project.repo })}
                                aria-label={`Open ${project.title} on GitHub`}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                            >
                                <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                            </a>
                            {project.demo ? (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => posthog.capture("project_index_demo_clicked", { project_title: project.title, demo_url: project.demo })}
                                    aria-label={`Open ${project.title} demo`}
                                    className="inline-flex h-8 items-center justify-center rounded-md border border-slate-700 px-2 text-sm text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
                                >
                                    Demo
                                </a>
                            ) : null}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
