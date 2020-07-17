import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/chairs-message-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/chairs-message-redirect');
    assert.ok(route);
  });
});
