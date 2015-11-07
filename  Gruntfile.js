module.exports = function(grunt) {

/*
 * install grunt global:
 * $ npm install -g grunt-cli
 *
 * install dependencies from package.json (must run in project dir!) 
 * $ npm install 
 */


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: [
          '../../htdocs/angular/app/scripts/app.js', 
          '../../htdocs/angular/app/scripts/controllers/controllers.js',
          '../../htdocs/angular/app/scripts/filters/filters.js',
          '../../htdocs/angular/app/scripts/directives/directives.js'
          ],
        dest: '../../htdocs/angular/app/scripts/concat.js'
      }
      // ,
      // css: {
      //   src: ['src/file1.css', 'src/file2.css'],
      //   dest: 'dest/concat.css'
      // }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '../../htdocs/angular/app/scripts/concat.js',
        dest: '../../htdocs/angular/app/scripts/concat.min.js'
      }
    },
    cssmin: {
      css:{
        src: '../../htdocs/angular/app/styles/main.css',
        dest: '../../htdocs/angular/app/styles/main.min.css'
      }
    }
    // ,watch: {
    //   files: ['**/*','!**/node_modules/**'],
    //   tasks: ['concat', 'uglify', 'cssmin', 'htmlmin','ftpush']
    // }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
  // grunt.registerTask('dev', ['watch']);
};