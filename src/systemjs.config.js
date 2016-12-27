(function(global) {
	SystemJS.config({
		baseURL: '/src',
		packages: {
			module1: {
				main: './main.js',
				defaultExtension: 'js'
			}
		}
	})
})(this);