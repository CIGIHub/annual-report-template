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
    host: 'https://www.cigionline.org',
    locationType: 'auto',
    modulePrefix: 'annual-report-2019',
    rootURL: '/',
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:4200';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
    ENV.rootURL = '/interactives/2019annualreport/';
  }

  if (environment === 'production') {
    ENV.rootURL = '/interactives/2019annualreport/';

    if (process.env.STAGING) {
      ENV.host = 'https://staging.cigionline.org';
    }
  }

  return ENV;
};
