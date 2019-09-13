import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | dot-nav', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', Service.extend({
      t() {
        return '';
      },
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it renders', async function(assert) {
    await render(hbs`<DotNav />`);

    assert.ok(this.element.querySelector('.dot-nav'));
  });
});
