import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 5 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide5-r', async function(assert) {
    await visit('/fr/slide5-en');

    assert.equal(currentURL(), '/fr/slide5-fr');
  });
});
