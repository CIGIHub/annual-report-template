import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | a-bretton-woods-moment-for-the-digital-age', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:a-bretton-woods-moment-for-the-digital-age');
    assert.ok(controller);
  });
});
