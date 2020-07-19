import Route from '@ember/routing/route';

export default class FrFinancialsAuditorsReportRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('fr.finances.auditors-report');
  }
}
