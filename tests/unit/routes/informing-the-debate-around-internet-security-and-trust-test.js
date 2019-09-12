import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | informing-the-debate-around-internet-security-and-trust', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:informing-the-debate-around-internet-security-and-trust');
    assert.ok(route);
  });
});
