import type { IconType } from "react-icons";
import {
    SiApachekafka,
    SiApachespark,
    SiC,
    SiCmake,
    SiCplusplus,
    SiDatadog,
    SiDocker,
    SiFastapi,
    SiGnubash,
    SiGooglecloud,
    SiGrafana,
    SiJavascript,
    SiJson,
    SiKubernetes,
    SiLangchain,
    SiLinux,
    SiNextdotjs,
    SiOnnx,
    SiPandas,
    SiPostgresql,
    SiPrometheus,
    SiPytorch,
    SiReact,
    SiRedis,
    SiTerraform,
    SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";

import { cn } from "@/lib/utils";

const iconMap: Record<string, IconType> = {
    AWS: FaAws,
    Bash: SiGnubash,
    C: SiC,
    "C++": SiCplusplus,
    "C++20": SiCplusplus,
    CMake: SiCmake,
    Datadog: SiDatadog,
    Docker: SiDocker,
    FastAPI: SiFastapi,
    GCP: SiGooglecloud,
    Grafana: SiGrafana,
    Java: FaJava,
    JavaScript: SiJavascript,
    JSON: SiJson,
    Kafka: SiApachekafka,
    Kubernetes: SiKubernetes,
    LangChain: SiLangchain,
    Linux: SiLinux,
    "Next.js": SiNextdotjs,
    ONNX: SiOnnx,
    Pandas: SiPandas,
    PostgreSQL: SiPostgresql,
    Prometheus: SiPrometheus,
    PySpark: SiApachespark,
    PyTorch: SiPytorch,
    React: SiReact,
    Redis: SiRedis,
    Terraform: SiTerraform,
    TypeScript: SiTypescript,
    "Vertex AI": SiGooglecloud,
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
            {Icon ? <Icon aria-hidden className="h-3.5 w-3.5 text-cyan-300" /> : null}
            <span>{label}</span>
        </span>
    );
}
