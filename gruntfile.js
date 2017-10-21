module.exports = function(grunt) {
    
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        } 
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'Images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/'
            }]
        }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'css/*.css',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    }
  })
  
// Load the plugins tasks 
//   kompilacja sass->css
  grunt.loadNpmTasks('grunt-sass');
//   Optymalizacja obrazków
  grunt.loadNpmTasks('grunt-contrib-imagemin');
//   Auto zapis
  grunt.loadNpmTasks('grunt-contrib-watch');
//  Web Sync
    grunt.loadNpmTasks('grunt-browser-sync');
  
// Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};