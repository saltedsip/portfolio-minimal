# Portfolio Minimal

A modern, single-page portfolio website built with React, TypeScript, and TailwindCSS. Fully customizable from a single config file.

![Portfolio Preview](https://placehold.co/1200x630/1a1a2e/4ade80?text=Portfolio+Minimal)

## ✨ Features

- **Single-page layout** with smooth scroll navigation
- **Dark mode** with localStorage persistence
- **Active nav highlighting** based on scroll position
- **Fully responsive** (320px to 4K)
- **Section visibility toggle** - show/hide any section
- **Centralized config** - all content in one file
- **Dynamic grids** - auto-adjust based on items
- **Project images** support
- **Gmail compose links** for easy contact

## 📁 Project Structure

```
src/
├── data/
│   └── portfolio.ts         # ← ALL content config here
├── components/
│   ├── Layout.tsx           # Main layout wrapper
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── navigation.tsx   # Header, Footer, ScrollToTop, ThemeToggle
├── pages/
│   └── Index.tsx            # Main page
└── index.css                # Global styles + dark mode
```

## ⚙️ Customization

Edit `src/data/portfolio.ts` to update everything:

| Section | What you can change |
|---------|-------------------|
| `personalInfo` | Name, title, email, phone |
| `socialLinks` | GitHub, LinkedIn, Twitter, Fiverr |
| `heroContent` | Headline, bio, CTAs |
| `heroBadges` | Stats badges |
| `aboutContent` | About paragraphs |
| `skills` | Skills by category |
| `workExperience` | Jobs, roles, highlights |
| `education` | Degree, institution |
| `certifications` | Certs array |
| `projects` | Projects with images |
| `contactMethods` | Contact cards |
| `sectionVisibility` | Show/hide sections |

### Hide a Section

```typescript
export const sectionVisibility = {
  hero: true,
  about: true,
  projects: false,  // ← Hidden
  contact: true,
};
```

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Vite** for fast development
- **TailwindCSS** for styling
- **Radix UI** for accessible components
- **Lucide React** for icons

## 📦 Getting Started

```bash
# Install dependencies
bun install
# or
npm install

# Start dev server
bun run dev
# or
npm run dev

# Build for production
bun run build
```

## 🎨 Design

- **Light mode**: Clean white with professional green accent
- **Dark mode**: Dark background with brighter green
- Clean Inter typography
- Soft rounded corners
- Responsive from 320px mobile to 4K

## 📄 License

MIT License - use this as a template for your own portfolio!