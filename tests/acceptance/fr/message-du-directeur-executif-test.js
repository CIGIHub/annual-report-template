import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | fr/message du directeur executif', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /fr/message-du-directeur-executif', async function(assert) {
    await visit('/fr/message-du-directeur-executif');

    assert.equal(currentURL(), '/fr/message-du-directeur-executif');
  });

  test('should have correct meta', async function(assert) {
    await visit('/fr/message-du-directeur-executif');

    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Message du directeur exécutif | Rapport Annuel du CIGI 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Découvrez une année entière de publications et de textes d’opinion en consultant Rapport annuel interactif du CIGI.',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      'Rapport Annuel du CIGI 2019',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/fr/message-du-directeur-executif',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/presidents-message-og.jpg',
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
    await visit('/fr/message-du-directeur-executif');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=Rapport+Annuel+du+CIGI+2019+https://www.cigionline.org/interactives/2019annualreport/fr/message-du-directeur-executif');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/fr/message-du-directeur-executif');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/fr/message-du-directeur-executif');

    assert.dom('.chairs-message').exists();
    assert.dom('.chairs-message .grid-x:nth-of-type(1) h1').containsText('Message du directeur exécutif');
    assert.dom('.chairs-message .grid-x .medium-6').exists({ count: 2 });
    assert.dom('.chairs-message .grid-x .medium-6 p').exists({ count: 6 });
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(1)').containsText('PM Paragraph 1 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(2)').containsText('PM Paragraph 2 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(1) p:nth-of-type(3)').containsText('PM Paragraph 3 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(1)').containsText('PM Paragraph 4 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(2)').containsText('PM Paragraph 5 French');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(3) b').containsText('Rohinton P. Medhora');
    assert.dom('.chairs-message .grid-x:nth-of-type(2) .medium-6:nth-of-type(2) p:nth-of-type(3) em').containsText('Directeur exécutif du CIGI');
    assert.dom('.hover-reveal').exists();
    assert.dom('.hover-reveal').hasAttribute('style', "background-image: url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/presidents-message.jpg'), url('https://staging.cigionline.org/interactives/2019annualreport/static/template/slides/presidents-message-thumbnail.jpg');");
    assert.dom('.hover-reveal .quote h3').containsText('PM Quote French');

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
    assert.dom('.footer button.footer-icon-btn').exists();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /fr/message-du-president-du-conseil on scroll-arrow-up-btn click', async function(assert) {
    await visit('/fr/message-du-directeur-executif');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/message-du-president-du-conseil');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/slide1-fr on scroll-arrow-down-btn click', async function(assert) {
    await visit('/fr/message-du-directeur-executif');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/slide1-fr');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /en/presidents-message on intl-link click', async function(assert) {
    await visit('/fr/message-du-directeur-executif');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/presidents-message');
    assert.dom('ul.dot-nav').exists();
  });
});
