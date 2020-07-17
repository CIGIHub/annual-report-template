import Route from '@ember/routing/route';

export default class EnChairsMessageRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.chairs-message');
  }
}
