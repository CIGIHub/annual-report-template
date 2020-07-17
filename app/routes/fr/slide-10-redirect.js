import Route from '@ember/routing/route';

export default class FrSlide10RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-10');
  }
}
