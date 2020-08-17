import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | fr/publications et activites', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fr/publications-et-activites', async function(assert) {
    await visit('/fr/publications-et-activites');

    assert.equal(currentURL(), '/fr/publications-et-activites');
  });

  test('should have correct meta', async function(assert) {
    await visit('/fr/publications-et-activites');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Publications et activités | Rapport Annuel du CIGI 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Découvrez une année entière de publications et de textes d’opinion en consultant Rapport annuel interactif du CIGI.',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      'Rapport Annuel du CIGI 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/fr/publications-et-activites',
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
    await visit('/fr/publications-et-activites');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=Rapport+Annuel+du+CIGI+2019+https://www.cigionline.org/interactives/2019annualreport/fr/publications-et-activites');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/fr/publications-et-activites');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/fr/publications-et-activites');

    assert.dom('.outputs-activities').exists();
    assert.dom('.outputs-activities .grid-x').exists({ count: 4 });
    assert.dom('.outputs-activities .grid-x:nth-of-type(1) h1').containsText('Publications et activités');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu').exists();
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu').containsText('Publications');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu button.view-opinions-btn').containsText('Textes d’opinion');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu button.view-events-btn').containsText('Événements');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .outputs-activities-pagination').exists();
    assert.dom('.outputs-activities .grid-x:nth-of-type(3) .cell').exists({ count: 16 });
    assert.dom('.outputs-activities .grid-x:nth-of-type(4) .page-count').containsText('Page 1 de 6');

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

  test('should transition to /fr/slide13-fr on scroll-arrow-up-btn click', async function(assert) {
    await visit('/fr/publications-et-activites');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/slide13-fr');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/timeline on scroll-arrow-down-btn click', async function(assert) {
    await visit('/fr/publications-et-activites');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/timeline');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/outputs-and-activities on intl-link click', async function(assert) {
    await visit('/fr/publications-et-activites');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/outputs-and-activities');
    assert.dom('ul.dot-nav').exists();
  });

  test('should have correct menu buttons on /fr/publications-et-activites', async function(assert) {
    await visit('/fr/publications-et-activites');

    assert.dom('.view-publications-btn').doesNotExist();
    assert.dom('.view-opinions-btn').exists();
    assert.dom('.view-opinions-btn').containsText('Textes d’opinion');
    assert.dom('.view-events-btn').exists();
    assert.dom('.view-events-btn').containsText('Événements');
  });

  test('should have correct menu buttons on /fr/publications-et-activites?type=publications', async function(assert) {
    await visit('/fr/publications-et-activites?type=publications');

    assert.dom('.view-publications-btn').doesNotExist();
    assert.dom('.view-opinions-btn').exists();
    assert.dom('.view-opinions-btn').containsText('Textes d’opinion');
    assert.dom('.view-events-btn').exists();
    assert.dom('.view-events-btn').containsText('Événements');
  });

  test('should have correct menu buttons on /fr/publications-et-activites?type=opinions', async function(assert) {
    await visit('/fr/publications-et-activites?type=opinions');

    assert.dom('.view-publications-btn').exists();
    assert.dom('.view-publications-btn').containsText('Publications');
    assert.dom('.view-opinions-btn').doesNotExist();
    assert.dom('.view-events-btn').exists();
    assert.dom('.view-events-btn').containsText('Événements');
  });

  test('should have correct menu buttons on /fr/publications-et-activites?type=events', async function(assert) {
    await visit('/fr/publications-et-activites?type=events');

    assert.dom('.view-publications-btn').exists();
    assert.dom('.view-publications-btn').containsText('Publications');
    assert.dom('.view-opinions-btn').exists();
    assert.dom('.view-opinions-btn').containsText('Textes d’opinion');
    assert.dom('.view-events-btn').doesNotExist();
  });
});
