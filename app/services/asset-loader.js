import ENV from 'annual-report-template/config/environment';
import { computed, get, set } from '@ember/object';
import { later } from '@ember/runloop';
import Service, { inject as service } from '@ember/service';
import { all, Promise } from 'rsvp';

export default Service.extend({
  backgroundImage: service(),
  fastboot: service(),

  assetsLoaded: false,
  promises: [],
  resolvedAssetCount: 0,

  percentComplete: computed('resolvedAssetCount', 'totalAssetCount', function() {
    return Math.ceil((this.resolvedAssetCount / this.totalAssetCount) * 100);
  }),

  totalAssetCount: computed('promises.length', function() {
    return this.promises.length || 1;
  }),

  init(...args) {
    this._super(args);
    if (!this.fastboot.isFastBoot && ENV.environment !== 'test') {
      this.backgroundImage.getAllBlurImages().forEach((blurImage) => {
        this.promises.push(this.loadAsset(blurImage));
      });
      nodes.forEach((node) => {
        const { thumbnailUrl } = this.backgroundImage.getNodeBackgroundImage(node.id);
        this.promises.push(this.loadAsset(thumbnailUrl));
      });
    }
  },

  waitForAssets() {
    const _this = this;
    return all(this.promises).then(() => new Promise((resolve) => {
      later(this, () => resolve(), 150);
    })).then(() => {
      set(_this, 'assetsLoaded', true);
    });
  },

  loadAsset(url) {
    if (!this.fastboot.isFastBoot && ENV.environment !== 'test') {
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
    }
    return Promise.resolve();
  },
});
