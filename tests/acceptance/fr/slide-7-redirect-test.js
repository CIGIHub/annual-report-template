import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 7 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide7-fr', async function(assert) {
    await visit('/fr/slide7-en');

    assert.equal(currentURL(), '/fr/slide7-fr');
  });
});
