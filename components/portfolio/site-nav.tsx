"use client";

import { motion } from "framer-motion";
import posthog from "posthog-js";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.2em] text-blue-300 transition hover:text-blue-200"
        >
          SAHAS.DEV
        </a>
        <ul className="flex items-center gap-2 sm:gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={link.href}
                onClick={() => posthog.capture("nav_link_clicked", { label: link.label, href: link.href })}
                className="rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-slate-800/70 hover:text-white sm:px-3 sm:text-sm"
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
