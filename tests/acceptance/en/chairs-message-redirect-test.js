import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/chairs message redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/chairs-message', async function(assert) {
    await visit('/en/message-du-president-du-conseil');

    assert.equal(currentURL(), '/en/chairs-message');
  });
});
