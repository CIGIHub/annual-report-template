import Route from '@ember/routing/route';

export default class EnSlide13RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-13');
  }
}
