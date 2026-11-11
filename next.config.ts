import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "mdx"],
};

// Plugin names are strings so the config stays serialisable for Turbopack.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm", "remark-frontmatter", ["remark-mdx-frontmatter", { name: "frontmatter" }]],
  },
});

export default withMDX(nextConfig);
