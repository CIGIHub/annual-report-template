import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('models-for-data-governance');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/reclaiming-data-trusts',
      title: this.intl.t('modelsForDataGovernance.link1'),
      type: this.intl.t('article'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/data-trusts-defining-what-how-and-who-can-use-your-data',
      title: this.intl.t('modelsForDataGovernance.link2'),
      type: this.intl.t('video'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('modelsForDataGovernance.paragraph1'),
      this.intl.t('modelsForDataGovernance.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('modelsForDataGovernance.title');
  }),

  videoLink: computed('backgroundImage.imageHost', function() {
    return `${this.backgroundImage.imageHost}5891adf417e60b71/slides/models-for-data-governance.mp4`;
  }),
});
