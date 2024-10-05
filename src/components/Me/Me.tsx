/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import { animated } from "react-spring";

import { useBoop } from "@/hooks/useBoop";
import { cn } from "@/utils/cn";
import { randomInRange } from "@/utils/randomInRange";

type MeProps = {
  className?: string;
};

const MIN_INDEX = 2;
const MAX_INDEX = 6;

const Me = ({ className }: MeProps) => {
  const [boopStyle, boopTrigger] = useBoop({
    scale: 1.15,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [randomIndex, setRandomIndex] = useState(MIN_INDEX);

  const onMouseEnter = () => {
    setRandomIndex(randomInRange(MIN_INDEX, MAX_INDEX, randomIndex));
    setIsHovered(true);
    boopTrigger();
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <animated.img
      src={isHovered ? `/images/me/me-${randomIndex}.jpg` : "/images/me/me.jpg"}
      style={{ ...boopStyle, imageRendering: "pixelated" }}
      className={cn("max-w-[80px] rounded w-full", className)}
      alt="me"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default Me;
