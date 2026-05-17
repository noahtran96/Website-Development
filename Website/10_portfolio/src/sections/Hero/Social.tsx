import { SOCIAL_LINKS, SocialLink } from "@/constants";

export const Social = () => {
  return (
    <div className="animate-fade-in animation-delay-400 flex items-center gap-4">
      <span className="text-muted-foreground text-sm">Follow me: </span>
      {SOCIAL_LINKS.map((social: SocialLink) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:bg-primary/10 hover:text-primary rounded-full p-2 transition-all duration-300"
          >
            <IconComponent className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};
