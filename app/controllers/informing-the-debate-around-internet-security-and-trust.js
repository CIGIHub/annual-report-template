import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('informing-the-debate-around-internet-security-and-trust');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'newspaper',
      link: 'https://www.cigionline.org/articles/survey-cyber-criminals-social-media-lack-security-increasingly-fuelling-internet-distrust',
      title: this.intl.t('informingTheDebateAroundInternetSecurityAndTrust.link1'),
      type: this.intl.t('media'),
    }, {
      icon: 'chart-bar',
      link: 'https://www.cigionline.org/internet-survey-2019',
      title: this.intl.t('informingTheDebateAroundInternetSecurityAndTrust.link2'),
      type: this.intl.t('survey'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('informingTheDebateAroundInternetSecurityAndTrust.paragraph1'),
      this.intl.t('informingTheDebateAroundInternetSecurityAndTrust.paragraph2'),
      this.intl.t('informingTheDebateAroundInternetSecurityAndTrust.paragraph3'),
      this.intl.t('informingTheDebateAroundInternetSecurityAndTrust.paragraph4'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('informingTheDebateAroundInternetSecurityAndTrust.title');
  }),

  videoLink: computed('backgroundImage.imageHost', function() {
    return `${this.backgroundImage.imageHost}5891adf417e60b71/slides/informing-the-debate-around-internet-security-and-trust.mp4`;
  }),
});
