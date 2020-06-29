import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('protecting-elections-from-foreign-interference');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/election-risk-monitor-canada',
      title: this.intl.t('protectingElectionsFromForeignInterference.link1'),
      type: this.intl.t('publication'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-election-risk-canada',
      title: this.intl.t('protectingElectionsFromForeignInterference.link2'),
      type: this.intl.t('video'),
    }, {
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/are-democracies-prepared-foreign-interference',
      title: this.intl.t('protectingElectionsFromForeignInterference.link3'),
      type: this.intl.t('article'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('protectingElectionsFromForeignInterference.paragraph1'),
      this.intl.t('protectingElectionsFromForeignInterference.paragraph2'),
      this.intl.t('protectingElectionsFromForeignInterference.paragraph3'),
      this.intl.t('protectingElectionsFromForeignInterference.paragraph4'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('protectingElectionsFromForeignInterference.title');
  }),
});
