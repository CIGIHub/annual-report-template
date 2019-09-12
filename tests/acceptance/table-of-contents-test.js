import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | table of contents', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /table-of-contents', async function(assert) {
    await visit('/table-of-contents');

    assert.equal(currentURL(), '/table-of-contents');
  });

  test('should have correct head title', async function(assert) {
    await visit('/table-of-contents');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/table-of-contents');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Explore a year of research, opinion and expertise in CIGI’s interactive annual report.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/table-of-contents');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/table-of-contents');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/table-of-contents/',
    );
  });
});
