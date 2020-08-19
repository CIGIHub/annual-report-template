import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 13 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide13-fr', async function(assert) {
    await visit('/fr/slide13-en');

    assert.equal(currentURL(), '/fr/slide13-fr');
  });
});
