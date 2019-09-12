import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | thank you', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /thank-you', async function(assert) {
    await visit('/thank-you');

    assert.equal(currentURL(), '/thank-you');
  });

  test('should have correct head title', async function(assert) {
    await visit('/thank-you');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Thank You | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/thank-you');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/thank-you');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/thank-you');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/thank-you/',
    );
  });
});
