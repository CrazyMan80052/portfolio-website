"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, MapPin } from "lucide-react";
import { FaAmazon } from "react-icons/fa";
import { SiNokia } from "react-icons/si";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechIcon } from "@/components/portfolio/tech-icon";

// add location, dates
export type Experience = {
    positionTitle: string;
    company: string;
    summary: string;
    highlights: string[];
    tech: string[];
    location: string;
    dates: string;
};

// edit to work
type ExperienceCardProps = {
    experience: Experience;
};

function getCompanyIcon(company: string) {
    const normalized = company.trim().toLowerCase();

    if (normalized.includes("nokia")) {
        return <SiNokia className="h-3.5 w-3.5" aria-hidden="true" />;
    }

    if (normalized.includes("amazon")) {
        return <FaAmazon className="h-3.5 w-3.5" aria-hidden="true" />;
    }

    return <Building2 className="h-3.5 w-3.5" aria-hidden="true" />;
}

// edit to be work
export function ExperienceCard({ experience }: ExperienceCardProps) {
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
                        <div className="space-y-1">
                            <CardTitle className="text-balance text-xl">{experience.positionTitle}</CardTitle>
                            <p className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                                <span className="inline-flex items-center gap-1">
                                    <CalendarDays className="h-3.5 w-3.5" />
                                    {experience.dates}
                                </span>
                                <span className="text-slate-500">|</span>
                                <span className="inline-flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {experience.location}
                                </span>
                            </p>
                        </div>
                        <Badge variant="secondary" className="inline-flex shrink-0 items-center gap-1.5">
                            {getCompanyIcon(experience.company)}
                            {experience.company}
                        </Badge>
                    </div>
                    <CardDescription>{experience.summary}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {experience.tech.map((t) => (
                            <TechIcon key={t} label={t} />
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="pointer-events-none absolute inset-0 hidden rounded-xl border border-blue-300/35 bg-slate-900/95 p-6 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 md:block">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Details</p>
                <ul className="space-y-2 text-sm text-slate-200">
                    {experience.highlights.map((h) => (
                        <li key={h} className="list-inside list-disc">
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}
