import { currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/en');
  });
});
