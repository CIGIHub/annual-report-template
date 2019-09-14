import Component from '@ember/component';
import { get, set } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  lastScrollTime: 0,
  scrollings: [],
  touchStartX: 0,
  touchStartY: 0,
  transitionBack: null,
  transitionNext: null,

  didInsertElement(...args) {
    this._super(args);
    $(document).on('keydown', $.proxy(this._keypressHandler, this));

    $(document).on({
      'DOMMouseScroll mousewheel': $.proxy(this._scrollHandler, this),
    });

    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
    /* istanbul ignore next */
    if (isTouch) {
      let pointerDown = 'MSPointerDown';
      let pointerMove = 'MSPointerMove';
      if (window.PointerEvent) {
        pointerDown = 'pointerdown';
        pointerMove = 'pointermove';
      }
      $(document).off(`touchstart ${pointerDown}`).on(`touchstart ${pointerDown}`, $.proxy(this._touchStartHandler, this));
      $(document).off(`touchmove ${pointerMove}`).on(`touchmove ${pointerMove}`, $.proxy(this._touchMoveHandler, this));
    }
  },

  _getTouchCoordinates(e) {
    /* istanbul ignore next */
    const coordinates = {};
    /* istanbul ignore next */
    coordinates.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
    /* istanbul ignore next */
    coordinates.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX;

    /* istanbul ignore next */
    return coordinates;
  },

  /* istanbul ignore next *//* istanbul ignore next */
  _isReallyTouch(e) {
    // Don't move for mouse click and drag
    /* istanbul ignore next */
    return typeof e.pointerType === 'undefined' || e.pointerType !== 'mouse';
  },

  _touchStartHandler(ev) {
    /* istanbul ignore next */
    if (Foundation.MediaQuery.atLeast('medium')) {
      const e = ev.originalEvent;
      if (this._isReallyTouch(e)) {
        const touchCoordinates = this._getTouchCoordinates(e);
        set(this, 'touchStartY', touchCoordinates.y);
        set(this, 'touchStartX', touchCoordinates.x);
      }
    }
  },

  _touchMoveHandler(ev) {
    /* istanbul ignore next */
    if (Foundation.MediaQuery.atLeast('medium')) {
      const e = ev.originalEvent;

      if (this._isReallyTouch(e) && !get(this, 'isTransitioning')) {
        const touchCoordinates = this._getTouchCoordinates(e);
        const touchEndY = touchCoordinates.y;
        const touchEndX = touchCoordinates.x;

        // Only want to consider vertical swipes
        if (Math.abs(get(this, 'touchStartY') - touchEndY)
            > Math.abs(get(this, 'touchStartX') - touchEndX)) {
          if (Math.abs(get(this, 'touchStartY') - touchEndY)
              > ($(document).height() / (100 * 5))) {
            if (get(this, 'touchStartY') > touchEndY) {
              // Swiping up
              get(this, 'transitionNext')();
            } else if (touchEndY > get(this, 'touchStartY')) {
              // Swiping down
              get(this, 'transitionBack')();
            }
          }
        }
      }
    }
  },

  _keypressHandler(e) {
    /* istanbul ignore next */
    if (Foundation.MediaQuery.atLeast('medium')) {
      if (!get(this, 'isTransitioning')) {
        if (e.keyCode === 38) {
          get(this, 'transitionBack')();
        } else if (e.keyCode === 40) {
          get(this, 'transitionNext')();
        }
      }
    }
  },

  _scrollHandler(e) {
    /* istanbul ignore next */
    if (Foundation.MediaQuery.atLeast('medium')) {
      const getAverage = (elements, number) => {
        let sum = 0;
        const lastElements = elements.slice(Math.max(elements.length - number, 1));
        for (let i = 0; i < lastElements.length; i += 1) {
          sum += lastElements[i];
        }

        return Math.ceil(sum / number);
      };
      const currentTime = new Date().getTime();
      const ev = e.originalEvent;
      const value = ev.wheelDelta || -ev.deltaY || -ev.detail;
      const delta = Math.max(-1, Math.min(1, value));

      const horizontalDetection = typeof ev.wheelDeltaX !== 'undefined'
        || typeof ev.deltaX !== 'undefined';
      const isScrollingVertically = (Math.abs(ev.wheelDeltaX) < Math.abs(ev.wheelDelta))
        || (Math.abs(ev.deltaX) < Math.abs(ev.deltaY) || !horizontalDetection);

      if (get(this, 'scrollings').length > 149) {
        get(this, 'scrollings').shift();
      }

      get(this, 'scrollings').push(Math.abs(value));

      const timeDiff = currentTime - get(this, 'lastScrollTime');
      set(this, 'lastScrollTime', currentTime);

      if (timeDiff > 200) {
        set(this, 'scrollings', []);
      }

      const averageEnd = getAverage(get(this, 'scrollings'), 10);
      const averageMiddle = getAverage(get(this, 'scrollings'), 70);
      const isAccelerating = averageEnd >= averageMiddle;

      if (isAccelerating && isScrollingVertically) {
        if (delta < 0) {
          if (!get(this, 'isTransitioning')) {
            get(this, 'transitionNext')();
          }
        } else if (delta > 0) {
          if (!get(this, 'isTransitioning')) {
            get(this, 'transitionBack')();
          }
        }
      }
    }
  },
});
