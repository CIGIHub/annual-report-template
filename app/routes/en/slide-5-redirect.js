import Route from '@ember/routing/route';

export default class EnSlide5RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-5');
  }
}
