import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  menuClass: computed('currentRoute', 'darkMenu', function() {
    const classNames = [];
    if (get(this, 'darkMenu')) {
      classNames.push('light-background');
    } else {
      classNames.push('dark-background');
    }
    if (get(this, 'currentRoute') === 'table-of-contents') {
      classNames.push('hide-menu');
    }
    return classNames.toString().replace(/,/g, ' ');
  }),
});
