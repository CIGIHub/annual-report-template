import ENV from 'annual-report-template/config/environment';
import GoogleAnalyticsMixin from 'annual-report-template/mixins/google-analytics';
import ResetScrollMixin from 'annual-report-template/mixins/reset-scroll';
import { set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend(GoogleAnalyticsMixin, ResetScrollMixin, {
  assetLoader: service(),
  backgroundImage: service(),
  headData: service(),
  intl: service(),
  routeOrder: service(),

  beforeModel() {
    this.intl.setLocale('fr-ca');
    if (!this.assetLoader.assetsLoaded) {
      return this.assetLoader.waitForAssets();
    }
    return true;
  },

  afterModel() {
    const title = `${this.intl.t('chairsMessage.title')} | ${this.intl.t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', this.intl.t('description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}fr/message-du-president-du-conseil/`);
    const backgroundImage = this.backgroundImage.getSlideBackgroundImage('fr.message-du-president-du-conseil');
    if (backgroundImage && backgroundImage.ogUrl) {
      set(this, 'headData.image', backgroundImage.ogUrl);
    }
    set(this, 'headData.siteName', this.intl.t('title'));
    set(this, 'headData.locale', 'fr_CA');

    // Load next route background
    const nextRoute = this.routeOrder.getNextRoute('fr.message-du-president-du-conseil');
    if (nextRoute) {
      const { fullSizeUrl } = this.backgroundImage.getSlideBackgroundImage(nextRoute);
      if (fullSizeUrl) {
        this.assetLoader.loadAsset(fullSizeUrl);
      }
    }
  },
});
