import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | en/presidents message', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /en/presidents-message', async function(assert) {
    await visit('/en/presidents-message');

    assert.equal(currentURL(), '/en/presidents-message');
  });

  test('should have correct meta', async function(assert) {
    await visit('/en/presidents-message');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'President’s Message | 2019 CIGI Annual Report',
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
      'https://www.cigionline.org/interactives/annualreporttemplate/en/presidents-message',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/annualreporttemplate/static/template/slides/presidents-message-og.jpg',
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
    await visit('/en/presidents-message');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/annualreporttemplate/en/presidents-message');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/annualreporttemplate/en/presidents-message');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/en/presidents-message');

    assert.dom('.chairs-message').exists();
    assert.dom('.chairs-message .grid-x:nth-of-type(1) h1').containsText('President’s Message');
    assert.dom('.chairs-message .grid-x .medium-6').exists({ count: 2 });
    assert.dom('.chairs-message .grid-x .medium-6 p').exists({ count: 6 });
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(1)').containsText('PM Paragraph 1 English');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(2)').containsText('PM Paragraph 2 English');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(3)').containsText('PM Paragraph 3 English');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(1)').containsText('PM Paragraph 4 English');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(2)').containsText('PM Paragraph 5 English');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(3) b').containsText('Rohinton P. Medhora');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(3) em').containsText('President, CIGI');
    assert.dom('.hover-reveal').exists();
    assert.dom('.hover-reveal').hasAttribute('style', "background-image: url('https://staging.cigionline.org/interactives/annualreporttemplate/static/template/slides/presidents-message.jpg'), url('https://staging.cigionline.org/interactives/annualreporttemplate/static/template/slides/presidents-message-thumbnail.jpg');");
    assert.dom('.hover-reveal .quote h3').containsText('PM Quote English');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').hasClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('EN');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('FR');
    assert.dom('ul.dot-nav').exists();
    assert.dom('ul.dot-nav').hasClass('light-background');
    assert.dom('button.scroll-arrow-up-btn').exists();
    assert.dom('button.scroll-arrow-up-btn').hasClass('light-background');
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').hasClass('light-background');
    assert.dom('.footer').exists();
    assert.dom('.footer').hasClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').exists();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /en/chairs-message on scroll-arrow-up-btn click', async function(assert) {
    await visit('/en/presidents-message');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/chairs-message');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/slide1-en on scroll-arrow-down-btn click', async function(assert) {
    await visit('/en/presidents-message');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/slide1-en');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/message-du-directeur-executif on intl-link click', async function(assert) {
    await visit('/en/presidents-message');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/message-du-directeur-executif');
    assert.dom('ul.dot-nav').exists();
  });
});
