import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/finances/notes-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/finances/notes-redirect');
    assert.ok(route);
  });
});
