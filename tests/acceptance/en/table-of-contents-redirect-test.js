import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/table of contents redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/table-of-contents', async function(assert) {
    await visit('/en/table-des-matieres');

    assert.equal(currentURL(), '/en/table-of-contents');
  });
});
