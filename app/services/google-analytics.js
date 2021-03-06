import ENV from 'annual-report-template/config/environment';
import { set } from '@ember/object';
import { later } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  fastboot: service(),
  headData: service(),
  router: service(),
  gtag: null,

  sendPageView() {
    if (!this.fastboot.isFastBoot
        && ENV.environment === 'production'
        && !ENV.staging) {
      if (!this.gtag) {
        window.dataLayer = window.dataLayer || [];
        set(this, 'gtag', function() {
          window.dataLayer.push(arguments);
        });
        this.gtag('js', new Date());
        this.gtag('config', 'UA-830691-41');
      }

      later(this, function() {
        this.gtag('event', 'page_view', {
          'page_path': `${ENV.rootURL}${this.router.currentURL.replace('/', '')}`,
          'page_title': this.headData.title,
        });
      }, 500);
    }
  },
});
