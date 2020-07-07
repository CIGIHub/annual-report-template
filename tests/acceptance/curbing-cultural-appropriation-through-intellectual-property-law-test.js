import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | curbing cultural appropriation through intellectual property law', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /curbing-cultural-appropriation-through-intellectual-property-law', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');

    assert.equal(currentURL(), '/curbing-cultural-appropriation-through-intellectual-property-law');
  });

  test('should have correct head title', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Curbing Cultural Appropriation Through Intellectual Property Law | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'CIGI fellow Brigitte Vézina’s paper, Curbing Cultural Appropriation in the Fashion Industry calls on reform to intellectual property laws, as well as practical solutions for designers and consumers to put an end of cultural appropriation.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property-law/',
    );
  });

  test('should have correct twitter share link', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property-law');
  });

  test('should have correct linkedin share link', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');

    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property-law');
  });

  test('should transition to /slide12 on scroll-arrow-up-btn click', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/slide12');
  });

  test('should transition to /outputs-and-activities on scroll-arrow-down-btn click', async function(assert) {
    await visit('/curbing-cultural-appropriation-through-intellectual-property-law');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/outputs-and-activities');
  });
});
