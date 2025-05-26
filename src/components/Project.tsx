"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionCard, SectionCardIcon } from "./cards/section-card";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
} from "./ui/drawer";

interface ProjectProps {
  title: string;
  cover: string;
  link: string;
  description: string;
  skills?: string[];
}

export function Project(props: ProjectProps) {
  const { cover, description, link, title, skills } = props;
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <SectionCard
        className="flex flex-col gap-4 p-3 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="relative w-full">
          <img
            src={cover}
            alt={title}
            className="object-cover rounded-card min-h-[200px] w-full"
          />
          <div className="absolute inset-0 bg-black/20  z-40 rounded-card" />
        </div>
        <div className="flex items-center justify-between">
          <h5 className="px-1">{title}</h5>
          <SectionCardIcon />
        </div>
      </SectionCard>
      {isDesktop ?
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            withCloseIcon={false}
            className="pt-0 max-h-[90vh] overflow-auto"
          >
            <div className="flex flex-col gap-4 mt-5">
              <img
                src={cover}
                alt={title}
                className="object-cover rounded-md h-[300px]"
              />
              <DialogTitle>{title}</DialogTitle>

              <DialogDescription>{description}</DialogDescription>
              {skills && skills?.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h6>Skills</h6>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
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
              )}

              <Link href={link} target="_blank" className="mt-4">
                <Button variant="secondary" className="w-full cursor-pointer">
                  View Project
                  <ExternalLink className="size-4" />
                </Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      : <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <div className="flex flex-col gap-4 mt-5 px-5">
              <img
                src={cover}
                alt={title}
                className="object-cover rounded-md h-[300px]"
              />
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
              {skills && skills?.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h6>Skills</h6>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
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
              )}
            </div>
            <DrawerFooter className="pt-2 mt-4">
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      }
    </>
  );
}
