import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | governing-cyberspace-during-a-crisis-in-trust', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:governing-cyberspace-during-a-crisis-in-trust');
    assert.ok(route);
  });
});
