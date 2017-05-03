var path = require('path');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-webpack');

    /**
     * folders used
     */
    var vendorFolder = "./node_modules";
    var frontendAppFolder = "./app";
    var publicFolder = "./public";
    var assetsFolder = publicFolder+"";
    var staticFolder = assetsFolder+"/static";
    var compiledFolder = assetsFolder+"/compiled";

    var webpackCache = {};

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            options: {
                entry: frontendAppFolder + "/index.js",
                context: path.join(__dirname),
                output: {
                    path: compiledFolder,
                    filename: 'app.js',
                },
                cache: webpackCache,
            },
            frontend_bundle: {
                watch: false,
                keepalive: false,
            }
        }
    });

    /**
     * tasks used for Building the app
     *
     * the order is important because they can depend on each other
     */
    var buildTasks = [
        'webpack:frontend_bundle',
    ];

    grunt.registerTask('default', buildTasks);
    grunt.registerTask('build', buildTasks);

};
