import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'atom/index': 'src/atom/index.ts',
    'tokens/index': 'src/tokens/index.ts',
    'molecules/index': 'src/molecules/index.ts',
    'organisms/index': 'src/organisms/index.ts',
    'templates/index': 'src/templates/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: [
    'react',
    'react-dom',
    'next',
    'tailwindcss'
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
