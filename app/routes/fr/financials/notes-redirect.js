import Route from '@ember/routing/route';

export default class FrFinancialsNotesRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.finances.notes');
  }
}
