import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kshitijdani.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
