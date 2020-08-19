import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 9 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide9-fr', async function(assert) {
    await visit('/fr/slide9-en');

    assert.equal(currentURL(), '/fr/slide9-fr');
  });
});
