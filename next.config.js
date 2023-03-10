const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	experimental: {
		appDir: true,
		mdxRs: true,
	},
}

module.exports = withMDX(nextConfig)
