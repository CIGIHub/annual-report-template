import ENV from 'annual-report-template/config/environment';
import Component from '@glimmer/component';

export default class SlidesFinancialsAuditorsReportComponent extends Component {
  get host() {
    let host = 'https://www.cigionline.org';
    if (ENV.environment !== 'production' || ENV.staging) {
      host = 'https://staging.cigionline.org';
    }
    return host;
  }
}
