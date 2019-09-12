import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('a-bretton-woods-moment-for-the-digital-age');
  this.route('a-clarion-call-for-protecting-the-worlds-refugees');
  this.route('braiding-legal-orders');
  this.route('building-closer-ties-between-canada-and-india');
  this.route('chairs-message');
  this.route('curbing-cultural-appropriation-through-intellectual-property-law');
  this.route('exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
  this.route('financials', function() {
    this.route('auditors-report');
  });
  this.route('governing-cyberspace-during-a-crisis-in-trust');
  this.route('governing-the-digital-public-sphere');
  this.route('informing-the-debate-around-internet-security-and-trust');
  this.route('media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
  this.route('models-for-data-governance');
  this.route('outputs-and-activities');
  this.route('presidents-message');
  this.route('protecting-elections-from-foreign-interference');
  this.route('table-of-contents');
  this.route('thank-you');
  this.route('timeline');
  this.route('404', { path: '/*path' });
});

export default Router;
