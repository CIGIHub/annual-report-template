import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/slide-7-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/slide-7-redirect');
    assert.ok(route);
  });
});
