import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    assert.ok(controller);
  });
});
