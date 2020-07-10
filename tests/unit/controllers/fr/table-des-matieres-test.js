import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | fr/table-des-matieres', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:fr/table-des-matieres');
    assert.ok(controller);
  });
});
