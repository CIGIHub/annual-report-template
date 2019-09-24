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

  beforeModel() {
    if (!get(this, 'assetLoader.assetsLoaded')) {
      return get(this, 'assetLoader').waitForAssets();
    }
    return true;
  },

  afterModel() {
    const title = `${get(this, 'intl').t('governingTheDigitalPublicSphere.title')} | ${get(this, 'intl').t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', get(this, 'intl').t('governingTheDigitalPublicSphere.description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}governing-the-digital-public-sphere/`);
    const backgroundImage = get(this, 'backgroundImage').getSlideBackgroundImage('governing-the-digital-public-sphere');
    if (backgroundImage && backgroundImage.fullSizeUrl) {
      set(this, 'headData.image', backgroundImage.fullSizeUrl);
    }
  },
});
