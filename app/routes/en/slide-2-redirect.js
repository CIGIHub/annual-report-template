import Route from '@ember/routing/route';

export default class EnSlide2RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.slide-2');
  }
}
