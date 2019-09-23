import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { blurUrl, fullUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('governing-the-digital-public-sphere');
    return htmlSafe(`background-image: url('${fullUrl}'), url('${blurUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('governingTheDigitalPublicSphere.paragraph1'),
      get(this, 'intl').t('governingTheDigitalPublicSphere.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('governingTheDigitalPublicSphere.title');
  }),
});
