"use client";

import Image from "next/image";
import { Check, ExternalLink, FolderGit2, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import posthog from "posthog-js";

import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/portfolio/tech-icon";
import type { Project } from "@/data/portfolio.types";

type FeaturedProjectProps = {
    project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/60 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40"
        >
            {project.image ? (
                <div className="relative aspect-video overflow-hidden rounded-t-lg border-b border-slate-800">
                    <Image
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            ) : null}

            <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
                    <Badge variant="category" className="shrink-0">
                        {project.category}
                    </Badge>
                </div>

                <p className="text-sm text-slate-300">{project.summary}</p>

                {project.importance ? (
                    <p className="rounded-md border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-sm text-amber-100">
                        <span className="font-semibold">Why it matters: </span>
                        {project.importance}
                    </p>
                ) : null}

                {project.highlights.length > 0 ? (
                    <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-sm text-slate-200">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                ) : null}

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                        <TechIcon key={t} label={t} />
                    ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-1">
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => posthog.capture("featured_project_repo_clicked", { project_title: project.title, repo_url: project.repo })}
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                    >
                        <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                        Open repository
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                    {project.demo ? (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => posthog.capture("featured_project_demo_clicked", { project_title: project.title, demo_url: project.demo })}
                            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                        >
                            <MoveUpRight className="h-4 w-4" aria-hidden="true" />
                            View demo
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                    ) : null}
                </div>
            </div>
        </motion.article>
    );
}
