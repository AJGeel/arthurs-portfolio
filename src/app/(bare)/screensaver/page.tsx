"use client";

import { StarIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { useDvdScreensaver } from "react-dvd-screensaver";

import Me from "@/components/Me";
import { Paragraph } from "@/components/Typography";

const SCORE_BASE_RATE = 50;
const SCORE_MULTIPLIER = 0.25;

const ScreensaverPage = () => {
  const { containerRef, elementRef } = useDvdScreensaver();
  const [isWinning, setIsWinning] = useState(false);
  const [score, setScore] = useState(0);
  const scoreIntervalRef = useRef<number | null>(null);

  const startScoring = () => {
    if (!isWinning) {
      setScore(1);
      setIsWinning(true);
    }

    scoreIntervalRef.current = window.setInterval(() => {
      setScore(
        (prevScore) =>
          prevScore + SCORE_BASE_RATE + prevScore * SCORE_MULTIPLIER
      );
    }, 100);
  };

  const stopScoring = () => {
    setIsWinning(false);
    if (scoreIntervalRef.current) {
      clearInterval(scoreIntervalRef.current);
    }
  };

  useEffect(
    () => () => {
      if (scoreIntervalRef.current) {
        clearInterval(scoreIntervalRef.current);
      }
    },
    []
  );

  return (
    <div ref={containerRef} className="h-screen w-screen ">
      <div className="absolute inset-0 flex size-full flex-col items-center justify-end">
        <div className="flex w-full items-center justify-between gap-2 p-4">
          <div className="flex items-center gap-2 rounded-md bg-white/60 px-3 py-2.5 shadow-md outline outline-1 outline-black/10">
            <StarIcon className="size-4 shrink-0" />
            <Paragraph>{Math.floor(score).toLocaleString()} points</Paragraph>
          </div>
        </div>
      </div>
      <span
        className="z-20 inline-block size-20 cursor-grab will-change-transform"
        ref={elementRef}
        onMouseEnter={startScoring}
        onMouseLeave={stopScoring}
      >
        <Me className="shadow-lg outline outline-1 outline-black/10" />
      </span>
    </div>
  );
};

export default ScreensaverPage;
