import React from "react";
import type { Metadata } from "next";
import { me } from "@/data/me";
import dynamic from "next/dynamic";

const Project = dynamic(() => import("@/components/Project"), {});

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};

export default async function Projects() {
  return (
    <div>
      <div className="flex  my-10 justify-center items-center gap-2">
        <img src="/images/star.png" alt="star" width={40} />
        <h1 className="text-center">ALL PROJECTS</h1>
        <img src="/images/star.png" alt="star" width={40} />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300,1fr))] place-items-center gap-8">
        {me.projects?.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
