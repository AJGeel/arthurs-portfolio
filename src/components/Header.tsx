"use client";

import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

import { youngSerif } from "./Typography";

type HeaderItem = {
  href: string;
  label: string;
  isActive: boolean;
};

const headerItems: Omit<HeaderItem, "isActive">[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

const HeaderItem = ({ label, href, isActive }: HeaderItem) => (
  <Link
    key={label}
    className={cn(
      "px-4 py-2 rounded-full group outline-black/5",
      isActive && "bg-white shadow duration-150 outline outline-1"
    )}
    href={href}
  >
    <span className="block duration-150 group-hover:opacity-50 group-active:scale-90 group-active:opacity-80">
      {label}
    </span>
  </Link>
);

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-between p-6">
      <Link
        href="/"
        className={cn(
          youngSerif.className,
          "text-xl rounded-full px-2 py-1 -mx-2 active:scale-90 active:opacity-80 duration-150"
        )}
      >
        Arthur Geel
      </Link>
      <div className="flex items-center justify-center gap-1 rounded-full bg-yellow-700 p-1.5">
        {headerItems.map(({ label, href }) => (
          <HeaderItem
            key={label}
            label={label}
            href={href}
            isActive={pathname === href}
          />
        ))}
      </div>
      <Link
        className="group -mx-2 hidden w-32 items-center justify-end gap-2 overflow-hidden rounded-full px-2 py-1.5 duration-150 active:scale-90 active:opacity-80 md:flex"
        href="https://linkedin.com/in/ajgeel"
        target="_blank"
        rel="_noopener noreferrer"
      >
        <span>Contact</span>
        <ChatBubbleLeftIcon className="-mr-6 h-4 w-4 duration-150 group-hover:mr-0" />
      </Link>
    </div>
  );
};

export default Header;
