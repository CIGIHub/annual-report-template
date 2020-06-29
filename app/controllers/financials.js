import ENV from 'annual-report-template/config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  intl: service(),
  router: service(),

  rootURL: ENV.rootURL,

  menuLinks: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    const menuLinks = [{
      current: currentRouteName === 'financials.auditors-report',
      linkTo: 'financials.auditors-report',
      title: this.intl.t('financials.auditorsReport.title'),
    }, {
      current: currentRouteName === 'financials.balance-sheet',
      linkTo: 'financials.balance-sheet',
      title: this.intl.t('financials.balanceSheet.title'),
    }, {
      current: currentRouteName === 'financials.revenue-and-expenses',
      linkTo: 'financials.revenue-and-expenses',
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
