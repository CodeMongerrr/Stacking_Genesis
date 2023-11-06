import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.js"),
      name: "core-package",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-router-dom"],
    },
  },
});
