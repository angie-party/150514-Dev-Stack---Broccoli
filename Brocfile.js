var CompileTypeScript = require( 'broccoli-tsc' )
var MergeTrees = require( 'broccoli-merge-trees' )
var Funnel = require( 'broccoli-funnel' )
var CompileLess = require( 'broccoli-less-single' )

var app = 'app'

app = new CompileTypeScript( app )

var staticFiles = 'static'

var jspmPackages = new Funnel( 'jspm_packages', {
  srcDir: '/',
  destDir: 'jspm_packages'
});

var styles = new CompileLess( app, 'styles/app.less', 'assets/app.css' )

module.exports = new MergeTrees([ app, staticFiles, jspmPackages, styles ])
