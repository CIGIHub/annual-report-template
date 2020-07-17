import Route from '@ember/routing/route';

export default class FrSlide11RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-11');
  }
}
