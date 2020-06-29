import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('a-clarion-call-for-protecting-the-worlds-refugees');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/call-action-transforming-global-refugee-system',
      title: this.intl.t('aClarionCallForProtectingTheWorldsRefugees.link1'),
      type: this.intl.t('report'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/publications/no-strangers-gate-collective-responsibility-and-regions-response-venezuelan-refugee',
      title: this.intl.t('aClarionCallForProtectingTheWorldsRefugees.link2'),
      type: this.intl.t('video'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/no-strangers-gate-collective-responsibility-and-regions-response-venezuelan-refugee',
      title: this.intl.t('aClarionCallForProtectingTheWorldsRefugees.link3'),
      type: this.intl.t('report'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('aClarionCallForProtectingTheWorldsRefugees.paragraph1'),
      this.intl.t('aClarionCallForProtectingTheWorldsRefugees.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('aClarionCallForProtectingTheWorldsRefugees.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5891adf417e60b71/slides/a-clarion-call-for-protecting-the-worlds-refugees.mp4`;
  }),
});
