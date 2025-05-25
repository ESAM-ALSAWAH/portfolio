"use client";

import { useSliderX } from "@/hooks/useSliderX";
import { SectionCard } from "./cards/section-card";

const MarqueeHeader = () => {
  const { containerRef, scrollRef } = useSliderX(0.4);

  return (
    <SectionCard>
      <div ref={containerRef} className="flex w-full whitespace-nowrap">
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4"
            style={{ willChange: "transform" }}
          >
            <span className="mx-4 text-sm font-medium tracking-wide">
              <span className="text-zinc-500">CRAFTING</span>{" "}
              <span className="text-white">MODERN UI/UX</span>{" "}
              <span className="text-zinc-500">WITH</span>{" "}
              <span className="text-white">REACT & TAILWIND</span>
            </span>

            <span className="mx-4 text-sm font-medium tracking-wide">
              <span className="text-zinc-500">OPTIMIZED FOR</span>{" "}
              <span className="text-white">PERFORMANCE</span>{" "}
              <span className="text-zinc-500">&</span>{" "}
              <span className="text-white">ACCESSIBILITY</span>
            </span>

            <span className="mx-4 text-sm font-medium tracking-wide">
              <span className="text-zinc-500">PASSIONATE ABOUT</span>{" "}
              <span className="text-white">CLEAN CODE</span>{" "}
              <span className="text-zinc-500">&</span>{" "}
              <span className="text-white">DX</span>
            </span>

            <span className="mx-4 text-sm font-medium tracking-wide">
              <span className="text-zinc-500">BUILDING</span>{" "}
              <span className="text-white">COMPONENT SYSTEMS</span>{" "}
              <span className="text-zinc-500">FOR</span>{" "}
              <span className="text-white">SCALABILITY</span>
            </span>

            <span className="mx-4 text-sm font-medium tracking-wide">
              <span className="text-zinc-500">REAL PROJECTS IN</span>{" "}
              <span className="text-white">NEXT.JS</span>{" "}
              <span className="text-zinc-500">&</span>{" "}
              <span className="text-white">VUE</span>
            </span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export { MarqueeHeader };
