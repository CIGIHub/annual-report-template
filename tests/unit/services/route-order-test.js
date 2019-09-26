import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';
import { module, test } from 'qunit';

module('Unit | Service | route-order', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it exists', function(assert) {
    const service = this.owner.lookup('service:route-order');
    assert.ok(service);
  });

  test('should have correct firstRoute', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);

    assert.strictEqual(get(service, 'firstRoute'), 'index');
  });

  test('should have correct firstSubRoutes', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);

    assert.deepEqual(get(service, 'firstSubRoutes'), [
      'index-subroute-1',
      'index-subroute-2',
      'index-subroute-3',
    ]);
  });

  test('should have correct lastRoute', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);

    assert.strictEqual(get(service, 'lastRoute'), 'thank-you');
  });

  test('should have correct lastSubRoutes', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);

    assert.deepEqual(get(service, 'lastSubRoutes'), [
      'thank-you-subroute-1',
      'thank-you-subroute-2',
      'thank-you-subroute-3',
    ]);
  });

  test('should have nextRoute=table-of-contents when currentRouteName=index', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'index');

    assert.strictEqual(get(service, 'nextRoute'), 'table-of-contents');
  });

  test('should have nextRoute=table-of-contents when currentRouteName=index-subroute-2', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'index-subroute-2');

    assert.strictEqual(get(service, 'nextRoute'), 'table-of-contents');
  });

  test('should have nextRoute=null when currentRouteName=thank-you', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(service, 'nextRoute'), null);
  });

  test('should have nextRoute=null when currentRouteName=thank-you-subroute-2', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'thank-you-subroute-2');

    assert.strictEqual(get(service, 'nextRoute'), null);
  });

  test('should have previousRoute=slide-3 when currentRouteName=thank-you', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(service, 'previousRoute'), 'slide-3');
  });

  test('should have previousRoute=slide-3 when currentRouteName=thank-you-subroute-2', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'thank-you-subroute-2');

    assert.strictEqual(get(service, 'previousRoute'), 'slide-3');
  });

  test('should have previousRoute=null when currentRouteName=index', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'index');

    assert.strictEqual(get(service, 'previousRoute'), null);
  });

  test('should have previousRoute=null when currentRouteName=index-subroute-2', function(assert) {
    const service = this.owner.lookup('service:route-order');
    set(service, 'routes', [{
      route: 'index',
      subRoutes: [
        'index-subroute-1',
        'index-subroute-2',
        'index-subroute-3',
      ],
    }, {
      route: 'table-of-contents',
      subRoutes: [
        'toc-subroute-1',
        'toc-subroute-2',
        'toc-subroute-3',
      ],
    }, {
      route: 'slide-1',
      subRoutes: [
        'slide-1-subroute-1',
        'slide-1-subroute-2',
        'slide-1-subroute-3',
      ],
    }, {
      route: 'slide-2',
      subRoutes: [
        'slide-2-subroute-1',
        'slide-2-subroute-2',
        'slide-2-subroute-3',
      ],
    }, {
      route: 'slide-3',
      subRoutes: [
        'slide-3-subroute-1',
        'slide-3-subroute-2',
        'slide-3-subroute-3',
      ],
    }, {
      route: 'thank-you',
      subRoutes: [
        'thank-you-subroute-1',
        'thank-you-subroute-2',
        'thank-you-subroute-3',
      ],
    }]);
    set(service, 'router.currentRouteName', 'index-subroute-2');

    assert.strictEqual(get(service, 'previousRoute'), null);
  });
});
