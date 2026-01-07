import Layout from "@/components/Layout";
import { HeroSection, AboutSection, ProjectsSection, TestimonialsSection, ContactSection } from "@/components/sections";
import { sectionVisibility } from "@/data/portfolio";

// Wrapper component that hides sections visually but keeps them in DOM for SEO
const SectionWrapper = ({ 
  visible, 
  children 
}: { 
  visible: boolean; 
  children: React.ReactNode;
}) => (
  <div className={visible ? "" : "sr-only"} aria-hidden={!visible}>
    {children}
  </div>
);

const Index = () => (
  <Layout>
    <SectionWrapper visible={sectionVisibility.hero}>
      <HeroSection />
    </SectionWrapper>
    
    <SectionWrapper visible={sectionVisibility.about}>
      <AboutSection />
    </SectionWrapper>
    
    <SectionWrapper visible={sectionVisibility.projects}>
      <ProjectsSection />
    </SectionWrapper>
    
    <SectionWrapper visible={sectionVisibility.testimonials}>
      <TestimonialsSection />
    </SectionWrapper>
    
    <SectionWrapper visible={sectionVisibility.contact}>
      <ContactSection />
    </SectionWrapper>
  </Layout>
);

export default Index;
