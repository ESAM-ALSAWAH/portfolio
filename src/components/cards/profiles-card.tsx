import { SectionCard, SectionCardIcon } from "./section-card";
import { Button } from "../ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const ProfilesCard = () => {
  return (
    <SectionCard className="flex flex-col gap-5 h-full">
      <div className="stats-card flex-1 flex items-center justify-center gap-5 relative px-1 py-3">
        <Link href="https://github.com/ESAM-ALSAWAH" target="_blank">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full w-16 h-16 cursor-pointer"
          >
            <Github className="size-8" />
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/esamalsawah" target="_blank">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full w-16 h-16 cursor-pointer"
          >
            <Linkedin className="size-8" />
          </Button>
        </Link>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-foreground-third text-xs font-medium">
            STAY WITH ME
          </span>
          <h4>Profiles</h4>
        </div>
        <SectionCardIcon href="/" />
      </div>
    </SectionCard>
  );
};

export { ProfilesCard };
