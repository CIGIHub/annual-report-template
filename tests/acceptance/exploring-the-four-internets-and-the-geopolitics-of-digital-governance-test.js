import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

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

  test('should transition to /informing-the-debate-around-internet-security-and-trust on scroll-arrow-up-btn click', async function(assert) {
    await visit('/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/informing-the-debate-around-internet-security-and-trust');
  });

  test('should transition to /curbing-cultural-appropriation-through-intellectual-property-law on scroll-arrow-down-btn click', async function(assert) {
    await visit('/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/curbing-cultural-appropriation-through-intellectual-property-law');
  });
});
