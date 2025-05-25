import Image from "next/image";
import { SectionCard, SectionCardIcon } from "./section-card";

const BlogCard = () => {
  return (
    <SectionCard href="/blog" className="flex flex-col">
      <div className="flex-1 grid place-items-center relative min-h-[130px]">
        <Image
          alt="Signature"
          src="/images/blog-card.png"
          className="object-contain"
          width={140}
          height={84}
        />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <span className="text-foreground-third text-xs font-medium uppercase">
            BLOG
          </span>
          <h4>Blog</h4>
        </div>
        <SectionCardIcon />
      </div>
    </SectionCard>
  );
};

export { BlogCard };
