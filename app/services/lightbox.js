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

  showPublicationLightbox() {
    set(this, 'subType', 'publication');
  },

  showTableOfContents() {
    set(this, 'showLightbox', 'tableofcontents');
  },

  showTableOfContentsAcknowledgements() {
    set(this, 'subType', 'acknowledgements');
  },
});
