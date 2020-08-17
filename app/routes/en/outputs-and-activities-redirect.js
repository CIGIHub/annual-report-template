import Route from '@ember/routing/route';

export default class EnOutputsAndActivitiesRedirectRoute extends Route {
  beforeModel() {
    this.replaceWith('en.outputs-and-activities');
  }
}
