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
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="mx-4 text-sm font-medium">
                  <span className="text-zinc-500">LATEST WORK AND</span>{" "}
                  <span className="text-white">FEATURED</span>{" "}
                  <span className="text-zinc-500">LATEST WORK AND</span>{" "}
                  <span className="text-white">FEATURED</span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export { MarqueeHeader };
