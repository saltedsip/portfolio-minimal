import { Mail, Menu, X, ArrowUp, Sun, Moon } from "lucide-react";
import { personalInfo, socialLinks, navLinks, footerContent, sectionVisibility } from "@/data/portfolio";
import { useState, useEffect, useMemo } from "react";

// TK Logo SVG Component
export const TKLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 256"
    className={className}
  >
    <path fill="currentColor" d="M0 0h192v64H0V0Z" />
    <path fill="currentColor" d="M64 64h64v192H64V64Z" />
    <path fill="currentColor" d="M256 0h64v256h-64V0Z" />
    <path fill="currentColor" d="M320 64h64V0h64v128h-64V64h-64Z" />
    <path fill="currentColor" d="M320 128h64v64h64v64h-64v-64h-64v-64Z" />
  </svg>
);

// Gmail compose URL helper
export const getGmailUrl = (email: string) => 
  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry`;

// Theme Toggle Hook
export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};

// Theme Toggle Button
export const ThemeToggle = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  >
    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);

// Header Component
interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header = ({ isScrolled, activeSection, isDark, onToggleTheme }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter nav links based on section visibility
  const visibleNavLinks = useMemo(() => {
    return navLinks.filter(link => {
      const sectionId = link.href.replace("#", "") as keyof typeof sectionVisibility;
      return sectionVisibility[sectionId] !== false;
    });
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#home" className="text-primary" aria-label="Talha Kashif Hassan - Home">
          <TKLogo className="h-7 sm:h-8 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {visibleNavLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            );
          })}
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </nav>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border px-6 py-4">
          <div className="flex flex-col gap-3">
            {visibleNavLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-2 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

// Footer Component
export const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-40 pb-[env(safe-area-inset-bottom)]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
      <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">{footerContent.copyright}</p>
      
      {footerContent.showSocialLinks && (
        <div className="flex items-center gap-4">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          <a
            href={getGmailUrl(personalInfo.email)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  </footer>
);

// Scroll to Top Button
interface ScrollToTopProps {
  visible: boolean;
  onClick: () => void;
}

export const ScrollToTop = ({ visible, onClick }: ScrollToTopProps) => (
  <button
    onClick={onClick}
    className={`fixed bottom-20 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:opacity-90 z-40 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
    }`}
    aria-label="Scroll to top"
  >
    <ArrowUp className="w-5 h-5" />
  </button>
);

// Custom hook for scroll tracking
export const useScrollTracking = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);

      // Only check sections that are visible
      const visibleSections = navLinks
        .map(link => link.href.replace("#", ""))
        .filter(sectionId => {
          const visibility = sectionVisibility[sectionId as keyof typeof sectionVisibility];
          return visibility !== false;
        });
      
      const scrollPosition = window.scrollY + 150;
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection(visibleSections[visibleSections.length - 1]);
      } else {
        for (let i = visibleSections.length - 1; i >= 0; i--) {
          const section = document.getElementById(visibleSections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(visibleSections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return { isScrolled, activeSection, showScrollTop, scrollToTop };
};
