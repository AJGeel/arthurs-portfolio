"use client";

import { MegaphoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { youngSerif } from "@/app/layout";
import { cn } from "@/utils/cn";

const headerItems = [
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

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-between p-6">
      <Link
        href="/"
        className={cn(
          youngSerif.className,
          "text-xl rounded-full px-2 py-1 -mx-2 hover:text-yellow-700 duration-150"
        )}
      >
        Arthur Geel
      </Link>
      <div className="flex items-center justify-center gap-1 rounded-full bg-yellow-700 p-1.5">
        {headerItems.map((item) => (
          <Link
            key={item.label}
            className={cn(
              "px-4 py-2 rounded-full",
              pathname === item.href && "bg-white shadow"
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link
        className="group -mx-2 hidden w-32 items-center justify-end gap-2 overflow-hidden rounded-full px-2 py-1.5 md:flex"
        href="/"
      >
        <span>Contact</span>
        <MegaphoneIcon className="-mr-6 h-4 w-4 duration-150 group-hover:mr-0" />
      </Link>
    </div>
  );
};

export default Header;
