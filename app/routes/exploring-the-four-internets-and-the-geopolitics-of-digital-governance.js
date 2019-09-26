import ENV from 'annual-report-2019/config/environment';
import GoogleAnalyticsMixin from 'annual-report-2019/mixins/google-analytics';
import ResetScrollMixin from 'annual-report-2019/mixins/reset-scroll';
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
    const title = `${get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.title')} | ${get(this, 'intl').t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}exploring-the-four-internets-and-the-geopolitics-of-digital-governance/`);
    const backgroundImage = get(this, 'backgroundImage').getSlideBackgroundImage('exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    if (backgroundImage && backgroundImage.fullSizeUrl) {
      set(this, 'headData.image', backgroundImage.fullSizeUrl);
    }

    // Load next route background
    const nextRoute = get(this, 'routeOrder').getNextRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    if (nextRoute) {
      const { fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage(nextRoute);
      if (fullSizeUrl) {
        get(this, 'assetLoader').loadAsset(fullSizeUrl);
      }
    }
  },
});
