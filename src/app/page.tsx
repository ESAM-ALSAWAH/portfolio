import React from "react";
import type { Metadata } from "next";

import { SummaryCard } from "@/components/cards/summary-card";
import { AboutCard } from "@/components/cards/about-card";
import { WorksCard } from "@/components/cards/works-card";
import { BlogCard } from "@/components/cards/blog-card";
import { ContactCard } from "@/components/cards/contact-card";
import { StatsCard } from "@/components/cards/stats-card";
import { SkillsCard } from "@/components/cards/skills-card";
import { ProfilesCard } from "@/components/cards/profiles-card";
import { MarqueeHeader } from "@/components/marquee-header";

export const metadata: Metadata = {
  title: "Portfolio | Esam Alsawah",
  description: "Portfolio",
};

export default async function PageName() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <SummaryCard />
        <div className="flex flex-col gap-5 w-full overflow-hidden">
          <div className="h-fit w-full">
            <MarqueeHeader />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 h-full">
            <AboutCard />
            <WorksCard />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="col-span-2 md:col-span-1">
          <BlogCard />
        </div>
        <div className="col-span-2">
          <SkillsCard />
        </div>
        <div className="col-span-2 md:col-span-1">
          <ProfilesCard />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <StatsCard />
        <ContactCard />
      </div>
    </div>
  );
}
