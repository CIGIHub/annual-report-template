import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  fastboot: service(),
  activate(...args) {
    this._super(args);
    if (!this.fastboot.isFastBoot) {
      window.scrollTo(0, 0);
    }
  },
});
