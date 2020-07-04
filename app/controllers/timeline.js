import Controller from '@ember/controller';
import {
  computed,
  observer,
  set,
} from '@ember/object';
import { alias, equal } from '@ember/object/computed';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Controller.extend({
  backgroundImage: service(),
  fastboot: service(),
  queryParams: ['id', 'search'],

  node: alias('model.node'),
  nodes: alias('model.nodes'),

  isArticle: equal('node.type', 'article'),

  isEvent: equal('node.type', 'event'),

  isPublication: equal('node.type', 'publication'),

  overlayStyle: computed('node.id', 'fastboot.isFastBoot', /* istanbul ignore next */ function() {
    const node = this.node;

    if (!this.fastboot.isFastBoot
        && node) {
      const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getNodeBackgroundImage(node.id);
      return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}')`);
    }

    return null;
  }),

  filteredNodes: computed('nodes.[]', 'search', function() {
    let nodes = this.nodes;
    const search = this.search;
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
    /* istanbul ignore next */
    if (!this.search) {
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
      const node = this.node;
      const filteredNodes = this.filteredNodes;

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
      const node = this.node;
      const filteredNodes = this.filteredNodes;

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
