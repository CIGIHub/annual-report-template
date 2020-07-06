import ENV from 'annual-report-template/config/environment';
import { computed } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  backgroundImages: {
    'a-bretton-woods-moment-for-the-digital-age': {
      fullSizeUrl: '5ab09e92875a54ff/slides/a-bretton-woods-moment-for-the-digital-age.jpg',
      ogUrl: '5ab09e92875a54ff/slides/a-bretton-woods-moment-for-the-digital-age-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/a-bretton-woods-moment-for-the-digital-age-thumbnail.jpg',
    },
    'braiding-legal-orders': {
      fullSizeUrl: '5ab09e92875a54ff/slides/braiding-legal-orders.jpg',
      ogUrl: '5ab09e92875a54ff/slides/braiding-legal-orders-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/braiding-legal-orders-thumbnail.jpg',
    },
    'chairs-message': {
      fullSizeUrl: '5ab09e92875a54ff/slides/chairs-message.jpg',
      ogUrl: '5ab09e92875a54ff/slides/chairs-message-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/chairs-message-thumbnail.jpg',
    },
    'curbing-cultural-appropriation-through-intellectual-property-law': {
      fullSizeUrl: '5ab09e92875a54ff/slides/curbing-cultural-appropriation-through-intellectual-property-law.jpg',
      ogUrl: '5ab09e92875a54ff/slides/curbing-cultural-appropriation-through-intellectual-property-law-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/curbing-cultural-appropriation-through-intellectual-property-law-thumbnail.jpg',
    },
    'exploring-the-four-internets-and-the-geopolitics-of-digital-governance': {
      fullSizeUrl: '5ab09e92875a54ff/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance.jpg',
      ogUrl: '5ab09e92875a54ff/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/exploring-the-four-internets-and-the-geopolitics-of-digital-governance-thumbnail.jpg',
    },
    'governing-cyberspace-during-a-crisis-in-trust': {
      fullSizeUrl: '5ab09e92875a54ff/slides/governing-cyberspace-during-a-crisis-in-trust.jpg',
      ogUrl: '5ab09e92875a54ff/slides/governing-cyberspace-during-a-crisis-in-trust-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/governing-cyberspace-during-a-crisis-in-trust-thumbnail.jpg',
    },
    'informing-the-debate-around-internet-security-and-trust': {
      fullSizeUrl: '5ab09e92875a54ff/slides/informing-the-debate-around-internet-security-and-trust.jpg',
      ogUrl: '5ab09e92875a54ff/slides/informing-the-debate-around-internet-security-and-trust-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/informing-the-debate-around-internet-security-and-trust-thumbnail.jpg',
    },
    'media-and-mass-atrocity-the-rwanda-genocide-and-beyond': {
      fullSizeUrl: '5ab09e92875a54ff/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.jpg',
      ogUrl: '5ab09e92875a54ff/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-thumbnail.jpg',
    },
    'models-for-data-governance': {
      fullSizeUrl: '5ab09e92875a54ff/slides/models-for-data-governance.jpg',
      ogUrl: '5ab09e92875a54ff/slides/models-for-data-governance-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/models-for-data-governance-thumbnail.jpg',
    },
    'presidents-message': {
      fullSizeUrl: '5ab09e92875a54ff/slides/presidents-message.jpg',
      ogUrl: '5ab09e92875a54ff/slides/presidents-message-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/presidents-message-thumbnail.jpg',
    },
    'protecting-elections-from-foreign-interference': {
      fullSizeUrl: '5ab09e92875a54ff/slides/protecting-elections-from-foreign-interference.jpg',
      ogUrl: '5ab09e92875a54ff/slides/protecting-elections-from-foreign-interference-og.jpg',
      thumbnailUrl: '5ab09e92875a54ff/slides/protecting-elections-from-foreign-interference-thumbnail.jpg',
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
  nodeS3Directory: '5ab09e92875a54ff',

  defaultBackground: computed('imageHost', function() {
    return {
      fullSizeUrl: `${this.imageHost}5ab09e92875a54ff/cigi-campus.jpg`,
      ogUrl: `${this.imageHost}5ab09e92875a54ff/cigi-campus-og.jpg`,
      thumbnailUrl: `${this.imageHost}5ab09e92875a54ff/cigi-campus-thumbnail.jpg`,
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
