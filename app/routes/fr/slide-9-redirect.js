import Route from '@ember/routing/route';

export default class FrSlide9RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-9');
  }
}
