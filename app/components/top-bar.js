import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  intl: service(),
  lightbox: service(),
  router: service(),

  hideMenu: computed('router.currentRouteName', function() {
    if (this.router.currentRouteName === 'table-of-contents') {
      return true;
    }
    return false;
  }),

  isEnglishRoute: computed('router.currentRouteName', function() {
    return this.router.currentRouteName.includes('en.');
  }),

  isFrenchRoute: computed('router.currentRouteName', function() {
    return this.router.currentRouteName.includes('fr.');
  }),

  menuIsOpen: equal('lightbox.showLightbox', 'tableofcontents'),

  actions: {
    closeMenu() {
      this.lightbox.closeLightbox();
    },
    openMenu() {
      this.lightbox.showTableOfContents();
    },
  },
});
