import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/publications et activites redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/publications-et-activites', async function(assert) {
    await visit('/fr/outputs-and-activities');

    assert.equal(currentURL(), '/fr/publications-et-activites');
  });
});
