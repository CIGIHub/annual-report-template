import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  lightbox: service(),
  router: service(),

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
});
