// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'icons/*.webp', 'icons/*.svg'],
      manifest: {
        name: 'SmashAdvisor — Tactical Matchup Guide',
        short_name: 'SmashAdvisor',
        description: 'Zero-latency Super Smash Bros. Ultimate matchup advisor for tournament play.',
        theme_color: '#020617',
        background_color: '#020617',
        display: 'standalone',
        icons: [
          {
            src: '/icons/toon_link.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/toon_link.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      },
    }),
  ],
});