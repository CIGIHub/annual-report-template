import Route from '@ember/routing/route';

export default class EnFinancialsRoute extends Route {
  beforeModel(transition) {
    if (![
      'en.financials.auditors-report',
      'en.financials.notes',
      'en.financials.summarized-statement-of-financial-position',
      'en.financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
    ].includes(transition.targetName)) {
      this.replaceWith('en.financials.auditors-report');
    }
  }
}
