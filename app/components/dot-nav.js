import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class DotNavComponent extends Component {
  @service intl;
  @service routeOrder;
  @service router;

  get menuItems() {
    const _this = this;
    const currentRoute = this.router.currentRouteName;

    return this.routeOrder.routes.map(function(route) {
      const menuItem = {
        current: false,
        route: route.route,
        title: _this.intl.t(route.title),
      };
      if (currentRoute === route.route
          || route.subRoutes.includes(currentRoute)) {
        menuItem.current = true;
      }

      return menuItem;
    });
  }
}
