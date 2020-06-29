import ENV from 'annual-report-template/config/environment';
import GoogleAnalyticsMixin from 'annual-report-template/mixins/google-analytics';
import ResetScrollMixin from 'annual-report-template/mixins/reset-scroll';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend(GoogleAnalyticsMixin, ResetScrollMixin, {
  assetLoader: service(),
  backgroundImage: service(),
  headData: service(),
  intl: service(),
  routeOrder: service(),

  beforeModel() {
    if (!get(this, 'assetLoader.assetsLoaded')) {
      return this.assetLoader.waitForAssets();
    }
    return true;
  },

  afterModel() {
    const title = `${this.intl.t('braidingLegalOrders.title')} | ${this.intl.t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', this.intl.t('braidingLegalOrders.description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}braiding-legal-orders/`);
    const backgroundImage = this.backgroundImage.getSlideBackgroundImage('braiding-legal-orders');
    if (backgroundImage && backgroundImage.ogUrl) {
      set(this, 'headData.image', backgroundImage.ogUrl);
    }

    // Load next route background
    const nextRoute = this.routeOrder.getNextRoute('braiding-legal-orders');
    if (nextRoute) {
      const { fullSizeUrl } = this.backgroundImage.getSlideBackgroundImage(nextRoute);
      if (fullSizeUrl) {
        this.assetLoader.loadAsset(fullSizeUrl);
      }
    }
  },
});
