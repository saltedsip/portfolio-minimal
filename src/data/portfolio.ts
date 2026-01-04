// ============================================
// PORTFOLIO CONFIGURATION FILE
// ============================================
// Edit this file to update ALL content on your portfolio.
// Every text, link, card, and section can be modified here.
// ============================================

// --------------------------------------------
// SITE CONFIG
// --------------------------------------------
export const siteConfig = {
  title: "Talha Kashif Hassan - Full Stack Developer",
  description: "Full stack developer specializing in React, Next.js, and Node.js.",
  url: "https://talhakashif.dev",
  ogImage: "/og-image.png",
  keywords: "full stack developer, react, nextjs, nodejs, freelance",
};

// --------------------------------------------
// PERSONAL INFO
// --------------------------------------------
export const personalInfo = {
  name: "Talha Kashif Hassan",
  firstName: "Talha",
  title: "Full Stack Developer",
  email: "talhakashif.dev@gmail.com",
  phone: "+92 326 622 7895",
  location: "Remote, Worldwide",
};

// --------------------------------------------
// SOCIAL LINKS (leave empty to hide)
// --------------------------------------------
export const socialLinks = {
  github: "https://github.com/saltedsip",
  linkedin: "https://linkedin.com/in/talha-kashif-hassan",
  twitter: "",
  fiverr: "",
};

// --------------------------------------------
// NAVIGATION
// --------------------------------------------
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// --------------------------------------------
// HERO SECTION
// --------------------------------------------
export const heroContent = {
  greeting: "👋",
  headline: "Talha Kashif Hassan",
  subheadline: "Full Stack Developer",
  bio: "I help businesses and startups bring their ideas to life through clean, scalable code. As a Level 2 Fiverr seller, I've delivered 200+ projects—from sleek landing pages to full-featured SaaS dashboards—with a 4.9/5 client satisfaction rating.",
  ctaText: "Get in touch",
  ctaLink: "#contact",
  // Secondary CTA (leave empty to hide)
  secondaryCtaText: "",
  secondaryCtaLink: "",
};

// Hero badges/stats
export const heroBadges = [
  { icon: "award", label: "Level 2 Seller" },
  { icon: "star", label: "4.9/5 rating" },
  { icon: "clock", label: "24hr response" },
];

// --------------------------------------------
// ABOUT SECTION
// --------------------------------------------
export const aboutContent = {
  title: "About me",
  paragraphs: [
    "I'm a full stack developer who loves building modern, scalable web applications that solve real problems. My core stack is React, Next.js, and Node.js, but I'm equally comfortable with Webflow, WordPress, and custom backend solutions.",
    "I'm passionate about building products that make a real impact. Beyond client work, I'm actively working on my own SaaS ideas. I believe great software comes from understanding the problem first, then writing code.",
  ],
};

// --------------------------------------------
// SKILLS (add/remove categories and skills)
// --------------------------------------------
export const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3/Sass",
    "TailwindCSS",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
  ],
  Tools: [
    "Git",
    "Webflow",
    "WordPress",
    "Figma",
  ],
};

// --------------------------------------------
// WORK EXPERIENCE
// --------------------------------------------
export const experienceTitle = "Experience";

export const workExperience = [
  {
    id: 1,
    company: "Fiverr",
    title: "Freelance Full Stack Developer",
    period: "03.2017 – Present",
    isActive: true,
    highlights: [
      "Delivered 200+ web development projects with 4.9/5 satisfaction rating.",
      "Achieved Level 2 seller status, increasing repeat business by 40%.",
    ],
    tags: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
  },
  {
    id: 2,
    company: "Aardig",
    title: "Webflow Developer",
    period: "06.2022 – 04.2023",
    isActive: false,
    highlights: [
      "Improved user engagement metrics by 20% through custom interactions.",
      "Achieved 40% increase in page load speeds with performance optimization.",
    ],
    tags: ["Webflow", "Figma", "GSAP", "CSS3"],
  },
  {
    id: 3,
    company: "DeBetaStudent",
    title: "WordPress Developer",
    period: "12.2018 – 06.2022",
    isActive: false,
    highlights: [
      "Developed 15+ WordPress and Wix websites with 40% engagement increase.",
      "Boosted organic traffic by 25% through advanced SEO techniques.",
    ],
    tags: ["WordPress", "PHP", "MySQL", "SEO"],
  },
];

// --------------------------------------------
// EDUCATION & CERTIFICATIONS
// --------------------------------------------
export const educationTitle = "Education & Certifications";

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Virtual University of Pakistan",
};

export const certifications = [
  {
    title: "Code In Place",
    issuer: "Stanford University",
    year: "2025",
  },
  {
    title: "Front-End Developer Specialization",
    issuer: "Meta",
    year: "2023",
  },
];

// --------------------------------------------
// PROJECTS SECTION
// --------------------------------------------
export const projectsContent = {
  title: "Projects",
  subtitle: "Here's a selection of projects I've worked on. Each represents a unique challenge and opportunity to deliver exceptional results.",
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=E-Commerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Template System",
    description: "A customizable portfolio template system built with Next.js and TailwindCSS. Includes CMS integration and SEO optimization.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=Portfolio",
    tags: ["Next.js", "TailwindCSS", "Sanity CMS"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS companies featuring real-time data visualization, user management, and subscription handling.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=Dashboard",
    tags: ["React", "TypeScript", "Firebase"],
    link: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Webflow Agency Site",
    description: "High-converting agency website with custom animations, CMS integration, and lead generation forms.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=Agency",
    tags: ["Webflow", "GSAP", "Figma"],
    link: "#",
    featured: false,
  },
];

// --------------------------------------------
// CONTACT SECTION
// --------------------------------------------
export const contactContent = {
  title: "Get in Touch",
  subtitle: "Have a project in mind? I'd love to hear about it. Feel free to reach out through any of the channels below.",
  ctaTitle: "Ready to start a project?",
  ctaSubtitle: "Let's build something great together.",
  ctaButtonText: "Send me an email",
};

// Contact methods (add/remove to show/hide cards)
export const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: "talhakashif.dev@gmail.com",
    icon: "mail",
    href: "gmail",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+92 326 622 7895",
    icon: "phone",
    href: "tel:+923266227895",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    icon: "linkedin",
    href: "https://linkedin.com/in/talha-kashif-hassan",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@saltedsip",
    icon: "github",
    href: "https://github.com/saltedsip",
  },
];

// --------------------------------------------
// FOOTER
// --------------------------------------------
export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Talha Kashif Hassan`,
  showSocialLinks: true,
};

// --------------------------------------------
// SECTION VISIBILITY (set to false to hide)
// --------------------------------------------
export const sectionVisibility = {
  hero: true,
  about: true,
  projects: false,  // Set to false to hide Projects section
  contact: true,
};
