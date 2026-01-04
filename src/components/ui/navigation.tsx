import { Github, Linkedin, Mail, Menu, X, ArrowUp, Sun, Moon } from "lucide-react";
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
        <a href="#home" className="text-primary">
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
  <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-40">
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
              <Github className="w-4 h-4" />
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
              <Linkedin className="w-4 h-4" />
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

      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 150;
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1]);
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return { isScrolled, activeSection, showScrollTop, scrollToTop };
};
