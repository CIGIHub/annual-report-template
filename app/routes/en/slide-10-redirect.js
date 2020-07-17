import Route from '@ember/routing/route';

export default class EnSlide10RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-10');
  }
}
