import ENV from 'annual-report-2019/config/environment';
import ResetScrollMixin from 'annual-report-2019/mixins/reset-scroll';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend(ResetScrollMixin, {
  assetLoader: service(),
  headData: service(),
  intl: service(),

  queryParams: {
    acknowledgements: {
      refreshModel: true,
    },
  },

  beforeModel() {
    if (!get(this, 'assetLoader.assetsLoaded')) {
      return get(this, 'assetLoader').waitForAssets();
    }
    return true;
  },

  afterModel() {
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}table-of-contents/`);
  },
});
