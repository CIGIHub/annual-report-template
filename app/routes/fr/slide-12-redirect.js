import Route from '@ember/routing/route';

export default class FrSlide12RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-12');
  }
}
