import Route from '@ember/routing/route';

export default class FrMessageDuPresidentDuConseilRedirectRoute extends Route {
  beforeModel() {
    this.transitionTo('fr.message-du-president-du-conseil');
  }
}
