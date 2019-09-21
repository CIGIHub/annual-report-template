import Component from '@ember/component';
import {
  computed,
  get,
  observer,
  set,
} from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

import routeOrder from '../route-order';

export default Component.extend({
  lightbox: service(),

  routes: routeOrder.slice(2),

  showTableOfContents: computed('lightbox.showLightbox', function() {
    return get(this, 'lightbox.showLightbox') === 'tableofcontents';
  }),

  showLightboxChanged: observer('lightbox.showLightbox', function() {
    /* istanbul ignore next */
    if (get(this, 'lightbox.showLightbox')) {
      $('.lightbox').css({
        'z-index': 5,
      }).animate({
        'opacity': 1,
      }, 500);
      $('.scroll-arrow').css({
        'z-index': -1,
      });
      $('.dot-nav').css({
        'z-index': -1,
      });
    } /* istanbul ignore next */ else {
      $('.lightbox').animate({
        'opacity': 0,
      }, 500).css({
        'z-index': -1,
      });
      $('.transition-row, .content-slide, .home-page, .chairs-message, .footer').animate({
        'opacity': 1,
      });
      $('.scroll-arrow').css({
        'z-index': 7,
      });
      $('.dot-nav').css({
        'z-index': 1,
      });
    }
  }),

  init() {
    set(this, 'lightbox.showLightbox', null);
    return this._super();
  },
});
