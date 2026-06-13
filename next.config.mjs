/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves static files only → fully static export to `out/`.
  output: 'export',
  // next/image optimization needs a server; disable for static export.
  images: { unoptimized: true },
  // Emit `/terms/index.html` so GitHub Pages serves `/terms/` without a server.
  trailingSlash: true,
  // Apex domain (ieoseo.app) is the site root → no basePath / assetPrefix.
};

export default nextConfig;
