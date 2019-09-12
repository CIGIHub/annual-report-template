import ENV from 'annual-report-2019/config/environment';
import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  lightbox: service(),

  hideMenu: computed('currentRoute', function() {
    if (get(this, 'currentRoute') === 'table-of-contents') {
      return true;
    }
    return false;
  }),

  menuIsOpen: computed('lightbox.showLightbox', function() {
    return get(this, 'lightbox.showLightbox') === 'tableofcontents';
  }),

  shareRoute: computed('currentRoute', function() {
    const currentRoute = get(this, 'currentRoute').replace('.', '/').replace('index', '');
    return `${ENV.host}${ENV.rootURL}${currentRoute}`;
  }),
});
