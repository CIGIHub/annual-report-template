import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | curbing-cultural-appropriation-through-intellectual-property-law', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:curbing-cultural-appropriation-through-intellectual-property-law');
    assert.ok(controller);
  });
});
