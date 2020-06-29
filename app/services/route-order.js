import { computed } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  routes: [{
    route: 'index',
    subRoutes: [],
    title: 'home',
  }, {
    route: 'table-of-contents',
    subRoutes: [],
    title: 'tableOfContents.title',
  }, {
    route: 'chairs-message',
    subRoutes: [],
    title: 'chairsMessage.title',
  }, {
    route: 'presidents-message',
    subRoutes: [],
    title: 'presidentsMessage.title',
  }, {
    route: 'building-closer-ties-between-canada-and-india',
    subRoutes: [],
    title: 'buildingCloserTiesBetweenCanadaAndIndia.title',
  }, {
    route: 'a-clarion-call-for-protecting-the-worlds-refugees',
    subRoutes: [],
    title: 'aClarionCallForProtectingTheWorldsRefugees.title',
  }, {
    route: 'multilateral-institutions-mark-a-tumultuous-year',
    subRoutes: [],
    title: 'multilateralInstitutionsMarkATumultuousYear.title',
  }, {
    route: 'governing-cyberspace-during-a-crisis-in-trust',
    subRoutes: [],
    title: 'governingCyberspaceDuringACrisisInTrust.title',
  }, {
    route: 'governing-the-digital-public-sphere',
    subRoutes: [],
    title: 'governingTheDigitalPublicSphere.title',
  }, {
    route: 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
    subRoutes: [],
    title: 'mediaAndMassAtrocityTheRwandaGenocideAndBeyond.title',
  }, {
    route: 'braiding-legal-orders',
    subRoutes: [],
    title: 'braidingLegalOrders.title',
  }, {
    route: 'models-for-data-governance',
    subRoutes: [],
    title: 'modelsForDataGovernance.title',
  }, {
    route: 'protecting-elections-from-foreign-interference',
    subRoutes: [],
    title: 'protectingElectionsFromForeignInterference.title',
  }, {
    route: 'a-bretton-woods-moment-for-the-digital-age',
    subRoutes: [],
    title: 'aBrettonWoodsMomentForTheDigitalAge.title',
  }, {
    route: 'informing-the-debate-around-internet-security-and-trust',
    subRoutes: [],
    title: 'informingTheDebateAroundInternetSecurityAndTrust.title',
  }, {
    route: 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
    subRoutes: [],
    title: 'exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.title',
  }, {
    route: 'curbing-cultural-appropriation-through-intellectual-property-law',
    subRoutes: [],
    title: 'curbingCulturalAppropriationThroughIntellectualPropertyLaw.title',
  }, {
    route: 'outputs-and-activities',
    subRoutes: [],
    title: 'outputsAndActivities.title',
  }, {
    route: 'timeline',
    subRoutes: [],
    title: 'timeline.title',
  }, {
    route: 'financials.auditors-report',
    subRoutes: [
      'financials.balance-sheet',
      'financials.notes',
      'financials.revenue-and-expenses',
    ],
    title: 'financials.title',
  }, {
    route: 'thank-you',
    subRoutes: [],
    title: 'thankYou.title',
  }],

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
    let ind = this.routes.findIndex((route) => currentRouteName === route.route
      || route.subRoutes.includes(currentRouteName));
    ind += 1;
    if (ind > 0 && ind < this.routes.length) {
      return this.routes[ind].route;
    }
    return null;
  },

  getPreviousRoute(currentRouteName) {
    let ind = this.routes.findIndex((route) => currentRouteName === route.route
      || route.subRoutes.includes(currentRouteName));
    ind -= 1;
    if (ind >= 0) {
      return this.routes[ind].route;
    }
    return null;
  },
});
