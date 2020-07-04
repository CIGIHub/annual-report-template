import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  googleAnalytics: service(),

  actions: {
    didTransition() {
      this.googleAnalytics.sendPageView();
      return true;
    },
  },
});
