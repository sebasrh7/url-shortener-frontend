import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: "5173",
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },

  // For AG Grid
  optimizeDeps: {
    include: ["ag-grid-react", "ag-grid-community"],
  },
});
