import Route from '@ember/routing/route';

export default class FrMessageDuDirecteurExecutifRedirectRoute extends Route {
  beforeModel() {
    this.transitionTo('fr.message-du-directeur-executif');
  }
}
