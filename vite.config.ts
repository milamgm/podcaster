/// <reference types="vitest"/>
/// <reference types="Vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/podcaster/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: 'src/setupTests.js',
  },
});
