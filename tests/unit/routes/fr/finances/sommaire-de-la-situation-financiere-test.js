import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/finances/sommaire-de-la-situation-financiere', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:fr/finances/sommaire-de-la-situation-financiere');
    assert.ok(route);
  });
});
