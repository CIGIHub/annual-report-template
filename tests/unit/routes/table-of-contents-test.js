import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | table-of-contents', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:table-of-contents');
    assert.ok(route);
  });
});
