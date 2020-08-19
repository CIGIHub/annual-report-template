import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/message du president du conseil redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/message-du-president-du-conseil', async function(assert) {
    await visit('/fr/chairs-message');

    assert.equal(currentURL(), '/fr/message-du-president-du-conseil');
  });
});
