import ENV from 'annual-report-2019/config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('governing-cyberspace-during-a-crisis-in-trust');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/cyberspace',
      title: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.link1'),
      type: get(this, 'intl').t('series'),
    }, {
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/patching-our-digital-future-unsustainable-and-dangerous',
      title: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.link2'),
      type: get(this, 'intl').t('essay'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-crime-and-policing-cyber-enabled-world',
      title: get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.link3'),
      type: get(this, 'intl').t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.paragraph1'),
      get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('governingCyberspaceDuringACrisisInTrust.title');
  }),

  videoLink: computed(function() {
    let host = 'https://www.cigionline.org';
    if (ENV.environment !== 'production' || process.env.STAGING) {
      host = 'https://staging.cigionline.org';
    }
    return `${host}/interactives/2019annualreport/static/3E6r1xmCHg1kIA7w/governing-cyberspace-during-a-crisis-in-trust.mp4`;
  }),
});
