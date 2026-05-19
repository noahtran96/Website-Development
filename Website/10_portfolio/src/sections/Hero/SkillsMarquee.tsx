import { SKILLS, SkillType } from "@/constants";

export const SkillsMarquee = () => {
  return (
    <div className="animate-fade-in animation-delay-600 mt-20">
      <p className="text-muted-foreground mb-6 text-center text-sm">
        Technologies I work with
      </p>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex">
          {[...SKILLS, ...SKILLS].map((skill: SkillType, index: number) => (
            <div
              key={`${skill.id}-${index}`}
              className="flex-shrink-0 px-8 py-4"
            >
              <span className="text-muted-foreground/50 hover:text-muted-foreground text-xl font-semibold transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
