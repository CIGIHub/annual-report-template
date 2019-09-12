import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | braiding legal orders', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /braiding-legal-orders', async function(assert) {
    await visit('/braiding-legal-orders');

    assert.equal(currentURL(), '/braiding-legal-orders');
  });

  test('should have correct head title', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Braiding Legal Orders | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Braiding Legal Orders is the culmination of the ILRP’s research over the past three years on the implementation in Canada of the United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP).',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/braiding-legal-orders');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders/',
    );
  });
});
