import Component from '@ember/component';
import { get } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  menuItem: null,

  mouseEnter() {
    /* istanbul ignore next */
    if (!get(this, 'menuItem.current')) {
      /* istanbul ignore next */
      $('.overlay').stop(false, false).css({
        'z-index': 0,
      }).animate({
        'opacity': 1,
      }, 500);
    }
  },

  mouseLeave() {
    /* istanbul ignore next */
    $('.overlay').stop(false, false).animate({
      'opacity': 0,
      'z-index': -1,
    }, 500);
  },
});
