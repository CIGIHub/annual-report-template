import ENV from 'annual-report-2019/config/environment';
import { set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  headData: service(),
  intl: service(),

  afterModel() {
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}table-of-contents/`);
  },
});
