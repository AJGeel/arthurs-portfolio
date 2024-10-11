import { Metadata } from "next";
import { ReactNode } from "react";

import "../globals.css";

import { brockmann } from "@/components/Typography";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Arthur Geel — Portfolio",
  description:
    "Designer/developer from Amersfoort, working at Enrise. Passionate about design, digital products, sci-fi, music (DnB), and leading a secret society dedicated to eradicating the use of Comic Sans.",
  keywords: [
    "designer",
    "developer",
    "Amersfoort",
    "Enrise",
    "design",
    "digital products",
  ],
};

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={brockmann.className}>
      <div>{children}</div>
    </body>
  </html>
);

export default RootLayout;
