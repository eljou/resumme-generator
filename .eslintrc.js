module.exports = {
	env: {
		es6: true,
		node: true
	},
	plugins: ['react'],
	parser: 'babel-eslint',
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-console': 'off'
	}
}
