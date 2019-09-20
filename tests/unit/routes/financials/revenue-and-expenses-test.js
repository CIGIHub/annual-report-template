import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | financials/revenue-and-expenses', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:financials/revenue-and-expenses');
    assert.ok(route);
  });
});
