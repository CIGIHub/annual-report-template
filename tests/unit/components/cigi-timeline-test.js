import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Component | cigi-timeline', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:cigi-timeline').create();
    assert.ok(component);
  });

  test('should have correct timelineClass with no node id', function(assert) {
    const component = this.owner.factoryFor('component:cigi-timeline').create();
    set(component, 'nodeId', null);

    assert.strictEqual(get(component, 'timelineClass'), 'timeline');
  });

  test('should have correct timelineClass with nodeId=1', function(assert) {
    const component = this.owner.factoryFor('component:cigi-timeline').create();
    set(component, 'nodeId', 1);

    assert.strictEqual(get(component, 'timelineClass'), 'timeline timeline-top');
  });
});
