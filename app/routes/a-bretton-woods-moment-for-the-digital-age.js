import ENV from 'annual-report-2019/config/environment';
import ResetScrollMixin from 'annual-report-2019/mixins/reset-scroll';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend(ResetScrollMixin, {
  assetLoader: service(),
  headData: service(),
  intl: service(),

  beforeModel() {
    if (!get(this, 'assetLoader.assetsLoaded')) {
      return get(this, 'assetLoader').waitForAssets();
    }
    return true;
  },

  afterModel() {
    const title = `${get(this, 'intl').t('aBrettonWoodsMomentForTheDigitalAge.title')} | ${get(this, 'intl').t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', get(this, 'intl').t('aBrettonWoodsMomentForTheDigitalAge.description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}a-bretton-woods-moment-for-the-digital-age/`);
  },
});
