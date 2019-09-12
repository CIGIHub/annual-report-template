import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    assert.ok(route);
  });
});
