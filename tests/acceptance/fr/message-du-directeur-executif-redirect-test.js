import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/message du directeur executif redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/message-du-directeur-executif', async function(assert) {
    await visit('/fr/presidents-message');

    assert.equal(currentURL(), '/fr/message-du-directeur-executif');
  });
});
