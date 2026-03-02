import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();

const config: NextConfig = {
  output: 'export',
  distDir: 'dist-web',
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
