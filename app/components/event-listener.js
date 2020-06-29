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
    /* istanbul ignore if */
    if (/* istanbul ignore next */ isTouch) {
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

  _isReallyTouch(e) {
    // Don't move for mouse click and drag
    /* istanbul ignore next */
    return typeof e.pointerType === 'undefined' || e.pointerType !== 'mouse';
  },

  _touchStartHandler(ev) {
    /* istanbul ignore if */
    if (Foundation.MediaQuery.atLeast('medium')) {
      const e = ev.originalEvent;
      /* istanbul ignore next */
      if (this._isReallyTouch(e)) {
        const touchCoordinates = this._getTouchCoordinates(e);
        set(this, 'touchStartY', touchCoordinates.y);
        set(this, 'touchStartX', touchCoordinates.x);
      }
    }
  },

  _touchMoveHandler(ev) {
    /* istanbul ignore if */
    if (Foundation.MediaQuery.atLeast('medium')) {
      const e = ev.originalEvent;

      if (this._isReallyTouch(e) && !this.isTransitioning) {
        const touchCoordinates = this._getTouchCoordinates(e);
        const touchEndY = touchCoordinates.y;
        const touchEndX = touchCoordinates.x;

        // Only want to consider vertical swipes
        if (Math.abs(this.touchStartY - touchEndY)
            > Math.abs(this.touchStartX - touchEndX)) {
          if (Math.abs(this.touchStartY - touchEndY)
              > ($(document).height() / (100 * 5))) {
            if (this.touchStartY > touchEndY) {
              // Swiping up
              this.transitionNext();
            } else if (touchEndY > this.touchStartY) {
              // Swiping down
              this.transitionBack();
            }
          }
        }
      }
    }
  },

  _keypressHandler(e) {
    /* istanbul ignore if */
    if (Foundation.MediaQuery.atLeast('medium')) {
      if (!this.isTransitioning) {
        if (e.keyCode === 38) {
          this.transitionBack();
        } else if (e.keyCode === 40) {
          this.transitionNext();
        }
      }
    }
  },

  _scrollHandler(e) {
    /* istanbul ignore if */
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

      if (this.scrollings.length > 149) {
        this.scrollings.shift();
      }

      this.scrollings.push(Math.abs(value));

      const timeDiff = currentTime - this.lastScrollTime;
      set(this, 'lastScrollTime', currentTime);

      if (timeDiff > 200) {
        set(this, 'scrollings', []);
      }

      const averageEnd = getAverage(this.scrollings, 10);
      const averageMiddle = getAverage(this.scrollings, 70);
      const isAccelerating = averageEnd >= averageMiddle;

      if (isAccelerating && isScrollingVertically) {
        if (delta < 0) {
          if (!this.isTransitioning) {
            this.transitionNext();
          }
        } else if (delta > 0) {
          if (!this.isTransitioning) {
            this.transitionBack();
          }
        }
      }
    }
  },
});
