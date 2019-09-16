import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';
import { module, test } from 'qunit';

module('Unit | Component | table-of-contents', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', Service.extend({
      t(string) {
        return `${string}-translated`;
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

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    assert.ok(component);
  });

  test('should have no leftLinks with no routes', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', []);

    assert.deepEqual(get(component, 'leftLinks'), []);
  });

  test('should have correct leftLinks with 1 route and linksBreakAtIndex=1', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 1);

    assert.deepEqual(get(component, 'leftLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }]);
  });

  test('should have no leftLinks with 1 route and linksBreakAtIndex=0', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 0);

    assert.deepEqual(get(component, 'leftLinks'), []);
  });

  test('should have no rightLinks with no routes', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', []);

    assert.deepEqual(get(component, 'rightLinks'), []);
  });

  test('should have no rightLinks with 1 route and linksBreakAtIndex=1', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 1);

    assert.deepEqual(get(component, 'rightLinks'), []);
  });

  test('should have correct rightLinks with 1 route and linksBreakAtIndex=0', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 0);

    assert.deepEqual(get(component, 'rightLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }]);
  });
});
