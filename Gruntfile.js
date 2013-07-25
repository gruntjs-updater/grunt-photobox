/*
 * grunt-photoBox
 * https://github.com/stefan/grunt-photoBox
 *
 * Copyright (c) 2013 stefan judis
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig( {
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: [ 'tmp' ],
    },


    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },


    // Configuration to be run (and then tested).
    photoBox: {
      options: {
        indexPath   : 'photoBox/',
        screensizes : [ '960x1200', '1200x500', '350x1200' ],
        urls        : [ 'http://google.com', 'http://4waisenkinder.de', 'http://4waisenkinder.de/blog/2013/07/07/see-how-your-project-performs-at-travis-ci/' ]
      }
    },


    // Unit tests.
    nodeunit: {
      tests: ['test/**/*Test.js']
    }
  } );

  // Actually load this plugin's task(s).
  grunt.loadTasks( 'tasks' );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );

  grunt.registerTask( 'test', [ 'clean:tests', 'nodeunit' ] );

  // By default, lint and run all tests.
  grunt.registerTask( 'default', [ 'jshint', 'test' ] );

};
