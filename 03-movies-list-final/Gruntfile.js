module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin :{
            css:{
                files: {
                    'public/build/css/main.min.css' : ['public/build/css/main.css']
                }
            }
        },

        uglify:{
            options:{
                compress:{
                    drop_console : true
                }
            },
            js:{
                files:{
                    'public/build/js/main.min.js' : ['public/build/js/main.js']
                }
            }
        },

        watch:{
            styleGenerator:{
                files: ['public/css/*styl'],
                tasks: ['stylus', 'cssmin'],
                "options":{
                    "spawn": "false"
                }
            },
            browserifyGenerator:{
                files: ['public/js/**/*.ts', 'public/js/**/*.js'],
                tasks: ['browserify', 'uglify']
            }
        },

        stylus:{
            compile:{
                options:{
                    paths: ['public/css'],
                    import: ['mixins'],
                    compress: false,
                    'include css' : true,
                    use: [
                        require('rupture')
                    ]
                },
                files : {
                    'public/build/css/main.css' : ['public/css/main.styl', 'public/css/notifications.styl']
                }
            }
        },

        browserify:{
            development:{
                src: ['public/js/**/*.ts','public/js/**/*.js'],
                dest: 'public/build/js/main.js',
                options:{
                    browserifyOptions: {debug: true},
                    configure: function (bundler) {
                        bundler.plugin(require('tsify'));
                        bundler.transform(require('babelify'), {
                            presets: ['es2015', 'stage-3'],
                            extensions: ['.ts']
                        });
                    }
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('dev', ['watch']);

};