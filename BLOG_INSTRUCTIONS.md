# BGP Blog Management Guide

**Website:** https://bgpnc.com/blog
**Last Updated:** November 1, 2025

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [How to Create a New Blog Post](#how-to-create-a-new-blog-post)
3. [Blog Post Template](#blog-post-template)
4. [Writing Guidelines](#writing-guidelines)
5. [Image Guidelines](#image-guidelines)
6. [Scripture of the Month Template](#scripture-of-the-month-template)
7. [Publishing Process](#publishing-process)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)

---

## 🌐 Overview

The BGP blog is built using **Astro Content Collections**, which means:
- All blog posts are written in **Markdown** (.md files)
- Posts are stored in `src/content/blog/` folder
- Content is automatically converted to beautiful web pages
- SEO and metadata are handled automatically

### Current Features:
✅ Automatic date sorting (newest first)
✅ SEO-optimized (Article schema, meta tags)
✅ Social media sharing ready
✅ Mobile-responsive design
✅ Series support (Scripture of the Month)
✅ Tag categorization
✅ Featured images

---

## 📝 How to Create a New Blog Post

### Method 1: Using GitHub Web Interface (Easiest)

1. **Go to GitHub:** Navigate to your repository
2. **Open the blog folder:** `src/content/blog/`
3. **Click "Add file" → "Create new file"**
4. **Name your file:** Use format: `title-with-dashes.md`
   - Example: `scripture-of-the-month-december-2025.md`
   - Use lowercase, no spaces, only letters/numbers/dashes
5. **Copy the template** (see below) and fill in your content
6. **Click "Commit changes"**
7. **Wait 2-3 minutes** for automatic deployment

### Method 2: Using Local Editor (Advanced)

1. Open your code editor
2. Navigate to `src/content/blog/`
3. Create new file: `your-post-title.md`
4. Copy template and write your content
5. Save file
6. Commit and push to GitHub

---

## 📄 Blog Post Template

Copy and paste this template for every new blog post:

```markdown
---
title: "Your Blog Post Title Here"
description: "A brief 1-2 sentence description for SEO and social media sharing"
pubDate: 2025-11-15
author: "Pastor Mark Smith"
image: "/images/your-blog-image.jpg"
tags: ["Faith", "Scripture", "Encouragement"]
series: "Scripture of the Month"
---

## Your Main Heading

Your introduction paragraph goes here. Keep it engaging and set the context for your readers.

### Subheading 1

Your content here. You can use **bold text** for emphasis and *italic text* for emphasis too.

### Subheading 2

More content here.

#### Smaller Subheading

Even more detailed content.

### Lists

You can create bullet lists:
- First item
- Second item
- Third item

Or numbered lists:
1. First step
2. Second step
3. Third step

### Quotes

Use blockquotes for scripture or important quotes:

> "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
> — John 3:16 (NIV)

### Links

[Link to another page](/contact)
[External link](https://example.com)

### Emphasis

- **Bold text** for strong emphasis
- *Italic text* for gentle emphasis

---

**Author Note:** Add any final thoughts or call-to-action here.
```

---

## 🎯 Scripture of the Month Template

Use this template specifically for the monthly scripture series:

```markdown
---
title: "Scripture of the Month: [Month] [Year]"
description: "Exploring [brief theme] - [Scripture Reference]"
pubDate: 2025-12-01
author: "Pastor Mark Smith"
image: "/images/scripture-december-2025.jpg"
tags: ["Scripture of the Month", "Faith", "Biblical Teaching"]
series: "Scripture of the Month"
---

## [Scripture Reference] (NIV)
> "[Full scripture text here]"

### Understanding the Context

Provide background about when and why this scripture was written. Help readers understand the original context.

### What This Means for Us

#### 1. **First Key Truth**
Explain the first major takeaway from this scripture.

#### 2. **Second Key Truth**
Explain the second major insight.

#### 3. **Third Key Truth**
Explain how this applies to modern life.

### Practical Application

This month, we challenge you to:

- **Action 1:** Specific step readers can take
- **Action 2:** Another practical application
- **Action 3:** How to live this out daily

### Reflection Questions

1. How does this scripture speak to your current situation?
2. What area of your life needs God's truth from this verse?
3. How can you share this truth with others this month?

### Prayer

*Father God, [write a prayer related to the scripture]...*

### Join Us

We'd love to explore this scripture further with you:
- **Sunday Services:** 10:30 AM Eastern at 2305 Lake Wheeler Drive, Raleigh, NC
- **Small Groups:** Connect with others studying this scripture
- **Prayer:** Submit requests on our [Contact page](/contact)

---

**Believers Gathering Place** - Where faith grows, love thrives, and lives are transformed.
```

---

## ✍️ Writing Guidelines

### Content Style:
- **Tone:** Warm, pastoral, encouraging, authentic
- **Length:** 500-1500 words (3-7 minute read)
- **Structure:** Use clear headings and short paragraphs
- **Scripture:** Always include Bible references (Book Chapter:Verse)
- **Accessibility:** Write at a 6th-8th grade reading level

### Formatting Tips:
- **Headings:** Use `##` for main sections, `###` for subsections
- **Emphasis:** Use **bold** for important concepts
- **Quotes:** Use `>` for scripture and important quotes
- **Lists:** Use `-` for bullets, numbers for steps
- **Links:** Use `[text](url)` format

### SEO Best Practices:
- Include "church" or "Raleigh" in some posts for local SEO
- Use descriptive titles (50-60 characters)
- Write compelling descriptions (120-160 characters)
- Include 3-5 relevant tags per post
- Use keywords naturally in content

---

## 🖼️ Image Guidelines

### Featured Image Specs:
- **Dimensions:** 1200x630px (optimal for social sharing)
- **Format:** JPG or PNG
- **File Size:** Under 200KB (compressed)
- **Location:** Save to `public/images/` folder
- **Naming:** Use descriptive names: `scripture-november-2025.jpg`

### Image Ideas:
- Scripture text overlaid on peaceful backgrounds
- BGP logo with themed graphics
- Nature photography with relevant themes
- Community photos from church events
- Abstract designs with church colors (teal #2d7373, gold #9c8040)

### How to Add Images:
1. Compress image using [TinyPNG.com](https://tinypng.com)
2. Upload to `public/images/` folder
3. Reference in blog post: `image: "/images/your-image.jpg"`

### Free Image Resources:
- **Unsplash:** https://unsplash.com (free stock photos)
- **Canva:** https://canva.com (create custom graphics)
- **Pexels:** https://pexels.com (free stock photos)

---

## 🚀 Publishing Process

### Automatic Publishing:
1. **Create** your blog post file in `src/content/blog/`
2. **Commit** changes to GitHub
3. **Wait** 2-3 minutes for Vercel to deploy
4. **Visit** https://bgpnc.com/blog to see your post

### Post-Publication Checklist:
- [ ] Post appears on blog listing page
- [ ] Featured image displays correctly
- [ ] All links work properly
- [ ] Mobile view looks good
- [ ] Share on social media (Facebook, Instagram)
- [ ] Announce during Sunday service
- [ ] Include in newsletter (if applicable)

---

## ✨ Best Practices

### Content Planning:
- **Schedule:** Post 1-2 times per month minimum
- **Consistency:** Publish on the same day each month (e.g., 1st of month)
- **Series:** Scripture of the Month is your anchor series
- **Variety:** Mix scripture, testimonies, ministry updates, community stories

### Post Ideas:
1. **Scripture of the Month** (ongoing series)
2. **Sermon Summaries** (weekly message highlights)
3. **Testimony Spotlights** (member stories)
4. **Ministry Updates** (BGP Kidz, Small Groups)
5. **Seasonal Content** (Christmas, Easter, New Year)
6. **Community Outreach** (service projects, local impact)
7. **Biblical Teaching** (deep dives into topics)
8. **Event Recaps** (photos and highlights)

### Engagement Tips:
- End posts with questions to encourage reflection
- Include clear calls-to-action (visit, join, give)
- Respond to comments/questions
- Share posts on social media
- Reference blog posts during services

---

## 🆘 Troubleshooting

### Post Not Appearing?
1. **Check filename:** Must be `.md` extension
2. **Check frontmatter:** Ensure YAML is properly formatted (see template)
3. **Check date:** Posts with future dates won't show until that date
4. **Clear cache:** Try hard refresh (Cmd+Shift+R or Ctrl+Shift+F5)

### Image Not Loading?
1. **Check path:** Must start with `/images/` (not `public/images/`)
2. **Check file location:** Image must be in `public/images/` folder
3. **Check filename:** Ensure exact spelling (case-sensitive)
4. **Check format:** Use JPG or PNG only

### Formatting Issues?
1. **Blank lines:** Add blank line before/after headings
2. **Quote blocks:** Ensure `>` has space after it
3. **Lists:** Ensure blank line before list starts
4. **Links:** Check syntax: `[text](url)`

### Build Errors?
1. **YAML syntax:** Ensure frontmatter uses proper YAML format
2. **Quotes:** Use straight quotes `"`, not curly quotes `""`
3. **Dates:** Use format: `YYYY-MM-DD`
4. **Tags:** Must be array format: `["Tag1", "Tag2"]`

---

## 📊 Metadata Reference

### Frontmatter Fields Explained:

| Field | Required | Example | Description |
|-------|----------|---------|-------------|
| `title` | ✅ Yes | "Scripture of the Month" | Post title (50-60 chars ideal) |
| `description` | ✅ Yes | "Exploring faith..." | SEO description (120-160 chars) |
| `pubDate` | ✅ Yes | 2025-11-01 | Publication date (YYYY-MM-DD) |
| `author` | ❌ No | "Pastor Mark Smith" | Author name (defaults to Pastor Mark) |
| `image` | ❌ No | "/images/blog.jpg" | Featured image path |
| `tags` | ❌ No | ["Faith", "Scripture"] | Categories/topics |
| `series` | ❌ No | "Scripture of the Month" | Series name if part of series |

---

## 📧 Need Help?

**Contact Your Web Developer:**
- **Developer:** MW Design Studio
- **Support:** [Developer contact info]

**Quick Questions:**
- Missing images? Check `public/images/` folder
- Post not showing? Verify date format
- Build failing? Review frontmatter syntax

---

## 🎉 Quick Start Summary

1. **Copy template** from this guide
2. **Create new file** in `src/content/blog/`
3. **Name it:** `title-with-dashes.md`
4. **Fill in content** following template
5. **Add featured image** to `public/images/`
6. **Commit to GitHub**
7. **Wait 2-3 minutes** for deployment
8. **Share on social media!**

---

**Happy Blogging!** 📝

Your blog is a powerful tool for ministry. Use it to encourage, teach, and connect with your community beyond Sunday mornings.

---

**Document Version:** 1.0
**Last Updated:** November 1, 2025
**Contact:** MW Design Studio
