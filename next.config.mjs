import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// For a GitHub Pages *project* site (https://<user>.github.io/<repo>/) this
// must be "/<repo>". For a user/org site (<user>.github.io) or a custom
// domain, leave it empty. The deploy workflow sets this automatically.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export — produces an `out/` folder that any static host
  // (GitHub Pages, Netlify, S3, …) can serve. No Node server required.
  output: "export",

  // GitHub Pages serves each route as a folder with an index.html.
  trailingSlash: true,

  // next/image optimization needs a server; disable it for static export.
  images: { unoptimized: true },

  // Serve assets/links from the correct subpath on project Pages sites.
  basePath,
  assetPrefix: basePath || undefined,

  // Pin the workspace root to this project (a parent lockfile exists above it).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
