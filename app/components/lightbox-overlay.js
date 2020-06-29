import Component from '@ember/component';
import {
  computed,
  observer,
  set,
} from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  lightbox: service(),
  routeOrder: service(),

  routes: computed('routeOrder.routes.[]', function() {
    return this.routeOrder.routes.slice(2);
  }),

  showTableOfContents: equal('lightbox.showLightbox', 'tableofcontents'),

  showLightboxChanged: observer('lightbox.showLightbox', function() {
    /* istanbul ignore next */
    if (this.lightbox.showLightbox) {
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
