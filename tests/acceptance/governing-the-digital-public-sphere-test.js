import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

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
});