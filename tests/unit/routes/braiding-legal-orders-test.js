import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | braiding-legal-orders', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:braiding-legal-orders');
    assert.ok(route);
  });
});
