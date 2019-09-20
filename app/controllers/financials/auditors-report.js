import ENV from 'annual-report-2019/config/environment';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  host: computed(function() {
    let host = 'https://www.cigionline.org';
    if (ENV.environment !== 'production' || ENV.staging) {
      host = 'https://staging.cigionline.org';
    }
    return host;
  }),
});
