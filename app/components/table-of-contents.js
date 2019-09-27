import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  backgroundImage: service(),
  intl: service(),
  lightbox: service(),
  router: service(),

  linksBreakAtIndex: 10,

  leftLinks: computed('routes.[]', 'linksBreakAtIndex', 'router.currentRouteName', function() {
    if (!get(this, 'routes')) {
      return [];
    }
    const currentRouteName = get(this, 'router.currentRouteName');
    const links = get(this, 'routes').slice(0, get(this, 'linksBreakAtIndex'));
    return links.map((link, index) => ({
      current: link.route === currentRouteName,
      number: (index + 1).toString().padStart(2, '0'),
      route: link.route,
      title: get(this, 'intl').t(link.title),
    }));
  }),

  rightLinks: computed('routes.[]', 'linksBreakAtIndex', 'router.currentRouteName', function() {
    if (!get(this, 'routes')) {
      return [];
    }
    const currentRouteName = get(this, 'router.currentRouteName');
    const links = get(this, 'routes').slice(get(this, 'linksBreakAtIndex'));
    return links.map((link, index) => ({
      current: link.route === currentRouteName,
      number: (index + get(this, 'linksBreakAtIndex') + 1).toString().padStart(2, '0'),
      route: link.route,
      title: get(this, 'intl').t(link.title),
    }));
  }),

  showAcknowledgementsTab: computed('showAcknowledgements', 'lightbox.subType', function() {
    return get(this, 'showAcknowledgements')
      || get(this, 'lightbox.subType') === 'acknowledgements';
  }),

  videoLink: computed(function() {
    return `${get(this, 'backgroundImage.imageHost')}5891adf417e60b71/slides/table-of-contents.mp4`;
  }),

  actions: {
    hideAcknowledgements() {
      get(this, 'lightbox').closeTableOfContentsAcknowledgements();
      set(this, 'showAcknowledgements', null);
    },
    showAcknowledgements() {
      get(this, 'lightbox').showTableOfContentsAcknowledgements();
      set(this, 'showAcknowledgements', true);
    },
  },
});
