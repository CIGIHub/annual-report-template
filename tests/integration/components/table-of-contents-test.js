import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { click, render } from '@ember/test-helpers';
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
    await render(hbs`<TableOfContents />`);

    assert.ok(this.element.querySelector('.table-of-contents'));
  });

  test('should show acknowledgements tab on show-acknowledgements-btn click', async function(assert) {
    set(this, 'showAcknowledgements', null);

    await render(hbs`<TableOfContents @showAcknowledgements={{this.showAcknowledgements}} />`);
    assert.ok(
      this.element.querySelector('.show-acknowledgements-btn'),
      'should find show-acknowledgements-btn',
    );
    assert.notOk(
      this.element.querySelector('.hide-acknowledgements-btn'),
      'should not find hide-acknowledgements-btn',
    );

    await click('.show-acknowledgements-btn');

    assert.strictEqual(this.showAcknowledgements, true);
  });

  test('should hide acknowledgements tab on hide-acknowledgements-btn click', async function(assert) {
    set(this, 'showAcknowledgements', true);

    await render(hbs`<TableOfContents @showAcknowledgements={{this.showAcknowledgements}} />`);
    assert.notOk(
      this.element.querySelector('.show-acknowledgements-btn'),
      'should not find show-acknowledgements-btn',
    );
    assert.ok(
      this.element.querySelector('.hide-acknowledgements-btn'),
      'should find hide-acknowledgements-btn',
    );

    await click('.hide-acknowledgements-btn');

    assert.strictEqual(this.showAcknowledgements, null);
  });
});
