# BGP Website - Client Handover Documentation

**Website:** https://bgpnc.com
**Client:** Believers Gathering Place
**Handover Date:** November 2025
**Developer:** MW Design Studio

---

## 📋 Table of Contents

1. [Website Overview](#website-overview)
2. [Access Credentials](#access-credentials)
3. [Technical Stack](#technical-stack)
4. [Content Management](#content-management)
5. [SEO & Marketing](#seo--marketing)
6. [Maintenance Guide](#maintenance-guide)
7. [Support & Resources](#support--resources)
8. [Emergency Contacts](#emergency-contacts)

---

## 🌐 Website Overview

### Pages & Structure

Your website consists of the following pages:

1. **Home** (`/`) - Main landing page with hero, values, leadership, and service info
2. **Join** (`/join`) - Membership information and small groups
3. **Give** (`/give`) - Multiple giving options (Tithe.ly, Givelify, CashApp, Zelle, Text-to-Give)
4. **Events** (`/events`) - Event calendar and upcoming gatherings
5. **Contact** (`/contact`) - Contact form with embedded map
6. **Privacy Policy** (`/privacy`) - Privacy and data protection information

**Additional Pages:**
- 404 Error Page - Custom "page not found" experience
- Thank You Pages (Contact, Newsletter) - Post-submission confirmations

---

## 🔑 Access Credentials

### Hosting & Deployment

**Platform:** Vercel
- **Dashboard:** https://vercel.com/dashboard
- **Login:** [To be provided by developer]
- **Project Name:** BGP-Astro-Website
- **Deployment:** Automatic on git push to main branch

### Domain Management

**Domain:** bgpnc.com
- **Registrar:** [To be confirmed with client]
- **DNS Settings:** Managed through Vercel
- **SSL Certificate:** Auto-renewed through Vercel

### Code Repository

**GitHub:**
- **Repository:** [To be provided by developer]
- **Access:** [GitHub username/email]
- **Branch:** `main` (production)

### Email Services

**FormSubmit.co (Contact Forms):**
- **Contact Form:** info@bgpnc.com
- **Newsletter:** info@bgpnc.com
- No login required - emails sent directly to these addresses

### Analytics

**Google Analytics:**
- **Tracking ID:** G-Z5CE9EKT43
- **Access:** https://analytics.google.com
- **Login:** [Church Google account]

**Google Search Console:**
- **Access:** https://search.google.com/search-console
- **Login:** [Church Google account]
- **Property:** https://bgpnc.com
- **Sitemap Submitted:** https://bgpnc.com/sitemap-index.xml

---

## 🛠 Technical Stack

### Framework & Build

- **Framework:** Astro v5 (Static Site Generator)
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:**
  - Montserrat (headings)
  - Noto Serif (body text)
- **Icons:** Font Awesome 6.4.0

### Key Features

✅ **SEO Optimized:**
- XML Sitemap auto-generated
- Schema.org markup (Church, LocalBusiness, Organization)
- Open Graph & Twitter Card meta tags
- Canonical URLs on all pages

✅ **Accessibility (WCAG 2.1 Level AA):**
- Skip navigation link
- Proper semantic HTML
- ARIA labels
- Keyboard navigation support
- Focus indicators

✅ **Performance:**
- Static site generation (fast load times)
- Optimized asset delivery
- Minimal JavaScript
- CDN distribution via Vercel

---

## ✏️ Content Management

### How to Update Content

Your website uses **Git-based content management**. To make updates:

#### Option 1: Request Updates from Developer
For complex changes, contact MW Design Studio:
- **Email:** [Developer email]
- **Phone:** [Developer phone]
- Typical turnaround: 24-48 hours for minor updates

#### Option 2: GitHub Web Interface (Simple Text Changes)

1. **Go to your GitHub repository**
2. **Navigate to the file** you want to edit (e.g., `src/pages/index.astro`)
3. **Click the pencil icon** (Edit)
4. **Make your changes**
5. **Scroll down and click "Commit changes"**
6. **Wait 2-3 minutes** for automatic deployment

#### Common Content Updates:

**Update Service Times:**
- **File:** `src/components/home/ServiceInfo.astro`
- **Line:** Look for "10:30 AM Eastern"
- **Also update:** `src/components/schema/OrganizationSchema.astro` (for SEO)

**Update Leadership Bios:**
- **File:** `src/components/home/Leadership.astro`
- Update text in `<p class="leader-description">` sections

**Update Phone/Address:**
- **Multiple files need updating** (for NAP consistency):
  - `src/components/Footer.astro`
  - `src/components/schema/OrganizationSchema.astro`
  - `src/pages/contact.astro`
- **CRITICAL:** Keep identical across all locations

**Add/Remove Events:**
- **File:** `src/pages/events.astro`
- Follow existing event card structure

### Image Updates

**Image Location:** `public/images/`

**To Add New Images:**
1. Optimize images first (use TinyPNG.com)
2. Upload to `public/images/` folder
3. Reference in code: `/images/your-image.jpg`
4. **Always add descriptive alt text**

**Image Guidelines:**
- Maximum size: 1200px width for photos
- Format: JPG for photos, PNG for logos
- Compress before uploading (aim for <200KB)

---

## 📈 SEO & Marketing

### Google Business Profile

**PRIORITY ACTION:** Complete your Google Business Profile
- **Guide:** See `GOOGLE_BUSINESS_PROFILE_GUIDE.md`
- **Impact:** Critical for local "church near me" searches
- **Time to complete:** 1-2 hours initial setup

### Current SEO Status

✅ **Implemented:**
- XML Sitemap submitted to Google
- Schema markup (Church, LocalBusiness)
- Meta tags (title, description, OG, Twitter)
- Mobile-responsive design
- Fast page load speeds
- SSL/HTTPS security

📊 **Analytics & Tracking:**
- Google Analytics tracking active
- Search Console monitoring search performance
- Track website visits, popular pages, user behavior

### Local SEO Best Practices

**NAP Consistency is CRITICAL:**

Your official church information:
```
Name: Believers Gathering Place
Address: 2305 Lake Wheeler Drive, Raleigh, NC 27603
Phone: (919) 230-2074
Website: https://bgpnc.com
Service Time: Sundays at 10:30 AM Eastern
```

**This MUST be identical on:**
- ✅ Website (all pages)
- ✅ Google Business Profile
- ✅ Facebook Page
- ✅ Instagram Profile
- ✅ All church directories (Yelp, YellowPages, etc.)

### Social Media Integration

**Current Links:**
- Facebook: https://www.facebook.com/BGPWendellNC
- Instagram: https://www.instagram.com/bgpwendellnc
- TikTok: https://www.tiktok.com/@bgpwendellnc

**Note:** Social handles reference "WendellNC" - consider updating if you've relocated to Raleigh permanently.

---

## 🔧 Maintenance Guide

### Monthly Tasks

**First Week of Month:**
- [ ] Check Google Search Console for errors
- [ ] Review Google Analytics for traffic trends
- [ ] Update events page with new events
- [ ] Post to Google Business Profile (2-3 times)

**Ongoing:**
- [ ] Respond to Google Business reviews within 24 hours
- [ ] Update service times if special schedule (holidays)
- [ ] Add new photos monthly (website & Google Business)
- [ ] Monitor contact form submissions

### Quarterly Tasks (Every 3 Months)

- [ ] Update leadership photos if needed
- [ ] Review and update About/Values content
- [ ] Check all forms are working correctly
- [ ] Test website on mobile devices
- [ ] Update privacy policy if services change
- [ ] Backup website files (GitHub automatically backs up)

### Annual Tasks

- [ ] Review all website content for accuracy
- [ ] Update copyright year in footer
- [ ] Audit all links (ensure none are broken)
- [ ] Consider professional photography refresh
- [ ] Review and update SEO keywords
- [ ] Renew domain name if needed

---

## 📞 Support & Resources

### Developer Support

**MW Design Studio:**
- **Email:** [Developer email]
- **Phone:** [Developer phone]
- **Support Hours:** [Hours]
- **Emergency Support:** [Emergency contact]

**Included Support:**
- Bug fixes (first 30 days free)
- Content update guidance
- Technical questions

**Paid Support:**
- Major content changes
- New page development
- Design modifications
- Feature additions

### Self-Help Resources

**Astro Documentation:**
- https://docs.astro.build

**Tailwind CSS:**
- https://tailwindcss.com/docs

**Google Business Profile Help:**
- https://support.google.com/business
- Phone: 1-844-491-9665

**Google Analytics:**
- https://support.google.com/analytics

**Google Search Console:**
- https://support.google.com/webmasters

### How-To Guides

**Change Service Time:**
1. Update in `src/components/home/ServiceInfo.astro`
2. Update in `src/components/Footer.astro`
3. Update in `src/components/schema/OrganizationSchema.astro`
4. Commit changes to GitHub
5. Update on Google Business Profile
6. Post announcement on social media

**Add a New Event:**
1. Open `src/pages/events.astro`
2. Copy an existing event card structure
3. Update date, time, title, description
4. Commit changes
5. Announce on Google Business Profile & social media

**Update Contact Information:**
1. Search all files for old phone/address
2. Replace with new information
3. **CRITICAL:** Update ALL instances for NAP consistency
4. Commit changes
5. Update Google Business Profile immediately
6. Update all social media profiles

---

## 🚨 Emergency Contacts

### Website Down?

1. **Check Vercel Status:** https://www.vercel-status.com
2. **Check Domain:** Ensure domain hasn't expired
3. **Contact Developer:** [Developer emergency number]

### Form Not Working?

1. **Test form** with your own email
2. **Check spam folder** for submissions
3. **Verify FormSubmit.co email** addresses are correct
4. **Contact Developer** if persists

### Security Concern?

1. **Change all passwords** immediately
2. **Contact Developer** for security audit
3. **Review Google Search Console** for security issues
4. **Check website** for unauthorized changes

---

## 📊 Current Website Stats (Baseline)

**At Handover:**
- Pages: 6 main pages + 3 supporting pages
- Images: ~12 optimized images
- Load Speed: [To be tested with Lighthouse]
- Mobile-Friendly: ✅ Yes
- SSL/HTTPS: ✅ Secured
- SEO Score: [To be tested with Lighthouse]
- Accessibility Score: [To be tested with Lighthouse]

**Set Goals:**
- Monthly visitors: [Set target]
- Contact form submissions: [Set target]
- Google Business Profile views: [Set target]
- New visitor conversions: [Set target]

---

## ✅ Handover Checklist

### Developer Completes:
- [ ] All content approved by client
- [ ] SSL certificate active
- [ ] Google Analytics connected
- [ ] Google Search Console setup
- [ ] Sitemap submitted
- [ ] Domain properly configured
- [ ] All forms tested and working
- [ ] Mobile responsiveness verified
- [ ] Browser compatibility tested
- [ ] Credentials provided to client
- [ ] Training session completed
- [ ] Documentation provided

### Client Completes:
- [ ] Received all access credentials
- [ ] Tested website thoroughly
- [ ] Reviewed all content for accuracy
- [ ] Claimed Google Business Profile
- [ ] Set up review monitoring
- [ ] Updated social media links to website
- [ ] Announced new website to congregation
- [ ] Established content update schedule
- [ ] Identified staff responsible for updates

---

## 🎯 Next Steps (First 30 Days)

**Week 1:**
1. Claim & verify Google Business Profile
2. Add 10+ photos to Google Business
3. Ask 5 members for Google reviews
4. Post website announcement on social media
5. Update all social profiles with website link

**Week 2:**
6. Monitor Google Search Console for any issues
7. Review first week's analytics
8. Create first Google Business post
9. Test all forms from different devices
10. Collect feedback from congregation

**Week 3:**
11. Add weekly content to Google Business
12. Respond to any reviews
13. Update events page with upcoming events
14. Share testimonials on social media

**Week 4:**
15. Review monthly analytics
16. Optimize based on user behavior
17. Plan content updates for next month
18. Schedule quarterly website review

---

## 📝 Important Notes

### NAP Consistency
Your address, phone, and business name must be **100% identical** across:
- Website
- Google Business Profile
- Facebook
- Instagram
- All online directories

### Content Updates
- Keep content fresh (update monthly)
- Add new photos regularly
- Post events before they happen
- Respond to all inquiries within 24 hours

### SEO Takes Time
- First results: 2-4 weeks
- Significant improvement: 3-6 months
- Full optimization: 6-12 months
- Continue optimizing ongoing

### Backup Strategy
- GitHub maintains full code backup
- Images stored in repository
- Database: N/A (static site)
- Vercel keeps deployment history

---

## 🎉 Congratulations!

Your new website is a powerful tool for ministry growth. Use it wisely:

✝️ **Share the Gospel** - Your website is available 24/7
👥 **Build Community** - Connect with visitors before they arrive
📱 **Reach More People** - Be found by those searching for church
💙 **Serve Better** - Provide information and resources easily

**Questions?** Don't hesitate to reach out to MW Design Studio.

---

**Document Version:** 1.0
**Last Updated:** November 1, 2025
**Next Review:** After 30 days of launch