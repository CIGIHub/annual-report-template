import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

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
});
