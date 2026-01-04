import { ExternalLink } from "lucide-react";
import { projects, projectsContent } from "@/data/portfolio";

const ProjectsSection = () => (
  <section id="projects" className="py-16 border-t border-border">
    <h2 className="text-2xl font-bold mb-6">{projectsContent.title}</h2>
    {projectsContent.subtitle && (
      <p className="text-muted-foreground mb-8">{projectsContent.subtitle}</p>
    )}

    <div className={`grid gap-5 ${
      projects.length === 1 ? "grid-cols-1" :
      projects.length === 2 ? "grid-cols-1 md:grid-cols-2" :
      projects.length === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" :
      "grid-cols-1 md:grid-cols-2"
    }`}>
      {projects.map((project) => (
        <article key={project.id} className="bg-secondary border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all group">
          {/* Project Image */}
          {project.image && (
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          <div className="p-6">
            {project.featured && (
              <p className="text-xs text-primary uppercase tracking-wide mb-2">Featured Project</p>
            )}
            {!project.featured && (
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Project</p>
            )}
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
            
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {project.link && project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                View project <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
