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

  test('should have correct menu items for /en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.index');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.index') {
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

  test('should have correct menu items for /fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.index');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.index') {
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

  test('should have correct menu items for /en/slide10-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-10');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-10') {
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

  test('should have correct menu items for /fr/slide10-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-10');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-10') {
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

  test('should have correct menu items for /en/slide2-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-2');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-2') {
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

  test('should have correct menu items for /fr/slide2-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-2');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-2') {
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

  test('should have correct menu items for /en/slide7-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-7');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-7') {
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

  test('should have correct menu items for /fr/slide7-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-7');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-7') {
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

  test('should have correct menu items for /en/slide1-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-1');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-1') {
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

  test('should have correct menu items for /fr/slide1-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-1');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-1') {
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

  test('should have correct menu items for /en/chairs-message', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.chairs-message');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.chairs-message') {
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

  test('should have correct menu items for /fr/message-du-president-su-conseil', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.message-du-president-su-conseil');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.message-du-president-su-conseil') {
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

  test('should have correct menu items for /en/slide13-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-13');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-13') {
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

  test('should have correct menu items for /fr/slide13-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-13');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-13') {
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

  test('should have correct menu items for /en/slide12-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-12');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-12') {
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

  test('should have correct menu items for /fr/slide12-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-12');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-12') {
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

  test('should have correct menu items for /en/financials/auditors-report', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.financials.auditors-report');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.financials.auditors-report') {
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

  test('should have correct menu items for /en/financials/summarized-statement-of-financial-position', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.financials.summarized-statement-of-financial-position');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.financials.auditors-report') {
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
      if (menuItem.route === 'en.financials.auditors-report') {
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
      if (menuItem.route === 'en.financials.auditors-report') {
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

  test('should have correct menu items for /en/slide4-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-4');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-4') {
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

  test('should have correct menu items for /fr/slide4-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-4');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-4') {
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

  test('should have correct menu items for /en/slide5-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-5');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-5') {
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

  test('should have correct menu items for /fr/slide5-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-5');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-5') {
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

  test('should have correct menu items for /en/slide11-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-11');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-11') {
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

  test('should have correct menu items for /fr/slide11-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-11');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-11') {
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

  test('should have correct menu items for /en/slide6-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-6');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-6') {
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

  test('should have correct menu items for /fr/slide6-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-6');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-6') {
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

  test('should have correct menu items for /en/slide8-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-8');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-8') {
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

  test('should have correct menu items for /fr/slide8-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-8');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-8') {
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

  test('should have correct menu items for /en/outputs-and-activities', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.outputs-and-activities');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.outputs-and-activities') {
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

  test('should have correct menu items for /fr/outputs-and-activities', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.outputs-and-activities');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.outputs-and-activities') {
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

  test('should have correct menu items for /en/presidents-message', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.presidents-message');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.presidents-message') {
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

  test('should have correct menu items for /fr/message-du-directeur-executif', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.message-du-directeur-executif');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.message-du-directeur-executif') {
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

  test('should have correct menu items for /en/slide9-en', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.slide-9');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.slide-9') {
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

  test('should have correct menu items for /fr/slide9-fr', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.slide-9');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.slide-9') {
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

  test('should have correct menu items for /en/table-of-contents', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.table-of-contents');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.table-of-contents') {
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

  test('should have correct menu items for /fr/table-des-matieres', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.table-des-matieres');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.table-des-matieres') {
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

  test('should have correct menu items for /en/timeline', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'en.timeline');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'en.timeline') {
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

  test('should have correct menu items for /fr/timeline', function(assert) {
    const component = this.owner.factoryFor('component:dot-nav').create();
    set(component, 'router.currentRouteName', 'fr.timeline');

    const menuItems = get(component, 'menuItems');
    menuItems.forEach(function(menuItem) {
      if (menuItem.route === 'fr.timeline') {
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
