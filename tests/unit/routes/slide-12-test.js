import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | slide-12', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:slide-12');
    assert.ok(route);
  });
});
