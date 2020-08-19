import Route from '@ember/routing/route';

export default class FrFinancialsSommaireDeLaSituationFinanciereRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.finances.sommaire-de-la-situation-financiere');
  }
}
