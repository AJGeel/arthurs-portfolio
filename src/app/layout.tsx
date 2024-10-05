import { ReactNode } from "react";

import "./globals.css";

import Header from "@/components/Header";
import { brockmann } from "@/components/Typography";

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
