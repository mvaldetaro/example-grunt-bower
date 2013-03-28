module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bower: {
      install: {
       //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.registerTask('default', ['bower']);

};
