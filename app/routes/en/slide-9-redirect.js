import Route from '@ember/routing/route';

export default class EnSlide9RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-9');
  }
}
