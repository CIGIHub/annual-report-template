import Route from '@ember/routing/route';

export default class FrTableDesMatieresRedirectRoute extends Route {
  beforeModel() {
    this.transitionTo('fr.table-des-matieres');
  }
}
