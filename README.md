# babel-systemjs-react-setup

This setup has no dependency on WEBPACK and gives you all options to configure NGINX with any Tomcat/JavaEE upstream server for API calls.

Babel is used for transpiling only changed files with JSX, thanks to [grunt-newer](https://github.com/tschaub/grunt-newer) task. You have complete control on babel with .babelrc in root.

1. npm install
2. npm start

Have NGINX point to the project folder, verify by browsing [Board Game](http://localhost/boardgame.html)

**Build**

1. npm run build

1. Will generate bundle.js files for all modules.
2. All .css files in styles folder will be concatenated and minified, output generated as bundle.css in dist folder.

For development always dist/bundle.css should be used, no need to have any less,css babel plugin for SystemJS.

Install Chrome extension Live Reload for instant changes

OR

Have in your index.html `<script src="http://127.0.0.1:35729/livereload.js?ext=Chrome&amp;extver=2.1.0"></script>`

