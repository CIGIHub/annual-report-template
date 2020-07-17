import ENV from 'annual-report-template/config/environment';
import GoogleAnalyticsMixin from 'annual-report-template/mixins/google-analytics';
import ResetScrollMixin from 'annual-report-template/mixins/reset-scroll';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
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
  lightbox: service(),
  intl: service(),
  routeOrder: service(),
  router: service(),

  queryParams: {
    id: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
    type: {
      refreshModel: true,
    },
  },

  beforeModel() {
    this.intl.setLocale('fr-ca');
    if (!this.assetLoader.assetsLoaded) {
      return this.assetLoader.waitForAssets();
    }
    return true;
  },

  model(params) {
    let page = 1;
    /* istanbul ignore next */
    if (params.page && !isNaN(parseInt(params.page, 10))) {
      page = parseInt(params.page, 10);
    }

    let type = 'publications';
    if (params.type && [
      'events',
      'opinions',
      'publications',
    ].includes(params.type)) {
      type = params.type;
    }

    let objects = publications;
    if (type === 'opinions') {
      objects = opinions;
    } else if (type === 'events') {
      objects = events;
    }
    objects.sort((a, b) => {
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

    let publication = null;
    /* istanbul ignore next */
    if (params.id) {
      if (type === 'publications') {
        publication = publications.find((pub) => pub.id === params.id);
      } else if (type === 'opinions') {
        publication = opinions.find((opinion) => opinion.id === params.id);
      } else if (type === 'events') {
        publication = events.find((ev) => ev.id === params.id);
      }
    }

    /* istanbul ignore next */
    if (!this.fastboot.isFastBoot) {
      if (publication) {
        this.lightbox.showPublicationLightbox();
        $('html, body').css({
          'height': '100%',
          'overflow': 'hidden',
        });
        if (type === 'publications' || type === 'opinions') {
          const authorString = get(publication, 'authors').join(', ');
          set(publication, 'author_str', authorString);
        }
      } else if (this.lightbox.subType === 'publication') {
        this.lightbox.closeLightbox();
        $('html, body').css({
          'height': '',
          'overflow': '',
        });
      }
    }

    return hash({
      objects: objects.slice((page - 1) * 16, ((page - 1) * 16) + 16).map((obj) => {
        set(obj, 'date_str', null);
        /* istanbul ignore next */
        if (obj.published_date) {
          set(obj, 'date_str', moment(obj.published_date).format('MMMM D, YYYY'));
        } else if (obj.event_date) {
          set(obj, 'date_str', moment(obj.event_date).format('MMMM D, YYYY'));
        }
        set(obj, 'type_str', get(obj, 'type'));
        /* istanbul ignore next */
        if (get(obj, 'subtype').length > 0) {
          set(obj, 'type_str', get(obj, 'subtype')[0]);
          if (get(obj, 'type_str') === 'Books') {
            set(obj, 'is_italic', true);
          }
        }
        return obj;
      }),
      publication,
      totalObjects: objects.length,
    });
  },

  afterModel() {
    const title = `${this.intl.t('outputsAndActivities.title')} | ${this.intl.t('title')}`;
    set(this, 'headData.title', title);
    set(this, 'headData.description', this.intl.t('description'));
    if (this.router && this.router.currentURL) {
      set(this, 'headData.url', `${ENV.host}${ENV.rootURL}${this.router.currentURL.replace('/', '')}`);
    }
    set(this, 'headData.image', this.backgroundImage.defaultBackground.ogUrl);
    set(this, 'headData.siteName', this.intl.t('title'));
    set(this, 'headData.locale', 'fr_CA');

    // Load next route background
    const nextRoute = this.routeOrder.getNextRoute('fr.outputs-and-activities');
    if (nextRoute) {
      const { fullSizeUrl } = this.backgroundImage.getSlideBackgroundImage(nextRoute);
      if (fullSizeUrl) {
        this.assetLoader.loadAsset(fullSizeUrl);
      }
    }
  },

  resetController(controller) {
    set(controller, 'id', null);
    set(controller, 'page', null);
    set(controller, 'type', null);
  },
});
