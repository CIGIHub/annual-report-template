import Controller from '@ember/controller';
import {
  computed,
  get,
  set,
} from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  lightbox: service(),
  router: service(),

  dotNavShown: false,

  lightBackground: computed('router.currentRouteName', 'lightbox.showLightbox', function() {
    const lightBackgroundRoute = [
      'chairs-message',
      'financials.auditors-report',
      'outputs-and-activities',
      'presidents-message',
    ].includes(get(this, 'router.currentRouteName'));
    if (get(this, 'lightbox.showLightbox')) {
      return false;
    }
    if (lightBackgroundRoute) {
      return true;
    }
    return false;
  }),

  showDotNav: computed('dotNavShown', 'router.currentRouteName', function() {
    const onContentSlide = ![
      'index',
      'table-of-contents',
    ].includes(get(this, 'router.currentRouteName'));
    if (onContentSlide && !get(this, 'dotNavShown')) {
      set(this, 'dotNavShown', true);
    }
    return get(this, 'dotNavShown') || onContentSlide;
  }),
});
