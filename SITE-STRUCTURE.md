# BGP Website - Complete Site Structure Analysis

Based on analysis of the existing https://bgpnc.com website.

---

## 🎨 Design Tokens

### Colors
- **Primary Dark**: `#212121` (header/dark sections)
- **Gold Accent**: `#9c8040` (highlights, buttons, borders)
- **White/Light**: `#ffffff` (content backgrounds)
- **Text Dark**: Standard dark text for readability

### Typography
- **Primary Font**: Roboto
- **Secondary Font**: Poppins
- **Font Weights**: Regular, Medium, Bold

### Layout
- Responsive breakpoints (mobile, tablet, desktop)
- Clean grid layouts
- Fixed header with scroll effects
- Smooth scrolling

---

## 📄 Page Structure

### 1. HOME PAGE (`/`)

**Hero Section**
- Church name: "Believer's Gathering Place"
- Tagline: "A Place to Belong, Believe, and Become"
- Call-to-action button

**Service Information Cards** (3 cards)
1. **Sunday Service Time**
   - 12:30 PM

2. **Location**
   - 5101 Rolesville Road
   - Wendell, NC

3. **What to Expect**
   - Information about the service experience

**Scripture of the Month**
- Current: October 2025
- Verse: II Timothy 1:7
- "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."
- Decorative presentation with quotation marks

**Core Values Section** (3 Pillars)
1. **Believe**
   - Faith transformation
   - Description text

2. **Connect**
   - Community building
   - Description text

3. **Grow**
   - Spiritual development
   - Description text

**Leadership Section**
1. **Pastor Mark Smith**
   - Photo
   - Quote/Description
   - Role information

2. **Lady LaQuadia Smith**
   - Photo
   - Quote/Description
   - Role information

**Newsletter Signup**
- Email subscription form
- Located in footer area
- Loading states for submission

---

### 2. ABOUT SECTION

Navigation suggests subsections:
- Service Information
- Monthly Scripture
- Leadership
- Welcome/Church History

**Content needed:**
- Church history and founding
- Mission statement
- Vision statement
- Statement of faith
- Detailed leadership bios
- Church values expanded

---

### 3. JOIN PAGE

**Purpose:** Information about becoming a member

**Suggested Content:**
- Membership process
- Membership classes
- Benefits of membership
- Sign-up form
- Next steps after visiting

---

### 4. GIVE PAGE

**Purpose:** Online giving and donation information

**Features Needed:**
- Online giving integration
- Different giving options (tithes, offerings, special projects)
- Recurring giving setup
- Information about where donations go
- Tax receipt information

---

### 5. EVENTS PAGE

**Purpose:** Church events calendar and information

**Features Needed:**
- Event calendar/listing
- Upcoming events
- Event details (date, time, location)
- Event registration forms
- Past events archive
- Special events (conferences, revivals, etc.)

---

### 6. SHOP

**Current Setup:**
- External link to: inspiringstyles.shop
- Opens in new tab

**Note:** This is an external e-commerce site, not part of the main website

---

### 7. CONTACT PAGE

**Features:**
- Contact form (confirmed by thank-you page)
- Form fields likely include:
  - Name
  - Email
  - Phone
  - Message
- Form submission goes to thank-you page

**Contact Information:**
- Location: East Wake High School, Wendell
- Service Time: Sundays at 12:30 PM
- Google Maps embed
- Social media links

---

## 🧩 Required Components

### Header Component
- Logo/Church name
- Navigation menu (HOME, ABOUT, JOIN, GIVE, EVENTS, SHOP, CONTACT)
- Mobile hamburger menu
- Fixed/sticky header with scroll effects
- Dropdown menus for ABOUT section

### Footer Component
- Contact information
  - Address: 5101 Rolesville Road, Wendell, NC
  - Service time: Sundays at 12:30 PM
  - Location note: East Wake High School
- Google Maps embed with directions link
- Social media icons
  - Facebook
  - Instagram
  - TikTok
- Newsletter signup form
- Copyright information

### Reusable Components Needed

1. **Hero Section**
   - Background image
   - Overlay
   - Heading and tagline
   - CTA button

2. **Info Cards**
   - Icon/image
   - Title
   - Description
   - Consistent styling

3. **Scripture Display**
   - Decorative quotation marks
   - Verse text
   - Reference
   - Month/date

4. **Values/Pillars Cards**
   - Icon or image
   - Title (Believe, Connect, Grow)
   - Description text

5. **Leadership Cards**
   - Photo
   - Name
   - Title
   - Quote/Bio
   - Consistent layout

6. **Contact Form**
   - Input fields (name, email, phone, message)
   - Submit button
   - Loading states
   - Success/error messages
   - Redirect to thank-you page

7. **Newsletter Signup**
   - Email input
   - Subscribe button
   - Loading states
   - Success/error handling

8. **Social Media Icons**
   - Facebook link
   - Instagram link
   - TikTok link
   - Consistent styling

9. **Google Maps Embed**
   - Responsive iframe
   - Directions link

---

## 🎯 Navigation Structure

```
HOME
ABOUT
  ├── Service Info
  ├── Monthly Scripture
  ├── Leadership
  └── Welcome
JOIN
GIVE
EVENTS
SHOP (external)
CONTACT
```

---

## 📱 Mobile Responsiveness

**Features:**
- Mobile hamburger menu
- Slide-out navigation panel
- Responsive grid layouts
- Mobile-optimized images
- Touch-friendly buttons
- Responsive typography

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## ⚡ Key Features & Functionality

### Interactive Elements
- Fixed header with scroll effects
- Dropdown navigation menus
- Mobile slide-out menu
- Smooth scrolling for anchor links
- Lazy-loading for images
- Form validation
- Loading states on forms

### Integrations Needed
- Google Maps embed
- Social media links
- Newsletter subscription (email service)
- Contact form (email handling)
- Online giving platform
- Event calendar system

### SEO & Performance
- Meta tags for all pages
- Open Graph tags for social sharing
- Sitemap generation (✅ already configured)
- Robots.txt (✅ already exists)
- Optimized images
- Fast loading times

---

## 📊 Content Inventory

### Images Needed
- Church logo
- Hero background image
- Service information icons/images
- Leadership photos (Pastor Mark Smith, Lady LaQuadia Smith)
- Values/Pillars icons or images
- Event photos
- Church building/facility photos
- Worship service photos
- Community/fellowship photos

### Text Content Needed
- Church history
- Mission/Vision statements
- Detailed service information
- What to expect at services
- Leadership full bios
- Ministry descriptions
- Event details
- FAQ content

---

## 🔧 Technical Requirements

### Forms & Data Handling
- Contact form submission
- Newsletter subscription
- Event registration
- Membership inquiry
- Email notifications
- Form validation
- Spam protection (reCAPTCHA recommended)

### Third-Party Services
- Email service (Mailchimp, ConvertKit, etc.)
- Online giving (Tithe.ly, Pushpay, etc.)
- Google Maps API
- Social media embeds
- Analytics (Google Analytics, Vercel Analytics)

---

## 📋 Page Priority

### Phase 1 - Essential (Launch Ready)
1. ✅ Home page - with all sections
2. ✅ About page - basic info
3. ✅ Contact page - with form
4. ⚠️ Service information - detailed
5. ⚠️ Leadership - full bios

### Phase 2 - Important (First Month)
6. Join page
7. Give page with online giving
8. Events page with calendar
9. Newsletter integration

### Phase 3 - Enhanced (Ongoing)
10. Blog/Sermons section
11. Photo galleries
12. Video integration
13. Member portal (if needed)

---

## 🎨 Design Guidelines

### Visual Style
- Clean, modern design
- Professional but welcoming
- Faith-focused imagery
- Consistent color scheme (dark header, gold accents, white backgrounds)
- Readable typography
- Generous white space

### User Experience
- Clear navigation
- Easy-to-find service times and location
- Quick access to giving
- Mobile-first approach
- Accessible design (WCAG compliance)
- Fast page loads

---

## 🔄 Content Update Frequency

- **Scripture of the Month**: Monthly
- **Events**: Weekly/Bi-weekly
- **News/Blog**: Weekly (if implemented)
- **Sermon Archive**: Weekly
- **Leadership**: As needed
- **Service Times**: As needed

---

## 📍 Contact Information

**Address:**
5101 Rolesville Road
Wendell, NC

**Meeting Location:**
East Wake High School, Wendell

**Service Time:**
Sundays at 12:30 PM

**Social Media:**
- Facebook: [link needed]
- Instagram: [link needed]
- TikTok: [link needed]

**External Shop:**
https://inspiringstyles.shop

---

**Next Steps:** Use this structure to rebuild the website in Astro with all the identified pages, components, and features.
