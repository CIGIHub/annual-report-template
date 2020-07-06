import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | slide 1', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /slide1', async function(assert) {
    await visit('/slide1');

    assert.equal(currentURL(), '/slide1');
  });

  test('should have correct head title', async function(assert) {
    await visit('/slide1');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Slide 1 Title English | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/slide1');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Slide 1 Description English',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/slide1');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/slide1');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/slide1/',
    );
  });

  test('should transition to /presidents-message on scroll-arrow-up-btn click', async function(assert) {
    await visit('/slide1');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/presidents-message');
  });

  test('should transition to /slide2 on scroll-arrow-down-btn click', async function(assert) {
    await visit('/slide1');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/slide2');
  });
});
