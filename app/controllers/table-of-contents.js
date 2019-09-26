import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  routeOrder: service(),

  queryParams: ['acknowledgements'],

  routes: computed('routeOrder.routes.[]', function() {
    return get(this, 'routeOrder.routes').slice(2);
  }),
});
