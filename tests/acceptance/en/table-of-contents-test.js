import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | en/table of contents', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /en/table-of-contents', async function(assert) {
    await visit('/en/table-of-contents');

    assert.equal(currentURL(), '/en/table-of-contents');
  });

  test('should have correct meta', async function(assert) {
    await visit('/en/table-of-contents');

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
      'https://www.cigionline.org/interactives/annualreporttemplate/en/table-of-contents',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:type"]').getAttribute('content'),
      'article',
    );
    assert.strictEqual(
      document.querySelector('head meta[property="og:image"]').getAttribute('content'),
      'https://staging.cigionline.org/interactives/annualreporttemplate/static/template/cigi-campus-og.jpg',
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
    await visit('/en/table-of-contents');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/annualreporttemplate/en/table-of-contents');
    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/annualreporttemplate/en/table-of-contents');
  });

  test('should have correct slide content', async function(assert) {
    await visit('/en/table-of-contents');

    assert.dom('.table-of-contents').exists();
    assert.dom('.table-of-contents .grid-container > .grid-x').exists({ count: 2 });
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(1) h1').containsText('2019 Annual Report');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content').exists();
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .toc-menu').containsText('Table of Contents');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .toc-menu button').containsText('Acknowledgements');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content').exists();
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell').exists({ count: 3 });
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link').exists({ count: 10 });
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(1) p.slide-number').containsText('01');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(1) a').containsText('Chair’s Message');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(2) p.slide-number').containsText('02');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(2) a').containsText('President’s Message');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(3) p.slide-number').containsText('03');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(3) a').containsText('Slide 1 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(4) p.slide-number').containsText('04');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(4) a').containsText('Slide 2 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(5) p.slide-number').containsText('05');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(5) a').containsText('Slide 3 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(6) p.slide-number').containsText('06');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(6) a').containsText('Slide 4 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(7) p.slide-number').containsText('07');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(7) a').containsText('Slide 5 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(8) p.slide-number').containsText('08');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(8) a').containsText('Slide 6 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(9) p.slide-number').containsText('09');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(9) a').containsText('Slide 7 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(10) p.slide-number').containsText('10');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(1) .slide-link:nth-of-type(10) a').containsText('Slide 8 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link').exists({ count: 9 });
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(1) p.slide-number').containsText('11');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(1) a').containsText('Slide 9 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(2) p.slide-number').containsText('12');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(2) a').containsText('Slide 10 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(3) p.slide-number').containsText('13');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(3) a').containsText('Slide 11 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(4) p.slide-number').containsText('14');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(4) a').containsText('Slide 12 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(5) p.slide-number').containsText('15');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(5) a').containsText('Slide 13 Title English');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(6) p.slide-number').containsText('16');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(6) a').containsText('Outputs and Activities');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(7) p.slide-number').containsText('17');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(7) a').containsText('Explore Timeline');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(8) p.slide-number').containsText('18');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(8) a').containsText('Financials');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(9) p.slide-number').containsText('19');
    assert.dom('.table-of-contents .grid-container > .grid-x:nth-of-type(2) .toc-content .slide-content > .cell:nth-of-type(3) .slide-link:nth-of-type(9) a').containsText('Thank You');

    assert.dom('.cigi-top-bar').exists();
    assert.dom('.cigi-top-bar').doesNotHaveClass('light-background');
    assert.dom('.intl-selected').exists({ count: 1 });
    assert.dom('.intl-selected').containsText('EN');
    assert.dom('.intl-link').exists({ count: 1 });
    assert.dom('.intl-link').containsText('FR');
    assert.dom('ul.dot-nav').doesNotExist();
    assert.dom('button.scroll-arrow-up-btn').exists();
    assert.dom('button.scroll-arrow-up-btn').doesNotHaveClass('light-background');
    assert.dom('button.scroll-arrow-down-btn').exists();
    assert.dom('button.scroll-arrow-down-btn').doesNotHaveClass('light-background');
    assert.dom('.footer').exists();
    assert.dom('.footer').doesNotHaveClass('footer-dark');
    assert.dom('.footer button.footer-icon-btn').exists();
    assert.dom('.footer button.open-social-menu-btn').exists();
  });

  test('should transition to /en on scroll-arrow-up-btn click', async function(assert) {
    await visit('/en/table-of-contents');

    await click('button.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en');
    assert.dom('ul.dot-nav').doesNotExist();
  });

  test('should transition to /en/chairs-message on scroll-arrow-down-btn click', async function(assert) {
    await visit('/en/table-of-contents');

    await click('button.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/en/chairs-message');
    assert.dom('ul.dot-nav').exists();
  });

  test('should transition to /fr/table-des-matieres on intl-link click', async function(assert) {
    await visit('/en/table-of-contents');

    await click('.intl-link');
    await finishRender();

    assert.strictEqual(currentURL(), '/fr/table-des-matieres');
    assert.dom('ul.dot-nav').doesNotExist();
  });
});
