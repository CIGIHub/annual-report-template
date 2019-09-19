import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('building-closer-ties-between-canada-and-india');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-canada-india-track-15-dialogue-innovation-growth-and-prosperity',
      title: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.link1'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/series/canada-india-track-15-dialogue',
      title: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.link2'),
      type: get(this, 'intl').t('publications'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/activity/canada-india-track-15-dialogue-innovation-growth-and-prosperity',
      title: get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.link3'),
      type: get(this, 'intl').t('resource'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.paragraph1'),
      get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.paragraph2'),
      get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.paragraph3'),
      get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.paragraph4'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.title');
  }),
});
