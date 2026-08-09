import { cn } from "@/lib/utils";

type SectionShellProps = {
    id: string;
    title: string;
    eyebrow?: string;
    description?: string;
    className?: string;
    children: React.ReactNode;
};

export function SectionShell({
    id,
    title,
    eyebrow,
    description,
    className,
    children,
}: SectionShellProps) {
    return (
        <section id={id} className={cn("scroll-mt-24", className)}>
            <div className="mb-6 space-y-2">
                {eyebrow ? (
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">{eyebrow}</p>
                ) : null}
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
                {description ? (
                    <p className="max-w-2xl text-sm text-slate-400">{description}</p>
                ) : null}
            </div>
            {children}
        </section>
    );
}
