import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

import routeOrder from '../route-order';

export default Component.extend({
  intl: service(),
  router: service(),

  menuItems: computed('router.currentRouteName', function() {
    const _this = this;
    const currentRoute = get(this, 'router.currentRouteName');

    return routeOrder.map(function(route) {
      const menuItem = {
        current: false,
        route: route.route,
        title: get(_this, 'intl').t(route.title),
      };
      if (currentRoute === route.route
          || route.subRoutes.includes(currentRoute)) {
        menuItem.current = true;
      }

      return menuItem;
    });
  }),
});
