import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-rewrite-and-static-routes',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = (req.url || '').split('?')[0];
          if (url === '/wishes-login' || url === '/wishes-login/') {
            req.url = '/wishes-login.html';
          } else if (url === '/private-wishes' || url === '/private-wishes/') {
            req.url = '/private-wishes.html';
          }
          next();
        });
      },
      closeBundle() {
        // Ensure static hosting (GitHub Pages) resolves clean directory URLs
        try {
          const distDir = resolve(__dirname, 'dist');
          if (fs.existsSync(distDir)) {
            const loginDir = resolve(distDir, 'wishes-login');
            if (!fs.existsSync(loginDir)) fs.mkdirSync(loginDir, { recursive: true });
            if (fs.existsSync(resolve(distDir, 'wishes-login.html'))) {
              fs.copyFileSync(resolve(distDir, 'wishes-login.html'), resolve(loginDir, 'index.html'));
            }

            const privateDir = resolve(distDir, 'private-wishes');
            if (!fs.existsSync(privateDir)) fs.mkdirSync(privateDir, { recursive: true });
            if (fs.existsSync(resolve(distDir, 'private-wishes.html'))) {
              fs.copyFileSync(resolve(distDir, 'private-wishes.html'), resolve(privateDir, 'index.html'));
            }
          }
        } catch (e) {
          console.warn('Post-bundle static routing copy notice:', e);
        }
      }
    }
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        wishesLogin: resolve(__dirname, 'wishes-login.html'),
        privateWishes: resolve(__dirname, 'private-wishes.html')
      }
    }
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true,
  },
  preview: {
    port: 5173,
    host: '0.0.0.0',
    open: true,
  }
});
