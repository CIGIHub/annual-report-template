import EmberObject from '@ember/object';
import ResetScrollMixin from 'annual-report-template/mixins/reset-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | reset-scroll', function() {
  test('it works', function(assert) {
    const ResetScrollObject = EmberObject.extend(ResetScrollMixin);
    const subject = ResetScrollObject.create();
    assert.ok(subject);
  });
});
