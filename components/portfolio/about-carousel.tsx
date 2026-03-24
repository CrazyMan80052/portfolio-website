"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type AboutTopic = {
  title: string;
  body: string;
};

type AboutCarouselProps = {
  topics: AboutTopic[];
};

export function AboutCarousel({ topics }: AboutCarouselProps) {
  const [index, setIndex] = useState(0);
  const active = topics[index];

  const goNext = () => setIndex((prev) => (prev + 1) % topics.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + topics.length) % topics.length);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-300/60 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>
        <div className="flex items-center gap-2">
          {topics.map((topic, topicIndex) => (
            <button
              key={topic.title}
              type="button"
              onClick={() => setIndex(topicIndex)}
              aria-label={`View ${topic.title}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                topicIndex === index ? "bg-blue-300" : "bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-300/60 hover:text-white"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.25 }}
        >
          <Card
            role="button"
            tabIndex={0}
            onClick={goNext}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                goNext();
              }
            }}
            className="cursor-pointer border-blue-500/30 bg-gradient-to-br from-slate-900 to-slate-850 transition hover:border-blue-300/60 hover:shadow-[0_20px_45px_rgba(59,130,246,.2)]"
          >
            <CardHeader>
              <CardTitle className="text-blue-100">{active.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-200">{active.body}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-blue-200/80">
                click card to continue
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
