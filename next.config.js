const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  trailingSlash: true,
  basePath: '/out',
  reactStrictMode: true,
  images: {
    domains: ['cdn.w3villa.com'],
    unoptimized: true,
    loader: "imgix",
    path: "/out",
  },
  output: 'export',
}
//un-comment the above lines to build static export "out" folder
module.exports = nextConfig;