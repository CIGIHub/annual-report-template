import Component from '@glimmer/component';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class SlidesTimelineComponent extends Component {
  @service backgroundImage;
  @service fastboot;

  get isArticle() {
    return this.args.node
      && this.args.node.type === 'article';
  }

  get isEvent() {
    return this.args.node
      && this.args.node.type === 'event';
  }

  get isPublication() {
    return this.args.node
      && this.args.node.type === 'publication';
  }

  get overlayStyle() {
    const node = this.args.node;

    if (!this.fastboot.isFastBoot
        && node) {
      const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getNodeBackgroundImage(node.id);
      return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}')`);
    }

    return null;
  }

  get filteredNodes() {
    let nodes = this.args.nodes;
    const search = this.args.search;
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
  }

  @action
  clearSearch() {
    this.args.setSearch(null);
  }

  @action closeNode() {
    const self = this;
    $.when($('.timeline').animate({
      'top': '50%',
    }, 500));

    $.when($('.timeline-overlay').animate({
      'opacity': 0,
    }, 500)).done(() => {
      self.args.setId(null);
    });
  }

  @action
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

    this.args.setId(filteredNodes[ind].id);
  }

  @action
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

    this.args.setId(filteredNodes[ind].id);
  }
}
