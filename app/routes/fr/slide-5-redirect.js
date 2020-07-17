import Route from '@ember/routing/route';

export default class FrSlide5RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-5');
  }
}
