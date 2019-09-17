import Component from '@ember/component';
import { get, observer, set } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  isRevealed: false,
  lastAction: 0,
  quoteRevealTimeout: null,
  textRevealTimeout: null,

  revealToggleChanged: observer('revealToggle', function() {
    if ((new Date()).valueOf() - get(this, 'lastAction') > 200) {
      if (get(this, 'isRevealed')) {
        if (get(this, 'quoteRevealTimeout')) {
          clearTimeout(get(this, 'quoteRevealTimeout'));
          set(this, 'quoteRevealTimeout', null);
        }

        set(this, 'isRevealed', false);
        set(this, 'lastAction', (new Date()).valueOf());
        const hideResult = get(this, 'hide')();
        set(this, 'textRevealTimeout', hideResult.textRevealTimeout);
      } else if (!get(this, 'isRevealed')) {
        if (get(this, 'textRevealTimeout')) {
          clearTimeout(get(this, 'textRevealTimeout'));
          set(this, 'textRevealTimeout', null);
        }

        if (get(this, 'quoteRevealTimeout')) {
          clearTimeout(get(this, 'quoteRevealTimeout'));
          set(this, 'quoteRevealTimeout', null);
        }

        set(this, 'isRevealed', true);
        set(this, 'lastAction', (new Date()).valueOf());
        const revealResult = get(this, 'reveal')();
        set(this, 'quoteRevealTimeout', revealResult.quoteRevealTimeout);
      }
    }
  }),

  init() {
    set(this, 'revealToggle', false);
    return this._super();
  },

  mouseEnter() {
    if (get(this, 'textRevealTimeout')) {
      clearTimeout(get(this, 'textRevealTimeout'));
      set(this, 'textRevealTimeout', null);
    }

    if (get(this, 'quoteRevealTimeout')) {
      clearTimeout(get(this, 'quoteRevealTimeout'));
      set(this, 'quoteRevealTimeout', null);
    }

    set(this, 'isRevealed', true);
    set(this, 'lastAction', (new Date()).valueOf());
    const revealResult = get(this, 'reveal')();
    set(this, 'quoteRevealTimeout', revealResult.quoteRevealTimeout);
  },

  mouseLeave() {
    if (get(this, 'quoteRevealTimeout')) {
      clearTimeout(get(this, 'quoteRevealTimeout'));
      set(this, 'quoteRevealTimeout', null);
    }

    set(this, 'isRevealed', false);
    set(this, 'lastAction', (new Date()).valueOf());
    const hideResult = get(this, 'hide')();
    set(this, 'textRevealTimeout', hideResult.textRevealTimeout);
  },

  hide() {
    $('.hover-reveal').stop(false, false).animate({
      'opacity': 0,
    }, 500);
    $('.hover-text-reveal').stop(false, false).animate({
      'top': '62%',
      'opacity': 0,
    }, 250);
    $('.hover-reveal-quote, .hover-reveal-quote-source').stop(false, false).animate({
      'opacity': 0,
      'top': '10px',
    }, 500);
    $('.hover-reveal-quote-line').stop(false, false).animate({
      'width': 0,
    }, 500);
    $('.cigi-top-bar, .dot-nav, .scroll-arrow, .hover-reveal-hide').stop(false, false).animate({
      'opacity': 1,
    }, 500);
    $('.radial-progress .circle .mask.left, .radial-progress .circle .mask .fill').css({
      'transform': 'rotate(0deg)',
    });
    return {
      textRevealTimeout: setTimeout(function() {
        $('.hover-text-reveal').css({
          'visibility': 'hidden',
        });
      }, 250),
    };
  },

  reveal() {
    $('.hover-reveal').stop(false, false).animate({
      'opacity': 1,
    }, 500);
    $('.hover-text-reveal').stop(false, false).css({
      'visibility': 'visible',
    }).animate({
      'opacity': 1,
      'top': '50%',
    }, 750);
    $('.cigi-top-bar, .dot-nav, .scroll-arrow, .hover-reveal-hide').stop(false, false).animate({
      'opacity': 0,
    }, 500);
    $('.radial-progress .circle .mask.left, .radial-progress .circle .mask .fill').css({
      'transform': 'rotate(180deg)',
    });
    return {
      quoteRevealTimeout: setTimeout(function() {
        $('.hover-reveal-quote, .hover-reveal-quote-source').stop(false, false).animate({
          'opacity': 1,
          'top': 0,
        }, 500);
        $('.hover-reveal-quote-line').stop(false, false).animate({
          'width': '100px',
        }, 500);
      }, 500),
    };
  },
});
