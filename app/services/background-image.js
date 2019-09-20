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
    'governing-cyberspace-during-a-crisis-in-trust': {
      blurUrl: 'QxRVvOjENvAGLXLQ/governing-cyberspace-during-a-crisis-in-trust-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/governing-cyberspace-during-a-crisis-in-trust.jpg',
    },
    'informing-the-debate-around-internet-security-and-trust': {
      blurUrl: 'QxRVvOjENvAGLXLQ/informing-the-debate-around-internet-security-and-trust-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/informing-the-debate-around-internet-security-and-trust.jpg',
    },
    'media-and-mass-atrocity-the-rwanda-genocide-and-beyond': {
      blurUrl: 'QxRVvOjENvAGLXLQ/media-and-mass-atrocity-the-rwanda-genocide-and-beyond-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/media-and-mass-atrocity-the-rwanda-genocide-and-beyond.jpg',
    },
    'models-for-data-governance': {
      blurUrl: 'QxRVvOjENvAGLXLQ/models-for-data-governance-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/models-for-data-governance.jpg',
    },
    'presidents-message': {
      blurUrl: 'QxRVvOjENvAGLXLQ/presidents-message-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/presidents-message.jpg',
    },
    'thank-you': {
      blurUrl: 'QxRVvOjENvAGLXLQ/thank-you-blur.jpg',
      fullUrl: 'QxRVvOjENvAGLXLQ/thank-you.jpg',
    },
  },

  imageHost: computed(function() {
    if (ENV.environment !== 'production' || ENV.staging) {
      return 'https://staging.cigionline.org';
    }
    return 'https://www.cigionline.org';
  }),

  getAllBlurImages() {
    return get(this, 'backgroundImages').map((backgroundImage) => backgroundImage.blurUrl);
  },

  getBackgroundImage(routeName) {
    if (get(this, 'backgroundImages')[routeName]
        && get(this, 'backgroundImages')[routeName].blurUrl
        && get(this, 'backgroundImages')[routeName].fullUrl) {
      return {
        blurUrl: `${get(this, 'imageHost')}/interactives/2019annualreport/static/${get(this, 'backgroundImages')[routeName].blurUrl}`,
        fullUrl: `${get(this, 'imageHost')}/interactives/2019annualreport/static/${get(this, 'backgroundImages')[routeName].fullUrl}`,
      };
    }
    return { blurUrl: null, fullUrl: null };
  },
});
