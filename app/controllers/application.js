import Controller from '@ember/controller';
import {
  computed,
  get,
  observer,
  set,
} from '@ember/object';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';

import routeOrder from '../route-order';

export default Controller.extend({
  backgroundImage: service(),
  fastboot: service(),
  lightbox: service(),
  router: service(),

  dotNavShown: false,
  isTransitioning: false,

  backgroundStyle: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    if ([
      'table-of-contents',
      'thank-you',
    ].includes(currentRouteName)) {
      return htmlSafe('background-color: #000;');
    }
    if ([
      'chairs-message',
      'financials.auditors-report',
      'financials.balance-sheet',
      'financials.notes',
      'financials.revenue-and-expenses',
      'outputs-and-activities',
      'presidents-message',
    ].includes(currentRouteName)) {
      return htmlSafe('background-color: #fff;');
    }

    const { blurUrl, fullUrl } = get(this, 'backgroundImage').getBackgroundImage(currentRouteName);
    return htmlSafe(`background-image: url('${fullUrl}'), url('${blurUrl}');`);
  }),

  bounceScrollArrowDown: computed('router.currentRouteName', function() {
    // Add bounce animation to down scroll arrow on home slide
    return get(this, 'router.currentRouteName') === 'index';
  }),

  hideMobileOverlay: computed('router.currentRouteName', function() {
    return [
      'chairs-message',
      'outputs-and-activities',
      'financials.auditors-report',
      'financials.balance-sheet',
      'financials.notes',
      'financials.revenue-and-expenses',
      'presidents-message',
      'table-of-contents',
    ].includes(get(this, 'router.currentRouteName'));
  }),

  lightBackground: computed('router.currentRouteName', 'lightbox.{showLightbox,subType}', function() {
    const lightBackgroundRoute = [
      'chairs-message',
      'financials.auditors-report',
      'financials.balance-sheet',
      'financials.notes',
      'financials.revenue-and-expenses',
      'outputs-and-activities',
      'presidents-message',
    ].includes(get(this, 'router.currentRouteName'));
    if (get(this, 'lightbox.showLightbox')
        || get(this, 'lightbox.subType') === 'publication') {
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
    ].includes(get(this, 'router.currentRouteName'));
  }),

  showDotNav: computed('dotNavShown', 'router.currentRouteName', function() {
    const onContentSlide = ![
      'index',
      'table-of-contents',
    ].includes(get(this, 'router.currentRouteName'));
    if (onContentSlide && !get(this, 'dotNavShown')) {
      set(this, 'dotNavShown', true);
    }
    return get(this, 'dotNavShown') || onContentSlide;
  }),

  showScrollArrowDown: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    return currentRouteName !== routeOrder[routeOrder.length - 1].route
      && !routeOrder[routeOrder.length - 1].subRoutes.includes(currentRouteName)
      && currentRouteName !== '404';
  }),

  showScrollArrowUp: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    return currentRouteName !== routeOrder[0].route
      && !routeOrder[0].subRoutes.includes(currentRouteName)
      && currentRouteName !== '404';
  }),

  currentRouteNameChanged: observer('router.currentRouteName', function() {
    /* istanbul ignore next */
    if (!get(this, 'fastboot.isFastBoot')) {
      if (get(this, 'lightbox.showLightbox')
          || get(this, 'lightbox.subType') === 'publication') {
        get(this, 'lightbox').closeLightbox();
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
      const currentRouteName = get(this, 'router.currentRouteName');
      let ind = routeOrder.findIndex((route) => currentRouteName === route.route
        || route.subRoutes.includes(currentRouteName));
      ind -= 1;
      if (ind >= 0) {
        this.transitionToRoute(routeOrder[ind].route);
        later(this, function() {
          set(this, 'isTransitioning', false);
        }, 1500);
      } else {
        set(this, 'isTransitioning', false);
      }
    },
    transitionNext() {
      set(this, 'isTransitioning', true);
      const currentRouteName = get(this, 'router.currentRouteName');
      let ind = routeOrder.findIndex((route) => currentRouteName === route.route
        || route.subRoutes.includes(currentRouteName));
      ind += 1;
      if (ind > 0 && ind < routeOrder.length) {
        this.transitionToRoute(routeOrder[ind].route);
        later(this, function() {
          set(this, 'isTransitioning', false);
        }, 1500);
      } else {
        set(this, 'isTransitioning', false);
      }
    },
  },
});
