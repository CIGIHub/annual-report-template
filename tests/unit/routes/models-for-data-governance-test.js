import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | models-for-data-governance', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:models-for-data-governance');
    assert.ok(route);
  });
});
