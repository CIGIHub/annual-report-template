import Route from '@ember/routing/route';

export default class EnTableOfContentsRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.table-of-contents');
  }
}
