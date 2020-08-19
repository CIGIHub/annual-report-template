import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class EnOutputsAndActivitiesController extends Controller {
  queryParams = ['id', 'page', 'type'];

  @alias('model.objects') objects;
  @alias('model.publication') publication;
  @alias('model.totalObjects') totalObjects;
  @tracked id = null;
  @tracked page = null;
  @tracked type = null;

  @action
  setPage(page) {
    this.page = page;
  }

  @action
  setType(type) {
    this.type = type;
  }

  @action
  setId(id) {
    this.id = id;
  }
}
