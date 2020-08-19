import Route from '@ember/routing/route';

export default class EnFinancesNotesRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.financials.notes');
  }
}
