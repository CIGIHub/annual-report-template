import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | building closer ties between canada and india', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /building-closer-ties-between-canada-and-india', async function(assert) {
    await visit('/building-closer-ties-between-canada-and-india');

    assert.equal(currentURL(), '/building-closer-ties-between-canada-and-india');
  });

  test('should have correct head title', async function(assert) {
    await visit('/building-closer-ties-between-canada-and-india');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Building Closer Ties between Canada and India | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/building-closer-ties-between-canada-and-india');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'With India now one of the world’s fastest-growing economies and Canada seeking to diversity its trade relationships, CIGI has partnered with Gateway House, a foreign policy think tank in Mumbai, on the Canada-India Track 1.5 Dialogue on Innovation, Growth and Prosperity, a three-year initiative to explore areas for closer relations between the two countries.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/building-closer-ties-between-canada-and-india');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/building-closer-ties-between-canada-and-india');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/building-closer-ties-between-canada-and-india/',
    );
  });

  test('should transition to /presidents-message on scroll-arrow-up-btn click', async function(assert) {
    await visit('/building-closer-ties-between-canada-and-india');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/presidents-message');
  });

  test('should transition to /a-clarion-call-for-protecting-the-worlds-refugees on scroll-arrow-down-btn click', async function(assert) {
    await visit('/building-closer-ties-between-canada-and-india');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/a-clarion-call-for-protecting-the-worlds-refugees');
  });
});
