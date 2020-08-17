import ENV from 'annual-report-template/config/environment';
import Component from '@ember/component';
import {
  computed,
  observer,
  set,
} from '@ember/object';
import { cancel, later, run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  backgroundImage: service(),
  fastboot: service(),
  intl: service(),
  searchTimeout: null,
  timelineMiddle: 300,
  timelineNodes: [],

  timelineClass: computed('nodeId', function() {
    const classNames = ['timeline'];
    if (this.nodeId) {
      classNames.push('timeline-top');
    }
    return classNames.toString().replace(/,/g, ' ');
  }),

  init(...args) {
    this._super(args);

    /* istanbul ignore next */
    if (!this.fastboot.isFastBoot) {
      $(window).on('resize', $.proxy(this.drawTimeline, this));
    }
  },

  didInsertElement(...args) {
    this._super(args);

    this.drawTimeline();
  },

  searchChanged: observer('search', function() {
    /* istanbul ignore next */
    if (ENV.environment !== 'test') {
      if (this.searchTimeout) {
        cancel(this.searchTimeout);
      }
      set(this, 'searchTimeout', later(this, function() {
        set(this, 'searchTimeout', null);
        this.runSearch();
      }, 300));
    }
  }),

  runSearch() {
    /* istanbul ignore next */
    let search = this.search;
    /* istanbul ignore next */
    if (search) {
      search = search.toLowerCase();
    }

    /* istanbul ignore next */
    for (const timelineNode of this.timelineNodes) {
      if (!search
          || timelineNode.title.toLowerCase().includes(search)
          || timelineNode.authors.join().toLowerCase().includes(search)
          || timelineNode.subtype.join().toLowerCase().includes(search)
          || timelineNode.research_areas.join().toLowerCase().includes(search)
          || timelineNode.summary.toLowerCase().includes(search)) {
        timelineNode.bubble.addClass('search-match');
        timelineNode.bubble.removeClass('search-no-match');
        timelineNode.bubble.hover(function() {
          $(this).siblings('.search-match').stop(false, false).animate({
            opacity: 0.5,
          }, 500);
        }, function() {
          $(this).siblings('.search-match').stop(false, false).animate({
            opacity: 1,
          }, {
            complete() {
              $('.search-match').css({
                opacity: '',
              });
            },
            duration: 500,
          });
        });
        timelineNode.bubble.click(timelineNode.id, $.proxy(this.showNode, this));
      } else {
        timelineNode.bubble.addClass('search-no-match');
        timelineNode.bubble.removeClass('search-match');
        timelineNode.bubble.off('click mouseenter mouseleave');
      }
    }
  },

  _canDrawCircle(matrix, x, y, r) {
    /* istanbul ignore next */
    for (let i = x - r; i <= x + r; i += 1) {
      let x2 = i;
      if (x2 === x - r) {
        x2 = (x - r) + 0.5;
      } else if (x2 === x + r) {
        x2 = (x + r) - 0.5;
      }
      const y2 = Math.sqrt((r ** 2) - ((x2 - x) ** 2)) + y;
      const h = Math.ceil(Math.abs(y2 - y));
      for (let j = y - h; j <= y + h; j += 1) {
        if (matrix[i][j]) {
          return false;
        }
      }
    }
    /* istanbul ignore next */
    return true;
  },

  _drawCircle(matrix, x, y, r, removeCircle = false) {
    /* istanbul ignore next */
    const matrixCopy = matrix;
    /* istanbul ignore next */
    for (let i = x - r; i <= x + r; i += 1) {
      let x2 = i;
      if (x2 === x - r) {
        x2 = (x - r) + 0.5;
      } else if (x2 === x + r) {
        x2 = (x + r) - 0.5;
      }
      const y2 = Math.sqrt((r ** 2) - ((x2 - x) ** 2)) + y;
      const h = Math.ceil(Math.abs(y2 - y));
      for (let j = y - h; j <= y + h; j += 1) {
        matrixCopy[i][j] = !removeCircle;
      }
    }
  },

  drawTimeline() {
    /* istanbul ignore next */
    const self = this;
    /* istanbul ignore next */
    const nodes = this.nodes;
    /* istanbul ignore next */
    const timeline = $('.timeline');

    /* istanbul ignore next */
    set(this, 'timelineNodes', []);

    /* istanbul ignore next */
    if (typeof timeline === 'undefined') {
      return false;
    }

    /* istanbul ignore next */
    timeline.addClass('show-for-large');

    /* istanbul ignore next */
    if (!timeline.is(':visible')) {
      return false;
    }

    /* istanbul ignore next */
    timeline.html(`
      <p class="date-marker date-marker-beg">2018</p>
      <p class="date-marker date-marker-end">2019</p>
      <div class="timeline-line line-start"></div>
      <div class="ticks">
        <div class="tick">${this.intl.t('timeline.august')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.september')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.october')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.november')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.december')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.january')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.february')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.march')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.april')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.may')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.june')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">${this.intl.t('timeline.july')}</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick">${this.intl.t('timeline.august')}</div>
      </div>
      <div class="timeline-line line-end"></div>
    `);

    /* istanbul ignore next */
    const beginningOfYear = new Date('2018-08-01');
    /* istanbul ignore next */
    const daysWidth = timeline.width() / 365;
    /* istanbul ignore next */
    const timelineMiddle = this.timelineMiddle;

    /* istanbul ignore next */
    const svgMatrix = Array(Math.floor(timeline.width()) + 1);
    /* istanbul ignore next */
    for (let i = 0; i < (Math.floor(timeline.width()) + 1); i += 1) {
      svgMatrix[i] = Array((timelineMiddle * 2) + 1);

      for (let j = 0; j < (timelineMiddle * 2) + 1; j += 1) {
        svgMatrix[i][j] = false;
      }
    }

    // Find the max and min word counts to set as the largest/smallest bubbles.
    /* istanbul ignore next */
    let eventMaxWordCount = 1;
    /* istanbul ignore next */
    let eventMinWordCount = 100000;
    /* istanbul ignore next */
    let opinionMaxWordCount = 1;
    /* istanbul ignore next */
    let opinionMinWordCount = 100000;
    /* istanbul ignore next */
    let publicationMaxWordCount = 1;
    /* istanbul ignore next */
    let publicationMinWordCount = 100000;
    /* istanbul ignore next */
    for (const node of nodes) {
      if (node.type === 'publication'
          && node.word_count > publicationMaxWordCount) {
        publicationMaxWordCount = node.word_count;
      }
      if (node.type === 'publication'
          && node.word_count < publicationMinWordCount) {
        publicationMinWordCount = node.word_count;
      }
      if (node.type === 'article'
          && node.word_count > opinionMaxWordCount) {
        opinionMaxWordCount = node.word_count;
      }
      if (node.type === 'article'
          && node.word_count < opinionMinWordCount) {
        opinionMinWordCount = node.word_count;
      }
      if (node.type === 'event'
          && node.word_count > eventMaxWordCount) {
        eventMaxWordCount = node.word_count;
      }
      if (node.type === 'event'
          && node.word_count < eventMinWordCount) {
        eventMinWordCount = node.word_count;
      }
    }

    // Draw each publication as a bubble.
    /* istanbul ignore next */
    nodes.forEach((node, ind) => {
      const nodeCopy = node;
      // Determine the radius.
      const r = 5;

      // Determine the x coordinate.
      const numDays = Math.floor((
        new Date(node.published_date || node.event_date) - beginningOfYear) / 86400000);
      let cx = Math.floor(numDays * daysWidth);
      if (cx < r) {
        cx = r + 1;
      }
      if (cx > (timeline.width() - r)) {
        cx = (timeline.width() - r) - 1;
      }

      // Determine the y coordinate.
      let cy = timelineMiddle;
      for (let i = 0; i < timelineMiddle - r; i += 1) {
        let canDrawCircle = false;
        for (let j = 0; j < i; j += 1) {
          if (ind <= (nodes.length / 2)
              && self._canDrawCircle(svgMatrix, cx + j, (cy - i) + j, r)) {
            cx += j;
            cy = (cy - i) + j;
            canDrawCircle = true;
            break;
          } else if (ind > (nodes.length / 2)
              && self._canDrawCircle(svgMatrix, cx - j, (cy - i) - j, r)) {
            cx -= j;
            cy = (cy - i) - j;
            canDrawCircle = true;
            break;
          }
        }
        if (canDrawCircle) {
          break;
        }
      }

      // Mark the circle in the matrix.
      self._drawCircle(svgMatrix, cx, cy, r);

      nodeCopy.cx = cx;
      nodeCopy.cy = cy;
      nodeCopy.r = r;
    });

    // Draw
    /* istanbul ignore next */
    nodes.forEach((node) => {
      const bubble = $(document.createElement('div'));
      bubble.addClass('timeline-bubble');
      bubble.addClass(`node-${node.id}`);
      const top = node.cy - node.r;
      const left = node.cx - node.r;

      bubble.css({
        left,
        top,
      });
      if (node.type === 'publication') {
        bubble.addClass('publication');
      } else if (node.type === 'article') {
        bubble.addClass('opinion');
      } else if (node.type === 'event') {
        bubble.addClass('event');
      }

      const preview = $(document.createElement('div'));
      preview.addClass('preview');
      const previewImageContainer = $(document.createElement('div'));
      previewImageContainer.addClass('preview-image-container');
      const previewImage = $(document.createElement('div'));
      previewImage.addClass('preview-image');
      const { thumbnailUrl } = this.backgroundImage.getNodeBackgroundImage(node.id);
      previewImage.css({
        'background-image': `url('${thumbnailUrl}')`,
      });
      previewImage.addClass(`timeline-${node.id}-thumbnail`);
      previewImageContainer.append(previewImage);
      preview.append(previewImageContainer);
      const previewLine = $(document.createElement('div'));
      previewLine.addClass('preview-line');
      preview.append(previewLine);
      const previewText = $(document.createElement('div'));
      previewText.addClass('preview-text');
      if (node.cx >= (timeline.width() * 0.75)) {
        previewText.addClass('preview-text-left');
      } else {
        previewText.addClass('preview-text-right');
      }
      const previewH6 = $(document.createElement('h6'));
      if (node.type === 'article') {
        previewH6.html('Opinion');
      } else {
        previewH6.html(node.type);
      }
      previewText.append(previewH6);
      const previewH5 = $(document.createElement('h5'));
      if (node.subtype[0] === 'Books') {
        const previewEm = $(document.createElement('em'));
        const emTitle = previewEm.html(node.title);
        previewH5.html(emTitle);
      } else {
        previewH5.html(node.title);
      }
      previewText.append(previewH5);
      if (node.date_str) {
        const previewDate = $(document.createElement('h6'));
        previewDate.addClass('pub-date');
        previewDate.html(node.date_str);
        previewText.append(previewDate);
      }
      preview.append(previewText);
      bubble.append(preview);

      timeline.append(bubble);

      const nodeCopy = {
        bubble,
      };
      Object.assign(nodeCopy, node);
      this.timelineNodes.push(nodeCopy);
    });

    /* istanbul ignore next */
    this.runSearch();

    /* istanbul ignore next */
    return true;
  },

  showNode(ev) {
    /* istanbul ignore next */
    set(this, 'nodeId', ev.data);
    /* istanbul ignore next */
    $.when($('.timeline').animate({
      'top': '40px',
    }, 500)).done(() => {
      // Clear the css styling to default back to classes.
      run(() => {
        $('.timeline').css({
          'top': '',
        });
      });
    });
  },
});
