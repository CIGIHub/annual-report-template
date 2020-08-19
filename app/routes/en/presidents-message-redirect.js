import Route from '@ember/routing/route';

export default class EnPresidentsMessageRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.presidents-message');
  }
}
