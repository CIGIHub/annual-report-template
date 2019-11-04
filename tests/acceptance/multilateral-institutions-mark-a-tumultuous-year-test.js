import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | multilateral institutions mark a tumultuous year', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /multilateral-institutions-mark-a-tumultuous-year', async function(assert) {
    await visit('/multilateral-institutions-mark-a-tumultuous-year');

    assert.equal(currentURL(), '/multilateral-institutions-mark-a-tumultuous-year');
  });

  test('should have correct head title', async function(assert) {
    await visit('/multilateral-institutions-mark-a-tumultuous-year');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Multilateral Institutions Mark a Tumultuous Year | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/multilateral-institutions-mark-a-tumultuous-year');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'In advance of the G20 summit in Buenos Aires, CIGI published an in-depth interview and companion video with former Canadian Prime Minister Paul Martin to discuss the history and future of the G20.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/multilateral-institutions-mark-a-tumultuous-year');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/multilateral-institutions-mark-a-tumultuous-year');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/multilateral-institutions-mark-a-tumultuous-year/',
    );
  });

  test('should transition to /a-clarion-call-for-protecting-the-worlds-refugees on scroll-arrow-up-btn click', async function(assert) {
    await visit('/multilateral-institutions-mark-a-tumultuous-year');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/a-clarion-call-for-protecting-the-worlds-refugees');
  });

  test('should transition to /governing-cyberspace-during-a-crisis-in-trust on scroll-arrow-down-btn click', async function(assert) {
    await visit('/multilateral-institutions-mark-a-tumultuous-year');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/governing-cyberspace-during-a-crisis-in-trust');
  });
});
