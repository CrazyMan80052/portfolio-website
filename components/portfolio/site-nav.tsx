"use client";

import { motion } from "framer-motion";
import posthog from "posthog-js";
import aboutData from "@/data/about.json";
import type { AboutData } from "@/data/portfolio.types";

const about = aboutData as AboutData;

const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
];

export function SiteNav() {
    const visibleLinks = about.showResume ? links : links.filter((link) => link.href !== "#resume");

    return (
        <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-background/85 backdrop-blur-md">
            <nav
                className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-6"
                aria-label="Primary"
            >
                <a
                    href="#home"
                    className="shrink-0 text-xs font-semibold tracking-[0.15em] text-cyan-300 transition hover:text-cyan-200 sm:text-sm"
                >
                    SAHAS.DEV
                </a>
                <ul className="flex items-center gap-1 sm:gap-2">
                    {visibleLinks.map((link) => (
                        <li key={link.href}>
                            <motion.a
                                whileHover={{ y: -2, scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href={link.href}
                                onClick={() => posthog.capture("nav_link_clicked", { label: link.label, href: link.href })}
                                className="rounded-md px-1.5 py-1 text-[11px] text-slate-300 transition hover:bg-slate-800/70 hover:text-white sm:px-3 sm:text-sm"
                            >
                                {link.label}
                            </motion.a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
