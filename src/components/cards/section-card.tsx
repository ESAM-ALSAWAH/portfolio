"use client";

import { cn, playClickAudio } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SectionCardProps {
  // add props here
  children: React.ReactNode;
  href?: string;
  className?: string;
  linkInIcon?: boolean;
}

const SectionCardIcon = ({
  linkInIcon,
  href,
}: Omit<SectionCardProps, "children" | "className">) => {
  const Icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 46 42"
      className="opacity-25 transition-all duration-200 group-hover:opacity-100"
      fill="none"
    >
      <path
        d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z"
        fill="#F4F4F4"
        stroke="#F4F4F4"
      />
      <rect
        y="21.6981"
        width="0.999999"
        height="18"
        transform="rotate(-90 0 21.6981)"
        fill="#F4F4F4"
      />
      <path
        d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314"
        stroke="#F4F4F4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
  return !linkInIcon ? Icon : <Link href={href || "/"}>{Icon}</Link>;
};
const SectionCard = (props: SectionCardProps) => {
  const { children, href, className, linkInIcon } = props;
  return (
    <div
      className={cn(
        "group p-6 relative rounded-card overflow-hidden border-1 border-zinc-800 linear-gradient",
        className
      )}
    >
      {children}

      {href && !linkInIcon && (
        <Link
          href={href}
          onClick={playClickAudio}
          className="absolute inset-0"
          scroll
        />
      )}
    </div>
  );
};

export { SectionCard, SectionCardIcon };
