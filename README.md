# babel-systemjs-react-setup

This setup has no dependency on WEBPACK and gives you all options to configure NGINX with any Tomcat/JavaEE upstream server for API calls.

1. npm install
2. npm start

Have NGINX point to the project folder, verify by browsing [Game Board](http://localhost/boardgame.html)

**Build**

1. npm run build

This will output bundle.js in dist folder.

Install Chrome extension Live Reload for instant changes

OR

Have in your index.html `<script src="http://127.0.0.1:35729/livereload.js?ext=Chrome&amp;extver=2.1.0"></script>`

//TODO

Have grunt process less/sass files on change and build one single bundle.css in dist folder. 
Styles should always be referenced from dist folder while developing.