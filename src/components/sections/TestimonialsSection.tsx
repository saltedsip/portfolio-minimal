import { Star, Quote } from "lucide-react";
import { testimonialsContent, testimonials } from "@/data/portfolio";

// Get initials from name for avatar
const getInitials = (name: string) => {
  return name
    .split(/[\s.]/)
    .filter(word => word.length > 0)
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const TestimonialsSection = () => (
  <section id="testimonials" className="py-16 border-t border-border">
    <h2 className="text-2xl font-bold mb-6">{testimonialsContent.title}</h2>
    {testimonialsContent.subtitle && (
      <p className="text-muted-foreground mb-8 max-w-xl">{testimonialsContent.subtitle}</p>
    )}

    <div className={`grid gap-6 ${
      testimonials.length === 1 ? "grid-cols-1" :
      testimonials.length === 2 ? "grid-cols-1 md:grid-cols-2" :
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    }`}>
      {testimonials.map((testimonial) => (
        <article 
          key={testimonial.id} 
          className="group p-6 bg-secondary border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
        >
          {/* Header: Author info */}
          <div className="flex items-center gap-4 mb-4">
            {/* Avatar */}
            {testimonial.image ? (
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                {getInitials(testimonial.name)}
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {testimonial.role ? `${testimonial.role} • ${testimonial.company}` : testimonial.company}
              </p>
            </div>
            
            {/* Quote icon */}
            <Quote className="w-6 h-6 text-primary/30 flex-shrink-0" />
          </div>
          
          {/* Rating */}
          {testimonial.rating && (
            <div className="flex gap-0.5 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
          )}
          
          {/* Content */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            "{testimonial.content}"
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
