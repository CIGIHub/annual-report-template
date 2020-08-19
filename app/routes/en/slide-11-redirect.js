import Route from '@ember/routing/route';

export default class EnSlide11RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-11');
  }
}
