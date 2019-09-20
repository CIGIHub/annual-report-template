'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    babel: {
      plugins: ['transform-object-rest-spread'],
    },
    'ember-cli-favicon': {
      enabled: process.env.EMBER_ENV !== 'test',
      faviconsConfig: {
        appName: '2019 CIGI Annual Report',
        developerName: 'Centre for International Governance Innovation',
        developerURL: 'https://www.cigionline.org',
        icons: {
          coast: false,
        },
        path: process.env.EMBER_ENV === 'development' ? '/' : '/interactives/2019annualreport/assets/favicon',
      },
      iconPath: 'favicon.png',
    },
  });

  app.import('node_modules/foundation-sites/dist/css/foundation.css');

  app.import('node_modules/foundation-sites/dist/js/plugins/foundation.core.js', {
    using: [{
      transformation: 'fastbootShim',
    }],
  });
  app.import('node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js', {
    using: [{
      transformation: 'fastbootShim',
    }],
  });

  app.import('vendor/nodes.js');

  app.import('node_modules/lolex/lolex.js', {
    using: [{
      as: 'lolex',
      transformation: 'amd',
    }],
    type: 'test',
  });

  return app.toTree();
};
