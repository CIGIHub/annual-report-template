import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | building-closer-ties-between-canada-and-india', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:building-closer-ties-between-canada-and-india');
    assert.ok(route);
  });
});
