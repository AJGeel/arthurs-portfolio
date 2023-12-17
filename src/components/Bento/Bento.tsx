import { ArrowTrendingUpIcon, HandRaisedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

import { youngSerif } from "@/app/layout";
import Paragraph from "@/components/Paragraph";
import { cn } from "@/utils/cn";

const baseBentoClasses =
  "p-8 rounded-3xl bg-white shadow-sm active:scale-95 active:opacity-80 duration-150 min-h-[256px] flex flex-col";
const basePillClasses =
  "flex items-center gap-2 px-3 py-2 rounded-full outline outline-2 outline-black/5 bg-white";
const ringHoverClasses =
  "group-hover:ring ring-blue-500 ring-offset-2 duration-150";

type BlogBentoItem = {
  title: string;
  description: string;
  date: string;
  href: string;
};

type IconBentoItem = {
  imageUrl: string;
  label: string;
  bgColor: string;
  href: string;
};

type ImageBentoItem = {
  imageUrl: string;
  label: string;
  href: string;
  className?: string;
};

export const BlogBentoItem = ({
  title,
  description,
  date,
  href,
}: BlogBentoItem) => (
  <Link href={href} className={cn(baseBentoClasses, "lg:col-span-2 group")}>
    <h1 className={cn(youngSerif.className, "text-lg")}>{title}</h1>
    <Paragraph className="mt-3">{description}</Paragraph>
    <div className="mt-auto flex items-center justify-between">
      <div className={cn(basePillClasses, ringHoverClasses)}>
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
}: IconBentoItem) => (
  <Link
    href={href}
    className={cn(
      baseBentoClasses,
      "relative flex items-center justify-center group"
    )}
    style={{ backgroundColor: bgColor }}
  >
    <Image src={imageUrl} width={80} height={80} alt={label} />
    <div
      className={cn(
        basePillClasses,
        ringHoverClasses,
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
  <div
    className={cn(
      baseBentoClasses,
      "row-span-2 grow group cursor-pointer flex flex-col"
    )}
  >
    <Paragraph>Hi there, I&apos;m Arthur!</Paragraph>
    <Paragraph className="mt-3">
      I&apos;m a designer/developer from Amersfoort, working at Enrise.
    </Paragraph>
    <Paragraph className="mt-3">
      I like software, design, science fiction, music (especially DnB) and web3
      stuff.
    </Paragraph>
    <div className="mt-auto">
      <div className={cn(basePillClasses, ringHoverClasses, "inline-flex")}>
        <Paragraph>Say hi!</Paragraph>
        <HandRaisedIcon className="h-4 w-4" />
      </div>
    </div>
  </div>
);

export const ImageBentoItem = ({
  imageUrl,
  label,
  href,
  className,
}: ImageBentoItem) => (
  <Link
    href={href}
    className={cn(
      baseBentoClasses,
      "relative flex items-center justify-center group overflow-hidden",
      className
    )}
  >
    <Image src={imageUrl} fill={true} alt={label} />
    <div
      className={cn(
        basePillClasses,
        ringHoverClasses,
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
