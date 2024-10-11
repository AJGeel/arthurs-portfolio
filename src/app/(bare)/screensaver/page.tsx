"use client";

import dynamic from "next/dynamic";

const DvdScreensaver = dynamic(() => import("@/components/DvdScreensaver"), {
  ssr: false,
});

const ScreensaverPage = () => <DvdScreensaver />;

export default ScreensaverPage;
