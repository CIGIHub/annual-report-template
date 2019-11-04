import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | media and mass atrocity the rwanda genocide and beyond', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', async function(assert) {
    await visit('/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.equal(currentURL(), '/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
  });

  test('should have correct head title', async function(assert) {
    await visit('/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Media and Mass Atrocity: The Rwanda Genocide and Beyond | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Published in April 2019 to coincide with the twenty-fifth anniversary of the Rwanda genocide, this book revisits the key issues of the media-genocide nexus in Rwanda and how reporting has changed with social media. Media and Mass Atrocity provides a critical, and often grim, review of the Rwanda genocide.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/media-and-mass-atrocity-the-rwanda-genocide-and-beyond/',
    );
  });

  test('should transition to /governing-the-digital-public-sphere on scroll-arrow-up-btn click', async function(assert) {
    await visit('/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.ok(
      document.querySelector('.scroll-arrow-up-btn'),
      'should find scroll-arrow-up-btn',
    );
    await click('.scroll-arrow-up-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/governing-the-digital-public-sphere');
  });

  test('should transition to /braiding-legal-orders on scroll-arrow-down-btn click', async function(assert) {
    await visit('/media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.ok(
      document.querySelector('.scroll-arrow-down-btn'),
      'should find scroll-arrow-down-btn',
    );
    await click('.scroll-arrow-down-btn');
    await finishRender();

    assert.strictEqual(currentURL(), '/braiding-legal-orders');
  });
});
