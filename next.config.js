/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    reactStrictMode: true,
    basePath: '/github-pages',

};

module.exports = nextConfig;
