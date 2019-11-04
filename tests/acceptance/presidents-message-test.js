import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | presidents message', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /presidents-message', async function(assert) {
    await visit('/presidents-message');

    assert.equal(currentURL(), '/presidents-message');
  });

  test('should have correct head title', async function(assert) {
    await visit('/presidents-message');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'President’s Message | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/presidents-message');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/presidents-message');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/presidents-message');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/presidents-message/',
    );
  });

  test('should transition to /chairs-message on scroll-arrow-up-btn click', async function(assert) {
    await visit('/presidents-message');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/chairs-message');
  });

  test('should transition to /building-closer-ties-between-canada-and-india on scroll-arrow-down-btn click', async function(assert) {
    await visit('/presidents-message');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/building-closer-ties-between-canada-and-india');
  });
});
