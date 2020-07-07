import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | informing the debate around internet security and trust', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /informing-the-debate-around-internet-security-and-trust', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');

    assert.equal(currentURL(), '/informing-the-debate-around-internet-security-and-trust');
  });

  test('should have correct head title', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Informing the Debate around Internet Security and Trust | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Now in its fifth year, the CIGI-Ipsos Global Survey on Internet Security and Trust is the world’s largest and most comprehensive survey of its kind, involving more than 25,000 internet users in over two dozen countries.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust/',
    );
  });

  test('should have correct twitter share link', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust');
  });

  test('should have correct linkedin share link', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');

    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust');
  });

  test('should transition to /slide10 on scroll-arrow-up-btn click', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/slide10');
  });

  test('should transition to /exploring-the-four-internets-and-the-geopolitics-of-digital-governance on scroll-arrow-down-btn click', async function(assert) {
    await visit('/informing-the-debate-around-internet-security-and-trust');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
  });
});
