import Route from '@ember/routing/route';

export default class FrPublicationsEtActivitesRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.publications-et-activites');
  }
}
