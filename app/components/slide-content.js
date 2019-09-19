import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  lightbox: service(),

  actions: {
    closeLightbox() {
      get(this, 'lightbox').closeLightbox();
    },
    showYouTubeLightbox(videoId, videoTitle, videoDescription) {
      get(this, 'lightbox').showYouTubeLightbox(videoId, videoTitle, videoDescription);
    },
  },
});
