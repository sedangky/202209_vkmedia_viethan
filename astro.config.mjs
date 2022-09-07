import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import fonts from 'astro-fonts-next'
import robotsTxt from 'astro-robots-txt';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://vkmedia-viethan.netlify.app',
  experimental: {
    integrations: true,
  },
  integrations: [
    sitemap(), image(), tailwind(), react(), robotsTxt(),

    fonts({
      url: [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
      ]
    })
  ]
});