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
                I’m a career switcher transitioning into software engineering,
                currently gaining hands-on experience in a professional tech
                environment. I’m focused on building a strong foundation in
                full-stack development, with an interest in both frontend and
                backend systems. I enjoy learning how different parts of a
                system work together to build complete, user-friendly
                applications.
              </p>
              <p>
                I currently use React, TypeScript, and Tailwind CSS to build
                modern web applications while actively learning backend
                development. I’m working toward becoming a full-stack engineer,
                focused on building complete, scalable applications from front
                to back.
              </p>
            </div>

            <div className="glass glow-border animate-fade-in animation-delay-300 rounded-2xl p-6">
              <p className="text-foreground text-lg font-medium italic">
                "My mission is to build digital experiences that are both
                functional and enjoyable to use, while keeping the codebase
                clean, maintainable, and scalable for developers."
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
