import { youngSerif } from "@/app/layout";
import { cn } from "@/utils/cn";

import { HeaderProps, ParagraphProps } from "./types";

export const H1 = ({ children, className }: HeaderProps) => (
  <h1 className={cn(youngSerif.className, "text-4xl", className)}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: HeaderProps) => (
  <h2 className={cn(youngSerif.className, "text-2xl", className)}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: HeaderProps) => (
  <h3 className={cn(youngSerif.className, "text-lg", className)}>{children}</h3>
);

export const H4 = ({ children, className }: HeaderProps) => (
  <h4 className={cn(youngSerif.className, "text-base", className)}>
    {children}
  </h4>
);

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={cn("text-black/80 leading-relaxed", className)}>{children}</p>
);
