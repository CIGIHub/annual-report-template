import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('a-bretton-woods-moment-for-the-digital-age');
  this.route('chairs-message');
  this.route('curbing-cultural-appropriation-through-intellectual-property-law');
  this.route('exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
  this.route('financials', function() {
    this.route('auditors-report');
    this.route('balance-sheet');
    this.route('notes');
    this.route('revenue-and-expenses');
  });
  this.route('informing-the-debate-around-internet-security-and-trust');
  this.route('outputs-and-activities');
  this.route('presidents-message');
  this.route('protecting-elections-from-foreign-interference');
  this.route('slide-1', { path: '/slide1' });
  this.route('slide-2', { path: '/slide2' });
  this.route('slide-3', { path: '/slide3' });
  this.route('slide-4', { path: '/slide4' });
  this.route('slide-5', { path: '/slide5' });
  this.route('slide-6', { path: '/slide6' });
  this.route('slide-7', { path: '/slide7' });
  this.route('slide-8', { path: '/slide8' });
  this.route('table-of-contents');
  this.route('thank-you');
  this.route('timeline');
  this.route('404', { path: '/*path' });
});
