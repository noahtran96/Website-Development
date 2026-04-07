import { HighlightItem } from "../constants";
import { HIGHLIGHT_ITEMS } from "../constants";

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="animate-fade-in animation-delay-100 text-secondary-foreground text-4xl leading-tight font-bold md:text-5xl">
              Building the future,{" "}
              <span className="font-serif font-normal text-white italic">
                one component at a time.
              </span>
            </h2>

            <div className="text-muted-foreground animate-fade-in animation-delay-200 space-y-4">
              <p>
                I'm a passionate software engineer with over 1 year of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern front-end
                technologies.
              </p>
              <p>
                I specialize in React, TypeScript, and Tailwind CSS, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="glass glow-border animate-fade-in animation-delay-300 rounded-2xl p-6">
              <p className="text-foreground text-lg font-medium italic">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful - products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6 sm:grid-cols-2">
            {HIGHLIGHT_ITEMS.map((item: HighlightItem, index: number) => (
              <div
                key={index}
                className="glass animate-fade-in rounded-2xl p-6"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="bg-primary/10 hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                  <item.icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
