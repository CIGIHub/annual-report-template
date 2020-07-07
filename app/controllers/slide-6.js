import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('slide-6');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-canada-india-track-15-dialogue-innovation-growth-and-prosperity',
      title: this.intl.t('slide6.link1'),
      type: this.intl.t('video'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/series/canada-india-track-15-dialogue',
      title: this.intl.t('slide6.link2'),
      type: this.intl.t('paperSeries'),
    }, {
      icon: 'comment-alt-lines',
      link: '',
      title: this.intl.t('slide6.link3'),
      type: this.intl.t('article'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('slide6.paragraph1'),
      this.intl.t('slide6.paragraph2'),
      this.intl.t('slide6.paragraph3'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('slide6.title');
  }),

  videoLink: computed('backgroundImage.imageHost', function() {
    return `${this.backgroundImage.imageHost}5ab09e92875a54ff/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.mp4`;
  }),
});
