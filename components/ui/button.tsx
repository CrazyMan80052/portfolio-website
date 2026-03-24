import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-slate-950 shadow-[0_0_0_1px_rgba(56,189,248,.45)] hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,.35)]",
        secondary:
          "bg-slate-800 text-slate-100 shadow-[0_0_0_1px_rgba(148,163,184,.25)] hover:bg-slate-700",
        ghost:
          "text-slate-200 hover:bg-slate-800/70 hover:text-white",
        outline:
          "border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-blue-400/60 hover:bg-slate-800/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
