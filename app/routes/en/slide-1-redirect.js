import Route from '@ember/routing/route';

export default class EnSlide1RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-1');
  }
}
