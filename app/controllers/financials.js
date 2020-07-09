import ENV from 'annual-report-template/config/environment';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  intl: service(),
  router: service(),

  rootURL: ENV.rootURL,

  menuLinks: computed('router.currentRouteName', function() {
    const currentRouteName = this.router.currentRouteName;
    const menuLinks = [{
      current: currentRouteName === 'financials.auditors-report',
      linkTo: 'financials.auditors-report',
      title: this.intl.t('financials.auditorsReport.title'),
    }, {
      current: currentRouteName === 'financials.summarized-statement-of-financial-position',
      linkTo: 'financials.summarized-statement-of-financial-position',
      title: this.intl.t('financials.balanceSheet.title'),
    }, {
      current: currentRouteName === 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      linkTo: 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
      title: this.intl.t('financials.revenueAndExpenses.title'),
    }, {
      current: currentRouteName === 'financials.notes',
      last: true,
      linkTo: 'financials.notes',
      title: this.intl.t('financials.notes.title'),
    }];

    return menuLinks;
  }),
});
