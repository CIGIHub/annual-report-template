import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Service | route-order', function(hooks) {
  setupTest(hooks);

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

  test('should return next route as table-of-contents when on first route', function(assert) {
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

    assert.strictEqual(service.getNextRoute('index'), 'table-of-contents');
  });

  test('should return next route as table-of-contents when on first subroute', function(assert) {
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

    assert.strictEqual(service.getNextRoute('index-subroute-2'), 'table-of-contents');
  });

  test('should return next route as current route when on last route', function(assert) {
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

    assert.strictEqual(service.getNextRoute('thank-you'), 'thank-you');
  });

  test('should return next route as current route when on last subroute', function(assert) {
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

    assert.strictEqual(service.getNextRoute('thank-you-subroute-2'), 'thank-you-subroute-2');
  });

  test('should return previous route as slide-3 when on last route', function(assert) {
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

    assert.strictEqual(service.getPreviousRoute('thank-you'), 'slide-3');
  });

  test('should return previous route as slide-3 when on last subroute', function(assert) {
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

    assert.strictEqual(service.getPreviousRoute('thank-you-subroute-2'), 'slide-3');
  });

  test('should return previous route as current route when on first route', function(assert) {
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

    assert.strictEqual(service.getPreviousRoute('index'), 'index');
  });

  test('should return previous route as current route when on first subroute', function(assert) {
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

    assert.strictEqual(service.getPreviousRoute('index-subroute-2'), 'index-subroute-2');
  });
});
