import Component from '@ember/component';
import { action } from '@ember/object';
import $ from 'jquery';

export default class DotNavDotComponent extends Component {
  @action
  handleMouseEnter(e) {
    /* istanbul ignore next */
    e.preventDefault();
    /* istanbul ignore next */
    if (!this.menuItem.current) {
      /* istanbul ignore next */
      $('.overlay').stop(false, false).css({
        'z-index': 0,
      }).animate({
        'opacity': 1,
      }, 500);
    }
  }

  @action
  handleMouseLeave(e) {
    /* istanbul ignore next */
    e.preventDefault();
    /* istanbul ignore next */
    $('.overlay').stop(false, false).animate({
      'opacity': 0,
      'z-index': -1,
    }, 500);
  }
}
