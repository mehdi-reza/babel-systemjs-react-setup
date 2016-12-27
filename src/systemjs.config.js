(function(global) {
	System.config({
		baseURL: '/src',
		map: {
			'plugin-babel': '/systemjs-plugin-babel-0.0.17/plugin-babel.js',
			'systemjs-babel-build': '/systemjs-plugin-babel-0.0.17/systemjs-babel-browser.js'
		},
		transpiler: 'plugin-babel',
		meta: {
			'*.js': {
				babelOptions: {
					"presets": [
						[
							"env", {
								"targets": {
									"browsers": [
										"last 2 versions",
										"safari >= 7"
									]
								},
								"modules": "systemjs",
								"useBuiltIns": true
							}
						]
					]
				}
			}
		}
	})
})(this);