import Route from '@ember/routing/route';

export default class FrSlide6RedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.slide-6');
  }
}
