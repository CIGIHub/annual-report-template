import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | a-clarion-call-for-protecting-the-worlds-refugees', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:a-clarion-call-for-protecting-the-worlds-refugees');
    assert.ok(route);
  });
});
