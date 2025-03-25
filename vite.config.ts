import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, cpSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/data-portfolio-navigator/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'copy-public-assets',
      closeBundle() {
        if (mode === 'production') {
          // Copy assets from public to dist
          const publicDir = path.resolve(__dirname, 'public');
          const distDir = path.resolve(__dirname, 'dist');
          
          // Copy Profile photo.jpg
          const sourceFile = path.join(publicDir, 'Profile photo.jpg');
          const destFile = path.join(distDir, 'Profile photo.jpg');
          
          if (existsSync(sourceFile)) {
            copyFileSync(sourceFile, destFile);
            console.log('Copied Profile photo.jpg to dist');
          }
          
          // Copy images/companies directory
          const sourceImagesDir = path.join(publicDir, 'images/companies');
          const destImagesDir = path.join(distDir, 'images/companies');
          
          if (existsSync(sourceImagesDir)) {
            // Ensure destination directory exists
            if (!existsSync(path.join(distDir, 'images'))) {
              mkdirSync(path.join(distDir, 'images'), { recursive: true });
            }
            
            if (!existsSync(destImagesDir)) {
              mkdirSync(destImagesDir, { recursive: true });
            }
            
            // Copy the entire directory
            cpSync(sourceImagesDir, destImagesDir, { recursive: true });
            console.log('Copied images/companies directory to dist');
          }
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
