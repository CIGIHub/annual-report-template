import Route from '@ember/routing/route';

export default class EnSlide7RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-7');
  }
}
