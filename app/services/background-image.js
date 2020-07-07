import ENV from 'annual-report-template/config/environment';
import { computed } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  backgroundImages: {
    'chairs-message': {
      fullSizeUrl: 'template/slides/chairs-message.jpg',
      ogUrl: 'template/slides/chairs-message-og.jpg',
      thumbnailUrl: 'template/slides/chairs-message-thumbnail.jpg',
    },
    'presidents-message': {
      fullSizeUrl: 'template/slides/presidents-message.jpg',
      ogUrl: 'template/slides/presidents-message-og.jpg',
      thumbnailUrl: 'template/slides/presidents-message-thumbnail.jpg',
    },
    'slide-1': {
      fullSizeUrl: '5ab09e92875a54ff/slides/building-closer-ties-between-canada-and-india.jpg',
      ogUrl: '5ab09e92875a54ff/slides/building-closer-ties-between-canada-and-india-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/building-closer-ties-between-canada-and-india-thumbnail.jpg',
    },
    'slide-2': {
      fullSizeUrl: '5ab09e92875a54ff/slides/a-clarion-call-for-protecting-the-worlds-refugees.png',
      ogUrl: '5ab09e92875a54ff/slides/a-clarion-call-for-protecting-the-worlds-refugees-og.png',
      thumbnailUrl: '5ab09e92875a54ff/slides/a-clarion-call-for-protecting-the-worlds-refugees-thumbnail.png',
    },
    'slide-3': {
      fullSizeUrl: '5ab09e92875a54ff/slides/multilateral-institutions-mark-a-tumultuous-year.jpg',
      ogUrl: '5ab09e92875a54ff/slides/multilateral-institutions-mark-a-tumultuous-year-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/multilateral-institutions-mark-a-tumultuous-year-thumbnail.jpg',
    },
    'slide-4': {
      fullSizeUrl: '5ab09e92875a54ff/slides/governing-cyberspace-during-a-crisis-in-trust.jpg',
      ogUrl: '5ab09e92875a54ff/slides/governing-cyberspace-during-a-crisis-in-trust-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/governing-cyberspace-during-a-crisis-in-trust-thumbnail.jpg',
    },
    'slide-5': {
      fullSizeUrl: '5ab09e92875a54ff/slides/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy.jpg',
      ogUrl: '5ab09e92875a54ff/slides/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/innovation-nation-making-canada-a-leader-in-the-global-ideas-economy-thumbnail.jpg',
    },
    'slide-6': {
      fullSizeUrl: '5ab09e92875a54ff/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.jpg',
      ogUrl: '5ab09e92875a54ff/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-thumbnail.jpg',
    },
    'slide-7': {
      fullSizeUrl: '5ab09e92875a54ff/slides/braiding-legal-orders.jpg',
      ogUrl: '5ab09e92875a54ff/slides/braiding-legal-orders-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/braiding-legal-orders-thumbnail.jpg',
    },
    'slide-8': {
      fullSizeUrl: '5ab09e92875a54ff/slides/models-for-data-governance.jpg',
      ogUrl: '5ab09e92875a54ff/slides/models-for-data-governance-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/models-for-data-governance-thumbnail.jpg',
    },
    'slide-9': {
      fullSizeUrl: '5ab09e92875a54ff/slides/protecting-elections-from-foreign-interference.jpg',
      ogUrl: '5ab09e92875a54ff/slides/protecting-elections-from-foreign-interference-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/protecting-elections-from-foreign-interference-thumbnail.jpg',
    },
    'slide-10': {
      fullSizeUrl: '5ab09e92875a54ff/slides/a-bretton-woods-moment-for-the-digital-age.jpg',
      ogUrl: '5ab09e92875a54ff/slides/a-bretton-woods-moment-for-the-digital-age-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/a-bretton-woods-moment-for-the-digital-age-thumbnail.jpg',
    },
    'slide-11': {
      fullSizeUrl: '5ab09e92875a54ff/slides/informing-the-debate-around-internet-security-and-trust.jpg',
      ogUrl: '5ab09e92875a54ff/slides/informing-the-debate-around-internet-security-and-trust-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/informing-the-debate-around-internet-security-and-trust-thumbnail.jpg',
    },
    'slide-12': {
      fullSizeUrl: '5ab09e92875a54ff/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance.jpg',
      ogUrl: '5ab09e92875a54ff/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance-thumbnail.jpg',
    },
    'slide-13': {
      fullSizeUrl: '5ab09e92875a54ff/slides/curbing-cultural-appropriation-through-intellectual-property-law.jpg',
      ogUrl: '5ab09e92875a54ff/slides/curbing-cultural-appropriation-through-intellectual-property-law-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/curbing-cultural-appropriation-through-intellectual-property-law-thumbnail.jpg',
    },
    'thank-you': {
      fullSizeUrl: '5ab09e92875a54ff/slides/thank-you.jpg',
      ogUrl: '5ab09e92875a54ff/slides/thank-you-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/thank-you-thumbnail.jpg',
    },
  },
  nodesMissingBackground: [
    '13840',
    '14698',
    '14715',
    '14716',
    '14844',
    '14862',
    '14863',
    '14881',
    '14882',
    '14903',
    '14914',
    '14966',
    '14967',
    '15050',
    '15054',
    '15056',
    '15058',
    '15067',
    '15117',
    '15142',
    '15149',
    '15157',
    '15158',
    '15218',
    '15234',
    '15275',
    '15286',
    '15290',
    '15337',
    '15338',
    '15364',
  ],
  nodeS3Directory: 'template',

  defaultBackground: computed('imageHost', function() {
    return {
      fullSizeUrl: `${this.imageHost}template/cigi-campus.jpg`,
      ogUrl: `${this.imageHost}template/cigi-campus-og.jpg`,
      thumbnailUrl: `${this.imageHost}template/cigi-campus-thumbnail.jpg`,
    };
  }),

  imageHost: computed(function() {
    if (ENV.environment !== 'production' || ENV.staging) {
      return 'https://staging.cigionline.org/interactives/2019annualreport/static/';
    }
    return 'https://www.cigionline.org/interactives/2019annualreport/static/';
  }),

  getAllBlurImages() {
    return Object.keys(this.backgroundImages).map((key) => `${this.imageHost}${this.backgroundImages[key].thumbnailUrl}`);
  },

  getNodeBackgroundImage(nodeId) {
    if (this.nodesMissingBackground.includes(nodeId)) {
      return this.defaultBackground;
    }
    return {
      fullSizeUrl: `${this.imageHost}${this.nodeS3Directory}/nodes/${nodeId}.jpg`,
      thumbnailUrl: `${this.imageHost}${this.nodeS3Directory}/nodes/${nodeId}-thumbnail.jpg`,
    };
  },

  getSlideBackgroundImage(routeName) {
    if (this.backgroundImages[routeName]
        && this.backgroundImages[routeName].fullSizeUrl
        && this.backgroundImages[routeName].ogUrl
        && this.backgroundImages[routeName].thumbnailUrl) {
      return {
        fullSizeUrl: `${this.imageHost}${this.backgroundImages[routeName].fullSizeUrl}`,
        ogUrl: `${this.imageHost}${this.backgroundImages[routeName].ogUrl}`,
        thumbnailUrl: `${this.imageHost}${this.backgroundImages[routeName].thumbnailUrl}`,
      };
    }
    return { thumbnailUrl: null, ogUrl: null, fullSizeUrl: null };
  },
});
