import Route from '@ember/routing/route';

export default class EnSlide3RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-3');
  }
}
