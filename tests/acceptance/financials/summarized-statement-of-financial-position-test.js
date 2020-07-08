import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | financials/summarized statement of financial position', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /financials/summarized-statement-of-financial-position', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');

    assert.equal(currentURL(), '/financials/summarized-statement-of-financial-position');
  });

  test('should have correct head title', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Financials | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-financial-position/',
    );
  });

  test('should have correct twitter share link', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-financial-position');
  });

  test('should have correct linkedin share link', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');

    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/summarized-statement-of-financial-position');
  });

  test('should transition to /timeline on scroll-arrow-up-btn click', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/timeline');
  });

  test('should transition to /thank-you on scroll-arrow-down-btn click', async function(assert) {
    await visit('/financials/summarized-statement-of-financial-position');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/thank-you');
  });
});
