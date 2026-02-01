module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'build', // build
				'chore', // other changes that do not affect the code
				'ci', // ci configs
				'docs', // documentation
				'feat', // new feature
				'fix', // bug fix
				'perf', // performance improvements
				'refactor', // code refactor
				'revert', // change revert
				'style', // prettier, eslint
				'test', // test
			],
		],
	},
}
