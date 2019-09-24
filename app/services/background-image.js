import ENV from 'annual-report-2019/config/environment';
import { computed, get } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  backgroundImages: {
    'a-bretton-woods-moment-for-the-digital-age': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/a-bretton-woods-moment-for-the-digital-age.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/a-bretton-woods-moment-for-the-digital-age-thumbnail.jpg',
    },
    'a-clarion-call-for-protecting-the-worlds-refugees': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/a-clarion-call-for-protecting-the-worlds-refugees.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/a-clarion-call-for-protecting-the-worlds-refugees-thumbnail.png',
    },
    'braiding-legal-orders': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/braiding-legal-orders.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/braiding-legal-orders-thumbnail.jpg',
    },
    'building-closer-ties-between-canada-and-india': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/building-closer-ties-between-canada-and-india.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/building-closer-ties-between-canada-and-india-thumbnail.jpg',
    },
    'chairs-message': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/chairs-message.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/chairs-message-thumbnail.jpg',
    },
    'curbing-cultural-appropriation-through-intellectual-property-law': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/curbing-cultural-appropriation-through-intellectual-property-law.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/curbing-cultural-appropriation-through-intellectual-property-law-thumbnail.jpg',
    },
    'governing-cyberspace-during-a-crisis-in-trust': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/governing-cyberspace-during-a-crisis-in-trust.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/governing-cyberspace-during-a-crisis-in-trust-thumbnail.jpg',
    },
    'informing-the-debate-around-internet-security-and-trust': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/informing-the-debate-around-internet-security-and-trust.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/informing-the-debate-around-internet-security-and-trust-thumbnail.jpg',
    },
    'media-and-mass-atrocity-the-rwanda-genocide-and-beyond': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-thumbnail.jpg',
    },
    'models-for-data-governance': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/models-for-data-governance.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/models-for-data-governance-thumbnail.jpg',
    },
    'presidents-message': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/presidents-message.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/presidents-message-thumbnail.jpg',
    },
    'protecting-elections-from-foreign-interference': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/protecting-elections-from-foreign-interference.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/protecting-elections-from-foreign-interference-thumbnail.jpg',
    },
    'thank-you': {
      fullSizeUrl: '4a7fcdebfbc4a053/slides/thank-you.jpg',
      thumbnailUrl: '4a7fcdebfbc4a053/slides/thank-you-thumbnail.jpg',
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
  nodeS3Directory: '4a7fcdebfbc4a053',

  defaultBackground: computed(function() {
    return {
      fullSizeUrl: `${get(this, 'imageHost')}4a7fcdebfbc4a053/cigi-campus.jpg`,
      thumbnailUrl: `${get(this, 'imageHost')}4a7fcdebfbc4a053/cigi-campus-thumbnail.jpg`,
    };
  }),

  imageHost: computed(function() {
    if (ENV.environment !== 'production' || ENV.staging) {
      return 'https://staging.cigionline.org/interactives/2019annualreport/static/';
    }
    return 'https://www.cigionline.org/interactives/2019annualreport/static/';
  }),

  getAllBlurImages() {
    return Object.keys(get(this, 'backgroundImages')).map((key) => `${get(this, 'imageHost')}${get(this, 'backgroundImages')[key].thumbnailUrl}`);
  },

  getNodeBackgroundImage(nodeId) {
    if (get(this, 'nodesMissingBackground').includes(nodeId)) {
      return get(this, 'defaultBackground');
    }
    return {
      fullSizeUrl: `${get(this, 'imageHost')}${get(this, 'nodeS3Directory')}/nodes/${nodeId}.jpg`,
      thumbnailUrl: `${get(this, 'imageHost')}${get(this, 'nodeS3Directory')}/nodes/${nodeId}-thumbnail.jpg`,
    };
  },

  getSlideBackgroundImage(routeName) {
    if (get(this, 'backgroundImages')[routeName]
        && get(this, 'backgroundImages')[routeName].fullSizeUrl
        && get(this, 'backgroundImages')[routeName].thumbnailUrl) {
      return {
        fullSizeUrl: `${get(this, 'imageHost')}${get(this, 'backgroundImages')[routeName].fullSizeUrl}`,
        thumbnailUrl: `${get(this, 'imageHost')}${get(this, 'backgroundImages')[routeName].thumbnailUrl}`,
      };
    }
    return { thumbnailUrl: null, fullSizeUrl: null };
  },
});
