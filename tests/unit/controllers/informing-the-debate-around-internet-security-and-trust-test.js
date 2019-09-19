import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | informing-the-debate-around-internet-security-and-trust', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:informing-the-debate-around-internet-security-and-trust');
    assert.ok(controller);
  });
});
