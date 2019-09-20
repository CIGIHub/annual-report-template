import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(transition) {
    if (![
      'financials.auditors-report',
      'financials.balance-sheet',
      'financials.revenue-and-expenses',
      'financials.notes',
    ].includes(transition.targetName)) {
      this.replaceWith('financials.auditors-report');
    }
  },
});
