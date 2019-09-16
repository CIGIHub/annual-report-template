import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | table-of-contents', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', Service.extend({
      off() {
        return true;
      },
      on() {
        return true;
      },
      t() {
        return '';
      },
    }));
    this.owner.register('service:lightbox', Service.extend({
      closeTableOfContentsAcknowledgements() {
        return true;
      },
      showTableOfContentsAcknowledgements() {
        return true;
      },
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TableOfContents />`);

    assert.ok(this.element.querySelector('.table-of-contents'));
  });
});
