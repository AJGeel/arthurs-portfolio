"use client";

import React, { ReactNode, useState } from "react";

import { MousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/utils";

import Sparkle from "./partials/Sparkle";
import useSparkles from "./partials/useSparkles";

type SparklyProps = {
  color?: string;
  children: ReactNode;
  isAlwaysVisible?: boolean;
  className?: string;
  sparkleClassName?: string;
  mousePosition?: MousePosition;
};

export const DEFAULT_COLOR = "#FFC700";

const Sparkly = ({
  color = DEFAULT_COLOR,
  children,
  isAlwaysVisible = false,
  className,
  sparkleClassName,
  mousePosition,
}: SparklyProps) => {
  const { sparkles } = useSparkles({ color, mousePosition });
  const [isHovering, setIsHovering] = useState(true);

  const shouldShowSparkle = isAlwaysVisible ? true : isHovering;

  return (
    <span
      onMouseEnter={() => {
        setIsHovering(false);
      }}
      onMouseLeave={() => {
        setIsHovering(true);
      }}
      className={cn(
        "relative inline-block",
        !isAlwaysVisible && "cursor-grabbing",
        className
      )}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={cn(
            "duration-500",
            shouldShowSparkle ? "opacity-0" : "opacity-100"
          )}
        >
          <Sparkle
            className={cn(mousePosition && "fixed", sparkleClassName)}
            key={sparkle.id}
            {...sparkle}
          />
        </div>
      ))}
      <div className="relative">{children}</div>
    </span>
  );
};

export default Sparkly;
