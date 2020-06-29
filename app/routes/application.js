import ENV from 'annual-report-template/config/environment';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  backgroundImage: service(),
  headData: service(),
  intl: service(),

  beforeModel(...args) {
    this._super(args);
    return this.intl.setLocale('en-ca');
  },

  afterModel() {
    set(this, 'headData.title', this.intl.t('title'));
    set(this, 'headData.siteName', this.intl.t('title'));
    set(this, 'headData.description', this.intl.t('description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}`);
    set(this, 'headData.image', get(this, 'backgroundImage.defaultBackground.ogUrl'));
  },
});
