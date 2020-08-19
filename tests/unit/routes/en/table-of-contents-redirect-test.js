import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/table-of-contents-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/table-of-contents-redirect');
    assert.ok(route);
  });
});
