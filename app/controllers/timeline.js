import Controller from '@ember/controller';
import {
  computed,
  get,
  observer,
  set,
} from '@ember/object';
import { alias } from '@ember/object/computed';
// import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Controller.extend({
  fastboot: service(),
  queryParams: ['id', 'search'],

  node: alias('model.node'),
  nodes: alias('model.nodes'),

  isArticle: computed('node.type', function() {
    return get(this, 'node.type') === 'article';
  }),

  isEvent: computed('node.type', function() {
    return get(this, 'node.type') === 'event';
  }),

  isPublication: computed('node.type', function() {
    return get(this, 'node.type') === 'publication';
  }),

  overlayStyle: computed('node.id', function() {
    // const node = get(this, 'node');

    // if (!get(this, 'fastboot.isFastBoot')
    //     && node) {
    //   let publicId = nodeImages['12895'].public_id.replace(' ', '%20');
    //   let version = nodeImages['12895'].version;
    //   if (node.image) {
    //     publicId = nodeImages[node.id].public_id.replace(' ', '%20');
    //     version = nodeImages[node.id].version;
    //   }
    //   return htmlSafe(`background-image: url('https://res.cloudinary.com/cigi/image/upload/h_1440,c_fill/v${version}/${publicId}.jpg'), url('https://res.cloudinary.com/cigi/image/upload/w_100,e_blur:100,c_scale/v${version}/${publicId}.jpg')`);
    // }

    return null;
  }),

  filteredNodes: computed('nodes.[]', 'search', function() {
    let nodes = get(this, 'nodes');
    const search = get(this, 'search');
    if (search) {
      nodes = nodes.filter((node) => node.title.toLowerCase().includes(search)
        || node.authors.join().toLowerCase().includes(search)
        || node.subtype.join().toLowerCase().includes(search)
        || node.research_areas.join().toLowerCase().includes(search)
        || node.summary.toLowerCase().includes(search));
    }

    return nodes.sort((a, b) => {
      const aDate = new Date(a.published_date || a.event_date);
      const bDate = new Date(b.published_date || b.event_date);
      if (aDate.valueOf() < bDate.valueOf()) {
        return -1;
      }
      if (aDate.valueOf() > bDate.valueOf()) {
        return 1;
      }
      return 0;
    });
  }),

  searchChanged: observer('search', function() {
    if (!get(this, 'search')) {
      set(this, 'search', null);
    }
  }),

  actions: {
    clearSearch() {
      set(this, 'search', null);
    },
    closeNode() {
      const self = this;
      $.when($('.timeline').animate({
        'top': '50%',
      }, 500));

      $.when($('.timeline-overlay').animate({
        'opacity': 0,
      }, 500)).done(() => {
        set(self, 'id', null);
      });
    },
    previousNode() {
      const node = get(this, 'node');
      const filteredNodes = get(this, 'filteredNodes');

      let ind = 0;
      for (let i = 0; i < filteredNodes.length; i += 1) {
        if (filteredNodes[i].id === node.id) {
          ind = i;
          break;
        }
      }

      ind -= 1;
      if (ind < 0) {
        ind = filteredNodes.length - 1;
      }

      set(this, 'id', filteredNodes[ind].id);
    },
    nextNode() {
      const node = get(this, 'node');
      const filteredNodes = get(this, 'filteredNodes');

      let ind = 0;
      for (let i = 0; i < filteredNodes.length; i += 1) {
        if (filteredNodes[i].id === node.id) {
          ind = i;
          break;
        }
      }

      ind += 1;
      if (ind >= filteredNodes.length) {
        ind = 0;
      }

      set(this, 'id', filteredNodes[ind].id);
    },
  },
});
