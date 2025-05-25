import React from "react";
import type { Metadata } from "next";
import { SectionCard } from "@/components/cards/section-card";
import Image from "next/image";
import { LocateIcon, Mail, Phone } from "lucide-react";

import { ContactUsForm } from "@/components/contact-us-form";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Page Description",
};

const IconBoxClassName =
  "p-3 linear-gradient border-1 border-zinc-800 rounded-lg";

const ContactBox = ({
  title,
  icon,
  description,
  Link,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  Link?: (props: { children: React.ReactNode }) => React.ReactNode;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <div className={IconBoxClassName}>{icon}</div>
      <div className="flex flex-col gap-.5">
        <p className="text-xs font-medium text-foreground-secondary uppercase">
          {title}
        </p>
        {Link ?
          <Link>
            <p className="text-sm text-foreground whitespace-pre-line">
              {description}
            </p>
          </Link>
        : <p className="text-sm text-foreground whitespace-pre-line">
            {description}
          </p>
        }
      </div>
    </div>
  );
};
export default async function Contact() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-20">
      <div className="flex-1 flex flex-col gap-5">
        <h5>CONTACT INFO</h5>
        <ContactBox
          title="Email"
          icon={<Mail />}
          description="esama@esama.com"
          Link={(props) => <a {...props} href="mailto:esama@esama.com" />}
        />
        <ContactBox
          title="Phone"
          icon={<Phone />}
          description="(+963) 943-618-200"
          Link={(props) => (
            <a {...props} href="whatsapp://+963943618200" target="_blank" />
          )}
        />
        <ContactBox
          title="Location"
          icon={<LocateIcon />}
          description="Damascus, Syria"
        />
      </div>
      <SectionCard className="flex-2">
        <div className="-mt-6 pb-6 flex justify-end">
          <Image
            alt="Contact"
            src="/images/contact-card.png"
            width={30}
            height={30}
          />
        </div>
        <div className="flex items-end justify-between -mt-6">
          <h1>
            Let&apos;s work <span className="text-primary">together.</span>
          </h1>
        </div>

        <ContactUsForm />
      </SectionCard>
    </div>
  );
}
