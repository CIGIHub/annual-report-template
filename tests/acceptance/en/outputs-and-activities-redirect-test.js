import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/outputs and activities redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/outputs-and-activities', async function(assert) {
    await visit('/en/publications-et-activites');

    assert.equal(currentURL(), '/en/outputs-and-activities');
  });
});
