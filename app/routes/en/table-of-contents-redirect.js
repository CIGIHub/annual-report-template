import Route from '@ember/routing/route';

export default class EnTableOfContentsRedirectRoute extends Route {
  beforeModel() {
    this.transitionTo('en.table-of-contents');
  }
}
