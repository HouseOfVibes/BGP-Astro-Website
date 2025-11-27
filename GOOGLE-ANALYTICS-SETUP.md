# Google Analytics Setup Guide for Astro Sites

This document explains how Google Analytics 4 (GA4) has been implemented on this website, so you can replicate the same setup on other Astro sites.

## Current Configuration

- **Measurement ID:** `G-Z5CE9EKT43`
- **Analytics Type:** Google Analytics 4 (GA4)
- **Implementation Method:** Global Site Tag (gtag.js)

## Implementation Details

### 1. Main Tracking Code

The tracking code is placed in `src/layouts/Layout.astro` at the very top of the `<head>` section:

```astro
<head>
  <!-- Google tag (gtag.js) -->
  <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-Z5CE9EKT43"></script>
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Z5CE9EKT43');
  </script>

  <!-- Rest of head content... -->
</head>
```

**Important Astro Notes:**
- The `is:inline` directive is required on both script tags
- This prevents Astro from bundling or processing the scripts during build
- Without `is:inline`, the gtag scripts may not work correctly

### 2. Content Security Policy (CSP)

If your site uses CSP headers (configured in `vercel.json` for Vercel deployments), you must allow the Google Analytics domains:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com;"
        }
      ]
    }
  ]
}
```

**Required CSP Directives:**

| Directive | Required Domains | Purpose |
|-----------|------------------|---------|
| `script-src` | `https://www.googletagmanager.com` | Load the gtag.js script |
| `script-src` | `https://www.google-analytics.com` | Analytics functionality |
| `script-src` | `'unsafe-inline'` | Allow inline gtag configuration |
| `connect-src` | `https://www.google-analytics.com` | Send analytics data |

## How to Set Up on a New Astro Site

### Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click **Admin** (gear icon)
3. Click **Create Property**
4. Enter property name and configure settings
5. Create a **Web** data stream
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Add Tracking Code to Layout

In your main layout file (e.g., `src/layouts/Layout.astro`), add this at the top of `<head>`:

```astro
<head>
  <!-- Google tag (gtag.js) -->
  <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XXXXXXXXXX');
  </script>

  <!-- Your other head content -->
</head>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Step 3: Update CSP Headers (If Using)

If you have Content Security Policy headers, add the required domains as shown above.

For **Vercel**, update `vercel.json`.
For **Netlify**, update `netlify.toml` or `_headers` file.
For other hosts, configure according to their documentation.

### Step 4: Verify Installation

1. Deploy your site
2. Visit your site in a browser
3. Go to Google Analytics > **Reports** > **Realtime**
4. You should see your visit appearing in real-time

Alternatively, use the [Google Tag Assistant](https://tagassistant.google.com/) browser extension to verify the tag is firing correctly.

## Environment-Specific Tracking (Optional)

If you want to disable tracking in development, you can conditionally render the script:

```astro
---
const isProd = import.meta.env.PROD;
---

<head>
  {isProd && (
    <>
      <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script is:inline>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      </script>
    </>
  )}
</head>
```

## Troubleshooting

### Analytics not tracking?

1. **Check browser console** for CSP errors
2. **Verify Measurement ID** is correct (starts with `G-`)
3. **Check ad blockers** - they may block Google Analytics
4. **Ensure `is:inline`** is on both script tags
5. **Wait 24-48 hours** - data may take time to appear in reports

### CSP errors in console?

Add the missing domains to your Content Security Policy headers as shown above.

## Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Astro Script Documentation](https://docs.astro.build/en/guides/client-side-scripts/)
- [Google Tag Assistant](https://tagassistant.google.com/)
