import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/chairs-message', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:en/chairs-message');
    assert.ok(route);
  });
});
