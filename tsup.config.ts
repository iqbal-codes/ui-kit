import path from "node:path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "primitives/index": "src/primitives/index.ts",
    "blocks/index": "src/blocks/index.ts",
    "tokens/index": "src/tokens/index.ts",
  },
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  dts: true,
  tsconfig: "./tsconfig.build.json",
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
