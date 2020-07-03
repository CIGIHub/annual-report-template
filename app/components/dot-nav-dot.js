import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  mouseEnter() {
    /* istanbul ignore next */
    if (!this.args.menuItem.current) {
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
