import Route from '@ember/routing/route';

export default class EnSlide4RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-4');
  }
}
