import Controller from '@ember/controller';
import {
  computed,
  get,
  set,
} from '@ember/object';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';

import routeOrder from '../route-order';

export default Controller.extend({
  lightbox: service(),
  router: service(),

  dotNavShown: false,
  isTransitioning: false,

  bounceScrollArrowDown: computed('router.currentRouteName', function() {
    // Add bounce animation to down scroll arrow on home slide
    return get(this, 'router.currentRouteName') === 'index';
  }),

  lightBackground: computed('router.currentRouteName', 'lightbox.{showLightbox,subType}', function() {
    const lightBackgroundRoute = [
      'chairs-message',
      'financials.auditors-report',
      'financials.balance-sheet',
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
