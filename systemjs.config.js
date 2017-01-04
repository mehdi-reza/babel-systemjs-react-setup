(function(global) {
    SystemJS.defaultJSExtensions = true;
    SystemJS.config({
        baseURL: 'bin',
        paths: {
            "react*":"/node_modules/react*" // only used in build
        },
        packages: {
            "board-game": {
                main: './index'
            },
            "gl": {
                main: './index'
            },
            "react": {
                main: 'react'
            },
            "react-dom": {
                main: 'react-dom'
            },
            "react-bootstrap": {
                main: "react-bootstrap"
            }
        },
        map: {
            "react": "/node_modules/react/dist",
            "react-dom": "/node_modules/react-dom/dist",
            "react-bootstrap": "/node_modules/react-bootstrap/dist"
        }
    })
})(this);