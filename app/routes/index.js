import ResetScrollMixin from 'annual-report-2019/mixins/reset-scroll';
import { get } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend(ResetScrollMixin, {
  assetLoader: service(),

  beforeModel() {
    if (!get(this, 'assetLoader.assetsLoaded')) {
      return get(this, 'assetLoader').waitForAssets();
    }
    return true;
  },
});
