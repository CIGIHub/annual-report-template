'use strict';

module.exports = function(environment) {
  const ENV = {
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    environment,
    fontawesome: {
      icons: {
        'free-brands-svg-icons': [
          'facebook-square',
          'linkedin-in',
          'twitter',
        ],
        'pro-light-svg-icons': [
          'arrow-right',
          'bars',
          'camera-retro',
          'chart-bar',
          'chevron-left',
          'chevron-right',
          'comment-alt-lines',
          'download',
          'envelope',
          'file-alt',
          'film',
          'newspaper',
          'search',
          'share-alt',
          'times',
          'volume-up',
        ],
      },
    },
    host: 'https://www.cigionline.org',
    locationType: 'auto',
    modulePrefix: 'annual-report-2019',
    rootURL: '/interactives/2019annualreport/',
    staging: false,
  };

  if (environment === 'development') {
    ENV.fastboot = {
      hostWhitelist: [/^localhost:\d+$/],
    };
    ENV.host = 'http://localhost:4200';
    ENV.rootURL = '/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.fastboot = {
      hostWhitelist: [
        'cigionline.org',
      ],
    };
    if (process.env.STAGING) {
      ENV.host = 'https://staging.cigionline.org';
      ENV.staging = true;
    }
  }

  return ENV;
};
