import { ArrowUpRight, Github } from "lucide-react";
import { ProjectItem } from "@/constants";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const idNumber = Number(project.id) || 1;

  return (
    <div
      className="group glass animate-fade-in overflow-hidden rounded-2xl md:row-span-1"
      style={{ animationDelay: `${idNumber * 100}ms` }}
    >
      {/*  */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-900 group-hover:scale-110"
        />
        <div className="from-card via-card/50 absolute inset-0 bg-gradient-to-t to-transparent opacity-60" />

        {/*  */}
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

      {/*  */}
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between">
          {/*  */}
          <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
        </div>

        <p className="text-muted-foreground text-sm">{project.description}</p>

        {/*  */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
