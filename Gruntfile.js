module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'app/*.js', 'app/modules/**/*.js']
        },
        watch: {
            options: {
                livereload: true,
            },
            tasks: ['jshint'],
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Start the http server for development
    grunt.registerTask('server', [
        'jshint',
        'connect',
        'watch'
    ]);
};