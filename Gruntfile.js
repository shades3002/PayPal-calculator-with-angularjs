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
                    src: ['**/*.pug', '!includes/**', '!index.pug'],
                    dest: 'app/modules/',
                    ext: '.html',
                }, {
                    'index.html': 'src/views/index.pug'
                }]
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            tasks: ['jshint'],            
            js: {
                files: ['Gruntfile.js', 'app/*.js', 'app/modules/**/*.js'],
            },
            pug: {
                files: ['src/views/**/*.pug'],
                tasks: ['newer:pug']
            },
            html: {
                files: ['index.html', 'app/**/*.html', 'app/**/**/*.html'],
            },
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.',
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

    // Start the http server for development
    grunt.registerTask('server', [
        'jshint',
        'pug',
        'connect',
        'watch'
    ]);
};