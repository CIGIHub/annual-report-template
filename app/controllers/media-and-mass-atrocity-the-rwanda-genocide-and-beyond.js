import ENV from 'annual-report-2019/config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [];
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
    let host = 'https://www.cigionline.org';
    if (ENV.environment !== 'production' || process.env.STAGING) {
      host = 'https://staging.cigionline.org';
    }
    return `${host}/interactives/2019annualreport/static/3E6r1xmCHg1kIA7w/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.mp4`;
  }),
});
