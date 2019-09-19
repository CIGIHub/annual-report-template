import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | governing-cyberspace-during-a-crisis-in-trust', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:governing-cyberspace-during-a-crisis-in-trust');
    assert.ok(controller);
  });
});
