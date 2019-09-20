import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | financials/notes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:financials/notes');
    assert.ok(route);
  });
});
