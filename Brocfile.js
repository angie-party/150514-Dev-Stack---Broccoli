var CompileTypeScript = require( 'broccoli-tsc' )
var MergeTrees = require( 'broccoli-merge-trees' )
var Funnel = require( 'broccoli-funnel' );

var app = 'app'

app = new CompileTypeScript( app )

var staticFiles = 'static'

var jspmPackages = new Funnel( 'jspm_packages', {
  srcDir: '/',
  destDir: 'jspm_packages'
});

module.exports = new MergeTrees([ app, staticFiles, jspmPackages ])
