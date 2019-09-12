import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | a-bretton-woods-moment-for-the-digital-age', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:a-bretton-woods-moment-for-the-digital-age');
    assert.ok(route);
  });
});
