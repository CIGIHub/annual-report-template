import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/presidents-message-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/presidents-message-redirect');
    assert.ok(route);
  });
});
