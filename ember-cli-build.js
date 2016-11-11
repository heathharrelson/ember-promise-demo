/*jshint node:true*/
/* global require, module */
"use strict";

let EmberApp = require('ember-cli/lib/broccoli/ember-app');
let funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  let fontAwesomeFonts = funnel('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: '/fonts'
  });

  let fontAwesomeCss = funnel('bower_components/font-awesome/css', {
    srcDir: '/',
    destDir: '/assets'
  });

  let treesToMerge = [fontAwesomeFonts, fontAwesomeCss];

  return app.toTree(treesToMerge);
};
