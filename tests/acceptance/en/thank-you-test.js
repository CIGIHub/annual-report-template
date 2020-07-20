import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | en/thank you', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /en/thank-you', async function(assert) {
    await visit('/en/thank-you');

    assert.equal(currentURL(), '/en/thank-you');
  });

  test('should have correct meta', async function(assert) {
    await visit('/en/thank-you');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Thank You | 2019 CIGI Annual Report',
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
      'https://www.cigionline.org/interactives/2019annualreport/en/thank-you',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/thank-you-og.jpg',
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
    await visit('/en/thank-you');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/en/thank-you');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/en/thank-you');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/en/thank-you');

    assert.dom('.content-slide').exists();
    assert.dom('.content-slide .slide-title h1').containsText('Thank You');
    assert.dom('.content-slide .content-links').exists();
    assert.dom('.content-slide .content-links a').exists({ count: 3 });
    assert.dom('.content-slide .content-links a:nth-of-type(1) h4').containsText('Download');
    assert.dom('.content-slide .content-links a:nth-of-type(1) p').containsText('Thank You Link 1 English');
    assert.dom('.content-slide .content-links a:nth-of-type(2) h4').containsText('Subscribe');
    assert.dom('.content-slide .content-links a:nth-of-type(2) p').containsText('Thank You Link 2 English');
    assert.dom('.content-slide .content-links a:nth-of-type(3) h4').containsText('Partners');
    assert.dom('.content-slide .content-links a:nth-of-type(3) p').containsText('Thank You Link 3 English');
    assert.dom('.content-slide .content-links-mobile').exists();
    assert.dom('.content-slide .content-links-mobile a').exists({ count: 3 });
    assert.dom('.content-slide .content-links-mobile a:nth-of-type(1)').containsText('Thank You Link 1 English');
    assert.dom('.content-slide .content-links-mobile a:nth-of-type(2)').containsText('Thank You Link 2 English');
    assert.dom('.content-slide .content-links-mobile a:nth-of-type(3)').containsText('Thank You Link 3 English');
    assert.dom('.content-slide .paragraphs').exists();
    assert.dom('.content-slide .paragraphs p').exists({ count: 3 });
    assert.dom('.content-slide .paragraphs p:nth-of-type(1)').containsText('Thank You Paragraph 1 English');
    assert.dom('.content-slide .paragraphs p:nth-of-type(2)').containsText('Thank You Paragraph 2 English');
    assert.dom('.content-slide .paragraphs p:nth-of-type(3)').containsText('Thank You Paragraph 3 English');
    assert.dom('.background-row.show-for-medium .background-image').exists();
    assert.dom('.background-row.show-for-medium .background-image').hasAttribute('style', "background-image: url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/thank-you.jpg'), url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/thank-you-thumbnail.jpg');");
    assert.dom('.background-row.show-for-medium .background-image .hover-reveal').doesNotExist();

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
    assert.dom('button.scroll-arrow-down-btn').doesNotExist();
    assert.dom('.footer').exists();
    assert.dom('.footer').doesNotHaveClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').exists();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /en/financials/auditors-report on scroll-arrow-up-btn click', async function(assert) {
    await visit('/en/thank-you');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/financials/auditors-report');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/merci on intl-link click', async function(assert) {
    await visit('/en/thank-you');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/merci');
    assert.dom('ul.dot-nav').exists();
  });
});
