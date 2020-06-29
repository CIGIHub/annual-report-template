import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  darkFooter: false,
  revealToggle: false,

  footerClass: computed('darkFooter', function() {
    const classNames = ['footer', 'clearfix', 'show-for-large'];
    if (this.darkFooter) {
      classNames.push('footer-dark');
    }
    return classNames.toString().replace(/,/g, ' ');
  }),

  actions: {
    showBackground() {
      set(this, 'revealToggle', !this.revealToggle);
    },
  },
});
