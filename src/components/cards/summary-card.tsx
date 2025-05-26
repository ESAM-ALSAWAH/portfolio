import Image from "next/image";
import { SectionCard, SectionCardIcon } from "./section-card";

const SummaryCard = () => {
  return (
    <SectionCard>
      <div className="h-full flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="relative w-full sm:max-w-48 mx-auto min-h-48 overflow-hidden rounded-tr-2xl rounded-bl-2xl rounded-tl-2xl rounded-br-2xl sm:rounded-tr-none sm:rounded-bl-none">
          <Image alt="me" src="/images/me.jpg" className="object-cover" fill />
          <div className="absolute inset-0 bg-black/50  z-40" />
        </div>
        <div className="flex-1 relative">
          <span className="text-foreground-third">Frontend Developer</span>
          <h1>Esam Alsawah.</h1>
          <p className="text-foreground-secondary">
            I&apos;m Frontend developer based in syria.
          </p>
          <div className="sm:absolute flex justify-end right-0">
            <SectionCardIcon />
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export { SummaryCard };
