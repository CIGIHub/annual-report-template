import Route from '@ember/routing/route';

export default class FrSlide2RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-2');
  }
}
