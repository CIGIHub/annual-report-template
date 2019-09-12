import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | exploring the four internets and the geopolitics of digital governance', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', async function(assert) {
    await visit('/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.equal(currentURL(), '/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
  });

  test('should have correct head title', async function(assert) {
    await visit('/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Exploring the "Four Internets" and the Geopolitics of Digital Governance | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'While the internet may have originally been designed to be open and transparent, its entrenchment in our daily lives has led to competing views on the role it should play in society and how it should be governed.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/exploring-the-four-internets-and-the-geopolitics-of-digital-governance/',
    );
  });
});
