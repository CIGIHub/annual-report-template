import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | a clarion call for protecting the worlds refugees', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /a-clarion-call-for-protecting-the-worlds-refugees', async function(assert) {
    await visit('/a-clarion-call-for-protecting-the-worlds-refugees');

    assert.equal(currentURL(), '/a-clarion-call-for-protecting-the-worlds-refugees');
  });

  test('should have correct head title', async function(assert) {
    await visit('/a-clarion-call-for-protecting-the-worlds-refugees');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'A Clarion Call for Protecting the World’s Refugees | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/a-clarion-call-for-protecting-the-worlds-refugees');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Launched at the United Nations in New York City, the World Refugee Council’s report laid out 55 concrete actions to protect refugees and internally displaced persons and support the countries and local communities that host them.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/a-clarion-call-for-protecting-the-worlds-refugees');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/a-clarion-call-for-protecting-the-worlds-refugees');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/a-clarion-call-for-protecting-the-worlds-refugees/',
    );
  });

  test('should transition to /building-closer-ties-between-canada-and-india on scroll-arrow-up-btn click', async function(assert) {
    await visit('/a-clarion-call-for-protecting-the-worlds-refugees');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/building-closer-ties-between-canada-and-india');
  });

  test('should transition to /multilateral-institutions-mark-a-tumultuous-year on scroll-arrow-down-btn click', async function(assert) {
    await visit('/a-clarion-call-for-protecting-the-worlds-refugees');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/multilateral-institutions-mark-a-tumultuous-year');
  });
});
