import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "shadcn/index": "src/shadcn/index.ts",
    "tokens/index": "src/tokens/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: ["react", "react-dom", "next", "tailwindcss"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
    options.alias = {
      "@": path.resolve(__dirname, "./src"),
    };
  },
});
