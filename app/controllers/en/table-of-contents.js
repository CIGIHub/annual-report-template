import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  routeOrder: service(),

  queryParams: ['acknowledgements'],

  routes: computed('routeOrder.routes.[]', function() {
    return this.routeOrder.routes.slice(2);
  }),
});
