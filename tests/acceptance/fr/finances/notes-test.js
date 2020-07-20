import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | fr/finances/notes', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fr/finances/notes', async function(assert) {
    await visit('/fr/finances/notes');

    assert.equal(currentURL(), '/fr/finances/notes');
  });

  test('should have correct meta', async function(assert) {
    await visit('/fr/finances/notes');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Finances | Rapport annuel 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Description French',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      'Rapport annuel 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/fr/finances/notes',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/2019annualreport/static/template/cigi-campus-og.jpg',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:locale"]').getAttribute('content'),
      'fr_CA',
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
    await visit('/fr/finances/notes');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=Rapport+annuel+2019+https://www.cigionline.org/interactives/2019annualreport/fr/finances/notes');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/fr/finances/notes');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/fr/finances/notes');

    assert.dom('.financials').exists();
    assert.dom('.financials h1').containsText('Finances');
    assert.dom('.financials .financials-menu').exists();
    assert.dom('.financials .financials-menu').containsText('Notes');
    assert.dom('.financials .financials-menu > a').exists({ count: 3 });
    assert.dom('.financials .financials-menu > a:nth-of-type(1)').containsText('Auditor’s Report');
    assert.dom('.financials .financials-menu > a:nth-of-type(2)').containsText('Sommaire de la situation financière');
    assert.dom('.financials .financials-menu > a:nth-of-type(3)').containsText('Sommaire des recettes et des dépenses et évolution du solde du fonds');
    assert.dom('.financials .financials-menu .download-button').exists();
    assert.dom('.financials .financials-menu .download-button a').containsText('Download PDF');
    assert.dom('.financials .financials-content').exists();
    assert.dom('.financials .financials-content h4').containsText('Notes to the Summary Financial Statements');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').hasClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('FR');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('EN');
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

  test('should transition to /fr/timeline on scroll-arrow-up-btn click', async function(assert) {
    await visit('/fr/finances/notes');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/timeline');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/merci on scroll-arrow-down-btn click', async function(assert) {
    await visit('/fr/finances/notes');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/merci');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/financials/notes on intl-link click', async function(assert) {
    await visit('/fr/finances/notes');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/financials/notes');
    assert.dom('ul.dot-nav').exists();
  });
});
