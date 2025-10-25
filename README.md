# Believer's Gathering Place (BGP) Website

Official website for Believer's Gathering Place church, built with Astro v5 and Tailwind CSS v4.

**Live Site:** [bgpnc.com](https://bgpnc.com)

## Tech Stack

- **Framework:** Astro v5.14.6
- **Styling:** Tailwind CSS v4.1.14
- **Deployment:** Vercel
- **Analytics:** (To be added)

## Project Structure

```
BGP-Astro-Website/
├── src/
│   ├── components/
│   │   ├── home/          # Homepage sections
│   │   │   ├── Hero.astro
│   │   │   ├── ServiceInfo.astro
│   │   │   ├── ScriptureMonth.astro
│   │   │   ├── Values.astro
│   │   │   ├── Leadership.astro
│   │   │   └── ConnectWithUs.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── Layout.astro   # Main layout wrapper
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── contact.astro
│   │   ├── services.astro
│   │   └── blog/
│   ├── styles/
│   │   ├── global.css     # Design tokens & Tailwind
│   │   └── style.css
│   └── content/
│       └── blog/          # Blog posts
├── public/
│   ├── images/
│   │   ├── home/          # Homepage images
│   │   └── logo/
│   └── robots.txt
├── Website-Media/         # Source media files
└── Documentation/
    ├── HOMEPAGE-CHANGES.md
    ├── SITE-STRUCTURE.md
    ├── PROJECT-PLAN.md
    └── DEPLOYMENT-GUIDE.md
```

## Design System

### Colors
- **Primary Dark:** `#212121`
- **Gold:** `#9c8040`
- **Gold Hover:** `#b89654`

### Typography
- **Primary Font:** Noto Serif
- **Secondary Font:** Montserrat

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HouseOfVibes/BGP-Astro-Website.git
   cd BGP-Astro-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321)

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Development Status

### Completed
- ✅ Astro v5 setup with Tailwind CSS v4
- ✅ Homepage with 6 sections
- ✅ Responsive design
- ✅ Component architecture
- ✅ Design system implementation
- ✅ Vercel deployment configuration
- ✅ Contact page
- ✅ Join page
- ✅ Give page
- ✅ Header and Footer
- ✅ Newsletter integration
- ✅ SEO optimization
- ✅ Google Analytics integration
- ✅ Privacy Policy page
- ✅ Thank you pages for forms
- ✅ Image optimization

### Planned
- ⏳ Blog functionality
- ⏳ Event calendar
- ⏳ About page

## Pages

1. **Homepage** (`/`) - ✅ Complete
   - Hero section
   - Service information
   - Scripture of the Month
   - Core values
   - Leadership profiles
   - Connect with us

2. **Contact** (`/contact`) - ✅ Complete
3. **Join** (`/join`) - ✅ Complete
4. **Give** (`/give`) - ✅ Complete
5. **Privacy Policy** (`/privacy`) - ✅ Complete
6. **Newsletter Thank You** (`/newsletter-thank-you`) - ✅ Complete
7. **Contact Thank You** (`/contact-thank-you`) - ✅ Complete
8. **404 Error Page** - ✅ Complete
9. **About** - ⏳ Planned
10. **Events** - ⏳ Planned
11. **Blog** (`/blog`) - ⏳ Planned

## Key Features

- Fast, static site generation with Astro
- Modern CSS with Tailwind v4
- Responsive, mobile-first design
- SEO-optimized structure
- Component-based architecture
- FormSubmit integration for newsletter
- Font Awesome icons
- Google Fonts (Roboto, Poppins)

## Deployment

Deployed on Vercel with automatic deployments from the `main` branch.

**Production URL:** https://bgpnc.com

## Documentation

- [Homepage Changes](HOMEPAGE-CHANGES.md) - Complete changelog of homepage implementation
- [Site Structure](SITE-STRUCTURE.md) - Analysis of original bgpnc.com website
- [Project Plan](PROJECT-PLAN.md) - 4-week development roadmap
- [Deployment Guide](DEPLOYMENT-GUIDE.md) - Vercel deployment instructions

## Contributing

This is a private church website. For updates or issues, contact the development team.

## License

Copyright © 2025 Believer's Gathering Place. All rights reserved.

## Contact

**Believer's Gathering Place**
5101 Rolesville Road
Wendell, NC 27591
Service Time: Sundays at 12:30 PM

Website: [bgpnc.com](https://bgpnc.com)
Email: info@bgpnc.com
