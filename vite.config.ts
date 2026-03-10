import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use relative base only for production so built app works from subpath or file://.
  // Dev server uses "/" so /@vite/client and /src/main.tsx resolve correctly.
  base: process.env.NODE_ENV === "production" ? "./" : "/",
});
