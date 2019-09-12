import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | protecting elections from foreign interference', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /protecting-elections-from-foreign-interference', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');

    assert.equal(currentURL(), '/protecting-elections-from-foreign-interference');
  });

  test('should have correct head title', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:title"]').getAttribute('content'),
      'Protecting Elections from Foreign Interference | 2019 CIGI Annual Report',
    );
  });

  test('should have correct head description', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:description"]').getAttribute('content'),
      'Amid growing evidence that foreign interference has influenced elections in several Western democracies in recent years, CIGI partnered with the Transatlantic Commission on Election Integrity (TCEI) — a bi-partisan group launched by the Alliance of Democracies Foundation — to produce a joint report on Canada’s readiness to defend against this threat.',
    );
  });

  test('should have correct head site name', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:site_name"]').getAttribute('content'),
      '2019 CIGI Annual Report',
    );
  });

  test('should have correct head url', async function(assert) {
    await visit('/protecting-elections-from-foreign-interference');
    assert.strictEqual(
      document.querySelector('head meta[property="og:url"]').getAttribute('content'),
      'https://www.cigionline.org/interactives/2019annualreport/protecting-elections-from-foreign-interference/',
    );
  });
});
