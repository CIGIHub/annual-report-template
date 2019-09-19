import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/four-internets-geopolitics-digital-governance',
      title: get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/four-visions-shaping-way-we-use-internet',
      title: get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.link2'),
      type: get(this, 'intl').t('qa'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph1'),
      get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph2'),
      get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph3'),
      get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph4'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.title');
  }),
});
