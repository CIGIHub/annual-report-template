import Route from '@ember/routing/route';

export default class EnSlide6RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-6');
  }
}
