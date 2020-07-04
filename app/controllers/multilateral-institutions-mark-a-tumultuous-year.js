import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
  backgroundImage: service(),
  intl: service(),

  backgroundStyle: computed(function() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('multilateral-institutions-mark-a-tumultuous-year');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }),

  links: computed('intl.locale', function() {
    return [{
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/regional-arrangements-and-imf-75-defending-global-financial-governance-anniversary',
      title: this.intl.t('multilateralInstitutionsMarkATumultuousYear.link1'),
      type: this.intl.t('paper'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/publications/trump-trade-policy-exchange-rate-surveillance-and-imf-back-future',
      title: this.intl.t('multilateralInstitutionsMarkATumultuousYear.link2'),
      type: this.intl.t('paper'),
    }, {
      icon: 'comment-alt-lines',
      link: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
      title: this.intl.t('multilateralInstitutionsMarkATumultuousYear.link3'),
      type: this.intl.t('articleAndVideo'),
    }];
  }),

  paragraphs: computed('intl.locale', function() {
    return [
      this.intl.t('multilateralInstitutionsMarkATumultuousYear.paragraph1'),
      this.intl.t('multilateralInstitutionsMarkATumultuousYear.paragraph2'),
    ];
  }),

  title: computed('intl.locale', function() {
    return this.intl.t('multilateralInstitutionsMarkATumultuousYear.title');
  }),
});
