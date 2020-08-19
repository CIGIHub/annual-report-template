import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 2 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide2-fr', async function(assert) {
    await visit('/fr/slide2-en');

    assert.equal(currentURL(), '/fr/slide2-fr');
  });
});
