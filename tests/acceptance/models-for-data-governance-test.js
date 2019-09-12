import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | models for data governance', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /models-for-data-governance', async function(assert) {
    await visit('/models-for-data-governance');

    assert.equal(currentURL(), '/models-for-data-governance');
  });

  test('should have correct head title', async function(assert) {
    await visit('/models-for-data-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Models for Data Governance | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/models-for-data-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Data trusts are occupying a politically contested space and the private sector is taking note. As a result, the public dialogue is being shaped by large, well-financed interests trying to maximize data sharing. But, large-scale privately-driven data sharing is not the only way — or even the most important way — to use data trusts.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/models-for-data-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/models-for-data-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/models-for-data-governance/',
    );
  });
});
