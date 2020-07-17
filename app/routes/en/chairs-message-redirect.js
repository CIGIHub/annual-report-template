import Route from '@ember/routing/route';

export default class EnChairsMessageRedirectRoute extends Route {
  beforeModel() {
    this.transitionTo('en.chairs-message');
  }
}
