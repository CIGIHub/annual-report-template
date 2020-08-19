import Route from '@ember/routing/route';

export default class FrSlide3RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-3');
  }
}
