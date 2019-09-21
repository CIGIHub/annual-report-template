import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | google-analytics', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const service = this.owner.lookup('service:google-analytics');
    assert.ok(service);
  });
});
