import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | protecting elections from foreign interference', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /protecting-elections-from-foreign-interference', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');

    assert.equal(currentURL(), '/protecting-elections-from-foreign-interference');
  });

  test('should have correct head title', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Protecting Elections from Foreign Interference | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Amid growing evidence that foreign interference has influenced elections in several Western democracies in recent years, CIGI partnered with the Transatlantic Commission on Election Integrity (TCEI) — a bi-partisan group launched by the Alliance of Democracies Foundation — to produce a joint report on Canada’s readiness to defend against this threat.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/protecting-elections-from-foreign-interference/',
    );
  });

  test('should have correct twitter share link', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/protecting-elections-from-foreign-interference');
  });

  test('should have correct linkedin share link', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');

    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/protecting-elections-from-foreign-interference');
  });

  test('should transition to /slide8 on scroll-arrow-up-btn click', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/slide8');
  });

  test('should transition to /a-bretton-woods-moment-for-the-digital-age on scroll-arrow-down-btn click', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/a-bretton-woods-moment-for-the-digital-age');
  });
});
