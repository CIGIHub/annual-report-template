import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

const intlStub = Service.extend({
  locale: null,
  setLocale(locale) {
    this.set('locale', locale);
  },
});

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', intlStub);
  });

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});
