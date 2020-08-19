import Route from '@ember/routing/route';

export default class FrSlide4RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-4');
  }
}
