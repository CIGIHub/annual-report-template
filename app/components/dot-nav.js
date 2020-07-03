import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  intl: service(),
  routeOrder: service(),
  router: service(),
  lightBackground: false,

  menuItems: computed('router.currentRouteName', 'routeOrder.routes', function() {
    const _this = this;
    const currentRoute = this.router.currentRouteName;

    return this.routeOrder.routes.map(function(route) {
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
