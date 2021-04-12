/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 16:21:16
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
	extends: ["eslint:recommended"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
	globals: {
		logger: true,
	},
	overrides: [
		{
			files: [
				"**/__test__/*.{j,t}s?(x)",
				"**/test/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				jest: true,
			},
		},
	],
};
