import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';

import routeOrder from '../route-order';

export default Component.extend({
  intl: service(),
  lightbox: service(),
  router: service(),

  linksBreakAtIndex: 12,

  leftLinks: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    const links = routeOrder.slice(2, get(this, 'linksBreakAtIndex'));
    return links.map((link, index) => ({
      current: link.route === currentRouteName,
      number: (index + 1).toString().padStart(2, '0'),
      route: link.route,
      title: get(this, 'intl').t(link.title),
    }));
  }),

  rightLinks: computed('router.currentRouteName', function() {
    const currentRouteName = get(this, 'router.currentRouteName');
    const links = routeOrder.slice(get(this, 'linksBreakAtIndex'));
    return links.map((link, index) => ({
      current: link.route === currentRouteName,
      number: (index + get(this, 'linksBreakAtIndex') - 1).toString().padStart(2, '0'),
      route: link.route,
      title: get(this, 'intl').t(link.title),
    }));
  }),

  showAcknowledgementsTab: computed('showAcknowledgements', 'lightbox.subType', function() {
    return get(this, 'showAcknowledgements')
      || get(this, 'lightbox.subType') === 'acknowledgements';
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
