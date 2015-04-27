
var pickFiles = require('broccoli-static-compiler');
var compileTypeScript = require( 'broccoli-typescript' );
var mergeTrees = require('broccoli-merge-trees');

function preprocess( tree ) {

  // compile TS
  tree = compileTypeScript(tree, {
    sourcemap: true
  });

  return tree;
}

var app = 'app';

app = pickFiles( app, {
  srcDir: '/',
  destDir: 'dist' // move under dist namespace
});

app = preprocess( app );

var staticFiles = 'static';

module.exports = mergeTrees([ app, staticFiles ]);
