import { action, set } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';

export default class FooterPhotoComponent extends Component {
  @tracked revealToggle = false;
  isRevealed = false;
  lastAction = 0;
  quoteRevealTimeout = null;
  textRevealTimeout = null;

  get footerClass() {
    const classNames = ['footer', 'clearfix', 'show-for-large'];
    if (this.args && this.args.darkFooter) {
      classNames.push('footer-dark');
    }
    return classNames.toString().replace(/,/g, ' ');
  }

  hide() {
    /* istanbul ignore next */
    $('.hover-reveal').stop(false, false).animate({
      'opacity': 0,
    }, 500);
    /* istanbul ignore next */
    $('.hover-text-reveal').stop(false, false).animate({
      'top': '62%',
      'opacity': 0,
    }, 250);
    /* istanbul ignore next */
    $('.hover-reveal-quote, .hover-reveal-quote-source').stop(false, false).animate({
      'opacity': 0,
      'top': '10px',
    }, 500);
    /* istanbul ignore next */
    $('.hover-reveal-quote-line').stop(false, false).animate({
      'width': 0,
    }, 500);
    /* istanbul ignore next */
    $('.cigi-top-bar, .dot-nav, .scroll-arrow, .hover-reveal-hide').stop(false, false).animate({
      'opacity': 1,
    }, 500);
    /* istanbul ignore next */
    $('.radial-progress .circle .mask.left, .radial-progress .circle .mask .fill').css({
      'transform': 'rotate(0deg)',
    });
    /* istanbul ignore next */
    return {
      textRevealTimeout: setTimeout(function() {
        $('.hover-text-reveal').css({
          'visibility': 'hidden',
        });
      }, 250),
    };
  }

  reveal() {
    /* istanbul ignore next */
    $('.hover-reveal').stop(false, false).animate({
      'opacity': 1,
    }, 500);
    /* istanbul ignore next */
    $('.hover-text-reveal').stop(false, false).css({
      'visibility': 'visible',
    }).animate({
      'opacity': 1,
      'top': '50%',
    }, 750);
    /* istanbul ignore next */
    $('.cigi-top-bar, .dot-nav, .scroll-arrow, .hover-reveal-hide').stop(false, false).animate({
      'opacity': 0,
    }, 500);
    /* istanbul ignore next */
    $('.radial-progress .circle .mask.left, .radial-progress .circle .mask .fill').css({
      'transform': 'rotate(180deg)',
    });
    /* istanbul ignore next */
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
  }

  @action
  handleMouseEnter(e) {
    /* istanbul ignore next */
    e.preventDefault();

    /* istanbul ignore next */
    if (this.textRevealTimeout) {
      clearTimeout(this.textRevealTimeout);
      set(this, 'textRevealTimeout', null);
    }

    /* istanbul ignore next */
    if (this.quoteRevealTimeout) {
      clearTimeout(this.quoteRevealTimeout);
      set(this, 'quoteRevealTimeout', null);
    }

    /* istanbul ignore next */
    set(this, 'isRevealed', true);
    /* istanbul ignore next */
    set(this, 'lastAction', (new Date()).valueOf());
    /* istanbul ignore next */
    const revealResult = this.reveal();
    /* istanbul ignore next */
    set(this, 'quoteRevealTimeout', revealResult.quoteRevealTimeout);
  }

  @action
  handleMouseLeave(e) {
    /* istanbul ignore next */
    e.preventDefault();

    /* istanbul ignore next */
    if (this.quoteRevealTimeout) {
      clearTimeout(this.quoteRevealTimeout);
      set(this, 'quoteRevealTimeout', null);
    }

    /* istanbul ignore next */
    set(this, 'isRevealed', false);
    /* istanbul ignore next */
    set(this, 'lastAction', (new Date()).valueOf());
    /* istanbul ignore next */
    const hideResult = this.hide();
    /* istanbul ignore next */
    set(this, 'textRevealTimeout', hideResult.textRevealTimeout);
  }

  @action
  showBackground() {
    this.revealToggle = !this.revealToggle;
    /* istanbul ignore next */
    if ((new Date()).valueOf() - this.lastAction > 200) {
      if (this.isRevealed) {
        if (this.quoteRevealTimeout) {
          clearTimeout(this.quoteRevealTimeout);
          set(this, 'quoteRevealTimeout', null);
        }

        set(this, 'isRevealed', false);
        set(this, 'lastAction', (new Date()).valueOf());
        const hideResult = this.hide();
        set(this, 'textRevealTimeout', hideResult.textRevealTimeout);
      } else if (!this.isRevealed) {
        if (this.textRevealTimeout) {
          clearTimeout(this.textRevealTimeout);
          set(this, 'textRevealTimeout', null);
        }

        if (this.quoteRevealTimeout) {
          clearTimeout(this.quoteRevealTimeout);
          set(this, 'quoteRevealTimeout', null);
        }

        set(this, 'isRevealed', true);
        set(this, 'lastAction', (new Date()).valueOf());
        const revealResult = this.reveal();
        set(this, 'quoteRevealTimeout', revealResult.quoteRevealTimeout);
      }
    }
  }
}
