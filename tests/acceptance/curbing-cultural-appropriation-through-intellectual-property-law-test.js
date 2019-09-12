import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

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
});
