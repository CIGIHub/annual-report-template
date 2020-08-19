import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | fr/publications-et-activites', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:fr/publications-et-activites');
    assert.ok(controller);
  });
});
