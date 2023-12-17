import { Young_Serif } from "next/font/google";
import LocalFont from "next/font/local";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={brockmann.className}>
        <Header />
        <div className="mx-auto max-w-7xl p-6">{children}</div>
      </body>
    </html>
  );
}
