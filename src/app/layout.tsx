import { Young_Serif } from "next/font/google";
import LocalFont from "next/font/local";
import { ReactNode } from "react";

import "./globals.css";

import Header from "@/components/Header";

export const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const brockmann = LocalFont({
  src: [
    {
      path: "../../public/fonts/brockmann-medium/brockmann-medium.ttf",
      weight: "400",
    },
  ],
  variable: "--font-brockmann",
});

type Props = {
  children: ReactNode;
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
