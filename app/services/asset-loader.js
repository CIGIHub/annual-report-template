import ENV from 'annual-report-2019/config/environment';
import { computed, get, set } from '@ember/object';
import { later } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { all } from 'rsvp';

export default Service.extend({
  backgroundImage: service(),
  fastboot: service(),

  assetsLoaded: false,
  promises: [],
  resolvedAssetCount: 0,

  percentComplete: computed('resolvedAssetCount', 'totalAssetCount', function() {
    return Math.ceil((get(this, 'resolvedAssetCount') / get(this, 'totalAssetCount')) * 100);
  }),

  totalAssetCount: computed('promises[]', function() {
    return get(this, 'promises').length || 1;
  }),

  init(...args) {
    this._super(args);
    if (!get(this, 'fastboot.isFastBoot') && ENV.environment !== 'test') {
      get(this, 'backgroundImage').getAllBlurImages().forEach((blurImage) => {
        get(this, 'promises').push(this._loadAsset(blurImage));
      });
      nodes.forEach((node) => {
        const { thumbnailUrl } = get(this, 'backgroundImage').getNodeBackgroundImage(node.id);
        get(this, 'promises').push(this._loadAsset(thumbnailUrl));
      });
    }
  },

  waitForAssets() {
    const _this = this;
    return all(get(this, 'promises')).then(() => new Promise((resolve) => {
      later(this, () => resolve(), 150);
    })).then(() => {
      set(_this, 'assetsLoaded', true);
    });
  },

  _loadAsset(url) {
    const _this = this;
    return new Promise((resolve) => {
      const img = new Image();

      const finallyFn = () => {
        set(_this, 'resolvedAssetCount', (get(_this, 'resolvedAssetCount') + 1));
        return resolve();
      };

      img.onload = finallyFn;
      img.onerror = finallyFn;

      img.src = url;
    });
  },
});
