'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/foundation-sites/dist/css/foundation.css');

  app.import('node_modules/foundation-sites/dist/js/plugins/foundation.core.js');
  app.import('node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js');

  return app.toTree();
};
