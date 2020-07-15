import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';

export default class SlidesOutputsAndActivitiesComponent extends Component {
  @service backgroundImage;
  @service fastboot;

  get currentPage() {
    let currentPage = 1;
    if (this.args.page && !isNaN(parseInt(this.args.page, 10))) {
      currentPage = parseInt(this.args.page, 10);
    }
    return currentPage;
  }

  get currentType() {
    let currentType = 'publications';
    if (this.args.type && [
      'events',
      'opinions',
      'publications',
    ].includes(this.args.type)) {
      currentType = this.args.type;
    }
    return currentType;
  }

  get disableNext() {
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;
    return currentPage >= totalPages;
  }

  get disablePrevious() {
    const currentPage = this.currentPage;
    return currentPage <= 1;
  }

  get isArticle() {
    return this.args.publication
      && this.args.publication.type === 'article';
  }

  get isEvent() {
    return this.args.publication
      && this.args.publication.type === 'event';
  }

  get isPublication() {
    return this.args.publication
      && this.args.publication.type === 'publication';
  }

  get isTypeEvents() {
    return this.currentType === 'events';
  }

  get isTypeOpinions() {
    return this.currentType === 'opinions';
  }

  get isTypePublications() {
    return this.currentType === 'publications';
  }

  get paginationPages() {
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;
    const pageNumbers = [currentPage];
    if (currentPage > 1) {
      for (const i of Array(Math.max(3, currentPage - (totalPages - 6))).keys()) {
        if (currentPage - (i + 1) >= 1) {
          pageNumbers.push(currentPage - (i + 1));
        }
      }
    }
    if (currentPage < totalPages) {
      for (const i of Array(7 - pageNumbers.length).keys()) {
        if (currentPage + (i + 1) <= totalPages) {
          pageNumbers.push(currentPage + (i + 1));
        }
      }
    }

    pageNumbers.sort(function(a, b) { return a - b; });

    return pageNumbers.map((page) => ({
      disabled: (page === currentPage),
      page,
    }));
  }

  get overlayStyle() {
    const publication = this.args.publication;

    if (!this.fastboot.isFastBoot
        && publication) {
      const {
        fullSizeUrl,
        thumbnailUrl,
      } = this.backgroundImage.getNodeBackgroundImage(publication.id);
      return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}')`);
    }

    return null;
  }

  get totalPages() {
    return Math.max(Math.ceil(this.args.totalObjects / 16), 1);
  }

  get shortSummary() {
    const publication = this.args.publication;
    if (publication) {
      let summary = publication.summary;
      summary = summary.replace(/(\r\n\t|\n|\r\t)/gm, '');
      if (/^(.*?)[.?!]\s/.test(summary)) {
        return /^(.*?)[.?!]\s/.exec(summary)[0];
      }
      return summary;
    }
    return '';
  }

  @action
  setType(type) {
    if (['events', 'opinions', 'publications'].includes(type)) {
      this.args.setPage(null);
      this.args.setType(type);
    }
  }

  @action
  setPage(page) {
    this.args.setPage(page);
  }

  @action
  openPublication(id) {
    this.args.setId(id);
  }

  @action
  previousPage() {
    let page = this.currentPage;
    page -= 1;
    if (page <= 1) {
      page = 1;
    }
    this.args.setPage(page);
  }

  @action
  closePublication() {
    const self = this;
    $.when($('.outputs-activities-overlay').animate({
      'opacity': 0,
    }, 500)).done(() => {
      self.args.setId(null);
    });
  }

  @action
  nextPage() {
    let page = this.currentPage;
    const totalPages = this.totalPages;
    page += 1;
    if (page >= totalPages) {
      page = totalPages;
    }
    this.args.setPage(page);
  }
}
