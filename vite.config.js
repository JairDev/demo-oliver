import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [],
  resolve: {},
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
