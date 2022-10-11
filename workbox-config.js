module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};