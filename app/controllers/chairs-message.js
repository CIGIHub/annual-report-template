import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),

  backgroundStyle: computed(function() {
    const { blurUrl, fullUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('chairs-message');
    return htmlSafe(`background-image: url('${fullUrl}'), url('${blurUrl}');`);
  }),
});
