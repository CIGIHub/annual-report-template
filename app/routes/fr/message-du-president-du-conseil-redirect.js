import Route from '@ember/routing/route';

export default class FrMessageDuPresidentDuConseilRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.message-du-president-du-conseil');
  }
}
