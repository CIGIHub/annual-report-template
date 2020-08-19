import Route from '@ember/routing/route';

export default class EnSlide12RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-12');
  }
}
