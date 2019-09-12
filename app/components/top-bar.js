import ENV from 'annual-report-2019/config/environment';
import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  lightbox: service(),
  socialAnimationTimeout: null,
  socialMenuIsOpen: false,

  hideMenu: computed('currentRoute', function() {
    if (get(this, 'currentRoute') === 'table-of-contents') {
      return true;
    }
    return false;
  }),

  menuIsOpen: computed('lightbox.showLightbox', function() {
    return get(this, 'lightbox.showLightbox') === 'tableofcontents';
  }),

  shareRoute: computed('currentRoute', function() {
    const currentRoute = get(this, 'currentRoute').replace('.', '/').replace('index', '');
    return `${ENV.host}${ENV.rootURL}${currentRoute}`;
  }),

  actions: {
    closeMenu() {
      get(this, 'lightbox').closeLightbox();
    },
    closeSocialMenu() {
      if (get(this, 'socialAnimationTimeout')) {
        clearTimeout(get(this, 'socialAnimationTimeout'));
        set(this, 'socialAnimationTimeout', null);
      }
      set(this, 'socialMenuIsOpen', false);

      $('.social-1-btn').animate({
        'left': '120px',
        'opacity': 0,
      }, 300);
      $('.social-2-btn').animate({
        'left': '80px',
        'opacity': 0,
      }, 300);
      $('.social-3-btn').animate({
        'left': '40px',
        'opacity': 0,
      }, 300);

      set(this, 'socialAnimationTimeout', setTimeout(function() {
        $('.social-1-btn').css({
          'visibility': 'hidden',
        });
        $('.social-2-btn').css({
          'visibility': 'hidden',
        });
        $('.social-3-btn').css({
          'visibility': 'hidden',
        });
      }, 300));

      $('.scroll-arrow-up').fadeIn();
    },
    openMenu() {
      get(this, 'lightbox').showTableOfContents();
    },
    openSocialMenu() {
      if (get(this, 'socialAnimationTimeout')) {
        clearTimeout(get(this, 'socialAnimationTimeout'));
        set(this, 'socialAnimationTimeout', null);
      }
      set(this, 'socialMenuIsOpen', true);

      $('.social-1-btn, .social-2-btn, .social-3-btn').css({
        'visibility': 'visible',
      }).animate({
        'left': 0,
        'opacity': 1,
      }, 300);

      if ($(window).width() <= 425) {
        $('.scroll-arrow-up').css({
          'display': 'none',
        });
      }
    },
  },
});
