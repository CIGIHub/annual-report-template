import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/thank-you-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/thank-you-redirect');
    assert.ok(route);
  });
});
