import Route from '@ember/routing/route';

export default class FrFinancialsRapportDesVerificateursRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.finances.rapport-des-verificateurs');
  }
}
