module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        gruntConfig: grunt.file.readJSON('package.json').gruntConfig,
        watch: {
            scripts: {
                files: './src/**/*.js',
                tasks: ['babel'],
                options: {
                    debounceDelay: 250,
                }
            }
        },
        connect: {
            livereload: true
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015', 'react'],
                ignore: ['src/systemjs.config.js']
            },
            all: {
                files: [{
                    expand: true,
                    cwd: "<%= cwd %>/src",
                    src: ["lib/**/*.js"],
                    dest: "<%= cwd %>/bin",
                    ext: ".js"
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    // Default task(s).
    grunt.registerTask('default', ['connect',
        'watch'
    ]);

};
