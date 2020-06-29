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
    if (!this.assetLoader.assetsLoaded) {
      return this.assetLoader.waitForAssets();
    }
    return true;
  },

  afterModel() {
    const title = `${this.intl.t('aBrettonWoodsMomentForTheDigitalAge.title')} | ${this.intl.t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', this.intl.t('aBrettonWoodsMomentForTheDigitalAge.description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}a-bretton-woods-moment-for-the-digital-age/`);
    const backgroundImage = this.backgroundImage.getSlideBackgroundImage('a-bretton-woods-moment-for-the-digital-age');
    if (backgroundImage && backgroundImage.ogUrl) {
      set(this, 'headData.image', backgroundImage.ogUrl);
    }

    // Load next route background
    const nextRoute = this.routeOrder.getNextRoute('a-bretton-woods-moment-for-the-digital-age');
    if (nextRoute) {
      const { fullSizeUrl } = this.backgroundImage.getSlideBackgroundImage(nextRoute);
      if (fullSizeUrl) {
        this.assetLoader.loadAsset(fullSizeUrl);
      }
    }
  },
});
