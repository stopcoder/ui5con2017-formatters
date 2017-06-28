module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: [
					{
						src: 'src/index.html',
						dest: 'dist/index.html'
					}, {
						expand: true,
						cwd: 'src/css/',
						src: '*',
						dest: 'dist/css/'
					}, {
						src: 'node_modules/reveal.js/js/reveal.js',
						dest: 'dist/js/reveal.js'
					}, {
						src: 'node_modules/reveal.js/css/reveal.css',
						dest: 'dist/css/reveal.css'
					}, {
						src: 'node_modules/reveal.js/css/theme/black.css',
						dest: 'dist/css/theme/black.css'
					}, {
						expand: true,
						cwd: 'src/image/',
						src: '*',
						dest: 'dist/image/'
					}, {
						src: 'node_modules/reveal.js/plugin/highlight/highlight.js',
						dest: "dist/plugin/highlight/highlight.js"
					}, {
						expand: true,
						cwd: 'src/js/',
						src: '*',
						dest: 'dist/js/'
					}, {
						src: "node_modules/highlight.js/styles/atom-one-dark.css",
						dest: "dist/css/atom-one-dark.css"
					}
				]
			}
		},
		watch: {
			scripts: {
				files: [
					'src/index.html',
					'src/css/style.css'
				],
				tasks:[
					'copy'
				]
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['copy']);

};