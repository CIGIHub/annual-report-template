import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | en/timeline', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /en/timeline', async function(assert) {
    await visit('/en/timeline');

    assert.equal(currentURL(), '/en/timeline');
  });

  test('should have correct meta', async function(assert) {
    await visit('/en/timeline');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Explore Timeline | 2019 CIGI Annual Report',
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
      'https://www.cigionline.org/interactives/2019annualreport/en/timeline',
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
    await visit('/en/timeline');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/en/timeline');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/en/timeline');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/en/timeline');

    assert.dom('.timeline-container.show-for-large').exists();
    assert.dom('.timeline-container.show-for-large h1').containsText('Explore Timeline');
    assert.dom('.timeline-container.show-for-large .opinions-label').exists();
    assert.dom('.timeline-container.show-for-large .opinions-label .timeline-bubble-label').containsText('Opinions');
    assert.dom('.timeline-container.show-for-large .publications-label').exists();
    assert.dom('.timeline-container.show-for-large .publications-label .timeline-bubble-label').containsText('Publications');
    assert.dom('.timeline-container.show-for-large .events-label').exists();
    assert.dom('.timeline-container.show-for-large .events-label .timeline-bubble-label').containsText('Events');
    assert.dom('.timeline-search-container').exists();
    assert.dom('.timeline-search-container .timeline-search').exists();
    assert.dom('.timeline-search-container .timeline-search input').exists();
    assert.dom('.timeline-search-container .timeline-search input').hasAttribute('placeholder', 'Search');
    assert.dom('.timeline-container.hide-for-large').exists();
    assert.dom('.timeline-container.hide-for-large h1').containsText('Explore Timeline');
    assert.dom('.timeline-container.hide-for-large p').containsText('The interactive timeline cannot be displayed on your mobile device. For the best experience, please view on a desktop browser.');
    assert.dom('.timeline').exists();
    assert.dom('.timeline p.date-marker-beg').containsText('2018');
    assert.dom('.timeline p.date-marker-end').containsText('2019');
    assert.dom('.timeline .ticks').exists();
    assert.dom('.timeline .ticks .tick').exists({ count: 25 });
    assert.dom('.timeline .ticks .tick:nth-of-type(1)').containsText('AUG');
    assert.dom('.timeline .ticks .tick:nth-of-type(3)').containsText('SEP');
    assert.dom('.timeline .ticks .tick:nth-of-type(5)').containsText('OCT');
    assert.dom('.timeline .ticks .tick:nth-of-type(7)').containsText('NOV');
    assert.dom('.timeline .ticks .tick:nth-of-type(9)').containsText('DEC');
    assert.dom('.timeline .ticks .tick:nth-of-type(11)').containsText('JAN');
    assert.dom('.timeline .ticks .tick:nth-of-type(13)').containsText('FEB');
    assert.dom('.timeline .ticks .tick:nth-of-type(15)').containsText('MAR');
    assert.dom('.timeline .ticks .tick:nth-of-type(17)').containsText('APR');
    assert.dom('.timeline .ticks .tick:nth-of-type(19)').containsText('MAY');
    assert.dom('.timeline .ticks .tick:nth-of-type(21)').containsText('JUN');
    assert.dom('.timeline .ticks .tick:nth-of-type(23)').containsText('JUL');
    assert.dom('.timeline .ticks .tick:nth-of-type(25)').containsText('AUG');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').doesNotHaveClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('EN');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('FR');
    assert.dom('ul.dot-nav').exists();
    assert.dom('ul.dot-nav').doesNotHaveClass('light-background');
    assert.dom('button.scroll-arrow-up-btn').exists();
    assert.dom('button.scroll-arrow-up-btn').doesNotHaveClass('light-background');
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').doesNotHaveClass('light-background');
    assert.dom('.footer').exists();
    assert.dom('.footer').doesNotHaveClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').doesNotExist();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /en/outputs-and-activities on scroll-arrow-up-btn click', async function(assert) {
    await visit('/en/timeline');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/outputs-and-activities');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/financials/auditors-report on scroll-arrow-down-btn click', async function(assert) {
    await visit('/en/timeline');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/financials/auditors-report');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/timeline on intl-link click', async function(assert) {
    await visit('/en/timeline');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/timeline');
    assert.dom('ul.dot-nav').exists();
  });
});
