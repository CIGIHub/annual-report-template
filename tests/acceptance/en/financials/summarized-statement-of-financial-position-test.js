import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | en/financials/summarized statement of financial position', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /en/financials/summarized-statement-of-financial-position', async function(assert) {
    await visit('/en/financials/summarized-statement-of-financial-position');

    assert.equal(currentURL(), '/en/financials/summarized-statement-of-financial-position');
  });

  test('should have correct meta', async function(assert) {
    await visit('/en/financials/summarized-statement-of-financial-position');

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
      'https://www.cigionline.org/interactives/annualreporttemplate/en/financials/summarized-statement-of-financial-position',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/annualreporttemplate/static/template/cigi-campus-og.jpg',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:locale"]').getAttribute('content'),
      'en_CA',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="fb:app_id"]').getAttribute('content'),
      '995454813805233',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="twitter:card"]').getAttribute('content'),
      'summary_large_image',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="twitter:site"]').getAttribute('content'),
      '@CIGIOnline',
    );
  });

  test('should have correct social links', async function(assert) {
    await visit('/en/financials/summarized-statement-of-financial-position');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/annualreporttemplate/en/financials/summarized-statement-of-financial-position');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/annualreporttemplate/en/financials/summarized-statement-of-financial-position');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/en/financials/summarized-statement-of-financial-position');

    assert.dom('.financials').exists();
    assert.dom('.financials h1').containsText('Financials');
    assert.dom('.financials .financials-menu').exists();
    assert.dom('.financials .financials-menu').containsText('Summarized Statement of Financial Position');
    assert.dom('.financials .financials-menu > a').exists({ count: 3 });
    assert.dom('.financials .financials-menu > a:nth-of-type(1)').containsText('Auditor’s Report');
    assert.dom('.financials .financials-menu > a:nth-of-type(2)').containsText('Summarized Statement of Revenues and Expenditures and Changes in Fund Balances');
    assert.dom('.financials .financials-menu > a:nth-of-type(3)').containsText('Notes');
    assert.dom('.financials .financials-menu .download-button').exists();
    assert.dom('.financials .financials-menu .download-button a').containsText('Download PDF');
    assert.dom('.financials .financials-content').exists();
    assert.dom('.financials .financials-content .table-title').exists();
    assert.dom('.financials .financials-content .table-title td').exists({ count: 5 });
    assert.dom('.financials .financials-content .table-title td:nth-of-type(1)').containsText('Summarized Statement of Financial Position as at July 31, 2019');
    assert.dom('.financials .financials-content .table-title td:nth-of-type(3)').containsText('2019 Total');
    assert.dom('.financials .financials-content .table-title td:nth-of-type(5)').containsText('2018 Total');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').hasClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('EN');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('FR');
    assert.dom('ul.dot-nav').exists();
    assert.dom('ul.dot-nav').hasClass('light-background');
    assert.dom('button.scroll-arrow-up-btn').exists();
    assert.dom('button.scroll-arrow-up-btn').hasClass('light-background');
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').hasClass('light-background');
    assert.dom('.footer').exists();
    assert.dom('.footer').hasClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').doesNotExist();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /en/timeline on scroll-arrow-up-btn click', async function(assert) {
    await visit('/en/financials/summarized-statement-of-financial-position');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/timeline');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/thank-you on scroll-arrow-down-btn click', async function(assert) {
    await visit('/en/financials/summarized-statement-of-financial-position');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/thank-you');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/finances/sommaire-de-la-situation-financiere on intl-link click', async function(assert) {
    await visit('/en/financials/summarized-statement-of-financial-position');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/finances/sommaire-de-la-situation-financiere');
    assert.dom('ul.dot-nav').exists();
  });
});
