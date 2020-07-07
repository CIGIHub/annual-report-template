import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | outputs and activities', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /outputs-and-activities', async function(assert) {
    await visit('/outputs-and-activities');

    assert.equal(currentURL(), '/outputs-and-activities');
  });

  test('should have correct head title', async function(assert) {
    await visit('/outputs-and-activities');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Outputs and Activities | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/outputs-and-activities');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/outputs-and-activities');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/outputs-and-activities');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities/',
    );
  });

  test('should have correct twitter share link', async function(assert) {
    await visit('/outputs-and-activities');

    assert.dom('.social-2-btn').hasAttribute('href', 'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities');
  });

  test('should have correct linkedin share link', async function(assert) {
    await visit('/outputs-and-activities');

    assert.dom('.social-3-btn').hasAttribute('href', 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities');
  });

  test('should transition to /curbing-cultural-appropriation-through-intellectual-property-law on scroll-arrow-up-btn click', async function(assert) {
    await visit('/outputs-and-activities');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/curbing-cultural-appropriation-through-intellectual-property-law');
  });

  test('should transition to /timeline on scroll-arrow-down-btn click', async function(assert) {
    await visit('/outputs-and-activities');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/timeline');
  });

  test('should have correct view buttons on /outputs-and-activities', async function(assert) {
    await visit('/outputs-and-activities');
    await finishRender();

    assert.notOk(
      document.querySelector('.view-publications-btn'),
      'should not find view-publications-btn',
    );
    assert.ok(
      document.querySelector('.view-opinions-btn'),
      'should find view-opinions-btn',
    );
    assert.ok(
      document.querySelector('.view-events-btn'),
      'should find view-events-btn',
    );
  });

  test('should have correct view buttons on /outputs-and-activities?type=publications', async function(assert) {
    await visit('/outputs-and-activities?type=publications');
    await finishRender();

    assert.notOk(
      document.querySelector('.view-publications-btn'),
      'should not find view-publications-btn',
    );
    assert.ok(
      document.querySelector('.view-opinions-btn'),
      'should find view-opinions-btn',
    );
    assert.ok(
      document.querySelector('.view-events-btn'),
      'should find view-events-btn',
    );
  });

  test('should have correct view buttons on /outputs-and-activities?type=opinions', async function(assert) {
    await visit('/outputs-and-activities?type=opinions');
    await finishRender();

    assert.ok(
      document.querySelector('.view-publications-btn'),
      'should find view-publications-btn',
    );
    assert.notOk(
      document.querySelector('.view-opinions-btn'),
      'should not find view-opinions-btn',
    );
    assert.ok(
      document.querySelector('.view-events-btn'),
      'should find view-events-btn',
    );
  });

  test('should have correct view buttons on /outputs-and-activities?type=events', async function(assert) {
    await visit('/outputs-and-activities?type=events');
    await finishRender();

    assert.ok(
      document.querySelector('.view-publications-btn'),
      'should find view-publications-btn',
    );
    assert.ok(
      document.querySelector('.view-opinions-btn'),
      'should find view-opinions-btn',
    );
    assert.notOk(
      document.querySelector('.view-events-btn'),
      'should not find view-events-btn',
    );
  });
});
