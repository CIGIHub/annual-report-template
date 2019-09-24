import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { thumbnailUrl, fullSizeUrl } = get(this, 'backgroundImage').getSlideBackgroundImage('protecting-elections-from-foreign-interference');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/election-risk-monitor-canada',
      title: get(this, 'intl').t('protectingElectionsFromForeignInterference.link1'),
      type: get(this, 'intl').t('publication'),
    }, {
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-election-risk-canada',
      title: get(this, 'intl').t('protectingElectionsFromForeignInterference.link2'),
      type: get(this, 'intl').t('video'),
    }, {
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/are-democracies-prepared-foreign-interference',
      title: get(this, 'intl').t('protectingElectionsFromForeignInterference.link3'),
      type: get(this, 'intl').t('article'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      get(this, 'intl').t('protectingElectionsFromForeignInterference.paragraph1'),
      get(this, 'intl').t('protectingElectionsFromForeignInterference.paragraph2'),
      get(this, 'intl').t('protectingElectionsFromForeignInterference.paragraph3'),
      get(this, 'intl').t('protectingElectionsFromForeignInterference.paragraph4'),
    ];
  }),

  title: computed('intl.locale', function() {
    return get(this, 'intl').t('protectingElectionsFromForeignInterference.title');
  }),
});
