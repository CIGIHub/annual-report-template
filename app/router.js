import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('chairs-message');
  this.route('en', function() {
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
    this.route('table-des-matieres');
  });
  this.route('outputs-and-activities');
  this.route('presidents-message');
  this.route('slide-1', { path: '/slide1' });
  this.route('slide-2', { path: '/slide2' });
  this.route('slide-3', { path: '/slide3' });
  this.route('slide-4', { path: '/slide4' });
  this.route('slide-5', { path: '/slide5' });
  this.route('slide-6', { path: '/slide6' });
  this.route('slide-7', { path: '/slide7' });
  this.route('slide-8', { path: '/slide8' });
  this.route('slide-9', { path: '/slide9' });
  this.route('slide-10', { path: '/slide10' });
  this.route('slide-11', { path: '/slide11' });
  this.route('slide-12', { path: '/slide12' });
  this.route('slide-13', { path: '/slide13' });
  this.route('table-of-contents');
  this.route('thank-you');
  this.route('timeline');
  this.route('404', { path: '/*path' });
});
