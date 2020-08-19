import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class EnTimelineController extends Controller {
  queryParams = ['id', 'search'];

  @alias('model.node') node;
  @alias('model.nodes') nodes;
  @tracked id = null;
  @tracked search = '';

  @action
  setId(id) {
    this.id = id;
  }

  @action
  setSearch(searchTerm) {
    this.search = searchTerm;
  }
}
