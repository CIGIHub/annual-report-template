import Route from '@ember/routing/route';

export default class FrSlide13RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-13');
  }
}
