import Route from '@ember/routing/route';

export default class FrSlide1RedirectRoute extends Route {
  beforeModel() {
    this.transitionTo('fr.slide-1');
  }
}
