import { set } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  showLightbox: null,
  subType: null,

  closeLightbox() {
    set(this, 'showLightbox', null);
    set(this, 'subType', null);
  },

  closeTableOfContentsAcknowledgements() {
    set(this, 'subType', null);
  },

  showTableOfContents() {
    set(this, 'showLightbox', 'tableofcontents');
  },

  showTableOfContentsAcknowledgements() {
    set(this, 'subType', 'acknowledgements');
  },

  showYouTubeLightbox(videoId, videoTitle, videoDescription) {
    set(this, 'youTubeVideoId', videoId);
    set(this, 'youTubeVideoTitle', videoTitle);
    set(this, 'youTubeVideoDescription', videoDescription);
    set(this, 'showLightbox', 'youtube');
  },
});
