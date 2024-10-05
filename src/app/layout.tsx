import { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";

import Header from "@/components/Header";
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={brockmann.className}>
      <Header />
      <div className="mx-auto max-w-7xl p-6">{children}</div>
    </body>
  </html>
);

export default RootLayout;
