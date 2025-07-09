import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/", // ✅ required for Netlify routing
  // You can remove or keep the dev server config; it's only for local dev
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist", // ✅ output folder for static build
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
