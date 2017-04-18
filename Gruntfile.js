module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webfont');

  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        src: ['icons/1_0/*.svg', 'icons/1_1/*.svg',
              'icons/1_2/*.svg','icons/1_3/*.svg',
              'icons/1_4/*.svg','icons/1_5/*.svg',
              'icons/1_6/*.svg','icons/1_7/*.svg'],
        dest: 'build/fonts',
        options: {
          font:'FontBotamochi',
          fontFilename: 'fb-{hash}',
          hashes:false,
          template: 'templates/bem.css',
          htmlDemoTemplate: 'templates/demo.html',
          templateOptions: {
            baseClass: 'fb', // ベースクラス
            classPrefix: 'fb-' // クラス名プレフィックス
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['webfont']);
}
