import Route from '@ember/routing/route';

export default
class EnFinancesSummarizedStatementOfRevenuesAndExpendituresAndChangesInFundBalancesRedirectRoute
  extends Route {
  beforeModel() {
    this.replaceWith('en.financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
  }
}
