import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('should have correct meta', async function(assert) {
    await visit('/');

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
      'https://www.cigionline.org/interactives/2019annualreport/',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
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
    await visit('/');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/');

    assert.dom('.home-page').exists();
    assert.dom('.home-page .intro-logo').exists();
    assert.dom('.home-page .intro-logo .year').containsText('2019');
    assert.dom('.home-page .intro-logo .text').containsText('Annual Report');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').doesNotHaveClass('light-background');
    assert.dom('ul.dot-nav').doesNotExist();
    assert.dom('button.scroll-arrow-up-btn').doesNotExist();
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').doesNotHaveClass('light-background');
    assert.dom('.footer').doesNotExist();
  });

  test('should transition to /table-of-contents on scroll-arrow-down-btn click', async function(assert) {
    await visit('/');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/table-of-contents');

    // Should still not display dot-nav
    assert.dom('ul.dot-nav').doesNotExist();
  });
});
