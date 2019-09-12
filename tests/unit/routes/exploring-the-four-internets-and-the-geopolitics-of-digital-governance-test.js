import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    assert.ok(route);
  });
});
