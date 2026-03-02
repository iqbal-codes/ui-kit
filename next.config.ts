import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  contentDirBasePath: "/",
});

const config: NextConfig = {
  output: "export",
  distDir: "dist-web",
  images: {
    unoptimized: true,
  },
};

export default withNextra(config);
