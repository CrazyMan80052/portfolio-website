import type { IconType } from "react-icons";
import {
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";

import { cn } from "@/lib/utils";

// May have to update this if we have different skills
const iconMap: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  React: SiReact,
  Python: SiPython,
  Java: FaJava,
  AWS: FaAws,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  PyTorch: SiPytorch,
  Jenkins: SiJenkins,
};

type TechIconProps = {
  label: string;
  className?: string;
};

export function TechIcon({ label, className }: TechIconProps) {
  const Icon = iconMap[label];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200",
        className,
      )}
    >
      {Icon ? <Icon aria-hidden className="h-3.5 w-3.5 text-blue-300" /> : null}
      <span>{label}</span>
    </span>
  );
}
