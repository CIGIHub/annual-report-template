import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/financials/summarized-statement-of-financial-position', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/financials/summarized-statement-of-financial-position');
    assert.ok(route);
  });
});
