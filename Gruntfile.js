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
                files: ['./src/**/*.js'],
                tasks: ['newer:babel']
            },
            css: {
            	files: ['styles/**/*.css'],
            	tasks: ['cssmin','concat']
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
        cssmin: {
        	all: {
        		files:[{
			      expand: true,
			      cwd: 'styles',
			      src: ['*.css'],
			      dest: 'dist',
			      ext: '.min.css'
			    }]
        	}
        },
        concat: {
			options: {
		      separator: ';',
		      stripBanners: {
		      	block:true,
		      	line:true
		      }
		    },
		    dist: {
		      src: ['dist/*.css','!dist/bundle.css'],
		      dest: 'dist/bundle.css',
		    },
        },
        execute: {
            build: {
                src: ['build.js'] 
            }
        }
    });

    // Load plugins..
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-execute'); // for building

    // Default task(s).
    grunt.registerTask('dev', [
        'clean','babel','cssmin','concat','watch'
    ]);

    grunt.registerTask('build', [
        'clean','babel','cssmin','concat','execute:build'
    ]);

    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};
