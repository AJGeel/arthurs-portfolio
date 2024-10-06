"use client";

import Image from "next/image";
import React from "react";

import Sparkly from "@/components/Sparkly";
import { Paragraph } from "@/components/Typography";
import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/utils";

type IconGridProps = {
  className?: string;
  items: GridItem[];
};

export type GridItem = {
  name: string;
  img?: string;
  bgColor?: string;
};

const IconGrid = ({ className, items }: IconGridProps) => (
  <div className={cn("grid grid-cols-2 gap-2 sm:grid-cols-3", className)}>
    {items.map((item) => (
      <GridItem key={item.name} {...item} />
    ))}
  </div>
);

const GridItem = ({ name, img, bgColor }: GridItem) => {
  const mousePosition = useMousePosition();

  const color = bgColor ?? "rgba(0,0,0,.5)";

  return (
    <Sparkly
      color={color}
      sparkleClassName="opacity-50"
      mousePosition={mousePosition}
    >
      <div className="group relative flex items-center gap-2.5 overflow-hidden rounded-md bg-gradient-to-b from-white/80 to-white/30 p-3 shadow-sm outline outline-1 outline-black/10 duration-500 hover:shadow-md">
        <div
          style={{ backgroundColor: color }}
          className="pointer-events-none absolute left-0 top-0 h-full w-1/2 translate-x-[-80%] skew-x-[40deg] opacity-0 bg-blend-screen blur-lg duration-500 group-hover:translate-x-[-40%] group-hover:opacity-20"
        />
        {img && (
          <Image
            className="size-6 shrink-0 rounded-sm opacity-50 saturate-0 duration-500 group-hover:opacity-100 group-hover:saturate-100"
            width={80}
            height={80}
            src={img}
            alt={name}
          />
        )}
        <Paragraph className="grow truncate">{name}</Paragraph>
      </div>
    </Sparkly>
  );
};

export default IconGrid;
