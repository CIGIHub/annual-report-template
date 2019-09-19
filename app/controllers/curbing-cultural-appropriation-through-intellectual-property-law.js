import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  intl: service(),

  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('curbing-cultural-appropriation-through-intellectual-property-law');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.paragraph1'),
      get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('curbingCulturalAppropriationThroughIntellectualPropertyLaw.title');
  }),
});
