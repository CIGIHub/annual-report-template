import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { thumbnailUrl, fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('a-clarion-call-for-protecting-the-worlds-refugees');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
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
    return `${get(this, 'backgroundImage.imageHost')}4a7fcdebfbc4a053/slides/a-clarion-call-for-protecting-the-worlds-refugees.mp4`;
  }),
});
