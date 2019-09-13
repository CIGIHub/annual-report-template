import routeOrder from './route-order';

export default function() {
  const _this = this;

  routeOrder.forEach(function(route, index) {
    const subsequentRoutes = routeOrder.slice(index + 1);
    subsequentRoutes.forEach(function(subsequentRoute) {
      const routeNames = subsequentRoute.subRoutes;
      routeNames.push(subsequentRoute.route);
      routeNames.forEach(function(routeName) {
        let fromRoute = route.route;
        if (fromRoute === 'financials.auditors-report') {
          fromRoute = 'financials';
        }
        let toRoute = routeName;
        if (toRoute === 'financials.auditors-report') {
          toRoute = 'financials';
        }
        if ((fromRoute === 'chairs-message'
              && toRoute === 'presidents-message')
            || (fromRoute === 'financials'
              && toRoute === 'outputs-and-activities')) {
          // No transition
        } else {
          _this.transition(
            _this.fromRoute(fromRoute),
            _this.toRoute(toRoute),
            _this.use('explode', {
              pickNew: '.background-row',
              use: ['crossFadeSlide'],
            }, {
              use: ['crossFade', { duration: 500 }],
            }),
            _this.reverse('explode', {
              pickNew: '.background-row',
              use: ['crossFadeSlide', true],
            }, {
              use: ['crossFade', { duration: 500 }],
            }),
          );
        }
      });
    });
  });
}
