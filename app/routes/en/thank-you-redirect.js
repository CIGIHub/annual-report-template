import Route from '@ember/routing/route';

export default class EnThankYouRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.thank-you');
  }
}
