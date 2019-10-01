import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | multilateral-institutions-mark-a-tumultuous-year', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:multilateral-institutions-mark-a-tumultuous-year');
    assert.ok(controller);
  });
});
