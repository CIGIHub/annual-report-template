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
      return get(this, 'assetLoader').waitForAssets();
    }
    return true;
  },

  afterModel() {
    const title = `${get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.title')} | ${get(this, 'intl').t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}informing-the-debate-around-internet-security-and-trust/`);
    const backgroundImage = get(this, 'backgroundImage').getSlideBackgroundImage('informing-the-debate-around-internet-security-and-trust');
    if (backgroundImage && backgroundImage.ogUrl) {
      set(this, 'headData.image', backgroundImage.ogUrl);
    }

    // Load next route background
    const nextRoute = get(this, 'routeOrder').getNextRoute('informing-the-debate-around-internet-security-and-trust');
    if (nextRoute) {
      const { fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage(nextRoute);
      if (fullSizeUrl) {
        get(this, 'assetLoader').loadAsset(fullSizeUrl);
      }
    }
  },
});
