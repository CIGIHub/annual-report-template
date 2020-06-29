import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/four-internets-geopolitics-digital-governance',
      title: this.intl.t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.link1'),
      type: this.intl.t('publication'),
    }, {
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/four-visions-shaping-way-we-use-internet',
      title: this.intl.t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.link2'),
      type: this.intl.t('qa'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph1'),
      this.intl.t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph2'),
      this.intl.t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph3'),
      this.intl.t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.paragraph4'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('exploringTheFourInternetsAndTheGeopoliticsOfDigitalGovernance.title');
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5891adf417e60b71/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance.mp4`;
  }),
});
