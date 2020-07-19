import Route from '@ember/routing/route';

export default class EnFinancesAuditorsReportRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.financials.auditors-report');
  }
}
