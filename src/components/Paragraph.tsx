import { ReactNode } from "react";

import { cn } from "@/utils/cn";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={cn("text-black/80 leading-relaxed", className)}>{children}</p>
);

export default Paragraph;
