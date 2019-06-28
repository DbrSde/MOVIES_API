module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch:{
            stylusGenerator:{
                files:['src-assets/css/*.styl'],
                tasks:['stylus'],
                'options':{
                    "spawn": "false"
                }
            },
            browserifyGenerator:{
                files:['src-assets/js/*.ts'],
                tasks:['browserify']
            }
        },

        stylus:{
            compile:{
                options:{
                    paths: ['src-assets/css'],
                    import:['mixins'],
                    compress: false,
                    use: [
                        require('rupture')
                    ]
                },
                files:{
                    'public/build/css/main.css': ['src-assets/css/main.styl'],
                    'public/build/css/modale.css': ['src-assets/css/modale.styl']
                }
            }
        },

        browserify:{
            development:{
                src:[
                    'src-assets/js/*.ts'
                ],
                dest : 'public/build/js/main.js',
                options : {
                    browserifyOptions:{debug:true},
                    configure: function (bundler) {
                        bundler.plugin(require('tsify'));
                        bundler.transform(require('babelify'), {
                           presets: ['es2015', 'stage-3'],
                           extensions: ['ts']
                        });
                    }
                }
            }
        }



    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('dev', ['watch']);

};
