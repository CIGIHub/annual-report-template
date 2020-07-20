import ENV from 'annual-report-template/config/environment';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';

export default class FooterPhotoComponent extends Component {
  @service intl;
  @service router;
  @tracked revealToggle = false;
  @tracked socialMenuIsOpen = false;
  isRevealed = false;
  lastAction = 0;
  quoteRevealTimeout = null;
  socialAnimationTimeout = null;
  textRevealTimeout = null;

  get footerClass() {
    const classNames = ['footer', 'clearfix', 'show-for-large'];
    if (this.args && this.args.darkFooter) {
      classNames.push('footer-dark');
    }
    return classNames.toString().replace(/,/g, ' ');
  }

  get linkedInShareLink() {
    const shareRoute = this.shareRoute;
    return `https://www.linkedin.com/shareArticle?mini=true&url=${shareRoute}`;
  }

  get twitterShareLink() {
    const shareRoute = this.shareRoute;
    let shareTitle = this.intl.t('title');
    shareTitle = shareTitle.replace(/ /g, '+');
    return `https://twitter.com/intent/tweet?status=${shareTitle}+${shareRoute}`;
  }

  get shareRoute() {
    const currentRoute = this.router.currentURL.replace('/', '');
    return `${ENV.host}${ENV.rootURL}${currentRoute}`;
  }

  get showPhotoCredit() {
    let showPhotoCredit = false;
    if (this.args
        && this.args.hasReveal
        && this.args.photoCredit) {
      showPhotoCredit = true;
    }
    return showPhotoCredit;
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
    $('.cigi-top-bar, .dot-nav, .scroll-arrow, .hover-reveal-hide, .vertical-title, .cigi-social').stop(false, false).animate({
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
    $('.cigi-top-bar, .dot-nav, .scroll-arrow, .hover-reveal-hide, .vertical-title, .cigi-social').stop(false, false).animate({
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
  closeSocialMenu() {
    if (this.socialAnimationTimeout) {
      clearTimeout(this.socialAnimationTimeout);
      this.socialAnimationTimeout = null;
    }
    this.socialMenuIsOpen = false;

    $('.cigi-social').animate({
      'width': '40px',
    });
    $('.social-1-btn, .social-2-btn, .social-3-btn').animate({
      'left': '0px',
      'opacity': 0,
    }, 300);

    this.socialAnimationTimeout = setTimeout(function() {
      $('.social-1-btn, .social-2-btn, .social-3-btn').css({
        'visibility': 'hidden',
      });
    }, 300);
  }

  @action
  facebookShare() {
    /* istanbul ignore next */
    FB.ui({
      method: 'share',
      href: this.shareRoute,
    });
  }

  @action
  openSocialMenu() {
    if (this.socialAnimationTimeout) {
      clearTimeout(this.socialAnimationTimeout);
      this.socialAnimationTimeout = null;
    }
    this.socialMenuIsOpen = true;

    $('.cigi-social').animate({
      'width': '160px',
    }, 300);
    $('.social-1-btn').css({
      'visibility': 'visible',
    }).animate({
      'left': '0px',
      'opacity': 1,
    }, 300);
    $('.social-2-btn').css({
      'visibility': 'visible',
    }).animate({
      'left': '40px',
      'opacity': 1,
    }, 300);
    $('.social-3-btn').css({
      'visibility': 'visible',
    }).animate({
      'left': '80px',
      'opacity': 1,
    }, 300);
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
