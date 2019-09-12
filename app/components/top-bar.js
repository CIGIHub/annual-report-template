import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  hideMenu: computed('currentRoute', function() {
    if (get(this, 'currentRoute') === 'table-of-contents') {
      return true;
    }
    return false;
  }),
});
