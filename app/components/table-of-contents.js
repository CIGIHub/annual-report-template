import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  backgroundImage: service(),
  intl: service(),
  lightbox: service(),
  router: service(),

  linksBreakAtIndex: 10,

  leftLinks: computed('routes.[]', 'linksBreakAtIndex', 'router.currentRouteName', function() {
    if (!this.routes) {
      return [];
    }
    const currentRouteName = this.router.currentRouteName;
    const links = this.routes.slice(0, this.linksBreakAtIndex);
    return links.map((link) => ({
      current: link.route === currentRouteName,
      number: link.number,
      route: link.route,
      title: this.intl.t(link.title),
    }));
  }),

  rightLinks: computed('routes.[]', 'linksBreakAtIndex', 'router.currentRouteName', function() {
    if (!this.routes) {
      return [];
    }
    const currentRouteName = this.router.currentRouteName;
    const links = this.routes.slice(this.linksBreakAtIndex);
    return links.map((link) => ({
      current: link.route === currentRouteName,
      number: link.number,
      route: link.route,
      title: this.intl.t(link.title),
    }));
  }),

  showAcknowledgementsTab: computed('showAcknowledgements', 'lightbox.subType', function() {
    return this.showAcknowledgements
      || this.lightbox.subType === 'acknowledgements';
  }),

  videoLink: computed('backgroundImage.imageHost', function() {
    return `${this.backgroundImage.imageHost}template/slides/table-of-contents.mp4`;
  }),

  actions: {
    hideAcknowledgements() {
      this.lightbox.closeTableOfContentsAcknowledgements();
      set(this, 'showAcknowledgements', null);
    },
    showAcknowledgements() {
      this.lightbox.showTableOfContentsAcknowledgements();
      set(this, 'showAcknowledgements', true);
    },
  },
});
