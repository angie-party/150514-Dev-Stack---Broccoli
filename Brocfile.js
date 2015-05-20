var compileTypeScript = require( 'broccoli-tsc' );
var mergeTrees = require( 'broccoli-merge-trees' );

var app = 'app';

app = new compileTypeScript( app );

var staticFiles = 'static';

var jspmPackages = 'jspm_packages';

module.exports = mergeTrees([ app, staticFiles, jspmPackages ]);
