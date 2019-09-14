import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | governing the digital public sphere', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /governing-the-digital-public-sphere', async function(assert) {
    await visit('/governing-the-digital-public-sphere');

    assert.equal(currentURL(), '/governing-the-digital-public-sphere');
  });

  test('should have correct head title', async function(assert) {
    await visit('/governing-the-digital-public-sphere');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Governing the Digital Public Sphere | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/governing-the-digital-public-sphere');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'The 2016 US election revealed both malicious uses of technology and structural problems in the digital infrastructure itself. Since then, there have been a striking number of cases of commercially and politically driven misinformation, foreign interference in elections, data breaches, cyber attacks, the proliferation of harmful speech, data exploitation and surveillance abuses.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/governing-the-digital-public-sphere');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/governing-the-digital-public-sphere');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/governing-the-digital-public-sphere/',
    );
  });

  test('should transition to /governing-cyberspace-during-a-crisis-in-trust on scroll-arrow-up-btn click', async function(assert) {
    await visit('/governing-the-digital-public-sphere');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/governing-cyberspace-during-a-crisis-in-trust');
  });

  test('should transition to /media-and-mass-atrocity-the-rwanda-genocide-and-beyond on scroll-arrow-down-btn click', async function(assert) {
    await visit('/governing-the-digital-public-sphere');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
  });
});
