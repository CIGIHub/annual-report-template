import ENV from 'annual-report-2019/config/environment';
import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  hideMenu: computed('currentRoute', function() {
    if (get(this, 'currentRoute') === 'table-of-contents') {
      return true;
    }
    return false;
  }),

  shareRoute: computed('currentRoute', function() {
    const currentRoute = get(this, 'currentRoute').replace('.', '/').replace('index', '');
    return `${ENV.host}${ENV.rootURL}${currentRoute}`;
  }),
});
