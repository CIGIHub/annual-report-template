import { set } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  showLightbox: null,

  closeLightbox() {
    set(this, 'showLightbox', null);
  },

  showTableOfContents() {
    set(this, 'showLightbox', 'tableofcontents');
  },
});
