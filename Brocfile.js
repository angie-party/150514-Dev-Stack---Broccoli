var compileTypeScript = require( 'broccoli-tsc' );
var mergeTrees = require( 'broccoli-merge-trees' );

var app = 'app';

app = compileTypeScript( app );

var staticFiles = 'static';

module.exports = mergeTrees([ app, staticFiles ]);
