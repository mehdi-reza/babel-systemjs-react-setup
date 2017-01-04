module.exports = function(grunt) {
    // Project configuration.
    var babelOptions=grunt.file.readJSON('.babelrc');
    grunt.initConfig({
        clean: {
            dev:['bin','dist']
        },
        watch: {
            options: {
                livereload: true,                
                spawn:false
            },
            babel: {
                files:['./src/**/*.js'],
                tasks:['newer:babel']
            }
        },
        babel: {
            options: babelOptions,
            transpile: {
                files: [{
                    expand:true,
                    cwd:'src/',
                    src:'**/*.js',
                    dest:'bin/'
                }]
            }
        },
        execute: {
            build: {
                src: ['build.js'] 
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-execute'); // for building

    // Default task(s).
    grunt.registerTask('dev', [
        'clean','babel','watch'
    ]);

    grunt.registerTask('build', [
        'clean','babel','execute:build'
    ]);

    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};
