import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/finances/rapport-des-verificateurs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:fr/finances/rapport-des-verificateurs');
    assert.ok(route);
  });
});
