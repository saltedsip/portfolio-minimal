import { GraduationCap, Award as AwardIcon } from "lucide-react";
import { aboutContent, skills, workExperience, education, certifications, experienceTitle, educationTitle } from "@/data/portfolio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AboutSection = () => (
  <section id="about" className="py-16 border-t border-border">
    <h2 className="text-2xl font-bold mb-6">{aboutContent.title}</h2>
    
    {/* About paragraphs */}
    {aboutContent.paragraphs.map((paragraph, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-6">
        {paragraph}
      </p>
    ))}

    {/* Skills */}
    {Object.keys(skills).length > 0 && (
      <>
        <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
        <div className="space-y-4 mb-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{category}</p>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-secondary border border-border rounded-lg text-muted-foreground hover:border-primary/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    )}

    {/* Experience */}
    {workExperience.length > 0 && (
      <>
        <h3 className="text-lg font-semibold mb-4">{experienceTitle}</h3>
        <Accordion type="single" collapsible className="space-y-3 mb-8">
          {workExperience.map((exp) => (
            <AccordionItem 
              key={exp.id} 
              value={`exp-${exp.id}`}
              className="bg-secondary border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-sm text-primary">
                    {exp.company} · {exp.period}
                    {exp.isActive && <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">Current</span>}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mb-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    )}

    {/* Education & Certifications */}
    {(education.degree || certifications.length > 0) && (
      <>
        <h3 className="text-lg font-semibold mb-4">{educationTitle}</h3>
        <div className={`grid gap-3 ${
          certifications.length === 0 ? "grid-cols-1" :
          certifications.length === 1 ? "grid-cols-1 sm:grid-cols-2" :
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}>
          {education.degree && (
            <div className="p-4 bg-secondary border border-border rounded-xl hover:border-primary/30 transition-colors">
              <GraduationCap className="w-5 h-5 text-primary mb-2" />
              <h4 className="font-medium text-sm mb-1">{education.degree}</h4>
              <p className="text-xs text-primary">{education.institution}</p>
            </div>
          )}
          {certifications.map((cert, i) => (
            <div key={i} className="p-4 bg-secondary border border-border rounded-xl hover:border-primary/30 transition-colors">
              <AwardIcon className="w-5 h-5 text-primary mb-2" />
              <h4 className="font-medium text-sm mb-1">{cert.title}</h4>
              <p className="text-xs text-primary">{cert.issuer} · {cert.year}</p>
            </div>
          ))}
        </div>
      </>
    )}
  </section>
);

export default AboutSection;
