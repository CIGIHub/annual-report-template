import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | financials/notes', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /financials/notes', async function(assert) {
    await visit('/financials/notes');

    assert.equal(currentURL(), '/financials/notes');
  });

  test('should have correct meta', async function(assert) {
    await visit('/financials/notes');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Financials | 2019 CIGI Annual Report',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/notes/',
    );
  });

  test('should have correct social links', async function(assert) {
    await visit('/financials/notes');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/notes');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/notes');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/financials/notes');

    assert.dom('.financials').exists();
    assert.dom('.financials h1').containsText('Financials');
    assert.dom('.financials .financials-menu').exists();
    assert.dom('.financials .financials-menu').containsText('Notes');
    assert.dom('.financials .financials-menu > a').exists({ count: 3 });
    assert.dom('.financials .financials-menu > a:nth-of-type(1)').containsText('Auditor’s Report');
    assert.dom('.financials .financials-menu > a:nth-of-type(2)').containsText('Summarized Statement of Financial Position');
    assert.dom('.financials .financials-menu > a:nth-of-type(3)').containsText('Summarized Statement of Revenues and Expenditures and Changes in Fund Balances');
    assert.dom('.financials .financials-menu .download-button').exists();
    assert.dom('.financials .financials-menu .download-button a').containsText('Download PDF');
    assert.dom('.financials .financials-content').exists();
    assert.dom('.financials .financials-content h4').containsText('Notes to the Summary Financial Statements');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').hasClass('light-background');
    assert.dom('ul.dot-nav').exists();
    assert.dom('ul.dot-nav').hasClass('light-background');
    assert.dom('button.scroll-arrow-up-btn').exists();
    assert.dom('button.scroll-arrow-up-btn').hasClass('light-background');
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').hasClass('light-background');
    assert.dom('.footer').doesNotExist();
  });

  test('should transition to /timeline on scroll-arrow-up-btn click', async function(assert) {
    await visit('/financials/notes');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/timeline');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /thank-you on scroll-arrow-down-btn click', async function(assert) {
    await visit('/financials/notes');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/thank-you');
    assert.dom('ul.dot-nav').exists();
  });
});
