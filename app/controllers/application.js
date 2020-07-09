import Controller from '@ember/controller';
import {
  computed,
  observer,
  set,
} from '@ember/object';
import { equal } from '@ember/object/computed';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';

export default Controller.extend({
  backgroundImage: service(),
  fastboot: service(),
  lightbox: service(),
  routeOrder: service(),
  router: service(),

  dotNavShown: false,
  isTransitioning: false,

  backgroundStyle: computed('router.currentRouteName', function() {
    const currentRouteName = this.router.currentRouteName;
    if ([
      'table-of-contents',
      'thank-you',
    ].includes(currentRouteName)) {
      return htmlSafe('background-color: #000;');
    }
    if ([
      'chairs-message',
      'financials.auditors-report',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'outputs-and-activities',
      'presidents-message',
    ].includes(currentRouteName)) {
      return htmlSafe('background-color: #fff;');
    }

    const {
      thumbnailUrl,
      fullSizeUrl,
    } = this.backgroundImage.getSlideBackgroundImage(currentRouteName);
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  // Add bounce animation to down scroll arrow on home slide
  bounceScrollArrowDown: equal('router.currentRouteName', 'index'),

  hideMobileOverlay: computed('router.currentRouteName', function() {
    return [
      'chairs-message',
      'outputs-and-activities',
      'financials.auditors-report',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'presidents-message',
      'table-of-contents',
    ].includes(this.router.currentRouteName);
  }),

  lightBackground: computed('router.currentRouteName', 'lightbox.{showLightbox,subType}', function() {
    const lightBackgroundRoute = [
      'chairs-message',
      'financials.auditors-report',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'outputs-and-activities',
      'presidents-message',
    ].includes(this.router.currentRouteName);
    if (this.lightbox.showLightbox
        || this.lightbox.subType === 'publication') {
      return false;
    }
    if (lightBackgroundRoute) {
      return true;
    }
    return false;
  }),

  scrollableContentPage: computed('router.currentRouteName', function() {
    return ![
      'index',
      'timeline',
      'thank-you',
    ].includes(this.router.currentRouteName);
  }),

  showDotNav: computed('dotNavShown', 'router.currentRouteName', function() {
    const onContentSlide = ![
      'index',
      'table-of-contents',
    ].includes(this.router.currentRouteName);
    if (onContentSlide && !this.dotNavShown) {
      set(this, 'dotNavShown', true);
    }
    return this.dotNavShown || onContentSlide;
  }),

  showScrollArrowDown: computed('router.currentRouteName', 'routeOrder.{lastRoute,lastSubRoutes.[]}', function() {
    const currentRouteName = this.router.currentRouteName;

    return currentRouteName !== this.routeOrder.lastRoute
      && !this.routeOrder.lastSubRoutes.includes(currentRouteName)
      && currentRouteName !== '404';
  }),

  showScrollArrowUp: computed('router.currentRouteName', 'routeOrder.{firstRoute,firstSubRoutes.[]}', function() {
    const currentRouteName = this.router.currentRouteName;
    return currentRouteName !== this.routeOrder.firstRoute
      && !this.routeOrder.firstSubRoutes.includes(currentRouteName)
      && currentRouteName !== '404';
  }),

  currentRouteNameChanged: observer('router.currentRouteName', function() {
    /* istanbul ignore next */
    if (!this.fastboot.isFastBoot) {
      if (this.lightbox.showLightbox
          || this.lightbox.subType === 'publication') {
        this.lightbox.closeLightbox();
      }

      // Dot-nav overlay
      $('.overlay').stop(false, false).animate({
        'opacity': 0,
        'z-index': -1,
      }, 500);
      // Reset menu and dot-nav visibility if coming from timeline preview.
      $('.cigi-top-bar, .dot-nav, .scroll-arrow, .social-1, .social-2, .social-3').css({
        'visibility': '',
      });
    }
  }),

  actions: {
    transitionBack() {
      set(this, 'isTransitioning', true);
      const currentRouteName = this.router.currentRouteName;
      const previousRoute = this.routeOrder.getPreviousRoute(currentRouteName);
      if (previousRoute) {
        this.transitionToRoute(previousRoute);
        later(this, function() {
          set(this, 'isTransitioning', false);
        }, 1500);
      } else {
        set(this, 'isTransitioning', false);
      }
    },
    transitionNext() {
      set(this, 'isTransitioning', true);
      const currentRouteName = this.router.currentRouteName;
      const nextRoute = this.routeOrder.getNextRoute(currentRouteName);
      if (nextRoute) {
        this.transitionToRoute(nextRoute);
        later(this, function() {
          set(this, 'isTransitioning', false);
        }, 1500);
      } else {
        set(this, 'isTransitioning', false);
      }
    },
  },
});
