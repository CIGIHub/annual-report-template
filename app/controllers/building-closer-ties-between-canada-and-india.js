import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('building-closer-ties-between-canada-and-india');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-canada-india-track-15-dialogue-innovation-growth-and-prosperity',
      title: this.intl.t('buildingCloserTiesBetweenCanadaAndIndia.link1'),
      type: this.intl.t('video'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/series/canada-india-track-15-dialogue',
      title: this.intl.t('buildingCloserTiesBetweenCanadaAndIndia.link2'),
      type: this.intl.t('paperSeries'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/activity/canada-india-track-15-dialogue-innovation-growth-and-prosperity',
      title: this.intl.t('buildingCloserTiesBetweenCanadaAndIndia.link3'),
      type: this.intl.t('resource'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('buildingCloserTiesBetweenCanadaAndIndia.paragraph1'),
      this.intl.t('buildingCloserTiesBetweenCanadaAndIndia.paragraph2'),
      this.intl.t('buildingCloserTiesBetweenCanadaAndIndia.paragraph3'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('buildingCloserTiesBetweenCanadaAndIndia.title');
  }),
});
