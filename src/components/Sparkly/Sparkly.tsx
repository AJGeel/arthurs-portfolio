"use client";

import { cn } from "@/utils";
import React, { ReactNode } from "react";
import Sparkle from "./partials/Sparkle";
import useSparkles from "./partials/useSparkles";

type SparklyProps = {
  color?: string;
  children: ReactNode;
  className?: string;
};

export const DEFAULT_COLOR = "#FFC700";

const Sparkly = ({
  color = DEFAULT_COLOR,
  children,
  className,
}: SparklyProps) => {
  const { sparkles } = useSparkles(color);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <div className="relative ">{children}</div>
    </span>
  );
};

export default Sparkly;
