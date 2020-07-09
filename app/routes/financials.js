import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    if (![
      'financials.auditors-report',
      'financials.notes',
      'financials.summarized-statement-of-financial-position',
      'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
    ].includes(transition.targetName)) {
      this.replaceWith('financials.auditors-report');
    }
  },
});
