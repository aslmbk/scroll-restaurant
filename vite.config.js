import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/scroll-restaurant/",
  server: {
    proxy: {
      "/models": {
        target:
          process.env.NODE_ENV === "development"
            ? "http://localhost:5173/scroll-restaurant"
            : "https://aslmbk.github.io/scroll-restaurant/",
        changeOrigin: false,
        // rewrite: (path) =>
        //   path.replace(/^\/models/, "/scroll-restaurant/models"),
      },
    },
  },
});
