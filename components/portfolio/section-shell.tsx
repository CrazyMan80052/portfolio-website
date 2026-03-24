import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  title,
  subtitle,
  className,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80">{title}</p>
        {subtitle ? (
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{subtitle}</h2>
        ) : null}
      </div>
      {children}
    </section>
  );
}
