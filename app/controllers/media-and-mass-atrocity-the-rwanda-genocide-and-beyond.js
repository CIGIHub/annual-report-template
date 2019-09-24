import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { thumbnailUrl, fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/reporting-atrocity',
      title: get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.link2'),
      type: get(this, 'intl').t('article'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-reporting-atrocity',
      title: get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.link3'),
      type: get(this, 'intl').t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.paragraph1'),
      get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.paragraph2'),
      get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.paragraph3'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('mediaAndMassAtrocityTheRwandaGenocideAndBeyond.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}41bbb41e5e574965/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.mp4`;
  }),
});
