import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | slides/financials/summarized-statement-of-financial-position', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Slides::Financials::SummarizedStatementOfFinancialPosition />`);

    assert.dom('.financials-content').exists();
  });
});
