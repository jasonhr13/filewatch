'use strict';

var path = require( 'path' );
var fs = require( 'fs' );
var request = require('request');
var chokidar = require( 'chokidar' );

var screenshot_dir = 'path/to/screenshots';

chokidar.watch(screenshot_dir).on('add', (event, path) => {
  var file = fs.readFileSync( path );

  request.post( { url: 'http://api_url_here', body: file, }, ( err, res, body ) => {
    console.log( body );
  });
});
