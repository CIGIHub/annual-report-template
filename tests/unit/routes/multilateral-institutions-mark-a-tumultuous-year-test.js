import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | multilateral-institutions-mark-a-tumultuous-year', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:multilateral-institutions-mark-a-tumultuous-year');
    assert.ok(route);
  });
});
