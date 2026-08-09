"use client";

import { Check, Download, ExternalLink, Mail } from "lucide-react";
import { useState } from "react";
import posthog from "posthog-js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ExperienceCard } from "@/components/portfolio/experience-card";
import { FeaturedProject } from "@/components/portfolio/featured-project";
import { ProjectIndex } from "@/components/portfolio/project-index";
import { SectionShell } from "@/components/portfolio/section-shell";
import { SiteNav } from "@/components/portfolio/site-nav";
import { TechIcon } from "@/components/portfolio/tech-icon";
import { Button } from "@/components/ui/button";
import aboutData from "@/data/about.json";
import type { AboutData, Experience, Project, SkillGroup } from "@/data/portfolio.types";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import workExperienceData from "@/data/work-experience.json";

const workExperience = workExperienceData as Experience[];
const projects = projectsData as Project[];
const about = aboutData as AboutData;
const skillGroups = skillsData as SkillGroup[];

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = async () => {
        const email = about.contact.email;
        posthog.capture("contact_link_clicked", { platform: "email", action: "copy" });

        try {
            await navigator.clipboard.writeText(email);
            setEmailCopied(true);
            window.setTimeout(() => setEmailCopied(false), 2200);
            return;
        } catch {
            const fallbackInput = document.createElement("textarea");
            fallbackInput.value = email;
            fallbackInput.setAttribute("readonly", "");
            fallbackInput.style.position = "absolute";
            fallbackInput.style.left = "-9999px";
            document.body.appendChild(fallbackInput);
            fallbackInput.select();

            const copied = document.execCommand("copy");
            document.body.removeChild(fallbackInput);

            if (copied) {
                setEmailCopied(true);
                window.setTimeout(() => setEmailCopied(false), 2200);
                return;
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-background text-slate-100">
            <SiteNav />

            <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6">
                <section id="home" className="scroll-mt-24 grid gap-8 pt-4 lg:grid-cols-[1.4fr_1fr] lg:items-start">
                    <div className="space-y-5">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            {about.name}
                        </h1>
                        <p className="text-lg font-medium text-slate-200">{about.headline}</p>
                        <p className="max-w-2xl text-sm leading-relaxed text-slate-400">{about.heroCopy}</p>
                        <div className="flex flex-wrap items-center gap-3">
                            <a href="#featured-projects">
                                <Button className="hover:-translate-y-0.5">View projects</Button>
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => posthog.capture("resume_viewed")}
                            >
                                <Button variant="outline" className="hover:-translate-y-0.5">View resume</Button>
                            </a>
                            <a
                                href={about.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                                onClick={() => posthog.capture("contact_link_clicked", { platform: "github" })}
                            >
                                <Button variant="ghost" size="icon" className="rounded-full border border-slate-700">
                                    <FaGithub className="h-4 w-4" />
                                </Button>
                            </a>
                            <a
                                href={about.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                onClick={() => posthog.capture("contact_link_clicked", { platform: "linkedin" })}
                            >
                                <Button variant="ghost" size="icon" className="rounded-full border border-slate-700">
                                    <FaLinkedin className="h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 font-mono text-xs leading-relaxed">
                        <div className="mb-3 flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden="true" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" aria-hidden="true" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" aria-hidden="true" />
                            <span className="ml-2 text-slate-500">status</span>
                        </div>
                        <p className="text-cyan-300">&gt; focus</p>
                        <p className="mb-3 text-slate-200">SWE | DATA | ML INFRA | DISTRIBUTED SYSTEMS</p>
                        <p className="text-cyan-300">&gt; graduation</p>
                        <p className="mb-3 text-slate-200">DECEMBER 2026</p>
                        <p className="text-cyan-300">&gt; experience</p>
                        <p className="text-slate-200">AMAZON x2 | NOKIA</p>
                    </div>
                </section>

                <SectionShell
                    id="experience"
                    eyebrow="Experience"
                    title="Professional Experience"
                    description="Internships and co-op work, most recent first."
                >
                    <div className="space-y-5">
                        {workExperience.map((experience) => (
                            <ExperienceCard
                                key={`${experience.company}-${experience.positionTitle}`}
                                experience={experience}
                            />
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="featured-projects"
                    eyebrow="Featured"
                    title="Featured Projects"
                    description="Systems and data work, ranked by depth and impact."
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        {featuredProjects.map((project) => (
                            <FeaturedProject key={project.title} project={project} />
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="projects"
                    eyebrow="Index"
                    title="All Projects"
                    description="Every public project, from production systems to learning experiments."
                >
                    <ProjectIndex projects={projects} />
                </SectionShell>

                <SectionShell
                    id="skills"
                    eyebrow="Stack"
                    title="Skills"
                    description="Languages, data and ML tooling, infrastructure, and observability."
                >
                    <div className="grid gap-8 md:grid-cols-2">
                        {skillGroups.map((group) => (
                            <div key={group.title}>
                                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
                                    {group.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <TechIcon key={skill} label={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="about"
                    eyebrow="About"
                    title="About"
                    description="How I think about building systems."
                >
                    <div className="grid gap-8 md:grid-cols-3">
                        {about.aboutTopics.map((topic) => (
                            <div key={topic.title}>
                                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                                    {topic.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-300">{topic.body}</p>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                {about.showResume ? (
                    <SectionShell
                        id="resume"
                        eyebrow="Resume"
                        title="Resume"
                        description="View or download my latest resume."
                    >
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => posthog.capture("resume_viewed")}
                            >
                                <Button className="hover:-translate-y-0.5">
                                    <ExternalLink className="h-4 w-4" />
                                    View Resume
                                </Button>
                            </a>
                            <a href="/resume.pdf" download onClick={() => posthog.capture("resume_downloaded")}>
                                <Button variant="outline" className="hover:-translate-y-0.5">
                                    <Download className="h-4 w-4" />
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </SectionShell>
                ) : null}

                <SectionShell
                    id="contact"
                    eyebrow="Contact"
                    title="Contact"
                    description="Minimal friction, easy reach-out."
                >
                    <div className="space-y-2">
                        <div className="flex flex-wrap gap-3">
                            <Button variant="secondary" className="hover:-translate-y-0.5" onClick={handleCopyEmail} type="button">
                                {emailCopied ? <Check className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                                {emailCopied ? "Email copied" : "Copy email"}
                            </Button>
                            <span className="sr-only" aria-live="polite">
                                {emailCopied ? "Email address copied to clipboard." : ""}
                            </span>
                            <a
                                href={about.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => posthog.capture("contact_link_clicked", { platform: "github" })}
                            >
                                <Button variant="outline" className="hover:-translate-y-0.5">
                                    GitHub
                                </Button>
                            </a>
                            <a
                                href={about.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => posthog.capture("contact_link_clicked", { platform: "linkedin" })}
                            >
                                <Button variant="outline" className="hover:-translate-y-0.5">
                                    LinkedIn
                                </Button>
                            </a>
                        </div>
                        <p className="min-h-6 text-sm text-cyan-200/90" aria-hidden={!emailCopied}>
                            {emailCopied ? "Copied to clipboard" : ""}
                        </p>
                    </div>
                </SectionShell>
            </main>
        </div>
    );
}
