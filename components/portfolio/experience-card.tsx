"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, Check, MapPin } from "lucide-react";
import { FaAmazon } from "react-icons/fa";
import { SiNokia } from "react-icons/si";

import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/portfolio/tech-icon";
import type { Experience } from "@/data/portfolio.types";

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

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-6"
        >
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold tracking-tight text-white">{experience.positionTitle}</h3>
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-1">
                            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                            {experience.dates}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            {experience.location}
                        </span>
                    </p>
                </div>
                <Badge variant="secondary" className="inline-flex shrink-0 items-center gap-1.5">
                    {getCompanyIcon(experience.company)}
                    {experience.company}
                </Badge>
            </div>

            <p className="mb-4 text-sm text-slate-300">{experience.summary}</p>

            <ul className="mb-5 space-y-2">
                {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-slate-200">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {experience.tech.map((t) => (
                    <TechIcon key={t} label={t} />
                ))}
            </div>
        </motion.article>
    );
}
