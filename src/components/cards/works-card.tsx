import Image from "next/image";
import { SectionCard, SectionCardIcon } from "./section-card";

const WorksCard = () => {
  return (
    <SectionCard href="/" className="flex flex-col">
      <div className="flex-1 grid place-items-center relative min-h-[100px]">
        <Image
          alt="Works"
          src="/images/my-works.png"
          className="object-contain"
          fill
        />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-foreground-third text-xs font-medium uppercase">
            Showcase
          </span>
          <h4>Projects</h4>
        </div>
        <SectionCardIcon />
      </div>
    </SectionCard>
  );
};

export { WorksCard };
