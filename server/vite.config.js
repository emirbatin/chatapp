import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
