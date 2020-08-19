import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/slide-4-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/slide-4-redirect');
    assert.ok(route);
  });
});
