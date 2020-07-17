import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/message-du-president-du-conseil-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:fr/message-du-president-du-conseil-redirect');
    assert.ok(route);
  });
});
