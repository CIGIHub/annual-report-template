import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/presidents message redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/presidents-message', async function(assert) {
    await visit('/en/message-du-directeur-executif');

    assert.equal(currentURL(), '/en/presidents-message');
  });
});
