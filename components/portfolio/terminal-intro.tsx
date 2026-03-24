"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const bootSteps = [
  "Initializing portfolio kernel...",
  "Loading projects module...",
  "Generating about profile...",
  "Compiling skills matrix...",
  "Syncing contact endpoints...",
  "Ready.",
];

type TerminalIntroProps = {
  onFinish: () => void;
};

export function TerminalIntro({ onFinish }: TerminalIntroProps) {
  const [lineCount, setLineCount] = useState(1);
  const [typed, setTyped] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const visibleLines = useMemo(() => bootSteps.slice(0, lineCount), [lineCount]);

  useEffect(() => {
    const sequence = window.setInterval(() => {
      setLineCount((current) => {
        if (current >= bootSteps.length) {
          window.clearInterval(sequence);
          return current;
        }
        return current + 1;
      });
    }, 400);

    return () => window.clearInterval(sequence);
  }, []);

  useEffect(() => {
    if (lineCount < bootSteps.length) {
      return;
    }

    const text = "curl sahas";
    let index = 0;
    const typing = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(typing);
        setUnlocked(true);
      }
    }, 120);

    return () => window.clearInterval(typing);
  }, [lineCount]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onFinish();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onFinish}
        className="fixed inset-0 z-50 grid place-items-center bg-slate-950/95 px-4"
      >
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-3xl rounded-xl border border-blue-400/25 bg-slate-950 p-5 shadow-[0_0_90px_rgba(37,99,235,.2)]"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-blue-300/90">
            sahas@portfolio-terminal
          </p>
          <div className="space-y-2 font-mono text-sm text-slate-200">
            {visibleLines.map((line) => (
              <p key={line}>
                <span className="mr-2 text-blue-300">$</span>
                {line}
              </p>
            ))}
            <p>
              <span className="mr-2 text-blue-300">$</span>
              {typed}
              <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-blue-300 align-middle" />
            </p>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Press Enter or click anywhere to continue{unlocked ? " - command ready." : "..."}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
