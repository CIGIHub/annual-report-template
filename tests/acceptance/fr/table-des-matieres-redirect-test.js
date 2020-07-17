import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/table des matieres redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/table-des-matieres', async function(assert) {
    await visit('/fr/table-of-contents');

    assert.equal(currentURL(), '/fr/table-des-matieres');
  });
});
