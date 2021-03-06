import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | slides/thank-you', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:backgroundImage', Service.extend({
      getSlideBackgroundImage() {
        return {
          fullSizeUrl: '',
          thumbnailUrl: '',
        };
      },
    }));
    this.owner.register('service:intl', Service.extend({
      off() {
        return '';
      },
      on() {
        return '';
      },
      t() {
        return '';
      },
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
      currentURL: '',
    }));
  });

  test('it renders', async function(assert) {
    await render(hbs`<Slides::ThankYou />`);

    assert.dom('.content-slide').exists();
  });
});
