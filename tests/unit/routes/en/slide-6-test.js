import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/slide-6', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/slide-6');
    assert.ok(route);
  });
});