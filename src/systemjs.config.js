(function(global) {
	SystemJS.defaultJSExtensions = true;
    SystemJS.config({
        baseURL: '/bin',
        packages: {
            module1: {
                main: './main.js'
            },
            react: {
            	main:'react'
            },
            "react-dom": {
            	main:'react-dom'
            },
            "object-assign": {
            	main:'index'
            },
            "process": {
            	main:'browser'
            },
            "react-bootstrap":{
            	main:"react-bootstrap"
            }
        },
        transpiler:'Babel',
        map: {
        	"react": "/node_modules/react/dist",
        	"react-dom": "/node_modules/react-dom/dist",
        	"fbjs":"/node_modules/fbjs",
        	"object-assign":"/node_modules/object-assign",
        	"process":"/node_modules/process",
        	"react-bootstrap":"/node_modules/react-bootstrap/dist"
        },
        meta: {
        	"fbjs/*": {
        		globals: {
        			process: "process"
        		}
        	},
        	"react-dom/*": {
        		globals: {
        			process: "process"
        		}
        	},
        	"react/*": {
        		globals: {
        			process: "process"
        		}
        	}
        }/*,
        bundles: {
        	"fbjs/lib/invariant": ["process"]
        }*/
    })
})(this);
