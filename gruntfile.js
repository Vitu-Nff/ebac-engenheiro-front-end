module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Configuração do LESS
    less: {
      development: {
        files: {
          'dist/css/styles.css': ['src/less/styles.less', 'src/less/another-style.less']
        }
      }
    },

    // Configuração do JS
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/js/scripts.min.js': ['src/js/scripts.js', 'src/js/another-script.js']
        }
      }
    }
  });

  // Carregando plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefas padrão
  grunt.registerTask('default', ['less', 'uglify']);
};
