import ENV from 'annual-report-2019/config/environment';
import GoogleAnalyticsMixin from 'annual-report-2019/mixins/google-analytics';
import ResetScrollMixin from 'annual-report-2019/mixins/reset-scroll';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import moment from 'moment';
import { hash } from 'rsvp';

const publications = nodes.filter((node) => node.type === 'publication');
const opinions = nodes.filter((node) => node.type === 'article');
const events = nodes.filter((node) => node.type === 'event');

export default Route.extend(GoogleAnalyticsMixin, ResetScrollMixin, {
  assetLoader: service(),
  backgroundImage: service(),
  fastboot: service(),
  headData: service(),
  intl: service(),
  lightbox: service(),

  queryParams: {
    id: {
      refreshModel: true,
    },
    search: {
      refreshModel: false,
    },
  },

  beforeModel() {
    if (!get(this, 'assetLoader.assetsLoaded')) {
      return get(this, 'assetLoader').waitForAssets();
    }
    return true;
  },

  model(params) {
    const nodes = publications.concat(opinions, events);
    nodes.sort((a, b) => {
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

    for (const n of nodes) {
      set(n, 'date_str', null);
      if (n.published_date) {
        set(n, 'date_str', moment(n.published_date).format('MMMM D, YYYY'));
      } else if (n.event_date) {
        set(n, 'date_str', moment(n.event_date).format('MMMM D, YYYY'));
      }

      let summary = get(n, 'summary');
      summary = summary.replace(/(\r\n\t|\n|\r\t)/gm, '');
      if (/^(.*?)[.?!]\s/.test(summary)) {
        summary = /^(.*?)[.?!]\s/.exec(summary)[0];
      }
      set(n, 'summary', summary);
    }

    let node = null;
    if (params.id) {
      node = nodes.find((n) => n.id === params.id);
    }

    if (!get(this, 'fastboot.isFastBoot')) {
      $('.timeline-bubble').removeClass('selected');

      if (node) {
        set(node, 'date_str', null);
        if (node.published_date) {
          set(node, 'date_str', moment(node.published_date).format('MMMM D, YYYY'));
        } else if (node.event_date) {
          set(node, 'date_str', moment(node.event_date).format('MMMM D, YYYY'));
        }
        get(this, 'lightbox').showPublicationLightbox();
        $(document).ready(() => {
          run(() => {
            $('html, body').css({
              'height': '100%',
              'overflow': 'hidden',
            });
            $('.cigi-top-bar, .dot-nav, .scroll-arrow-up, .scroll-arrow-down, .social-1, .social-2, .social-3').css({
              'visibility': 'hidden',
            });
            $(`.node-${node.id}`).addClass('selected');
          });
        });
        if (node.type === 'publication' || node.type === 'article') {
          const authorString = get(node, 'authors').join(', ');
          set(node, 'author_str', authorString);
        }
      } else if (get(this, 'lightbox.subType') === 'publication') {
        get(this, 'lightbox').closeLightbox();
        $(document).ready(() => {
          run(() => {
            $('html, body').css({
              'height': '',
              'overflow': '',
            });
            $('.cigi-top-bar, .dot-nav, .scroll-arrow, .social-1, .social-2, .social-3').css({
              'visibility': '',
            });
          });
        });
      }
    }

    return hash({
      node,
      nodes,
    });
  },

  afterModel() {
    const title = `${get(this, 'intl').t('timeline.title')} | ${get(this, 'intl').t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', get(this, 'intl').t('description'));
    set(this, 'headData.url', `${ENV.host}${ENV.rootURL}timeline/`);
    set(this, 'headData.image', get(this, 'backgroundImage.defaultBackground.fullSizeUrl'));
  },

  resetController(controller) {
    set(controller, 'id', null);
    set(controller, 'search', null);
  },
});
