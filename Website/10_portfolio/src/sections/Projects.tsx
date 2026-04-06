import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECT_ITEMS, ProjectItem } from "../constants";

export const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-32">
      {/* Background glow */}
      <div className="bg-primary/5 absolute top-1/4 right-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-highlight/5 absolute bottom-1/4 left-0 h-64 w-64 rounded-full blur-3xl" />
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-secondary-foreground animation-fade-in text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="animate-fade-in animation-delay-100 text-secondary-foreground mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Projects that{" "}
            <span className="font-serif font-normal text-white italic">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECT_ITEMS.map((project: ProjectItem, index: number) => (
            <div
              key={index}
              className="group glass animate-fade-in overflow-hidden rounded-2xl md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-900 group-hover:scale-110"
                />
                <div className="from-card via-card/50 absolute inset-0 bg-gradient-to-t to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-all"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <h3 className="group-hover:text-primary transition:colors text-xl font-semibold">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-surface border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA Button */}
        <div className="animate-fade-in animation-delay-500 mt-12 text-center">
          <a
            href="https://github.com/noahtran96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="h-5 w-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
