import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | outputs and activities', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /outputs-and-activities', async function(assert) {
    await visit('/outputs-and-activities');

    assert.equal(currentURL(), '/outputs-and-activities');
  });

  test('should have correct meta', async function(assert) {
    await visit('/outputs-and-activities');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Outputs and Activities | 2019 CIGI Annual Report',
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
      'https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities/',
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
    await visit('/outputs-and-activities');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/outputs-and-activities');

    assert.dom('.outputs-activities').exists();
    assert.dom('.outputs-activities .grid-x').exists({ count: 4 });
    assert.dom('.outputs-activities .grid-x:nth-of-type(1) h1').containsText('Outputs and Activities');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu').exists();
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu').containsText('Publications');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu button.view-opinions-btn').containsText('Opinions');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .publications-menu button.view-events-btn').containsText('Events');
    assert.dom('.outputs-activities .grid-x:nth-of-type(2) .outputs-activities-pagination').exists();
    assert.dom('.outputs-activities .grid-x:nth-of-type(3) .cell').exists({ count: 16 });
    assert.dom('.outputs-activities .grid-x:nth-of-type(4) .page-count').containsText('Page 1 of 6');

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

  test('should transition to /slide13 on scroll-arrow-up-btn click', async function(assert) {
    await visit('/outputs-and-activities');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/slide13');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /timeline on scroll-arrow-down-btn click', async function(assert) {
    await visit('/outputs-and-activities');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/timeline');
    assert.dom('ul.dot-nav').exists();
  });

  test('should have correct view buttons on /outputs-and-activities', async function(assert) {
    await visit('/outputs-and-activities');
    await finishRender();

    assert.dom('.view-publications-btn').doesNotExist();
    assert.dom('.view-opinions-btn').exists();
    assert.dom('.view-opinions-btn').containsText('Opinions');
    assert.dom('.view-events-btn').exists();
    assert.dom('.view-events-btn').containsText('Events');
  });

  test('should have correct view buttons on /outputs-and-activities?type=publications', async function(assert) {
    await visit('/outputs-and-activities?type=publications');
    await finishRender();

    assert.dom('.view-publications-btn').doesNotExist();
    assert.dom('.view-opinions-btn').exists();
    assert.dom('.view-opinions-btn').containsText('Opinions');
    assert.dom('.view-events-btn').exists();
    assert.dom('.view-events-btn').containsText('Events');
  });

  test('should have correct view buttons on /outputs-and-activities?type=opinions', async function(assert) {
    await visit('/outputs-and-activities?type=opinions');
    await finishRender();

    assert.dom('.view-publications-btn').exists();
    assert.dom('.view-publications-btn').containsText('Publications');
    assert.dom('.view-opinions-btn').doesNotExist();
    assert.dom('.view-events-btn').exists();
    assert.dom('.view-events-btn').containsText('Events');
  });

  test('should have correct view buttons on /outputs-and-activities?type=events', async function(assert) {
    await visit('/outputs-and-activities?type=events');
    await finishRender();

    assert.dom('.view-publications-btn').exists();
    assert.dom('.view-publications-btn').containsText('Publications');
    assert.dom('.view-opinions-btn').exists();
    assert.dom('.view-opinions-btn').containsText('Opinions');
    assert.dom('.view-events-btn').doesNotExist();
  });
});
