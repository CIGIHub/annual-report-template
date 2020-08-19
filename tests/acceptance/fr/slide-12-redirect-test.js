import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 12 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide12-fr', async function(assert) {
    await visit('/fr/slide12-en');

    assert.equal(currentURL(), '/fr/slide12-fr');
  });
});
