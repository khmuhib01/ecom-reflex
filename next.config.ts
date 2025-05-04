/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true, // <- Add this line
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
