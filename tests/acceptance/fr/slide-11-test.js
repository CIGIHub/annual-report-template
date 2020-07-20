import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | fr/slide 11', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fr/slide11-fr', async function(assert) {
    await visit('/fr/slide11-fr');

    assert.equal(currentURL(), '/fr/slide11-fr');
  });

  test('should have correct meta', async function(assert) {
    await visit('/fr/slide11-fr');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Slide 11 Title French | Rapport annuel 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Slide 11 Description French',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      'Rapport annuel 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/fr/slide11-fr',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/slide-11-og.jpg',
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
    await visit('/fr/slide11-fr');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=Rapport+annuel+2019+https://www.cigionline.org/interactives/2019annualreport/fr/slide11-fr');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/fr/slide11-fr');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/fr/slide11-fr');

    assert.dom('.slide-content').exists();
    assert.dom('.slide-content .slide-title h1').containsText('Slide 11 Title French');
    assert.dom('.slide-content .content-links').exists();
    assert.dom('.slide-content .content-links a').exists({ count: 3 });
    assert.dom('.slide-content .content-links a:nth-of-type(1) .content-copy h4').containsText('Video');
    assert.dom('.slide-content .content-links a:nth-of-type(1) .content-copy p').containsText('Slide 11 Link 1 French');
    assert.dom('.slide-content .content-links a:nth-of-type(2) .content-copy h4').containsText('Paper Series');
    assert.dom('.slide-content .content-links a:nth-of-type(2) .content-copy p').containsText('Slide 11 Link 2 French');
    assert.dom('.slide-content .content-links a:nth-of-type(3) .content-copy h4').containsText('Article');
    assert.dom('.slide-content .content-links a:nth-of-type(3) .content-copy p').containsText('Slide 11 Link 3 French');
    assert.dom('.slide-content .content-links-mobile').exists();
    assert.dom('.slide-content .content-links-mobile a').exists({ count: 3 });
    assert.dom('.slide-content .content-links-mobile a:nth-of-type(1)').containsText('Slide 11 Link 1 French');
    assert.dom('.slide-content .content-links-mobile a:nth-of-type(2)').containsText('Slide 11 Link 2 French');
    assert.dom('.slide-content .content-links-mobile a:nth-of-type(3)').containsText('Slide 11 Link 3 French');
    assert.dom('.slide-content .paragraphs').exists();
    assert.dom('.slide-content .paragraphs p').exists({ count: 3 });
    assert.dom('.slide-content .paragraphs p:nth-of-type(1)').containsText('Slide 11 Paragraph 1 French');
    assert.dom('.slide-content .paragraphs p:nth-of-type(2)').containsText('Slide 11 Paragraph 2 French');
    assert.dom('.slide-content .paragraphs p:nth-of-type(3)').containsText('Slide 11 Paragraph 3 French');
    assert.dom('.background-image').exists();
    assert.dom('.background-image').hasAttribute('style', "background-image: url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/slide-11.jpg'), url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/slide-11-thumbnail.jpg');");
    assert.dom('.background-image .hover-reveal').exists();
    assert.dom('.background-image .hover-reveal .quote').exists();
    assert.dom('.background-image .hover-reveal .quote h3.hover-reveal-quote').containsText('Slide 11 Quote French');
    assert.dom('.background-image .hover-reveal .quote h4.hover-reveal-quote-source').containsText('Slide 11 Source French');

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
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').doesNotHaveClass('light-background');
    assert.dom('.footer').exists();
    assert.dom('.footer').doesNotHaveClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').exists();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /fr/slide10-fr on scroll-arrow-up-btn click', async function(assert) {
    await visit('/fr/slide11-fr');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/slide10-fr');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/slide12-fr on scroll-arrow-down-btn click', async function(assert) {
    await visit('/fr/slide11-fr');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/slide12-fr');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/slide11-en on intl-link click', async function(assert) {
    await visit('/fr/slide11-fr');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/slide11-en');
    assert.dom('ul.dot-nav').exists();
  });
});
