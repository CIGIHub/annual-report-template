import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('a-bretton-woods-moment-for-the-digital-age');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/jim-balsillie-imf-statistical-forum-and-q-christine-lagarde',
      title: get(this, 'intl').t('aBrettonWoodsMomentForTheDigitalAge.link1'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/rethinking-policy-digital-world',
      title: get(this, 'intl').t('aBrettonWoodsMomentForTheDigitalAge.link2'),
      type: get(this, 'intl').t('publication'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('aBrettonWoodsMomentForTheDigitalAge.title');
  }),
});
