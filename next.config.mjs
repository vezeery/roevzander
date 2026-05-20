/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   
  basePath: '/roevzander',
  trailingSlash: true,   // Required for GitHub Pages
  images: {
    unoptimized: true,   // Required because GitHub has no image server
  },
  // If your URL is username.github.io/roevzander, add this:
  // basePath: '/roevzander', 
};

export default nextConfig;


