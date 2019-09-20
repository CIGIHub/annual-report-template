import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | background-image', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const service = this.owner.lookup('service:background-image');
    assert.ok(service);
  });
});
