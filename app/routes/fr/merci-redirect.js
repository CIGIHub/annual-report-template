import Route from '@ember/routing/route';

export default class FrMerciRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.merci');
  }
}
