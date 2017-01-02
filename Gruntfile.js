module.exports = function(grunt) {
    // Project configuration.
    var babelOptions=grunt.file.readJSON('.babelrc');
    grunt.initConfig({
        clean: {
            dev:['bin']
        },
        watch: {
            options: {
                livereload: true
            },
            babel: {
                files: './src/**/*.js',
                tasks:['newer:babel']
            }
        },
        babel: {
            options: babelOptions,
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-newer');

    // Default task(s).
    grunt.registerTask('default', [
        'clean','babel','watch'
    ]);
};
