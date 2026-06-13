import type { MetadataRoute } from "next";

// Required for metadata routes under `output: 'export'`.
export const dynamic = "force-static";

const SITE_URL = "https://ieoseo.app";

/** Generates a static sitemap.xml at build time. Paths use trailing slashes to
 *  match `trailingSlash: true` in next.config. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/terms/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
