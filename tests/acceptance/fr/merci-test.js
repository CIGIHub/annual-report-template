import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | fr/merci', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fr/merci', async function(assert) {
    await visit('/fr/merci');

    assert.equal(currentURL(), '/fr/merci');
  });

  test('should have correct meta', async function(assert) {
    await visit('/fr/merci');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Merci | Rapport annuel 2019',
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
      'https://www.cigionline.org/interactives/2019annualreport/fr/merci',
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
    await visit('/fr/merci');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=Rapport+annuel+2019+https://www.cigionline.org/interactives/2019annualreport/fr/merci');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/fr/merci');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/fr/merci');

    assert.dom('.content-slide').exists();
    assert.dom('.content-slide .slide-title h1').containsText('Merci');
    assert.dom('.content-slide .content-links').exists();
    assert.dom('.content-slide .content-links a').exists({ count: 3 });
    assert.dom('.content-slide .content-links a:nth-of-type(1) h4').containsText('Download');
    assert.dom('.content-slide .content-links a:nth-of-type(1) p').containsText('Thank You Link 1 French');
    assert.dom('.content-slide .content-links a:nth-of-type(2) h4').containsText('Subscribe');
    assert.dom('.content-slide .content-links a:nth-of-type(2) p').containsText('Thank You Link 2 French');
    assert.dom('.content-slide .content-links a:nth-of-type(3) h4').containsText('Partners');
    assert.dom('.content-slide .content-links a:nth-of-type(3) p').containsText('Thank You Link 3 French');
    assert.dom('.content-slide .content-links-mobile').exists();
    assert.dom('.content-slide .content-links-mobile a').exists({ count: 3 });
    assert.dom('.content-slide .content-links-mobile a:nth-of-type(1)').containsText('Thank You Link 1 French');
    assert.dom('.content-slide .content-links-mobile a:nth-of-type(2)').containsText('Thank You Link 2 French');
    assert.dom('.content-slide .content-links-mobile a:nth-of-type(3)').containsText('Thank You Link 3 French');
    assert.dom('.content-slide .paragraphs').exists();
    assert.dom('.content-slide .paragraphs p').exists({ count: 3 });
    assert.dom('.content-slide .paragraphs p:nth-of-type(1)').containsText('Thank You Paragraph 1 French');
    assert.dom('.content-slide .paragraphs p:nth-of-type(2)').containsText('Thank You Paragraph 2 French');
    assert.dom('.content-slide .paragraphs p:nth-of-type(3)').containsText('Thank You Paragraph 3 French');
    assert.dom('.background-row.show-for-medium .background-image').exists();
    assert.dom('.background-row.show-for-medium .background-image').hasAttribute('style', "background-image: url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/thank-you.jpg'), url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/thank-you-thumbnail.jpg');");
    assert.dom('.background-row.show-for-medium .background-image .hover-reveal').doesNotExist();

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').doesNotHaveClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('FR');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('EN');
    assert.dom('ul.dot-nav').exists();
    assert.dom('ul.dot-nav').doesNotHaveClass('light-background');
    assert.dom('button.scroll-arrow-up-btn').exists();
    assert.dom('button.scroll-arrow-up-btn').doesNotHaveClass('light-background');
    assert.dom('button.scroll-arrow-down-btn').doesNotExist();
    assert.dom('.footer').exists();
    assert.dom('.footer').doesNotHaveClass('footer-dark');
  });

  test('should transition to /fr/finances/auditors-report on scroll-arrow-up-btn click', async function(assert) {
    await visit('/fr/merci');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/finances/auditors-report');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/thank-you on intl-link click', async function(assert) {
    await visit('/fr/merci');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/thank-you');
    assert.dom('ul.dot-nav').exists();
  });
});
