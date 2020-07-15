import Controller from '@ember/controller';
import {
  computed,
  observer,
  set,
} from '@ember/object';
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
      'en.table-of-contents',
      'fr.table-des-matieres',
      'thank-you',
    ].includes(currentRouteName)) {
      return htmlSafe('background-color: #000;');
    }
    if ([
      'en.chairs-message',
      'en.financials.auditors-report',
      'en.outputs-and-activities',
      'en.presidents-message',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'fr.finances.auditors-report',
      'fr.message-du-directeur-executif',
      'fr.message-du-president-du-conseil',
      'fr.outputs-and-activities',
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
  bounceScrollArrowDown: computed('router.currentRouteName', function() {
    return ['index', 'en.index', 'fr.index'].includes(this.router.currentRouteName);
  }),

  hideMobileOverlay: computed('router.currentRouteName', function() {
    return [
      'en.chairs-message',
      'en.financials.auditors-report',
      'en.outputs-and-activities',
      'en.presidents-message',
      'en.table-of-contents',
      'fr.finances.auditors-reports',
      'fr.message-du-directeur-executif',
      'fr.message-du-president-du-conseil',
      'fr.outputs-and-activities',
      'fr.table-des-matieres',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
    ].includes(this.router.currentRouteName);
  }),

  lightBackground: computed('router.currentRouteName', 'lightbox.{showLightbox,subType}', function() {
    const lightBackgroundRoute = [
      'en.chairs-message',
      'en.financials.auditors-report',
      'en.outputs-and-activities',
      'en.presidents-message',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      'fr.finances.auditors-report',
      'fr.message-du-directeur-executif',
      'fr.message-du-president-du-conseil',
      'fr.outputs-and-activities',
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
      'en.index',
      'en.timeline',
      'fr.index',
      'fr.timeline',
      'thank-you',
    ].includes(this.router.currentRouteName);
  }),

  showDotNav: computed('dotNavShown', 'router.currentRouteName', function() {
    const onContentSlide = ![
      'index',
      'en.index',
      'en.table-of-contents',
      'fr.index',
      'fr.table-des-matieres',
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

  translateRoute: computed('router.currentRouteName', function() {
    const routeMapping = {
      'en.chairs-message': 'fr.message-du-president-du-conseil',
      'en.financials.auditors-report': 'fr.finances.auditors-report',
      'en.index': 'fr.index',
      'en.outputs-and-activities': 'fr.outputs-and-activities',
      'en.presidents-message': 'fr.message-du-directeur-executif',
      'en.slide-1': 'fr.slide-1',
      'en.slide-2': 'fr.slide-2',
      'en.slide-3': 'fr.slide-3',
      'en.slide-4': 'fr.slide-4',
      'en.slide-5': 'fr.slide-5',
      'en.slide-6': 'fr.slide-6',
      'en.slide-7': 'fr.slide-7',
      'en.slide-8': 'fr.slide-8',
      'en.slide-9': 'fr.slide-9',
      'en.slide-10': 'fr.slide-10',
      'en.slide-11': 'fr.slide-11',
      'en.slide-12': 'fr.slide-12',
      'en.slide-13': 'fr.slide-13',
      'en.table-of-contents': 'fr.table-des-matieres',
      'en.timeline': 'fr.timeline',
      'fr.finances.auditors-report': 'en.financials.auditors-report',
      'fr.index': 'en.index',
      'fr.message-du-directeur-executif': 'en.presidents-message',
      'fr.message-du-president-du-conseil': 'en.chairs-message',
      'fr.outputs-and-activities': 'en.outputs-and-activities',
      'fr.slide-1': 'en.slide-1',
      'fr.slide-2': 'en.slide-2',
      'fr.slide-3': 'en.slide-3',
      'fr.slide-4': 'en.slide-4',
      'fr.slide-5': 'en.slide-5',
      'fr.slide-6': 'en.slide-6',
      'fr.slide-7': 'en.slide-7',
      'fr.slide-8': 'en.slide-8',
      'fr.slide-9': 'en.slide-9',
      'fr.slide-10': 'en.slide-10',
      'fr.slide-11': 'en.slide-11',
      'fr.slide-12': 'en.slide-12',
      'fr.slide-13': 'en.slide-13',
      'fr.table-des-matieres': 'en.table-of-contents',
      'fr.timeline': 'en.timeline',
    };
    if (routeMapping[this.router.currentRouteName]) {
      return routeMapping[this.router.currentRouteName];
    }
    return this.router.currentRouteName;
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
