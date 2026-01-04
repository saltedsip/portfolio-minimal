import { ReactNode } from "react";
import { Header, Footer, ScrollToTop, useScrollTracking, useTheme } from "@/components/ui/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isScrolled, activeSection, showScrollTop, scrollToTop } = useScrollTracking();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-28 sm:pb-24">
        {children}
      </main>

      <ScrollToTop visible={showScrollTop} onClick={scrollToTop} />
      <Footer />
    </div>
  );
};

export default Layout;
