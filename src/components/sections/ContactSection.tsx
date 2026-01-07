import { Mail, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { personalInfo, socialLinks, contactContent, contactMethods } from "@/data/portfolio";
import { getGmailUrl } from "@/components/ui/navigation";

// Custom brand icons (from Simple Icons) - Lucide brand icons are deprecated
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  mail: Mail,
  phone: Phone,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
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
