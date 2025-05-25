"use client";

import { Button } from "@/components/ui/button";
import { cn, playClickAudio } from "@/lib/utils";
import { BriefcaseBusiness, House, Info, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    text: "Home",
    href: "/",
    icon: <House size={20} />,
  },
  {
    text: "About",
    href: "/about",
    icon: <Info size={20} />,
  },
  {
    text: "Works",
    href: "/works",
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    text: "Contact",
    href: "/contact",
    icon: <Mail size={20} />,
  },
];
export function Navbar() {
  const pathname = usePathname();
  const isActiveRoute = (path: string) => pathname.endsWith(path);
  return (
    <div className="flex items-center justify-between py-5">
      <Link href="/" onClick={playClickAudio}>
        <img src="/images/logo.png" className="w-28" />
      </Link>
      <div className="items-center gap-4 hidden md:flex">
        {links?.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            onClick={playClickAudio}
            className={cn(
              "text-foreground-secondary transition duration-200 hover:text-white",
              isActiveRoute(v.href) ? "text-white" : ""
            )}
          >
            {v.text}
          </Link>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 items-center gap-4 flex md:hidden bg-[#1F1F1F] p-2 z-40 border-t border-t-zinc-900">
        {links?.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            onClick={playClickAudio}
            className={cn(
              "flex-1 items-center justify-center flex flex-col gap-1 text-sm text-foreground-secondary transition duration-200 hover:text-white",
              isActiveRoute(v.href) ? "text-white" : ""
            )}
          >
            {v.icon}
            {v.text}
          </Link>
        ))}
      </div>
      <Link href="/contact" onClick={playClickAudio}>
        <Button variant="secondary" className="cursor-pointer">
          Let&apos;s talk
        </Button>
      </Link>
    </div>
  );
}
