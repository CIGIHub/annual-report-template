import Route from '@ember/routing/route';

export default class EnFinancesSummarizedStatementOfFinancialPositionRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.financials.summarized-statement-of-financial-position');
  }
}
