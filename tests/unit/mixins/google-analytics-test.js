import EmberObject from '@ember/object';
import GoogleAnalyticsMixin from 'annual-report-template/mixins/google-analytics';
import { module, test } from 'qunit';

module('Unit | Mixin | google-analytics', function() {
  test('it works', function(assert) {
    const GoogleAnalyticsObject = EmberObject.extend(GoogleAnalyticsMixin);
    const subject = GoogleAnalyticsObject.create();
    assert.ok(subject);
  });
});
