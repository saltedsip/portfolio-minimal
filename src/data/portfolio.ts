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
  { label: "Testimonials", href: "#testimonials" },
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
  // Resume download button (leave empty to hide)
  resumeText: "Download Resume",
  resumeLink: "/resume.pdf", // Add your resume PDF to public folder
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
    title: "LMS Course Platform",
    description: "Full-featured learning management system with video courses, progress tracking, quizzes, certificates, and Stripe payment integration. Built for an ed-tech startup.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=LMS+Platform",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Job Board SaaS",
    description: "Multi-tenant job board platform with employer dashboards, applicant tracking, resume parsing, and subscription billing. Handles 10K+ listings.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=Job+Board",
    tags: ["React", "Node.js", "MongoDB", "Redis"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, map integration, virtual tours, and agent management. Mobile-responsive with 50K+ monthly users.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=Real+Estate",
    tags: ["Next.js", "TypeScript", "Mapbox", "Supabase"],
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Travel Booking Engine",
    description: "End-to-end travel booking system with flight/hotel search, dynamic pricing, booking management, and multi-currency support for a travel agency.",
    image: "https://placehold.co/600x400/1a1a2e/4ade80?text=Travel+Booking",
    tags: ["React", "Express", "PostgreSQL", "AWS"],
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
// TESTIMONIALS SECTION
// --------------------------------------------
export const testimonialsContent = {
  title: "What Clients Say",
  subtitle: "Don't just take my word for it — here's what clients have to say about working with me.",
};

export const testimonials = [
  {
    id: 1,
    name: "J. Anthony",
    role: "",
    company: "United States",
    image: "",
    content: "Kashif did an amazing job! The website looks incredible and very professional. He was polite, communicative, and paid great attention to detail throughout the entire process. Super talented designer — highly recommended! 10/10",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus B.",
    role: "",
    company: "Germany",
    image: "",
    content: "Absolutely wow! KASHIF is an outstanding professional, super friendly, and always reliable. He perfectly redesigned my website, making it look great on mobile as well. Very fast and competent service – always happy to work with him again!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sherry P.",
    role: "",
    company: "United Kingdom",
    image: "",
    content: "If I could give this guy more stars, I would. Thanks a million for your support and patience! I will be back!",
    rating: 5,
  },
  {
    id: 4,
    name: "Maxwell E.",
    role: "",
    company: "United States",
    image: "",
    content: "I know barely anything about website design. This guy was so professional and made sure he got it right. I'm very happy with the results — money very well spent. He saved me a lot of time of trial and error.",
    rating: 5,
  },
  {
    id: 5,
    name: "David X.",
    role: "",
    company: "Australia",
    image: "",
    content: "Kashif went above and beyond to help get the job done promptly and efficiently. He was always happy to help with my requests. Very good communication and turnaround times. Would highly recommend him to anyone!",
    rating: 5,
  },
  {
    id: 6,
    name: "Svenja M.",
    role: "",
    company: "Germany",
    image: "",
    content: "I am beyond pleased with his work. Not only did he optimize my website for mobile, but he also gave me helpful suggestions to fix my site's SEO! Amazing experience — so friendly and responsive.",
    rating: 5,
  },
  {
    id: 7,
    name: "Mike J.",
    role: "",
    company: "India",
    image: "",
    content: "Excellent Work — my best experience on Fiverr so far! Easy and quick service. Great communication. Did what he said he would do. If you are considering working with this guy, give him a chance. You won't regret it!",
    rating: 5,
  },
  {
    id: 8,
    name: "Eddie O.",
    role: "",
    company: "United States",
    image: "",
    content: "The Seller works fast, solved problems quickly, and was very understanding. Also demonstrated strong leadership skills and is an over-achiever. The pricing was better than competitors for similar service!",
    rating: 5,
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
// SECTION VISIBILITY
// Set to false to visually hide (content still accessible to search engines)
// --------------------------------------------
export const sectionVisibility = {
  hero: true,
  about: true,
  projects: false,
  testimonials: true,
  contact: true,
};
