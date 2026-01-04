import { Mail, Phone, Linkedin, Github, Twitter, ArrowRight, ExternalLink } from "lucide-react";
import { personalInfo, socialLinks, contactContent, contactMethods } from "@/data/portfolio";
import { getGmailUrl } from "@/components/ui/navigation";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

const ContactSection = () => {
  const getHref = (method: typeof contactMethods[0]) => {
    if (method.href === "gmail") {
      return getGmailUrl(method.value);
    }
    return method.href;
  };

  return (
    <section id="contact" className="py-16 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">{contactContent.title}</h2>
      {contactContent.subtitle && (
        <p className="text-muted-foreground mb-8 max-w-xl">{contactContent.subtitle}</p>
      )}

      {/* Dynamic Contact Grid */}
      {contactMethods.length > 0 && (
        <div className={`grid gap-4 mb-8 ${
          contactMethods.length === 1 ? "grid-cols-1" :
          contactMethods.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
          contactMethods.length === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" :
          "grid-cols-1 sm:grid-cols-2"
        }`}>
          {contactMethods.map((method) => {
            const Icon = iconMap[method.icon] || Mail;
            const isExternal = method.href.startsWith("http") || method.href === "gmail";
            
            return (
              <a 
                key={method.id}
                href={getHref(method)} 
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-secondary border border-border rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-lg">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{method.label}</p>
                  <p className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors truncate">{method.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      )}

      {/* CTA */}
      <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
        <h3 className="font-semibold mb-2">{contactContent.ctaTitle}</h3>
        <p className="text-sm text-muted-foreground mb-4">{contactContent.ctaSubtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={getGmailUrl(personalInfo.email)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            {contactContent.ctaButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          {socialLinks.fiverr && (
            <a 
              href={socialLinks.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
            >
              Hire on Fiverr
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
