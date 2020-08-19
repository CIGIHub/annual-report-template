import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/finances/summarized-statement-of-financial-position-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/finances/summarized-statement-of-financial-position-redirect');
    assert.ok(route);
  });
});
