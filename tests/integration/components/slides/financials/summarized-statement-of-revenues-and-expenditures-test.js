import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | slides/financials/summarized-statement-of-revenues-and-expenditures', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Slides::Financials::SummarizedStatementOfRevenuesAndExpenditures />`);

    assert.dom('.financials-content').exists();
  });
});
