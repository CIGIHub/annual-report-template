import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/financials/notes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/financials/notes');
    assert.ok(route);
  });
});
