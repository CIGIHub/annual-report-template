import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | governing-the-digital-public-sphere', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:governing-the-digital-public-sphere');
    assert.ok(controller);
  });
});
