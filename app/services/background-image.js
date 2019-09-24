import ENV from 'annual-report-2019/config/environment';
import { computed, get } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  backgroundImages: {
    'a-bretton-woods-moment-for-the-digital-age': {
      blurUrl: 'QxRVvOjENvAGLXLQ/a-bretton-woods-moment-for-the-digital-age-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/a-bretton-woods-moment-for-the-digital-age.jpg',
    },
    'a-clarion-call-for-protecting-the-worlds-refugees': {
      blurUrl: 'QxRVvOjENvAGLXLQ/a-clarion-call-for-protecting-the-worlds-refugees-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/a-clarion-call-for-protecting-the-worlds-refugees.jpg',
    },
    'braiding-legal-orders': {
      blurUrl: 'QxRVvOjENvAGLXLQ/braiding-legal-orders-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/braiding-legal-orders.jpg',
    },
    'building-closer-ties-between-canada-and-india': {
      blurUrl: 'QxRVvOjENvAGLXLQ/building-closer-ties-between-canada-and-india-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/building-closer-ties-between-canada-and-india.jpg',
    },
    'chairs-message': {
      blurUrl: 'QxRVvOjENvAGLXLQ/chairs-message-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/chairs-message.jpg',
    },
    'curbing-cultural-appropriation-through-intellectual-property-law': {
      blurUrl: '41bbb41e5e574965/curbing-cultural-appropriation-through-intellectual-property-law-blur.jpg',
      fullUrl: '41bbb41e5e574965/curbing-cultural-appropriation-through-intellectual-property-law.jpg',
    },
    'governing-cyberspace-during-a-crisis-in-trust': {
      blurUrl: 'QxRVvOjENvAGLXLQ/governing-cyberspace-during-a-crisis-in-trust-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/governing-cyberspace-during-a-crisis-in-trust.jpg',
    },
    'informing-the-debate-around-internet-security-and-trust': {
      blurUrl: 'QxRVvOjENvAGLXLQ/informing-the-debate-around-internet-security-and-trust-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/informing-the-debate-around-internet-security-and-trust.jpg',
    },
    'media-and-mass-atrocity-the-rwanda-genocide-and-beyond': {
      blurUrl: '41bbb41e5e574965/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-blur.jpg',
      fullUrl: '41bbb41e5e574965/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.jpg',
    },
    'models-for-data-governance': {
      blurUrl: 'QxRVvOjENvAGLXLQ/models-for-data-governance-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/models-for-data-governance.jpg',
    },
    'presidents-message': {
      blurUrl: 'QxRVvOjENvAGLXLQ/presidents-message-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/presidents-message.jpg',
    },
    'protecting-elections-from-foreign-interference': {
      blurUrl: 'QxRVvOjENvAGLXLQ/protecting-elections-from-foreign-interference-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/protecting-elections-from-foreign-interference.jpg',
    },
    'thank-you': {
      blurUrl: '41bbb41e5e574965/thank-you-blur.jpg',
      fullUrl: '41bbb41e5e574965/thank-you.jpg',
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
    return Object.keys(get(this, 'backgroundImages')).map((key) => `${get(this, 'imageHost')}/interactives/2019annualreport/static/${get(this, 'backgroundImages')[key].blurUrl}`);
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
        && get(this, 'backgroundImages')[routeName].blurUrl
        && get(this, 'backgroundImages')[routeName].fullUrl) {
      return {
        blurUrl: `${get(this, 'imageHost')}${get(this, 'backgroundImages')[routeName].blurUrl}`,
        fullUrl: `${get(this, 'imageHost')}${get(this, 'backgroundImages')[routeName].fullUrl}`,
      };
    }
    return { blurUrl: null, fullUrl: null };
  },
});
