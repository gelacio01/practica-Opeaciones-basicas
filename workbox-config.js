module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,json,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};