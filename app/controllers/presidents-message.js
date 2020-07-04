import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('presidents-message');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),
});
