import ENV from 'annual-report-template/config/environment';
import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  intl: service(),
  lightbox: service(),
  router: service(),
  socialAnimationTimeout: null,
  socialMenuIsOpen: false,

  hideMenu: computed('router.currentRouteName', function() {
    if (this.router.currentRouteName === 'table-of-contents') {
      return true;
    }
    return false;
  }),

  linkedInShareLink: computed('shareRoute', function() {
    const shareRoute = this.shareRoute;
    return `https://www.linkedin.com/shareArticle?mini=true&url=${shareRoute}`;
  }),

  twitterShareLink: computed('shareRoute', function() {
    const shareRoute = this.shareRoute;
    let shareTitle = this.intl.t('title');
    shareTitle = shareTitle.replace(/ /g, '+');
    return `https://twitter.com/intent/tweet?status=${shareTitle}+${shareRoute}`;
  }),

  menuIsOpen: equal('lightbox.showLightbox', 'tableofcontents'),

  shareRoute: computed('router.currentURL', function() {
    const currentRoute = this.router.currentURL.replace('/', '');
    return `${ENV.host}${ENV.rootURL}${currentRoute}`;
  }),

  actions: {
    closeMenu() {
      this.lightbox.closeLightbox();
    },
    closeSocialMenu() {
      /* istanbul ignore next */
      if (this.socialAnimationTimeout) {
        clearTimeout(this.socialAnimationTimeout);
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

      $('.scroll-arrow-up-btn').fadeIn();
    },
    facebookShare() {
      /* istanbul ignore next */
      FB.ui({
        method: 'share',
        href: this.shareRoute,
      });
    },
    openMenu() {
      this.lightbox.showTableOfContents();
    },
    openSocialMenu() {
      /* istanbul ignore next */
      if (this.socialAnimationTimeout) {
        clearTimeout(this.socialAnimationTimeout);
        set(this, 'socialAnimationTimeout', null);
      }
      set(this, 'socialMenuIsOpen', true);

      $('.social-1-btn, .social-2-btn, .social-3-btn').css({
        'visibility': 'visible',
      }).animate({
        'left': 0,
        'opacity': 1,
      }, 300);

      /* istanbul ignore next */
      if ($(window).width() <= 425) {
        $('.scroll-arrow-up-btn').css({
          'display': 'none',
        });
      }
    },
  },
});
