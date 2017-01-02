module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            babel: {
                files: './src/**/*.js',
                tasks:['babel']
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015', 'react'],
                ignore: ['src/systemjs.config.js']
            },
            dev: {
                files: [{
                    expand:true,
                    cwd:'src/',
                    src:'**/*.js',
                    dest:'bin/'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    // Default task(s).
    grunt.registerTask('default', [
        'watch'
    ]);

};