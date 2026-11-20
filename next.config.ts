import type { NextConfig } from 'next';

// Project Pages URL needs /repository-name; custom domains do not.
const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH || '';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};
export default nextConfig;
