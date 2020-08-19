import Route from '@ember/routing/route';

export default class EnSlide8RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-8');
  }
}
