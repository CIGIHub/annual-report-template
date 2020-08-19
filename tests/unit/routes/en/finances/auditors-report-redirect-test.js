import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/finances/auditors-report-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/finances/auditors-report-redirect');
    assert.ok(route);
  });
});
