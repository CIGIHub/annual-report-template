import Route from '@ember/routing/route';

export default
class FrFinancialsSommaireDesRecettesEtDesDepensesEtEvolutionDuSoldeDuFondsRedirectRoute
  extends Route {
  beforeModel() {
    this.replaceWith('fr.finances.sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds');
  }
}
