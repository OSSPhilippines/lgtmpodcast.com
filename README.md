# LGTM Podcast

Website for LGTM Podcast by OSSPH - A tech podcast featuring discussions about software development, open source, and technology in the Philippines.

## 🚀 Tech Stack

- **Next.js 15.5.6** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **MagicUI Components** - Animated UI components
- **Lucide Icons** - Beautiful icon library

## ✨ Features

- ⚡️ **Performance Optimized** - Static generation, 122 kB First Load JS
- 🎨 **Beautiful UI** - MagicUI-inspired animations (ShimmerButton, AnimatedGradientText, BentoGrid)
- 📱 **Responsive Design** - Mobile-friendly layout
- ♿️ **Accessible** - Semantic HTML and ARIA labels
- 🔍 **SEO Friendly** - Metadata, Open Graph, Twitter Cards, robots.txt
- 🎯 **PWA Ready** - Web app manifest included

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment

### GitHub Pages

This project is configured to automatically deploy to GitHub Pages on every push to the `main` branch.

#### Setup Instructions:

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to the `main` branch to trigger the deployment workflow
4. Your site will be available at `https://<username>.github.io/<repository-name>/`

The deployment workflow:
- Builds the Next.js app as a static site
- Exports all pages as SEO-friendly HTML
- Automatically deploys to GitHub Pages

See `.github/workflows/deploy.yml` for the workflow configuration.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # UI components
│       ├── button.tsx
│       ├── shimmer-button.tsx
│       ├── animated-gradient-text.tsx
│       └── bento-grid.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
│   ├── manifest.json
│   └── robots.txt
└── next.config.ts        # Next.js configuration
```

## 🎯 Keywords

LGTM, Podcast, OSSPH, Open Source, Tech, Software Development, Philippines, Technology

## 📄 License

Copyright © 2025 LGTM Podcast by OSSPH. All rights reserved.

## 🤝 Contributing

This is the official website for LGTM Podcast by Open Source Software Philippines (OSSPH).

Visit [OSSPH Website](https://ossph.org) to learn more about the community.
