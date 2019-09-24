import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { thumbnailUrl, fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('curbing-cultural-appropriation-through-intellectual-property-law');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
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

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}4a7fcdebfbc4a053/slides/curbing-cultural-appropriation-through-intellectual-property-law.mp4`;
  }),
});
