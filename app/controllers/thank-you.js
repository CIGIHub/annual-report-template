import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('thank-you');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'download',
      link: '',
      title: get(this, 'intl').t('thankYou.link1'),
      type: get(this, 'intl').t('download'),
    }, {
      icon: 'download',
      link: '',
      title: get(this, 'intl').t('thankYou.link2'),
      type: get(this, 'intl').t('telecharger'),
    }, {
      icon: 'envelope',
      link: '',
      title: get(this, 'intl').t('thankYou.link3'),
      type: get(this, 'intl').t('subscribe'),
    }, {
      icon: 'file-alt',
      link: '',
      title: get(this, 'intl').t('thankYou.link4'),
      type: get(this, 'intl').t('partners'),
    }];
  }),

  staffPhoto: computed(function() {
    const { fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('thank-you');
    return fullSizeUrl;
  }),
});
