module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['assets.vercel.com', 'images.unsplash.com']
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		});

		return config;
	}
};
