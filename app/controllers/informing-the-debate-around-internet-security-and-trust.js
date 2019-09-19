import ENV from 'annual-report-2019/config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('informing-the-debate-around-internet-security-and-trust');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'newspaper',
      link: 'https://www.cigionline.org/articles/survey-cyber-criminals-social-media-lack-security-increasingly-fuelling-internet-distrust',
      title: get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.link1'),
      type: get(this, 'intl').t('media'),
    }, {
      icon: 'chart-bar',
      link: 'https://www.cigionline.org/internet-survey-2019',
      title: get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.link2'),
      type: get(this, 'intl').t('survey'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.paragraph1'),
      get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.paragraph2'),
      get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.paragraph3'),
      get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.paragraph4'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('informingTheDebateAroundInternetSecurityAndTrust.title');
  }),

  videoLink: computed(function() {
    let host = 'https://www.cigionline.org';
    if (ENV.environment !== 'production' || process.env.STAGING) {
      host = 'https://staging.cigionline.org';
    }
    return `${host}/interactives/2019annualreport/static/3E6r1xmCHg1kIA7w/informing-the-debate-around-internet-security-and-trust.mp4`;
  }),
});
