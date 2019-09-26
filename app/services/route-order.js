import { computed, get } from '@ember/object';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  router: service(),

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
    return get(this, 'routes')[0].route;
  }),

  firstSubRoutes: computed('routes.[]', function() {
    return get(this, 'routes')[0].subRoutes;
  }),

  lastRoute: computed('routes.[]', function() {
    return get(this, 'routes')[get(this, 'routes').length - 1].route;
  }),

  lastSubRoutes: computed('routes.[]', function() {
    return get(this, 'routes')[get(this, 'routes').length - 1].subRoutes;
  }),

  nextRoute: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    let ind = get(this, 'routes').findIndex((route) => currentRouteName === route.route
      || route.subRoutes.includes(currentRouteName));
    ind += 1;
    if (ind > 0 && ind < get(this, 'routes.length')) {
      return get(this, 'routes')[ind].route;
    }
    return null;
  }),

  previousRoute: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    let ind = get(this, 'routes').findIndex((route) => currentRouteName === route.route
      || route.subRoutes.includes(currentRouteName));
    ind -= 1;
    if (ind >= 0) {
      return get(this, 'routes')[ind].route;
    }
    return null;
  }),
});
