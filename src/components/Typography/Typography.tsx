import { Young_Serif } from "next/font/google";
import LocalFont from "next/font/local";
import Link from "next/link";

import { externalLinkProps } from "@/utils";
import { cn } from "@/utils/cn";

import { HeaderProps, LinkProps, ParagraphProps } from "./types";

export const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const brockmann = LocalFont({
  src: [
    {
      path: "../../../public/fonts/brockmann-medium/brockmann-medium.ttf",
      weight: "400",
    },
  ],
  variable: "--font-brockmann",
});

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

export const StyledLink = ({ children, href, isExternal }: LinkProps) => (
  <Link
    className="underline hover:text-black/50 hover:no-underline"
    href={href}
    {...externalLinkProps(isExternal)}
  >
    {children}
  </Link>
);
