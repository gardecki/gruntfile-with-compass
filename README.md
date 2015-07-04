# gruntfile-with-compass
This is my basic initial "frontend seed" with npm, bower and grunt files. Grunt tasks are used to compile scss files into one css file, concatenate all bower dependencies and aplication js files into one script.js. Everything is deployed in /build directory. It also runs server on localhost:9000, opens newly build application in browser and watches for changes in working directory with livereload functionality. Uses angular with ui.router for example app. 

## 1. General Requirements
First of all you have to install few things:

1. <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank">node</a>
2. <a href="http://bower.io/#install-bower" target="_blank">bower</a>
3. <a href="http://gruntjs.com/installing-grunt" target="_blank">grunt</a>
4. You also have to install <a href="http://thesassway.com/beginner/getting-started-with-sass-and-compass" target="_blank">compass</a> in order to run grunt-contrib-compass task used in this gruntfile.  
<hr>
##How it works?

