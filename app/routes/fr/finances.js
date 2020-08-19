import Route from '@ember/routing/route';

export default class FrFinancesRoute extends Route {
  beforeModel(transition) {
    if (![
      'fr.finances.notes',
      'fr.finances.rapport-des-verificateurs',
      'fr.finances.sommaire-de-la-situation-financiere',
      'fr.finances.sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds',
    ].includes(transition.targetName)) {
      this.replaceWith('fr.finances.rapport-des-verificateurs');
    }
  }
}
