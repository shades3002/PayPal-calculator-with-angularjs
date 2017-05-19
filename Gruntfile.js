module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'app/*.js', 'app/modules/**/*.js']
        },        
        pug: {
            compile: {
                options: {
                    pretty: true,
                },
                files: [{
                    expand: true,
                    cwd: './src/views',
                    src: ['**/*.pug', '!includes/**', '!index.pug', '!index-dev.pug',],
                    dest: 'app/modules/',
                    ext: '.html',
                }, {
                    'index.html': 'src/views/index.pug',
                    'index-dev.html': 'src/views/index-dev.pug'
                }]
            }
        },
        watch: {
            options: {
                livereload: true,
            },           
            js: {
                files: ['Gruntfile.js', 'app/*.js', 'app/modules/**/*.js'],
                tasks: ['newer:jshint'], 
            },
            pug: {
                files: ['src/views/**/*.pug'],
                tasks: ['newer:pug']
            },
            html: {
                files: ['index.html', 'app/**/*.html', 'app/**/**/*.html'],
            },
        },
        concat: {
            dist: {
                src: [
                    //app
                    'app/app.js',
                    //root module
                    'app/modules/core/core.module.js',
                    'app/modules/calculator/calculator.module.js',
                    //js
                    'app/**/**/*.js',
                    '!app/modules/core/i18n/*.js',
                ],
                dest: 'build/app.paypal-calculator-with-angularjs.js',
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: false,
                beautify: false,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= pkg.author %> -' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'build/app.paypal-calculator-with-angularjs.js',
                dest: 'build/app.paypal-calculator-with-angularjs.min.js'
            }
        }, 
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: {
                        path: '.',
                        options: {
                            index: 'index-dev.html',
                        }
                    },
                    hostname: 'localhost',
                    protocol: 'http',
                    livereload: true,
                    open: true,
                }
            }
        },
    });

    // Grunts plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify'); 

    //production
    grunt.registerTask('production', [
        'concat',
        'uglify'
    ]);

    // Start the http server for development
    grunt.registerTask('server', [
        'jshint',
        'pug',
        'connect',
        'watch'
    ]);
};