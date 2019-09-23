import ENV from 'annual-report-2019/config/environment';
import { get } from '@ember/object';
import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  googleAnalytics: service(),
  headData: service(),
  router: service(),

  actions: {
    didTransition() {
      get(this, 'googleAnalytics').sendPageView({
        pageLocation: get(this, 'headData.url'),
        pagePath: `${ENV.rootURL}${get(this, 'router.currentRouteName').replace('.', '/').replace('index', '')}`,
        pageTitle: get(this, 'headData.title'),
      });
      return true;
    },
  },
});
