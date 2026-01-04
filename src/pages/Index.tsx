import Layout from "@/components/Layout";
import { HeroSection, AboutSection, ProjectsSection, ContactSection } from "@/components/sections";
import { sectionVisibility } from "@/data/portfolio";

const Index = () => (
  <Layout>
    {sectionVisibility.hero && <HeroSection />}
    {sectionVisibility.about && <AboutSection />}
    {sectionVisibility.projects && <ProjectsSection />}
    {sectionVisibility.contact && <ContactSection />}
  </Layout>
);

export default Index;
