import { Award, Star, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { heroContent, heroBadges, socialLinks } from "@/data/portfolio";

// Icon mapping for badges
const iconMap: Record<string, React.ElementType> = {
  award: Award,
  star: Star,
  clock: Clock,
};

const HeroSection = () => (
  <section id="home" className="py-16 md:py-24">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
      {heroContent.headline} <span className="inline-block">{heroContent.greeting}</span>
    </h1>
    <p className="text-xl text-primary font-medium mb-6">{heroContent.subheadline}</p>
    <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
      {heroContent.bio}
    </p>

    {/* Badges */}
    {heroBadges.length > 0 && (
      <div className="flex flex-wrap gap-3 mb-8">
        {heroBadges.map((badge, i) => {
          const Icon = iconMap[badge.icon] || Award;
          return (
            <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium">
              <Icon className="w-4 h-4 text-primary" />
              <span>{badge.label}</span>
            </div>
          );
        })}
      </div>
    )}

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-4">
      {heroContent.ctaText && (
        <a 
          href={heroContent.ctaLink} 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          {heroContent.ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
      {heroContent.secondaryCtaText && (
        <a 
          href={heroContent.secondaryCtaLink}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
        >
          {heroContent.secondaryCtaText}
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
      {socialLinks.fiverr && (
        <a 
          href={socialLinks.fiverr}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
        >
          Hire me on Fiverr
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  </section>
);

export default HeroSection;
