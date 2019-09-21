import ENV from 'annual-report-2019/config/environment';
import { get, set } from '@ember/object';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  fastboot: service(),
  gtag: null,

  sendPageView({
    pageLocation,
    pagePath,
    pageTitle,
  }) {
    if (!get(this, 'fastboot.isFastBoot')
        && ENV.environment === 'production'
        && !ENV.staging) {
      if (!get(this, 'gtag')) {
        window.dataLayer = window.dataLayer || [];
        set(this, 'gtag', function() {
          window.dataLayer.push(arguments);
        });
        get(this, 'gtag')('js', new Date());
        get(this, 'gtag')('config', 'UA-830691-41');
      }

      get(this, 'gtag')('event', 'page_view', {
        'page_title': pageTitle,
        'page_location': pageLocation,
        'page_path': pagePath,
      });
    }
  },
});
