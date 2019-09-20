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

  test('should have correct menu items for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'a-bretton-woods-moment-for-the-digital-age') {
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

  test('should have correct menu items for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'a-clarion-call-for-protecting-the-worlds-refugees') {
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

  test('should have correct menu items for /braiding-legal-orders', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'braiding-legal-orders');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'braiding-legal-orders') {
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

  test('should have correct menu items for /building-closer-ties-between-canada-and-india', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'building-closer-ties-between-canada-and-india') {
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

  test('should have correct menu items for /curbing-cultural-appropriation-through-intellectual-property-law', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property-law');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'curbing-cultural-appropriation-through-intellectual-property-law') {
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

  test('should have correct menu items for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance') {
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

  test('should have correct menu items for /financials/balance-sheet', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'financials.balance-sheet');

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

  test('should have correct menu items for /financials/revenue-and-expenses', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'financials.revenue-and-expenses');

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

  test('should have correct menu items for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'governing-cyberspace-during-a-crisis-in-trust') {
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

  test('should have correct menu items for /governing-the-digital-public-sphere', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'governing-the-digital-public-sphere');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'governing-the-digital-public-sphere') {
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

  test('should have correct menu items for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'informing-the-debate-around-internet-security-and-trust') {
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

  test('should have correct menu items for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond') {
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

  test('should have correct menu items for /models-for-data-governance', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'models-for-data-governance');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'models-for-data-governance') {
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

  test('should have correct menu items for /protecting-elections-from-foreign-interference', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'protecting-elections-from-foreign-interference');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'protecting-elections-from-foreign-interference') {
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
