import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      //generates TypeScript declaration files (.d.ts)
      include: ["src/**/*"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/vite-env.d.ts"],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "babs-ui",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "cjs" ? "index.cjs" : "index.js"),
    },
    rollupOptions: {
      external: ["react", "react-dom"], //dont bundle, consumer will provide it
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true, // Generate source maps for debugging
    minify: process.env.NODE_ENV === "production", // Keep code readable (vite build command sets NODE_ENV to "production")
  },
  resolve: {
    alias: {
      "@": "./src", // Use @/components instead of ../../../components
    },
  },
});
