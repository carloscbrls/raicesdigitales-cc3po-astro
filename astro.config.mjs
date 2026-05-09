import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://raicesdigitales.cc3po.com',
  output: 'static',
  integrations: [],
  adapter: netlify(),
});