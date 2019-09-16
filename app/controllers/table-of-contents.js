import Controller from '@ember/controller';

import routeOrder from '../route-order';

export default Controller.extend({
  queryParams: ['acknowledgements'],

  routes: routeOrder.slice(2),
});
