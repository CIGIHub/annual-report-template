import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/slide-9', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:en/slide-9');
    assert.ok(route);
  });
});
