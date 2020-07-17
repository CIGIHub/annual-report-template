import Route from '@ember/routing/route';

export default class FrSlide7RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-7');
  }
}
