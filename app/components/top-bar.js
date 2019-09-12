import ENV from 'annual-report-2019/config/environment';
import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  intl: service(),
  lightbox: service(),
  router: service(),
  socialAnimationTimeout: null,
  socialMenuIsOpen: false,

  hideMenu: computed('router.currentRouteName', function() {
    if (get(this, 'router.currentRouteName') === 'table-of-contents') {
      return true;
    }
    return false;
  }),

  linkedInShareLink: computed('shareRoute', function() {
    const shareRoute = get(this, 'shareRoute');
    return `https://www.linkedin.com/shareArticle?mini=true&url=${shareRoute}`;
  }),

  twitterShareLink: computed('shareRoute', function() {
    const shareRoute = get(this, 'shareRoute');
    let shareTitle = get(this, 'intl').t('title');
    shareTitle = shareTitle.replace(/ /g, '+');
    return `https://twitter.com/intent/tweet?status=${shareTitle}+${shareRoute}`;
  }),

  menuIsOpen: computed('lightbox.showLightbox', function() {
    return get(this, 'lightbox.showLightbox') === 'tableofcontents';
  }),

  shareRoute: computed('router.currentRouteName', function() {
    const currentRoute = get(this, 'router.currentRouteName').replace('.', '/').replace('index', '');
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
