import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /en', async function(assert) {
    await visit('/en');

    assert.equal(currentURL(), '/en');
  });

  test('should have correct meta', async function(assert) {
    await visit('/en');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      '2019 CIGI Annual Report',
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
      'https://www.cigionline.org/interactives/2019annualreport/en',
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
    await visit('/en');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/en');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/en');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/en');

    assert.dom('.home-page').exists();
    assert.dom('.home-page .intro-logo').exists();
    assert.dom('.home-page .intro-logo .year').containsText('2019');
    assert.dom('.home-page .intro-logo .text').containsText('Annual Report');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').doesNotHaveClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('EN');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('FR');
    assert.dom('ul.dot-nav').doesNotExist();
    assert.dom('button.scroll-arrow-up-btn').doesNotExist();
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').doesNotHaveClass('light-background');
    assert.dom('.footer').exists();
    assert.dom('.footer').doesNotHaveClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').doesNotExist();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /en/table-of-contents on scroll-arrow-down-btn click', async function(assert) {
    await visit('/en');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/table-of-contents');
    assert.dom('ul.dot-nav').doesNotExist();
  });

  test('should transition to /fr on intl-link click', async function(assert) {
    await visit('/en');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr');
    assert.dom('ul.dot-nav').doesNotExist();
  });
});
