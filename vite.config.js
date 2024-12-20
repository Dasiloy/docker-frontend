import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    test: {
      globals: true,
      allowEmpty: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.js",
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // replace this port with any number you want
  },
});
