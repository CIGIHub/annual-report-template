import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

class IntlStub extends Service {
  t(text) {
    return text;
  }
}

class RouteOrderStub extends Service {
  routes = [{
    route: 'route-1',
    subRoutes: [],
    title: 'Route 1',
  }, {
    route: 'route-2',
    subRoutes: [],
    title: 'Route 2',
  }, {
    route: 'route-3',
    subRoutes: [
      'route-3-subroute-1',
      'route-3-subroute-2',
      'route-3-subroute-3',
    ],
    title: 'Route 3',
  }];
}

class RouterStub extends Service {
  currentRouteName;
}

module('Integration | Component | dot-nav', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', IntlStub);
    this.owner.register('service:routeOrder', RouteOrderStub);
    this.owner.register('service:router', RouterStub);
  });

  test('it renders the dot-nav list with 3 menu items', async function(assert) {
    await render(hbs`<DotNav />`);

    assert.dom('ul').exists();
    assert.dom('ul').hasClass('dot-nav');
    assert.dom('ul').hasClass('show-for-large');
    assert.dom('ul li').exists({ count: 3 });
    assert.dom('ul li:nth-of-type(1) .dot-nav-tooltip span').containsText('Route 1');
    assert.dom('ul li:nth-of-type(1) a.link-dot').exists();
    assert.dom('ul li:nth-of-type(1) a.link-dot .dot-circle').exists();
    assert.dom('ul li:nth-of-type(2) .dot-nav-tooltip span').containsText('Route 2');
    assert.dom('ul li:nth-of-type(2) a.link-dot').exists();
    assert.dom('ul li:nth-of-type(2) a.link-dot .dot-circle').exists();
    assert.dom('ul li:nth-of-type(3) .dot-nav-tooltip span').containsText('Route 3');
    assert.dom('ul li:nth-of-type(3) a.link-dot').exists();
    assert.dom('ul li:nth-of-type(3) a.link-dot .dot-circle').exists();
  });

  test('it adds light-background class', async function(assert) {
    await render(hbs`<DotNav @lightBackground={{true}} />`);

    assert.dom('ul').exists();
    assert.dom('ul').hasClass('light-background');
  });

  test('it renders current page', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'route-2';

    await render(hbs`<DotNav />`);

    assert.dom('ul li:nth-of-type(1) a.link-dot').exists();
    assert.dom('ul li:nth-of-type(2) a.link-dot').doesNotExist();
    assert.dom('ul li:nth-of-type(2) .current-page').exists();
    assert.dom('ul li:nth-of-type(2) .current-page .dot-circle').exists();
    assert.dom('ul li:nth-of-type(3) a.link-dot').exists();
  });

  test('it renders current page for a subroute', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'route-3-subroute-2';

    await render(hbs`<DotNav />`);

    assert.dom('ul li:nth-of-type(1) a.link-dot').exists();
    assert.dom('ul li:nth-of-type(2) a.link-dot').exists();
    assert.dom('ul li:nth-of-type(3) a.link-dot').doesNotExist();
    assert.dom('ul li:nth-of-type(3) .current-page').exists();
    assert.dom('ul li:nth-of-type(3) .current-page .dot-circle').exists();
  });
});
