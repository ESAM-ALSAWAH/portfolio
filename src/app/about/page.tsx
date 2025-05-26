import React from "react";
import type { Metadata } from "next";
import { SectionCard } from "@/components/cards/section-card";
import { me } from "@/data/me";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "About me",
};

const Experience = ({
  title,
  location,
  description,
  period,
}: {
  title: string;
  location: string;
  description: string;
  period: string;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-foreground-secondary">{period}</span>
      <h6 className="text-base text-primary">{title}</h6>
      <p className="text-sm text-foreground-secondary">{location}</p>
      <p className="text-base text-foreground-third whitespace-pre-wrap">
        {description}
      </p>
    </div>
  );
};
const Skill = ({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-base text-primary">{category}</h6>
      <div className="flex flex-wrap gap-2">
        {skills?.map((skill, index) => (
          <Button
            key={index}
            variant="secondary"
            size="sm"
            className="pointer-events-none"
          >
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default async function About() {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-10">
      <div className="flex-1 sm:sticky sm:top-20">
        <SectionCard>
          <div className="relative w-full ">
            <img
              alt="me"
              src="/images/me.jpg"
              className="object-cover rounded-2xl min-h-[250px]"
            />
            <div className="absolute inset-0 bg-black/50  z-40 rounded-2xl" />
          </div>
          <h4 className="text-center my-5">Esam Alsawah</h4>
          <div className="flex mb-5 gap-2 justify-center items-center">
            {me.profiles?.map((profile, index) => (
              <Link key={index} href={profile.href} target="_blank">
                <Button
                  size="icon"
                  variant="secondary"
                  className="group/icon rounded-full w-12 h-12 cursor-pointer transition-all duration-200"
                >
                  <Image
                    src={profile.Icon}
                    alt={profile.name}
                    width={24}
                    height={24}
                    className=" group-hover/icon:invert transition-all duration-200"
                  />
                </Button>
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button variant="secondary" className="w-full cursor-pointer">
              Contact Me
            </Button>
          </Link>
        </SectionCard>
      </div>
      <div className="flex-2 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h5>ABOUT ME</h5>
          <p className="text-foreground-secondary">{me.summary}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h5>EXPERIENCE</h5>
          {me.experiences?.map((experience, index) => (
            <Experience key={index} {...experience} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h5>SKILLS</h5>
          {me.skills?.map((skill, index) => <Skill key={index} {...skill} />)}
        </div>
      </div>
    </div>
  );
}
