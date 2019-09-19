import ENV from 'annual-report-2019/config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('a-clarion-call-for-protecting-the-worlds-refugees');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/call-action-transforming-global-refugee-system',
      title: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.link1'),
      type: get(this, 'intl').t('report'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/publications/no-strangers-gate-collective-responsibility-and-regions-response-venezuelan-refugee',
      title: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.link2'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/no-strangers-gate-collective-responsibility-and-regions-response-venezuelan-refugee',
      title: get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.link3'),
      type: get(this, 'intl').t('report'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.paragraph1'),
      get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('aClarionCallForProtectingTheWorldsRefugees.title');
  }),

  videoLink: computed(function() {
    let host = 'https://www.cigionline.org';
    if (ENV.environment !== 'production' || process.env.STAGING) {
      host = 'https://staging.cigionline.org';
    }
    return `${host}/interactives/2019annualreport/static/3E6r1xmCHg1kIA7w/a-clarion-call-for-protecting-the-worlds-refugees.mp4`;
  }),
});
