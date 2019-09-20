import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import lolex from 'lolex';
import { module, test } from 'qunit';

module('Unit | Controller | outputs-and-activities', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.clock = lolex.install();
  });

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    assert.ok(controller);
  });

  test('should default currentPage=1', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', null);

    assert.strictEqual(get(controller, 'currentPage'), 1);
  });

  test('should have currentPage=2 when page=2 and type int', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);

    assert.strictEqual(get(controller, 'currentPage'), 2);
  });

  test('should have currentPage=2 when page=2 and type string', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', '2');

    assert.strictEqual(get(controller, 'currentPage'), 2);
  });

  test('should have currentPage=1 with an invalid page', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 'invalidPage');

    assert.strictEqual(get(controller, 'currentPage'), 1);
  });

  test('should default currentType=publications', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', null);

    assert.strictEqual(get(controller, 'currentType'), 'publications');
  });

  test('should have currentType=publications when type=publications', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'publications');

    assert.strictEqual(get(controller, 'currentType'), 'publications');
  });

  test('should have currentType=opinions when type=opinions', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'opinions');

    assert.strictEqual(get(controller, 'currentType'), 'opinions');
  });

  test('should have currentType=events when type=events', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'events');

    assert.strictEqual(get(controller, 'currentType'), 'events');
  });

  test('should have currentType=publications with an invalid type', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'invalidType');

    assert.strictEqual(get(controller, 'currentType'), 'publications');
  });

  test('should have disableNext=true when page=1 and model.totalObjects=16', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 16,
    });

    assert.strictEqual(get(controller, 'disableNext'), true);
  });

  test('should have disableNext=false when page=1 and model.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.strictEqual(get(controller, 'disableNext'), false);
  });

  test('should have disableNext=true when page=2 and model.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.strictEqual(get(controller, 'disableNext'), true);
  });

  test('should have disablePrevious=true when page=1 and model.totalObjects=16', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 16,
    });

    assert.strictEqual(get(controller, 'disablePrevious'), true);
  });

  test('should have disablePrevious=true when page=1 and model.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.strictEqual(get(controller, 'disablePrevious'), true);
  });

  test('should have disablePrevious=false when page=2 and model.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.strictEqual(get(controller, 'disablePrevious'), false);
  });

  test('should have isArticle=true when model.publication.type=article', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'article' },
    });

    assert.strictEqual(get(controller, 'isArticle'), true);
  });

  test('should have isArticle=false when model.publication.type=event', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'event' },
    });

    assert.strictEqual(get(controller, 'isArticle'), false);
  });

  test('should have isArticle=false when model.publication.type=publication', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'publication' },
    });

    assert.strictEqual(get(controller, 'isArticle'), false);
  });

  test('should have isEvent=false when model.publication.type=article', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'article' },
    });

    assert.strictEqual(get(controller, 'isEvent'), false);
  });

  test('should have isEvent=true when model.publication.type=event', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'event' },
    });

    assert.strictEqual(get(controller, 'isEvent'), true);
  });

  test('should have isEvent=false when model.publication.type=publication', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'publication' },
    });

    assert.strictEqual(get(controller, 'isEvent'), false);
  });

  test('should have isPublication=false when model.publication.type=article', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'article' },
    });

    assert.strictEqual(get(controller, 'isPublication'), false);
  });

  test('should have isPublication=false when model.publication.type=event', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'event' },
    });

    assert.strictEqual(get(controller, 'isPublication'), false);
  });

  test('should have isPublication=true when model.publication.type=publication', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      publication: { type: 'publication' },
    });

    assert.strictEqual(get(controller, 'isPublication'), true);
  });

  test('should have isTypeEvents=false when type=null', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', null);

    assert.strictEqual(get(controller, 'isTypeEvents'), false);
  });

  test('should have isTypeEvents=true when type=events', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'events');

    assert.strictEqual(get(controller, 'isTypeEvents'), true);
  });

  test('should have isTypeEvents=false when type=opinions', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'opinions');

    assert.strictEqual(get(controller, 'isTypeEvents'), false);
  });

  test('should have isTypeEvents=false when type=publications', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'publications');

    assert.strictEqual(get(controller, 'isTypeEvents'), false);
  });

  test('should have isTypeOpinions=false when type=null', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', null);

    assert.strictEqual(get(controller, 'isTypeOpinions'), false);
  });

  test('should have isTypeOpinions=false when type=events', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'events');

    assert.strictEqual(get(controller, 'isTypeOpinions'), false);
  });

  test('should have isTypeOpinions=true when type=opinions', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'opinions');

    assert.strictEqual(get(controller, 'isTypeOpinions'), true);
  });

  test('should have isTypeOpinions=false when type=publications', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'publications');

    assert.strictEqual(get(controller, 'isTypeOpinions'), false);
  });

  test('should have isTypePublications=true when type=null', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', null);

    assert.strictEqual(get(controller, 'isTypePublications'), true);
  });

  test('should have isTypePublications=false when type=events', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'events');

    assert.strictEqual(get(controller, 'isTypePublications'), false);
  });

  test('should have isTypePublications=false when type=opinions', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'opinions');

    assert.strictEqual(get(controller, 'isTypePublications'), false);
  });

  test('should have isTypePublications=true when type=publications', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'type', 'publications');

    assert.strictEqual(get(controller, 'isTypePublications'), true);
  });

  test('should have correct paginationPages when page=null and model.totalObjects=16', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', null);
    set(controller, 'model', {
      totalObjects: 16,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: true,
      page: 1,
    }]);
  });

  test('should have correct paginationPages when page=1 and model.totalObjects=16', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 16,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: true,
      page: 1,
    }]);
  });

  test('should have correct paginationPages when page=null and model.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', null);
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: true,
      page: 1,
    }, {
      disabled: false,
      page: 2,
    }]);
  });

  test('should have correct paginationPages when page=1 and model.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: true,
      page: 1,
    }, {
      disabled: false,
      page: 2,
    }]);
  });

  test('should have correct paginationPages when page=2 and model.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: false,
      page: 1,
    }, {
      disabled: true,
      page: 2,
    }]);
  });

  test('should have correct paginationPages when page=null and model.totalObjects=40', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', null);
    set(controller, 'model', {
      totalObjects: 40,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: true,
      page: 1,
    }, {
      disabled: false,
      page: 2,
    }, {
      disabled: false,
      page: 3,
    }]);
  });

  test('should have correct paginationPages when page=1 and model.totalObjects=40', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 40,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: true,
      page: 1,
    }, {
      disabled: false,
      page: 2,
    }, {
      disabled: false,
      page: 3,
    }]);
  });

  test('should have correct paginationPages when page=2 and model.totalObjects=40', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 40,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: false,
      page: 1,
    }, {
      disabled: true,
      page: 2,
    }, {
      disabled: false,
      page: 3,
    }]);
  });

  test('should have correct paginationPages when page=3 and model.totalObjects=40', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 3);
    set(controller, 'model', {
      totalObjects: 40,
    });

    assert.deepEqual(get(controller, 'paginationPages'), [{
      disabled: false,
      page: 1,
    }, {
      disabled: false,
      page: 2,
    }, {
      disabled: true,
      page: 3,
    }]);
  });

  test('should have totalPages=1 when models.totalObjects=0', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      totalObjects: 0,
    });

    assert.strictEqual(get(controller, 'totalPages'), 1);
  });

  test('should have totalPages=1 when models.totalObjects=1', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      totalObjects: 1,
    });

    assert.strictEqual(get(controller, 'totalPages'), 1);
  });

  test('should have totalPages=1 when models.totalObjects=16', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      totalObjects: 16,
    });

    assert.strictEqual(get(controller, 'totalPages'), 1);
  });

  test('should have totalPages=2 when models.totalObjects=17', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      totalObjects: 17,
    });

    assert.strictEqual(get(controller, 'totalPages'), 2);
  });

  test('should have totalPages=2 when models.totalObjects=32', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      totalObjects: 32,
    });

    assert.strictEqual(get(controller, 'totalPages'), 2);
  });

  test('should have totalPages=3 when models.totalObjects=33', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      totalObjects: 33,
    });

    assert.strictEqual(get(controller, 'totalPages'), 3);
  });

  test('should have totalPages=3 when models.totalObjects=48', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'model', {
      totalObjects: 48,
    });

    assert.strictEqual(get(controller, 'totalPages'), 3);
  });

  test('should set id=null on closePublication action', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'id', 1);

    controller.send('closePublication');
    this.clock.tick(505);

    assert.strictEqual(get(controller, 'id'), null);
  });

  test('should add page on nextPage action when page=null', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', null);
    set(controller, 'model', {
      totalObjects: 32,
    });

    controller.send('nextPage');

    assert.strictEqual(get(controller, 'page'), 2);
  });

  test('should add page on nextPage action when page=1', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 32,
    });

    controller.send('nextPage');

    assert.strictEqual(get(controller, 'page'), 2);
  });

  test('should do nothing on nextPage action when on last page', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 32,
    });

    controller.send('nextPage');

    assert.strictEqual(get(controller, 'page'), 2);
  });

  test('should set id on openPublication action', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'id', null);

    controller.send('openPublication', 1);
    assert.strictEqual(get(controller, 'id'), 1);

    controller.send('openPublication', 2);
    assert.strictEqual(get(controller, 'id'), 2);
  });

  test('should set page=1 on previousPage action when page=null', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', null);
    set(controller, 'model', {
      totalObjects: 32,
    });

    controller.send('previousPage');

    assert.strictEqual(get(controller, 'page'), 1);
  });

  test('should do nothing on previousPage action when page=1', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 1);
    set(controller, 'model', {
      totalObjects: 32,
    });

    controller.send('previousPage');

    assert.strictEqual(get(controller, 'page'), 1);
  });

  test('should subtract page on previousPage action when page=3', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 3);
    set(controller, 'model', {
      totalObjects: 40,
    });

    controller.send('previousPage');

    assert.strictEqual(get(controller, 'page'), 2);
  });

  test('should set page=1 on setPage action', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 56,
    });

    controller.send('setPage', 1);

    assert.strictEqual(get(controller, 'page'), 1);
  });

  test('should set page=3 on setPage action', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 56,
    });

    controller.send('setPage', 3);

    assert.strictEqual(get(controller, 'page'), 3);
  });

  test('should set to last page on setPage action when page > totalPages', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'model', {
      totalObjects: 56,
    });

    controller.send('setPage', 10);

    assert.strictEqual(get(controller, 'page'), 4);
  });

  test('should set type=publications on setType action', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'type', 'events');
    set(controller, 'model', {
      totalObjects: 56,
    });

    controller.send('setType', 'publications');

    assert.strictEqual(get(controller, 'page'), null);
    assert.strictEqual(get(controller, 'type'), 'publications');
  });

  test('should set type=opinions on setType action', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'type', 'events');
    set(controller, 'model', {
      totalObjects: 56,
    });

    controller.send('setType', 'opinions');

    assert.strictEqual(get(controller, 'page'), null);
    assert.strictEqual(get(controller, 'type'), 'opinions');
  });

  test('should set type=events on setType action', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'type', 'opinions');
    set(controller, 'model', {
      totalObjects: 56,
    });

    controller.send('setType', 'events');

    assert.strictEqual(get(controller, 'page'), null);
    assert.strictEqual(get(controller, 'type'), 'events');
  });

  test('should do nothing on setType action with invalid type', function(assert) {
    const controller = this.owner.lookup('controller:outputs-and-activities');
    set(controller, 'page', 2);
    set(controller, 'type', 'opinions');
    set(controller, 'model', {
      totalObjects: 56,
    });

    controller.send('setType', 'invalidType');

    assert.strictEqual(get(controller, 'page'), 2);
    assert.strictEqual(get(controller, 'type'), 'opinions');
  });
});
