import { get, set } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

module('Unit | Component | dot-nav', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', Service.extend({
      t() {
        return '';
      },
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    assert.ok(component);
  });

  test('should have correct menu items for /', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'index');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'index') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide10', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-10');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-10') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide-2', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-2');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-2') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide7', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-7');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-7') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide-1', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-1');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-1') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /chairs-message', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'chairs-message');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'chairs-message') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide13', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-13');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-13') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide12', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-12');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-12') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /financials/auditors-report', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'financials.auditors-report');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'financials.auditors-report') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /financials/summarized-statement-of-financial-position', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'financials.auditors-report') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /financials/notes', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'financials.notes');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'financials.auditors-report') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'financials.auditors-report') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide4', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-4');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-4') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide5', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-5');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-5') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide11', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-11');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-11') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide6', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-6');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-6') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide8', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-8');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-8') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /outputs-and-activities', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'outputs-and-activities');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'outputs-and-activities') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /presidents-message', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'presidents-message');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'presidents-message') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /slide9', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'slide-9');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'slide-9') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /table-of-contents', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'table-of-contents');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'table-of-contents') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /thank-you', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'thank-you');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'thank-you') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });

  test('should have correct menu items for /timeline', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'timeline');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'timeline') {
        assert.strictEqual(
          menuItem.current,
          true,
          `should have current=true for ${menuItem.route} route`,
        );
      } else {
        assert.strictEqual(
          menuItem.current,
          false,
          `should have current=false for ${menuItem.route} route`,
        );
      }
    });
  });
});
