import Image from "next/image";
import { SectionCard, SectionCardIcon } from "./section-card";

const AboutCard = () => {
  return (
    <SectionCard href="/" className="flex flex-col">
      <div className="flex-1 grid place-items-center relative min-h-[130px]">
        <Image
          alt="Signature"
          src="/images/signature.png"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-foreground-third text-xs font-medium">
            MORE ABOUT ME
          </span>
          <h4>Credintials</h4>
        </div>
        <SectionCardIcon />
      </div>
    </SectionCard>
  );
};

export { AboutCard };
