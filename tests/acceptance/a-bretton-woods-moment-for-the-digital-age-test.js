import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | a bretton woods moment for the digital age', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /a-bretton-woods-moment-for-the-digital-age', async function(assert) {
    await visit('/a-bretton-woods-moment-for-the-digital-age');

    assert.equal(currentURL(), '/a-bretton-woods-moment-for-the-digital-age');
  });

  test('should have correct head title', async function(assert) {
    await visit('/a-bretton-woods-moment-for-the-digital-age');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'A Bretton Woods Moment for the Digital Age | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    // TODO: Needs description
    await visit('/a-bretton-woods-moment-for-the-digital-age');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      '',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/a-bretton-woods-moment-for-the-digital-age');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/a-bretton-woods-moment-for-the-digital-age');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/a-bretton-woods-moment-for-the-digital-age/',
    );
  });
});
