import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('chairs-message');
  this.route('en', function() {
    this.route('chairs-message');
    this.route('presidents-message');
    this.route('slide-1', { path: '/slide1-en' });
    this.route('slide-2', { path: '/slide2-en' });
    this.route('slide-3', { path: '/slide3-en' });
    this.route('slide-4', { path: '/slide4-en' });
    this.route('slide-5', { path: '/slide5-en' });
    this.route('slide-6', { path: '/slide6-en' });
    this.route('slide-7', { path: '/slide7-en' });
    this.route('slide-8', { path: '/slide8-en' });
    this.route('slide-9', { path: '/slide9-en' });
    this.route('slide-10', { path: '/slide10-en' });
    this.route('table-of-contents');
  });
  this.route('financials', function() {
    this.route('auditors-report');
    this.route('notes');
    this.route('summarized-statement-of-financial-position');
    this.route(
      'summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances',
    );
  });
  this.route('fr', function() {
    this.route('message-du-directeur-executif');
    this.route('message-du-president-du-conseil');
    this.route('slide-1', { path: '/slide1-fr' });
    this.route('slide-2', { path: '/slide2-fr' });
    this.route('slide-3', { path: '/slide3-fr' });
    this.route('slide-4', { path: '/slide4-fr' });
    this.route('slide-5', { path: '/slide5-fr' });
    this.route('slide-6', { path: '/slide6-fr' });
    this.route('slide-7', { path: '/slide7-fr' });
    this.route('slide-8', { path: '/slide8-fr' });
    this.route('slide-9', { path: '/slide9-fr' });
    this.route('slide-10', { path: '/slide10-fr' });
    this.route('table-des-matieres');
  });
  this.route('outputs-and-activities');
  this.route('slide-11', { path: '/slide11' });
  this.route('slide-12', { path: '/slide12' });
  this.route('slide-13', { path: '/slide13' });
  this.route('table-of-contents');
  this.route('thank-you');
  this.route('timeline');
  this.route('404', { path: '/*path' });
});
