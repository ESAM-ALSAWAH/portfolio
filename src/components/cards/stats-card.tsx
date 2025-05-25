import { SectionCard } from "./section-card";

const ContentCard = ({ num, title }: { num: string; title: string }) => {
  return (
    <div className="linear-gradient-2 rounded-card overflow-hidden w-full h-full flex flex-col gap-1 justify-center items-center py-10">
      <h2 className="font-medium">{num}</h2>
      <p className="text-[#BCBCBC] opacity-50 text-xs text-center whitespace-pre-line uppercase">
        {title}
      </p>
    </div>
  );
};
const StatsCard = () => {
  return (
    <SectionCard className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center ">
      <ContentCard num={"+4"} title={`Years\nExperience`} />
      <ContentCard num={"+20"} title={`Projects\nCompleted`} />
      <ContentCard num={"+10"} title={`Clients\nworldwide`} />
    </SectionCard>
  );
};

export { StatsCard };
