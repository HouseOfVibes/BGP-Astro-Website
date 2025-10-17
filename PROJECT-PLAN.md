# BGP Astro Website Rebuild - Project Plan

## 🎯 Project Overview

Rebuilding the Believer's Gathering Place (bgpnc.com) website using Astro v5, maintaining the existing design and structure while modernizing the technology stack.

---

## 📊 Current Status

### ✅ Completed
- [x] Astro v5.14.6 installed and configured
- [x] Vercel adapter installed and tested
- [x] Site structure analyzed (see [SITE-STRUCTURE.md](SITE-STRUCTURE.md))
- [x] Design tokens extracted (colors, fonts)
- [x] Component architecture planned
- [x] Deployment guide created (see [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md))
- [x] SEO components created
- [x] TypeScript configuration
- [x] Sitemap integration
- [x] MCP Astro docs integration

### ⚠️ In Progress
- [ ] Page development (structure only exists)
- [ ] Component library development
- [ ] Styling/CSS implementation

### ❌ Not Started
- [ ] Content migration
- [ ] Image optimization
- [ ] Form integrations
- [ ] Third-party services setup
- [ ] Testing

---

## 🗂️ File Structure Plan

```
src/
├── components/
│   ├── navigation/
│   │   ├── Header.astro              ✅ Created (needs enhancement)
│   │   ├── MobileMenu.astro          ❌ To create
│   │   └── NavDropdown.astro         ❌ To create
│   ├── home/
│   │   ├── Hero.astro                ❌ To create
│   │   ├── ServiceCards.astro        ❌ To create
│   │   ├── ScriptureMonth.astro      ❌ To create
│   │   ├── CoreValues.astro          ❌ To create
│   │   └── Leadership.astro          ❌ To create
│   ├── common/
│   │   ├── Footer.astro              ✅ Created (needs enhancement)
│   │   ├── SEO.astro                 ✅ Created
│   │   ├── Button.astro              ❌ To create
│   │   ├── Card.astro                ❌ To create
│   │   └── SocialLinks.astro         ❌ To create
│   ├── forms/
│   │   ├── ContactForm.astro         ❌ To create
│   │   └── NewsletterSignup.astro    ❌ To create
│   └── maps/
│       └── GoogleMap.astro           ❌ To create
├── layouts/
│   ├── Layout.astro                  ✅ Created (base layout)
│   └── PageLayout.astro              ❌ To create (with hero)
├── pages/
│   ├── index.astro                   ⚠️ Structure only
│   ├── about.astro                   ❌ To create
│   ├── join.astro                    ❌ To create
│   ├── give.astro                    ❌ To create
│   ├── events.astro                  ❌ To create
│   ├── contact.astro                 ⚠️ Structure only
│   ├── thank-you.astro               ❌ To create
│   ├── services.astro                ⚠️ Exists (repurpose or remove)
│   └── blog/                         ✅ Exists
│       ├── index.astro
│       └── [slug].astro
├── styles/
│   ├── global.css                    ❌ To create
│   ├── variables.css                 ❌ To create (design tokens)
│   └── style.css                     ✅ Exists (minimal)
└── content/
    └── blog/                         ✅ Ready
        └── first-post.md

public/
├── images/
│   ├── logo/                         ❌ Add church logo
│   ├── hero/                         ❌ Add hero images
│   ├── leadership/                   ❌ Add pastor photos
│   └── church/                       ❌ Add facility photos
├── favicon.ico                       ❌ Add
└── robots.txt                        ✅ Exists
```

---

## 📝 Development Phases

### Phase 1: Foundation & Styling (Week 1)

**Goal:** Set up design system and core components

#### Tasks:
1. **Install Tailwind CSS**
   ```bash
   npx astro add tailwind
   ```

2. **Create Design Tokens** (`src/styles/variables.css`)
   - Colors: `#212121`, `#9c8040`, `#ffffff`
   - Fonts: Roboto, Poppins
   - Spacing scale
   - Breakpoints

3. **Update Base Layout** (`src/layouts/Layout.astro`)
   - Add Roboto and Poppins fonts
   - Apply global styles
   - Add smooth scrolling

4. **Enhance Header Component**
   - Fixed/sticky header
   - Scroll effects
   - Desktop navigation with dropdowns
   - Mobile hamburger menu trigger

5. **Create Mobile Menu Component**
   - Slide-out navigation panel
   - Responsive design

6. **Enhance Footer Component**
   - Contact information
   - Google Maps embed
   - Newsletter signup
   - Social media links

**Deliverables:**
- ✅ Tailwind configured
- ✅ Design system in place
- ✅ Header with navigation
- ✅ Footer with all sections
- ✅ Mobile-responsive base

---

### Phase 2: Homepage Development (Week 1-2)

**Goal:** Complete homepage with all sections

#### Components to Build:

1. **Hero Section** (`src/components/home/Hero.astro`)
   - Background image
   - Church name
   - Tagline: "A Place to Belong, Believe, and Become"
   - CTA button

2. **Service Cards** (`src/components/home/ServiceCards.astro`)
   - Three cards:
     - Service Time: Sundays 12:30 PM
     - Location: 5101 Rolesville Road, Wendell, NC
     - What to Expect

3. **Scripture of the Month** (`src/components/home/ScriptureMonth.astro`)
   - Decorative display
   - Current: II Timothy 1:7
   - Auto-update system (content collection)

4. **Core Values** (`src/components/home/CoreValues.astro`)
   - Three pillars: Believe, Connect, Grow
   - Icons or images
   - Descriptions

5. **Leadership Section** (`src/components/home/Leadership.astro`)
   - Pastor Mark Smith
   - Lady LaQuadia Smith
   - Photos, quotes, bios

**Deliverables:**
- ✅ Complete homepage
- ✅ All sections functional
- ✅ Responsive design
- ✅ Optimized images

---

### Phase 3: Core Pages (Week 2-3)

**Goal:** Build essential pages

#### Pages to Create:

1. **About Page** (`src/pages/about.astro`)
   - Church history
   - Mission/Vision
   - Values expanded
   - Statement of faith

2. **Contact Page** (`src/pages/contact.astro`)
   - Contact form
   - Map embed
   - Contact information
   - Service times

3. **Thank You Page** (`src/pages/thank-you.astro`)
   - Form submission confirmation
   - Return to home link

4. **Join Page** (`src/pages/join.astro`)
   - Membership information
   - Process overview
   - Benefits
   - Sign-up form

**Deliverables:**
- ✅ 4 essential pages complete
- ✅ Contact form functional
- ✅ Content populated

---

### Phase 4: Advanced Features (Week 3-4)

**Goal:** Add giving, events, and integrations

#### Pages & Features:

1. **Give Page** (`src/pages/give.astro`)
   - Online giving integration (Tithe.ly, Pushpay, etc.)
   - Giving options
   - Information about stewardship

2. **Events Page** (`src/pages/events.astro`)
   - Event calendar/listing
   - Event cards
   - Registration links

3. **Form Integrations**
   - Contact form email handling (Formspree, Netlify Forms, etc.)
   - Newsletter signup integration
   - Form validation
   - reCAPTCHA

4. **Third-Party Services**
   - Google Analytics
   - Vercel Analytics
   - Social media embeds

**Deliverables:**
- ✅ Give page with integration
- ✅ Events page
- ✅ Forms working
- ✅ Analytics tracking

---

### Phase 5: Testing & Launch (Week 4)

**Goal:** Test, optimize, and deploy

#### Tasks:

1. **Testing**
   - Cross-browser testing (Chrome, Safari, Firefox, Edge)
   - Mobile device testing (iOS, Android)
   - Form submission testing
   - Link checking
   - Performance testing

2. **Optimization**
   - Image optimization
   - Lazy loading
   - Code splitting
   - Performance audit (Lighthouse)

3. **SEO**
   - Meta tags on all pages
   - Open Graph tags
   - Schema markup
   - XML sitemap (✅ already configured)
   - Submit to Google Search Console

4. **Content Review**
   - Proofread all text
   - Check all images
   - Verify contact information
   - Test all CTAs

5. **Deployment**
   - Deploy to Vercel
   - Configure custom domain (bgpnc.com)
   - Set up DNS
   - SSL certificate (automatic with Vercel)

**Deliverables:**
- ✅ All tests passed
- ✅ Performance optimized (90+ Lighthouse score)
- ✅ Deployed to production
- ✅ Domain configured
- ✅ Go live!

---

## 🎨 Design Implementation

### Color Palette
```css
:root {
  --color-primary-dark: #212121;
  --color-gold: #9c8040;
  --color-white: #ffffff;
  --color-text-dark: #333333;
  --color-text-light: #666666;
}
```

### Typography Scale
```css
:root {
  --font-primary: 'Roboto', sans-serif;
  --font-secondary: 'Poppins', sans-serif;

  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}
```

### Spacing Scale
Using Tailwind's default spacing scale (0.25rem increments)

---

## 🔧 Technical Stack

### Core
- **Framework**: Astro v5.14.6
- **Deployment**: Vercel
- **CSS**: Tailwind CSS
- **TypeScript**: Enabled

### Integrations
- `@astrojs/sitemap` - ✅ Installed
- `@astrojs/vercel` - ✅ Installed
- `@astrojs/tailwind` - ❌ To install

### Third-Party Services (To Configure)
- Email service (Mailchimp, ConvertKit, etc.)
- Form handling (Formspree, Netlify Forms, etc.)
- Online giving (Tithe.ly, Pushpay, etc.)
- Google Analytics
- reCAPTCHA

---

## 📋 Content Migration Checklist

### Text Content
- [ ] Homepage hero text
- [ ] Service information details
- [ ] Scripture of the month
- [ ] Core values descriptions
- [ ] Leadership bios and quotes
- [ ] About page content
- [ ] Mission/Vision statements
- [ ] Contact information
- [ ] Join page content
- [ ] Give page content
- [ ] Events descriptions

### Images Required
- [ ] Church logo (various sizes)
- [ ] Favicon (16x16, 32x32, etc.)
- [ ] Hero background image
- [ ] Pastor Mark Smith photo
- [ ] Lady LaQuadia Smith photo
- [ ] Service/worship photos
- [ ] Church facility photos
- [ ] Social media preview image (1200x630)

### External Links
- [ ] Facebook URL
- [ ] Instagram URL
- [ ] TikTok URL
- [ ] Shop link (https://inspiringstyles.shop)
- [ ] Google Maps embed code

---

## 🎯 Success Metrics

### Performance Goals
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Best Practices: 95+
- [ ] Lighthouse SEO: 95+
- [ ] First Contentful Paint: < 1.5s
- [ ] Time to Interactive: < 3.5s

### Functionality Checks
- [ ] All navigation links work
- [ ] Mobile menu functions properly
- [ ] Contact form submits successfully
- [ ] Newsletter signup works
- [ ] Maps embed loads correctly
- [ ] Social media links work
- [ ] External shop link opens in new tab
- [ ] Forms have proper validation
- [ ] Forms have spam protection

### Cross-Browser Compatibility
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)

---

## 📞 Points of Contact

### Content Providers
- Church leadership for text content
- Photography team for images
- Social media team for links

### Technical Services
- Domain registrar (for DNS configuration)
- Email service provider
- Online giving platform
- Google Analytics account

---

## 🚀 Quick Start Commands

```bash
# Development
npm run dev                    # Start dev server

# Building & Testing
npm run build                  # Build for production
npm run preview               # Preview production build

# Deployment
git push origin main          # Deploy to Vercel (auto-deploy)

# Adding Integrations
npx astro add tailwind        # Add Tailwind CSS
npx astro add react           # Add React (if needed)
npx astro add mdx            # Add MDX support
```

---

## 📅 Timeline Overview

**Week 1**: Foundation & Homepage
**Week 2-3**: Core Pages & Content
**Week 3-4**: Advanced Features & Integrations
**Week 4**: Testing & Launch

**Target Launch**: 4 weeks from project start

---

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Site Structure Document](SITE-STRUCTURE.md)
- [Deployment Guide](DEPLOYMENT-GUIDE.md)
- Current website: https://bgpnc.com

---

**Status**: Ready to begin Phase 1 - Foundation & Styling
**Last Updated**: 2025-10-17
