import Route from '@ember/routing/route';

export default class FrSlide8RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-8');
  }
}
