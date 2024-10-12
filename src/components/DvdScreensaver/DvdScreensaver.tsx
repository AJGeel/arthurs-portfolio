import {
  QuestionMarkCircleIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { useDvdScreensaver } from "react-dvd-screensaver";

import { cn } from "@/utils";

import Me from "../Me";
import { Paragraph } from "../Typography";

const SCORE_BASE_RATE = 50;
const SCORE_MULTIPLIER = 0.25;

const Panel = ({
  text,
  icon,
  label,
  className,
}: {
  text: string;
  icon?: "star" | "trophy" | "?";
  label: string;
  className?: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative flex items-center gap-2 rounded-md bg-white/60 px-3 py-2.5 shadow-md outline outline-1 outline-black/10",
        className
      )}
    >
      {icon === "star" && <StarIcon className="size-4 shrink-0" />}
      {icon === "trophy" && <TrophyIcon className="size-4 shrink-0" />}
      {icon === "?" && <QuestionMarkCircleIcon className="size-4 shrink-0" />}
      <Paragraph>{text}</Paragraph>
      {isHovering && (
        <div
          className={cn(
            "absolute bottom-12 left-0 flex w-full flex-col items-center"
          )}
        >
          <div className=" rounded-md bg-white/60 px-2 py-1.5 text-center text-xs shadow-lg outline outline-1 outline-black/10">
            {label}
          </div>
        </div>
      )}
    </div>
  );
};

const DvdScreensaver = () => {
  const { containerRef, elementRef } = useDvdScreensaver();
  const scoreIntervalRef = useRef<number | null>(null);

  const [isWinning, setIsWinning] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const startScoring = () => {
    if (!isWinning) {
      setScore(1);
      setIsWinning(true);
    }

    scoreIntervalRef.current = window.setInterval(() => {
      setScore((prevScore) =>
        Math.floor(prevScore + SCORE_BASE_RATE + prevScore * SCORE_MULTIPLIER)
      );
    }, 100);
  };

  const stopScoring = () => {
    setIsWinning(false);

    if (scoreIntervalRef.current) {
      clearInterval(scoreIntervalRef.current);

      if (score > highScore) {
        setHighScore(score);
      }
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
        <div className="flex w-full items-center gap-4 p-4">
          <Panel
            text={`${score.toLocaleString()} points`}
            icon="star"
            label="Current score"
          />
          {!!highScore && (
            <Panel
              text={`${highScore.toLocaleString()} points`}
              icon="trophy"
              label="Highscore"
            />
          )}
          <Panel
            text="What's this?"
            icon="?"
            label="A simple game. Hover over me to rack up points. Good luck."
            className="ml-auto"
          />
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

export default DvdScreensaver;
