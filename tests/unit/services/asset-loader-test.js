import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | asset-loader', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const service = this.owner.lookup('service:asset-loader');
    assert.ok(service);
  });
});
