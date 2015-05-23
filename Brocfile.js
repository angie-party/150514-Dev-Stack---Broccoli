var CompileTypeScript = require( 'broccoli-tsc' )
var MergeTrees = require( 'broccoli-merge-trees' )
var Funnel = require( 'broccoli-funnel' )
var CompileLess = require( 'broccoli-less-single' )

var app = 'app'

var appCompiled = new CompileTypeScript( app )

var staticFiles = 'app/static'

var jspmPackages = new Funnel( 'jspm_packages', {
  destDir: 'jspm_packages'
});

var styles = new CompileLess( app, 'styles/app.less', 'assets/app.css' )

module.exports = new MergeTrees([ appCompiled, staticFiles, jspmPackages, styles ])
