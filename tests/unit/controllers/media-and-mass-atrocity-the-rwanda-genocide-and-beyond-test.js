import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    assert.ok(controller);
  });
});
