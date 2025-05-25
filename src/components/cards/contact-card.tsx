import Image from "next/image";
import { SectionCard, SectionCardIcon } from "./section-card";

const ContactCard = () => {
  return (
    <SectionCard href="/contact" className="flex flex-col">
      <div className="-mt-6 pb-6">
        <Image
          alt="Contact"
          src="/images/contact-card.png"
          width={30}
          height={30}
        />
      </div>
      <div className="flex items-end justify-between">
        <h1>
          Let&apos;s <br />
          work <span className="text-primary">together.</span>
        </h1>
        <SectionCardIcon />
      </div>
    </SectionCard>
  );
};

export { ContactCard };
