import ENV from 'annual-report-template/config/environment';
import { computed } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  backgroundImages: {
    // chairs-message
    'en.chairs-message': {
      fullSizeUrl: 'template/slides/chairs-message.jpg',
      ogUrl: 'template/slides/chairs-message-og.jpg',
      thumbnailUrl: 'template/slides/chairs-message-thumbnail.jpg',
    },
    'fr.message-du-president-du-conseil': {
      fullSizeUrl: 'template/slides/chairs-message.jpg',
      ogUrl: 'template/slides/chairs-message-og.jpg',
      thumbnailUrl: 'template/slides/chairs-message-thumbnail.jpg',
    },

    // presidents-message
    'en.presidents-message': {
      fullSizeUrl: 'template/slides/presidents-message.jpg',
      ogUrl: 'template/slides/presidents-message-og.jpg',
      thumbnailUrl: 'template/slides/presidents-message-thumbnail.jpg',
    },
    'fr.message-du-directeur-executif': {
      fullSizeUrl: 'template/slides/presidents-message.jpg',
      ogUrl: 'template/slides/presidents-message-og.jpg',
      thumbnailUrl: 'template/slides/presidents-message-thumbnail.jpg',
    },

    // slide-1
    'en.slide-1': {
      fullSizeUrl: 'template/slides/slide-1.jpg',
      ogUrl: 'template/slides/slide-1-og.jpg',
      thumbnailUrl: 'template/slides/slide-1-thumbnail.jpg',
    },
    'fr.slide-1': {
      fullSizeUrl: 'template/slides/slide-1.jpg',
      ogUrl: 'template/slides/slide-1-og.jpg',
      thumbnailUrl: 'template/slides/slide-1-thumbnail.jpg',
    },

    // slide-2
    'en.slide-2': {
      fullSizeUrl: 'template/slides/slide-2.png',
      ogUrl: 'template/slides/slide-2-og.png',
      thumbnailUrl: 'template/slides/slide-2-thumbnail.png',
    },
    'fr.slide-2': {
      fullSizeUrl: 'template/slides/slide-2.png',
      ogUrl: 'template/slides/slide-2-og.png',
      thumbnailUrl: 'template/slides/slide-2-thumbnail.png',
    },

    // slide-3
    'en.slide-3': {
      fullSizeUrl: 'template/slides/slide-3.jpg',
      ogUrl: 'template/slides/slide-3-og.jpg',
      thumbnailUrl: 'template/slides/slide-3-thumbnail.jpg',
    },
    'fr.slide-3': {
      fullSizeUrl: 'template/slides/slide-3.jpg',
      ogUrl: 'template/slides/slide-3-og.jpg',
      thumbnailUrl: 'template/slides/slide-3-thumbnail.jpg',
    },

    'slide-4': {
      fullSizeUrl: 'template/slides/slide-4.jpg',
      ogUrl: 'template/slides/slide-4-og.jpg',
      thumbnailUrl: 'template/slides/slide-4-thumbnail.jpg',
    },
    'slide-5': {
      fullSizeUrl: 'template/slides/slide-5.jpg',
      ogUrl: 'template/slides/slide-5-og.jpg',
      thumbnailUrl: 'template/slides/slide-5-thumbnail.jpg',
    },
    'slide-6': {
      fullSizeUrl: 'template/slides/slide-6.jpg',
      ogUrl: 'template/slides/slide-6-og.jpg',
      thumbnailUrl: 'template/slides/slide-6-thumbnail.jpg',
    },
    'slide-7': {
      fullSizeUrl: 'template/slides/slide-7.jpg',
      ogUrl: 'template/slides/slide-7-og.jpg',
      thumbnailUrl: 'template/slides/slide-7-thumbnail.jpg',
    },
    'slide-8': {
      fullSizeUrl: 'template/slides/slide-8.jpg',
      ogUrl: 'template/slides/slide-8-og.jpg',
      thumbnailUrl: 'template/slides/slide-8-thumbnail.jpg',
    },
    'slide-9': {
      fullSizeUrl: 'template/slides/slide-9.jpg',
      ogUrl: 'template/slides/slide-9-og.jpg',
      thumbnailUrl: 'template/slides/slide-9-thumbnail.jpg',
    },
    'slide-10': {
      fullSizeUrl: 'template/slides/slide-10.jpg',
      ogUrl: 'template/slides/slide-10-og.jpg',
      thumbnailUrl: 'template/slides/slide-10-thumbnail.jpg',
    },
    'slide-11': {
      fullSizeUrl: 'template/slides/slide-11.jpg',
      ogUrl: 'template/slides/slide-11-og.jpg',
      thumbnailUrl: 'template/slides/slide-11-thumbnail.jpg',
    },
    'slide-12': {
      fullSizeUrl: 'template/slides/slide-12.jpg',
      ogUrl: 'template/slides/slide-12-og.jpg',
      thumbnailUrl: 'template/slides/slide-12-thumbnail.jpg',
    },
    'slide-13': {
      fullSizeUrl: 'template/slides/slide-13.jpg',
      ogUrl: 'template/slides/slide-13-og.jpg',
      thumbnailUrl: 'template/slides/slide-13-thumbnail.jpg',
    },
    'thank-you': {
      fullSizeUrl: 'template/slides/thank-you.jpg',
      ogUrl: 'template/slides/thank-you-og.jpg',
      thumbnailUrl: 'template/slides/thank-you-thumbnail.jpg',
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
