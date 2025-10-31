import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Your production site URL
  site: 'https://bgpnc.com',

  // Base path if deploying to a subdirectory (e.g., '/my-site/')
  // base: '/',

  // Trailing slash preference: 'always', 'never', or 'ignore'
  trailingSlash: 'ignore',

  // Output mode: 'static' (default) or 'server' for SSR
  output: 'static',

  // Integrations
  integrations: [
    sitemap({
      // Customize sitemap generation
      filter: (page) => !page.includes('/newsletter-thank-you') && !page.includes('/contact-thank-you'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://bgpnc.com/',
        'https://bgpnc.com/join',
        'https://bgpnc.com/give',
        'https://bgpnc.com/events',
        'https://bgpnc.com/contact',
        'https://bgpnc.com/privacy',
      ],
    }),
  ],

  // Build configuration
  build: {
    // Output format for links: 'directory' (default) or 'file'
    format: 'directory',
  },

  // Vite configuration passthrough
  vite: {
    plugins: [tailwindcss()],
  },

  // Security configuration (enabled by default in Astro v5)
  security: {
    checkOrigin: true,
  },

  // Vercel adapter for deployment
  adapter: vercel(),
});