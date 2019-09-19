import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('models-for-data-governance');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/reclaiming-data-trusts',
      title: get(this, 'intl').t('modelsForDataGovernance.link1'),
      type: get(this, 'intl').t('article'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/data-trusts-defining-what-how-and-who-can-use-your-data',
      title: get(this, 'intl').t('modelsForDataGovernance.link2'),
      type: get(this, 'intl').t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('modelsForDataGovernance.paragraph1'),
      get(this, 'intl').t('modelsForDataGovernance.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('modelsForDataGovernance.title');
  }),
});