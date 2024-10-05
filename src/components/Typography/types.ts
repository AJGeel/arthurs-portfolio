import { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

export type HeaderProps = BaseProps;

export type ParagraphProps = BaseProps;

export type LinkProps = BaseProps & {
  href: string;
  isExternal?: boolean;
};
