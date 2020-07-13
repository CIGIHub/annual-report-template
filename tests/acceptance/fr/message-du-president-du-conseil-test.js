import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | fr/message du president du conseil', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fr/message-du-president-du-conseil', async function(assert) {
    await visit('/fr/message-du-president-du-conseil');

    assert.equal(currentURL(), '/fr/message-du-president-du-conseil');
  });

  test('should have correct meta', async function(assert) {
    await visit('/fr/message-du-president-du-conseil');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Message du président du Conseil | Rapport annuel 2019',
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
      'https://www.cigionline.org/interactives/2019annualreport/fr/message-du-president-du-conseil',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      'Rapport annuel 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/chairs-message-og.jpg',
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
    await visit('/fr/message-du-president-du-conseil');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=Rapport+annuel+2019+https://www.cigionline.org/interactives/2019annualreport/fr/message-du-president-du-conseil');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/fr/message-du-president-du-conseil');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/fr/message-du-president-du-conseil');

    assert.dom('.chairs-message').exists();
    assert.dom('.chairs-message .grid-x:nth-of-type(1) h1').containsText('Message du président du Conseil');
    assert.dom('.chairs-message .grid-x .medium-6').exists({ count: 2 });
    assert.dom('.chairs-message .grid-x .medium-6 p').exists({ count: 6 });
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(1)').containsText('CM Paragraph 1 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(2)').containsText('CM Paragraph 2 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(3)').containsText('CM Paragraph 3 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(1)').containsText('CM Paragraph 4 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(2)').containsText('CM Paragraph 5 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(3) b').containsText('Jim Balsillie');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(3) em').containsText('Président du conseil d’administration du CIGI');
    assert.dom('.hover-reveal').exists();
    assert.dom('.hover-reveal').hasAttribute('style', "background-image: url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/chairs-message.jpg'), url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/chairs-message-thumbnail.jpg');");
    assert.dom('.hover-reveal .quote h3').containsText('CM Quote French');

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
  });

  test('should transition to /fr/table-des-matieres on scroll-arrow-up-btn click', async function(assert) {
    await visit('/fr/message-du-president-du-conseil');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/table-des-matieres');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/message-du-directeur-executif on scroll-arrow-down-btn click', async function(assert) {
    await visit('/fr/message-du-president-du-conseil');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/message-du-directeur-executif');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/chairs-message on intl-link click', async function(assert) {
    await visit('/fr/message-du-president-du-conseil');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/chairs-message');
    assert.dom('ul.dot-nav').exists();
  });
});
