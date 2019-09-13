import ENV from 'annual-report-2019/config/environment';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  headData: service(),
  intl: service(),

  afterModel() {
    const title = `${get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.title')} | ${get(this, 'intl').t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', get(this, 'intl').t('buildingCloserTiesBetweenCanadaAndIndia.description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}building-closer-ties-between-canada-and-india/`);
  },
});