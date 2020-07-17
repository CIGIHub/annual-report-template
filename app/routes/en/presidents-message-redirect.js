import Route from '@ember/routing/route';

export default class EnPresidentsMessageRedirectRoute extends Route {
  beforeModel() {
    this.transitionTo('en.presidents-message');
  }
}
