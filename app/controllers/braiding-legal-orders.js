import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('braiding-legal-orders');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('braidingLegalOrders.paragraph1'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('braidingLegalOrders.title');
  }),
});
