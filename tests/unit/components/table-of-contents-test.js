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
      subType: null,
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
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'leftLinks'), []);
  });

  test('should have no leftLinks with 1 route and linksBreakAtIndex=0', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 0);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'leftLinks'), []);
  });

  test('should have correct leftLinks with 1 route and linksBreakAtIndex=1', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 1);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'leftLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }]);
  });

  test('should have correct leftLinks with 3 routes and linksBreakAtIndex=1', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 1);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'leftLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }]);
  });

  test('should have correct leftLinks with 3 routes and linksBreakAtIndex=2', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 2);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'leftLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }, {
      current: false,
      number: '02',
      route: 'route-2',
      title: 'route-2-title-translated',
    }]);
  });

  test('should have correct leftLinks with 3 routes and linksBreakAtIndex=3', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 3);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'leftLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }, {
      current: false,
      number: '02',
      route: 'route-2',
      title: 'route-2-title-translated',
    }, {
      current: false,
      number: '03',
      route: 'route-3',
      title: 'route-3-title-translated',
    }]);
  });

  test('should have correct leftLinks with 3 routes including a current route', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 3);
    set(component, 'router.currentRouteName', 'route-2');

    assert.deepEqual(get(component, 'leftLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }, {
      current: true,
      number: '02',
      route: 'route-2',
      title: 'route-2-title-translated',
    }, {
      current: false,
      number: '03',
      route: 'route-3',
      title: 'route-3-title-translated',
    }]);
  });

  test('should have no rightLinks with no routes', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', []);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'rightLinks'), []);
  });

  test('should have correct rightLinks with 1 route and linksBreakAtIndex=0', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 0);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'rightLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }]);
  });

  test('should have no rightLinks with 1 route and linksBreakAtIndex=1', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }]);
    set(component, 'linksBreakAtIndex', 1);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'rightLinks'), []);
  });

  test('should have correct rightLinks with 3 routes and linksBreakAtIndex=0', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 0);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'rightLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }, {
      current: false,
      number: '02',
      route: 'route-2',
      title: 'route-2-title-translated',
    }, {
      current: false,
      number: '03',
      route: 'route-3',
      title: 'route-3-title-translated',
    }]);
  });

  test('should have correct rightLinks with 3 routes and linksBreakAtIndex=1', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 1);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'rightLinks'), [{
      current: false,
      number: '02',
      route: 'route-2',
      title: 'route-2-title-translated',
    }, {
      current: false,
      number: '03',
      route: 'route-3',
      title: 'route-3-title-translated',
    }]);
  });

  test('should have correct rightLinks with 3 routes and linksBreakAtIndex=2', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 2);
    set(component, 'router.currentRouteName', 'index');

    assert.deepEqual(get(component, 'rightLinks'), [{
      current: false,
      number: '03',
      route: 'route-3',
      title: 'route-3-title-translated',
    }]);
  });

  test('should have correct rightLinks with 3 routes including a current route', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'routes', [{
      route: 'route-1',
      title: 'route-1-title',
    }, {
      route: 'route-2',
      title: 'route-2-title',
    }, {
      route: 'route-3',
      title: 'route-3-title',
    }]);
    set(component, 'linksBreakAtIndex', 0);
    set(component, 'router.currentRouteName', 'route-2');

    assert.deepEqual(get(component, 'rightLinks'), [{
      current: false,
      number: '01',
      route: 'route-1',
      title: 'route-1-title-translated',
    }, {
      current: true,
      number: '02',
      route: 'route-2',
      title: 'route-2-title-translated',
    }, {
      current: false,
      number: '03',
      route: 'route-3',
      title: 'route-3-title-translated',
    }]);
  });

  test('should have showAcknowledgementsTab=true when showAcknowledgements=true and lightbox.subType=null', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'showAcknowledgements', true);
    set(component, 'lightbox.subType', null);

    assert.strictEqual(get(component, 'showAcknowledgementsTab'), true);
  });

  test('should have showAcknowledgementsTab=true when showAcknowledgements=true and lightbox.subType=acknowledgements', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'showAcknowledgements', false);
    set(component, 'lightbox.subType', 'acknowledgements');

    assert.strictEqual(get(component, 'showAcknowledgementsTab'), true);
  });

  test('should have showAcknowledgementsTab=false when showAcknowledgements=false and lightbox.subType=null', function(assert) {
    const component = this.owner.factoryFor('component:table-of-contents').create();
    set(component, 'showAcknowledgements', false);
    set(component, 'lightbox.subType', null);

    assert.strictEqual(get(component, 'showAcknowledgementsTab'), false);
  });
});
