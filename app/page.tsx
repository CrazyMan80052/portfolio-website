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
import aboutData from "@/data/about.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import workExperienceData from "@/data/work-experience.json";
import { Experience, ExperienceCard } from "@/components/portfolio/experience-card";

type AboutTopic = {
    title: string;
    body: string;
};

type AboutData = {
    pageHeader: string;
    pageDescription: string;
    aboutTopics: AboutTopic[];
};

const workExperience = workExperienceData as Experience[];
const projects = projectsData as Project[];
const about = aboutData as AboutData;
const coreTech = skillsData as string[];

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
                                {about.pageHeader}
                            </h1>
                            <p className="max-w-3xl text-lg text-slate-300">
                                {about.pageDescription}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {coreTech.map((tech) => (
                                    <TechIcon key={tech} label={tech} />
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    <SectionShell
                        id="experience"
                        title="Experience"
                        subtitle="Internships"
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            {workExperience.map((experience) => (
                                <ExperienceCard
                                    key={`${experience.company}-${experience.positionTitle}`}
                                    experience={experience}
                                />
                            ))}
                        </div>
                    </SectionShell>

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
                        <AboutCarousel topics={about.aboutTopics} />
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
