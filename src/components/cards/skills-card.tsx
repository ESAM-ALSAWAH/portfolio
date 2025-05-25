"use client";
import React from "react";

import { SectionCard, SectionCardIcon } from "./section-card";
import { useSliderX } from "@/hooks/useSliderX";

const skills = [
  "html",
  "css",
  "sass",
  "js",
  "ts",
  "react",
  "nextjs",
  "vite",
  "tailwind",
  "mui",
  "nodejs",
  "mongodb",
  "npm",
  "yarn",
  "pnpm",
  "bun",
  "postman",
];

const SkillsCard = () => {
  const { containerRef, scrollRef } = useSliderX(0.5);

  return (
    <SectionCard className="flex flex-col gap-5 h-full w-full">
      <h1>Skills</h1>
      <div ref={containerRef} className="whitespace-nowrap w-full h-full grid">
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4"
            style={{ willChange: "transform" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <img
                key={index}
                alt={skill}
                src={`https://skillicons.dev/icons?i=${skill}`}
                className="min-w-16"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <SectionCardIcon />
      </div>
    </SectionCard>
  );
};

export { SkillsCard };
