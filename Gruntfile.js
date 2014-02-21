module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "css/grayscale.css": "less/grayscale.less"
        }
      }
    },
    watch: {
      styles: {
        files: 'less/*.less',
        tasks: ['less']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
  grunt.registerTask('dev',['less']);
}