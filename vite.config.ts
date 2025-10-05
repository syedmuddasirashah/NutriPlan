import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// ✅ Define __dirname for ESM (fixes Vercel + Windows issues)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          // These are optional Replit dev tools — they’re safe to keep
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // ✅ corrected path
      "@shared": path.resolve(__dirname, "shared"),  // ✅ corrected path
      "@assets": path.resolve(__dirname, "attached_assets"), // ✅ corrected path
    },
  },
  root: path.resolve(__dirname, "client"), // ✅ ensures Vite builds client folder
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // ✅ output for Vercel
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"], // prevents serving hidden files
    },
  },
});
