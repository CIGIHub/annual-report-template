import { computed } from '@ember/object';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  intl: service(),

  routes: computed('intl.locale', function() {
    const isFrenchLocale = this.intl && this.intl.locale && this.intl.locale[0] === 'fr-ca';

    return [{
      number: '00',
      route: isFrenchLocale ? 'fr.index' : 'en.index',
      subRoutes: [],
      title: 'home',
    }, {
      number: '00',
      route: isFrenchLocale ? 'fr.table-des-matieres' : 'en.table-of-contents',
      subRoutes: [],
      title: 'tableOfContents.title',
    }, {
      number: '01',
      route: isFrenchLocale ? 'fr.message-du-president-du-conseil' : 'en.chairs-message',
      subRoutes: [],
      title: 'chairsMessage.title',
    }, {
      number: '02',
      route: isFrenchLocale ? 'fr.message-du-directeur-executif' : 'en.presidents-message',
      subRoutes: [],
      title: 'presidentsMessage.title',
    }, {
      number: '03',
      route: isFrenchLocale ? 'fr.slide-1' : 'en.slide-1',
      subRoutes: [],
      title: 'slide1.title',
    }, {
      number: '04',
      route: isFrenchLocale ? 'fr.slide-2' : 'en.slide-2',
      subRoutes: [],
      title: 'slide2.title',
    }, {
      number: '05',
      route: isFrenchLocale ? 'fr.slide-3' : 'en.slide-3',
      subRoutes: [],
      title: 'slide3.title',
    }, {
      number: '06',
      route: isFrenchLocale ? 'fr.slide-4' : 'en.slide-4',
      subRoutes: [],
      title: 'slide4.title',
    }, {
      number: '07',
      route: isFrenchLocale ? 'fr.slide-5' : 'en.slide-5',
      subRoutes: [],
      title: 'slide5.title',
    }, {
      number: '08',
      route: isFrenchLocale ? 'fr.slide-6' : 'en.slide-6',
      subRoutes: [],
      title: 'slide6.title',
    }, {
      number: '09',
      route: isFrenchLocale ? 'fr.slide-7' : 'en.slide-7',
      subRoutes: [],
      title: 'slide7.title',
    }, {
      number: '10',
      route: 'slide-8',
      subRoutes: [],
      title: 'slide8.title',
    }, {
      number: '11',
      route: 'slide-9',
      subRoutes: [],
      title: 'slide9.title',
    }, {
      number: '12',
      route: 'slide-10',
      subRoutes: [],
      title: 'slide10.title',
    }, {
      number: '13',
      route: 'slide-11',
      subRoutes: [],
      title: 'slide11.title',
    }, {
      number: '14',
      route: 'slide-12',
      subRoutes: [],
      title: 'slide12.title',
    }, {
      number: '15',
      route: 'slide-13',
      subRoutes: [],
      title: 'slide13.title',
    }, {
      number: '16',
      route: 'outputs-and-activities',
      subRoutes: [],
      title: 'outputsAndActivities.title',
    }, {
      number: '17',
      route: 'timeline',
      subRoutes: [],
      title: 'timeline.title',
    }, {
      number: '18',
      route: 'financials.auditors-report',
      subRoutes: [
        'financials.notes',
        'financials.summarized-statement-of-financial-position',
        'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      ],
      title: 'financials.title',
    }, {
      number: '19',
      route: 'thank-you',
      subRoutes: [],
      title: 'thankYou.title',
    }];
  }),

  firstRoute: computed('routes.[]', function() {
    return this.routes[0].route;
  }),

  firstSubRoutes: computed('routes.[]', function() {
    return this.routes[0].subRoutes;
  }),

  lastRoute: computed('routes.[]', function() {
    return this.routes[this.routes.length - 1].route;
  }),

  lastSubRoutes: computed('routes.[]', function() {
    return this.routes[this.routes.length - 1].subRoutes;
  }),

  getNextRoute(currentRouteName) {
    let ind = -1;
    this.routes.forEach((route, index) => {
      if (currentRouteName === route.route
          || route.subRoutes.includes(currentRouteName)) {
        ind = index;
      }
    });
    ind += 1;
    if (ind > 0 && ind < this.routes.length) {
      return this.routes[ind].route;
    }
    return null;
  },

  getPreviousRoute(currentRouteName) {
    let ind = 0;
    this.routes.forEach((route, index) => {
      if (currentRouteName === route.route
          || route.subRoutes.includes(currentRouteName)) {
        ind = index;
      }
    });
    ind -= 1;
    if (ind >= 0) {
      return this.routes[ind].route;
    }
    return null;
  },
});
