import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fr', async function(assert) {
    await visit('/fr');

    assert.equal(currentURL(), '/fr');
  });

  test('should have correct meta', async function(assert) {
    await visit('/fr');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Rapport annuel 2019',
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
      'https://www.cigionline.org/interactives/annualreporttemplate/fr',
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
    await visit('/fr');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=Rapport+annuel+2019+https://www.cigionline.org/interactives/annualreporttemplate/fr');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/annualreporttemplate/fr');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/fr');

    assert.dom('.home-page').exists();
    assert.dom('.home-page .intro-logo').exists();
    assert.dom('.home-page .intro-logo .year').containsText('2019');
    assert.dom('.home-page .intro-logo .text').containsText('Rapport annuel');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').doesNotHaveClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('FR');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('EN');
    assert.dom('ul.dot-nav').doesNotExist();
    assert.dom('button.scroll-arrow-up-btn').doesNotExist();
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').doesNotHaveClass('light-background');
    assert.dom('.footer').exists();
    assert.dom('.footer').doesNotHaveClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').doesNotExist();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transiton to /fr/table-des-matieres on scroll-arrow-down-btn click', async function(assert) {
    await visit('/fr');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/table-des-matieres');
    assert.dom('ul.dot-nav').doesNotExist();
  });

  test('should transition to /en on intl-link click', async function(assert) {
    await visit('/fr');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/en');
    assert.dom('ul.dot-nav').doesNotExist();
  });
});
