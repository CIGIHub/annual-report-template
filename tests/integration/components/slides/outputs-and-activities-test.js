import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | slides/outputs-and-activities', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Slides::OutputsAndActivities />`);

    assert.dom('.outputs-activities').exists();
  });

  test('it renders all disabled pagination buttons when page=null and totalObjects=16', async function(assert) {
    this.set('page', null);
    this.set('totalObjects', 16);

    await render(hbs`<Slides::OutputsAndActivities @page={{this.page}} @totalObjects={{this.totalObjects}} />`);

    assert.dom('.outputs-activities-pagination').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-previous').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-previous').hasClass('disabled');
    assert.dom('.outputs-activities-pagination button.page-arrow-next').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-next').hasClass('disabled');
    assert.dom('.outputs-activities-pagination .page-number').exists({ count: 1 });
    assert.dom('.outputs-activities-pagination .page-number').hasTagName('span');
    assert.dom('.outputs-activities-pagination .page-number').hasClass('current');
    assert.dom('.outputs-activities-pagination .page-number').containsText('1');
  });

  test('it renders buttons for the next page when page=null and totalObjects=17', async function(assert) {
    this.set('page', null);
    this.set('totalObjects', 17);

    await render(hbs`<Slides::OutputsAndActivities @page={{this.page}} @totalObjects={{this.totalObjects}} />`);

    assert.dom('.outputs-activities-pagination').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-previous').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-previous').hasClass('disabled');
    assert.dom('.outputs-activities-pagination button.page-arrow-next').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-next').doesNotHaveClass('disabled');
    assert.dom('.outputs-activities-pagination .page-number').exists({ count: 2 });
    assert.dom('.outputs-activities-pagination .page-number:nth-child(2)').hasTagName('span');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(2)').hasClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(2)').containsText('1');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(3)').hasTagName('button');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(3)').doesNotHaveClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(3)').containsText('2');
  });

  test('it renders correct pagination buttons when page=5 and totalObjects=160', async function(assert) {
    this.set('page', 5);
    this.set('totalObjects', 160);

    await render(hbs`<Slides::OutputsAndActivities @page={{this.page}} @totalObjects={{this.totalObjects}} />`);

    assert.dom('.outputs-activities-pagination').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-previous').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-previous').doesNotHaveClass('disabled');
    assert.dom('.outputs-activities-pagination button.page-arrow-next').exists();
    assert.dom('.outputs-activities-pagination button.page-arrow-next').doesNotHaveClass('disabled');
    assert.dom('.outputs-activities-pagination .page-number').exists({ count: 7 });
    assert.dom('.outputs-activities-pagination .page-number:nth-child(2)').hasTagName('button', 'hello1');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(2)').doesNotHaveClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(2)').containsText('2');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(3)').hasTagName('button', 'hello2');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(3)').doesNotHaveClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(3)').containsText('3');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(4)').hasTagName('button', 'hello3');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(4)').doesNotHaveClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(4)').containsText('4');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(5)').hasTagName('span', 'hello4');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(5)').hasClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(5)').containsText('5');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(6)').hasTagName('button', 'hello5');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(6)').doesNotHaveClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(6)').containsText('6');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(7)').hasTagName('button', 'hello6');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(7)').doesNotHaveClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(7)').containsText('7');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(8)').hasTagName('button', 'hello7');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(8)').doesNotHaveClass('current');
    assert.dom('.outputs-activities-pagination .page-number:nth-child(8)').containsText('8');
  });

  test('it renders correct menu when type=null', async function(assert) {
    this.set('type', null);

    await render(hbs`<Slides::OutputsAndActivities @type={{this.type}} />`);

    assert.dom('.publications-menu').exists();
    assert.dom('.publications-menu .view-publications-btn').doesNotExist();
    assert.dom('.publications-menu .view-opinions-btn').exists();
    assert.dom('.publications-menu .view-events-btn').exists();
  });

  test('it renders correct menu when type=publications', async function(assert) {
    this.set('type', 'publications');

    await render(hbs`<Slides::OutputsAndActivities @type={{this.type}} />`);

    assert.dom('.publications-menu').exists();
    assert.dom('.publications-menu .view-publications-btn').doesNotExist();
    assert.dom('.publications-menu .view-opinions-btn').exists();
    assert.dom('.publications-menu .view-events-btn').exists();
  });

  test('it renders correct menu when type=opinions', async function(assert) {
    this.set('type', 'opinions');

    await render(hbs`<Slides::OutputsAndActivities @type={{this.type}} />`);

    assert.dom('.publications-menu').exists();
    assert.dom('.publications-menu .view-publications-btn').exists();
    assert.dom('.publications-menu .view-opinions-btn').doesNotExist();
    assert.dom('.publications-menu .view-events-btn').exists();
  });

  test('it renders correct menu when type=events', async function(assert) {
    this.set('type', 'events');

    await render(hbs`<Slides::OutputsAndActivities @type={{this.type}} />`);

    assert.dom('.publications-menu').exists();
    assert.dom('.publications-menu .view-publications-btn').exists();
    assert.dom('.publications-menu .view-opinions-btn').exists();
    assert.dom('.publications-menu .view-events-btn').doesNotExist();
  });
});
