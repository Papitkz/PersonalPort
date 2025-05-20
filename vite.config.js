import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import { sitemapPaths } from './src/router/routes-paths'

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      baseUrl: 'https://yourdomain.com', 
      routes: sitemapPaths,
    }),
  ],
  base: '/',
})
