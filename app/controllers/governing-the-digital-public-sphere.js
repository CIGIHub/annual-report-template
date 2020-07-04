import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('governing-the-digital-public-sphere');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('governingTheDigitalPublicSphere.paragraph1'),
      this.intl.t('governingTheDigitalPublicSphere.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('governingTheDigitalPublicSphere.title');
  }),
});
