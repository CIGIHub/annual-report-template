import Route from '@ember/routing/route';

export default class FrTableDesMatieresRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.table-des-matieres');
  }
}
