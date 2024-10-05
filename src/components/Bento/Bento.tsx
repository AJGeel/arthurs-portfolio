"use client";

import { ArrowTrendingUpIcon, HandRaisedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

import Me from "@/components/Me";
import { H3, Paragraph } from "@/components/Typography";
import { cn } from "@/utils/cn";

import { BlogBentoProps, IconBentoProps, ImageBentoProps } from "./types";

const classes = {
  base: "p-8 rounded-3xl bg-white shadow-sm active:scale-95 active:opacity-80 duration-150 min-h-[256px] flex flex-col",
  pill: "flex items-center gap-2 px-3 py-2 rounded-full outline outline-2 outline-black/5 bg-white",
  ringHover: "group-hover:ring ring-blue-500 ring-offset-2 duration-150",
};

const externalProps = (isExternal?: boolean) => ({
  ...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {}),
});

export const BlogBentoItem = ({
  title,
  description,
  date,
  href,
  isExternal,
}: Omit<BlogBentoProps, "type">) => (
  <Link
    href={href}
    className={cn(classes.base, "lg:col-span-2 group")}
    {...externalProps(isExternal)}
  >
    <H3>{title}</H3>
    <Paragraph className="mt-3">{description}</Paragraph>
    <div className="mt-auto flex items-center justify-between">
      <div className={cn(classes.pill, classes.ringHover)}>
        <Paragraph>Read more</Paragraph>
        <ArrowTrendingUpIcon className="h-4 w-4" />
      </div>
      <p className="text-sm text-black/40">{date}</p>
    </div>
  </Link>
);

export const IconBentoItem = ({
  imageUrl,
  label,
  bgColor,
  href,
  isExternal,
}: Omit<IconBentoProps, "type">) => (
  <Link
    href={href}
    className={cn(
      classes.base,
      "relative flex items-center justify-center group"
    )}
    {...externalProps(isExternal)}
    style={{ backgroundColor: bgColor }}
  >
    <Image src={imageUrl} width={80} height={80} alt={label} />
    <div
      className={cn(
        classes.pill,
        classes.ringHover,
        "absolute bottom-4 left-4 gap-0 overflow-hidden"
      )}
    >
      <Paragraph className="-ml-24 w-[88px] text-center opacity-0 duration-300 group-hover:ml-0 group-hover:opacity-100">
        {label}
      </Paragraph>
      <ArrowTrendingUpIcon className="ml-2 h-4 w-4" />
    </div>
  </Link>
);

export const ArthurBentoItem = () => (
  <button
    className={cn(
      classes.base,
      "text-left row-span-2 grow group cursor-pointer flex flex-col"
    )}
    onClick={() => {
      alert("Hello back!");
    }}
  >
    <Me />
    <Paragraph className="mt-6">Hi there, I&apos;m Arthur!</Paragraph>
    <Paragraph className="mt-3">
      I&apos;m a designer/developer from Amersfoort, working at Enrise.
    </Paragraph>
    <Paragraph className="mt-3">
      I&apos;m passionate about design, digital products, sci-fi, music (DnB)
      and leading a secret society dedicated to eradicating the use of Comic
      Sans.
    </Paragraph>
    <div className="mt-auto">
      <div className={cn(classes.pill, classes.ringHover, "inline-flex")}>
        <Paragraph>Say hi!</Paragraph>
        <HandRaisedIcon className="h-4 w-4" />
      </div>
    </div>
  </button>
);

export const ImageBentoItem = ({
  imageUrl,
  label,
  href,
  className,
  isExternal,
}: Omit<ImageBentoProps, "type">) => (
  <Link
    href={href}
    className={cn(
      classes.base,
      "relative flex items-center justify-center group overflow-hidden",
      className
    )}
    {...externalProps(isExternal)}
  >
    <Image
      src={imageUrl}
      fill={true}
      alt={label}
      style={{ objectFit: "cover" }}
    />
    <div
      className={cn(
        classes.pill,
        classes.ringHover,
        "absolute bottom-4 left-4 gap-0 overflow-hidden"
      )}
    >
      <Paragraph className="-ml-28 w-[100px] text-center opacity-0 duration-300 group-hover:ml-0 group-hover:opacity-100">
        {label}
      </Paragraph>
      <ArrowTrendingUpIcon className="ml-2 h-4 w-4" />
    </div>
  </Link>
);
