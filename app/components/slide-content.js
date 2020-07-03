import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  lightbox: service(),

  links: [],
  paragraphs: [],
  slideTitle: '',

  actions: {
    closeLightbox() {
      this.lightbox.closeLightbox();
    },
    showYouTubeLightbox(videoId, videoTitle, videoDescription) {
      this.lightbox.showYouTubeLightbox(videoId, videoTitle, videoDescription);
    },
  },
});
