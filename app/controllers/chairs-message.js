import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

import routeImage from '../route-image';

export default Controller.extend({
  backgroundStyle: computed(function() {
    const backgroundUrl = routeImage('chairs-message');
    return htmlSafe(`background-image: url('${backgroundUrl}');`);
  }),
});
