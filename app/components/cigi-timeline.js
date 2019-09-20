import ENV from 'annual-report-2019/config/environment';
import Component from '@ember/component';
import {
  computed,
  get,
  observer,
  set,
} from '@ember/object';
import { cancel, later, run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  fastboot: service(),
  nodeId: null,
  nodes: [],
  searchTimeout: null,
  timelineMiddle: 300,
  timelineNodes: [],

  timelineClass: computed('nodeId', function() {
    const classNames = ['timeline'];
    if (get(this, 'nodeId')) {
      classNames.push('timeline-top');
    }
    return classNames.toString().replace(/,/g, ' ');
  }),

  init(...args) {
    this._super(args);

    if (!get(this, 'fastboot.isFastBoot')) {
      $(window).on('resize', $.proxy(this.drawTimeline, this));
    }
  },

  didInsertElement(...args) {
    this._super(args);

    this.drawTimeline();
  },

  searchChanged: observer('search', function() {
    if (ENV.environment !== 'test') {
      if (get(this, 'searchTimeout')) {
        cancel(get(this, 'searchTimeout'));
      }
      set(this, 'searchTimeout', later(this, function() {
        set(this, 'searchTimeout', null);
        this.runSearch();
      }, 300));
    }
  }),

  runSearch() {
    let search = get(this, 'search');
    if (search) {
      search = search.toLowerCase();
    }

    for (const timelineNode of get(this, 'timelineNodes')) {
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
    return true;
  },

  _drawCircle(matrix, x, y, r, removeCircle = false) {
    const matrixCopy = matrix;
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
    const self = this;
    const nodes = get(this, 'nodes');
    const timeline = this.$('.timeline');

    set(this, 'timelineNodes', []);

    if (typeof timeline === 'undefined') {
      return false;
    }

    timeline.addClass('show-for-large');

    if (!timeline.is(':visible')) {
      return false;
    }

    timeline.html(`
      <p class="date-marker date-marker-beg">2018</p>
      <p class="date-marker date-marker-end">2019</p>
      <div class="timeline-line line-start"></div>
      <div class="ticks">
        <div class="tick">AUG</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">SEP</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">OCT</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">NOV</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">DEC</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">JAN</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">FEB</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">MAR</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">APR</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">MAY</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">JUN</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick line">JUL</div>
        <div class="tick line">&nbsp;</div>
        <div class="tick">AUG</div>
      </div>
      <div class="timeline-line line-end"></div>
    `);


    const beginningOfYear = new Date('2018-08-01');
    const daysWidth = timeline.width() / 365;
    const timelineMiddle = get(this, 'timelineMiddle');

    const svgMatrix = Array(Math.floor(timeline.width()) + 1);
    for (let i = 0; i < (Math.floor(timeline.width()) + 1); i += 1) {
      svgMatrix[i] = Array((timelineMiddle * 2) + 1);

      for (let j = 0; j < (timelineMiddle * 2) + 1; j += 1) {
        svgMatrix[i][j] = false;
      }
    }

    // Find the max and min word counts to set as the largest/smallest bubbles.
    let eventMaxWordCount = 1;
    let eventMinWordCount = 100000;
    let opinionMaxWordCount = 1;
    let opinionMinWordCount = 100000;
    let publicationMaxWordCount = 1;
    let publicationMinWordCount = 100000;
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
      // let publicId = nodeImages['12895'].public_id.replace(' ', '%20');
      // let version = nodeImages['12895'].version;
      // if (node.image
      //     && nodeImages[node.id]
      //     && nodeImages[node.id].public_id
      //     && nodeImages[node.id].version) {
      //   publicId = nodeImages[node.id].public_id.replace(' ', '%20');
      //   version = nodeImages[node.id].version;
      // }
      // previewImage.css({
      //   'background-image': `url('https://res.cloudinary.com/cigi/image/upload/w_80,h_80,c_fill/v${version}/${publicId}.jpg')`,
      // });
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

      get(this, 'timelineNodes').push({
        ...node,
        bubble,
      });
    });

    this.runSearch();

    return true;
  },

  showNode(ev) {
    set(this, 'nodeId', ev.data);
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
