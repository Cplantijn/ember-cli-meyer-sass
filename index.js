var path = require('path');
var funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-meyer-reset-sass',

  included: function included(app) {
    this.app = app;
    var resetPath   = 'bower_components/reset-scss/';
    var modulePath  = path.relative(app.project.root, __dirname);
    var path_join = function(){
      // fix path with windows back slash with path_join
      return path.join.apply(this, arguments).replace(/\\/g, '/');
    };
    console.log('Reset styles loaded');
  },
  treeForStyles: function(){
    var resetPath = path.join(this.app.bowerDirectory, 'reset-scss');
    var resetTree = new funnel(resetPath, {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return resetTree;
  }

};
