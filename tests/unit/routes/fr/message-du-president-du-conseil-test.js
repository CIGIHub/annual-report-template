import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/message-du-president-du-conseil', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fr/message-du-president-du-conseil');
    assert.ok(route);
  });
});
