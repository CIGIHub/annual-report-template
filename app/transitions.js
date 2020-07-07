import ENV from 'annual-report-template/config/environment';

export default /* istanbul ignore next */ function() {
  const customDuration = ENV.environment === 'test' ? 0 : 500;
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('table-of-contents'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('chairs-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('presidents-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-1'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-2'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-4'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-5'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('index'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('chairs-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('presidents-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-1'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-2'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-4'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-5'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-1'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-2'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-4'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-5'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-1'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-2'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-4'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-5'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-2'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-4'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-5'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-1'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-4'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-5'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-2'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-5'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-4'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('slide-6'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-5'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('slide-7'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-6'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('slide-8'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-7'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('slide-9'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-8'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('slide-10'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-9'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-10'),
    this.toRoute('slide-11'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-10'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-10'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-10'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-10'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-10'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-10'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-11'),
    this.toRoute('slide-12'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-11'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-11'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-11'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-11'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-11'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-12'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-12'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-12'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-12'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-12'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('slide-12'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('outputs-and-activities'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('outputs-and-activities'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('timeline'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('timeline'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
  this.transition(
    this.fromRoute('financials'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: customDuration,
      }],
    }, {
      use: ['crossFade', {
        duration: customDuration,
      }],
    }),
  );
}
