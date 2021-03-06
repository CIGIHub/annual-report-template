import ENV from 'annual-report-template/config/environment';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class FrFinancesController extends Controller {
  @service intl;
  @service router;

  rootURL = ENV.rootURL;

  get menuLinks() {
    const currentRouteName = this.router.currentRouteName;
    const menuLinks = [{
      current: currentRouteName === 'fr.finances.rapport-des-verificateurs',
      linkTo: 'fr.finances.rapport-des-verificateurs',
      title: this.intl.t('financials.auditorsReport.title'),
    }, {
      current: currentRouteName === 'fr.finances.sommaire-de-la-situation-financiere',
      linkTo: 'fr.finances.sommaire-de-la-situation-financiere',
      title: this.intl.t('financials.balanceSheet.title'),
    }, {
      current: currentRouteName === 'fr.finances.sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds',
      linkTo: 'fr.finances.sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds',
      title: this.intl.t('financials.revenueAndExpenses.title'),
    }, {
      current: currentRouteName === 'fr.finances.notes',
      last: true,
      linkTo: 'fr.finances.notes',
      title: this.intl.t('financials.notes.title'),
    }];

    return menuLinks;
  }
}
