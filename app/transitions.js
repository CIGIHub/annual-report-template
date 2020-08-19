import ENV from 'annual-report-template/config/environment';

export default /* istanbul ignore next */ function() {
  const customDuration = ENV.environment === 'test' ? 0 : 500;
  const crossFadeSlide = {
    pickNew: '.background-row',
    use: ['crossFadeSlide', false, {
      duration: customDuration,
    }],
  };
  const crossFade = {
    use: ['crossFade', {
      duration: customDuration,
    }],
  };
  const crossFadeSlideReverse = {
    pickNew: '.background-row',
    use: ['crossFadeSlide', true, {
      duration: customDuration,
    }],
  };
  const crossFadeReverse = {
    use: ['crossFade', {
      duration: customDuration,
    }],
  };

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.table-of-contents'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.chairs-message'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.presidents-message'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.index'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.chairs-message'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.presidents-message'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.table-of-contents'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.chairs-message'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.presidents-message'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-1'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-2'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-3'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-4'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-5'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-6'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-7'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-8'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-9'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-10'),
    this.toRoute('en.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-10'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-10'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-10'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-10'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-10'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-10'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-11'),
    this.toRoute('en.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-11'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-11'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-11'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-11'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-11'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-12'),
    this.toRoute('en.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-12'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-12'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-12'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-12'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-13'),
    this.toRoute('en.outputs-and-activities'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-13'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-13'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.slide-13'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.outputs-and-activities'),
    this.toRoute('en.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.outputs-and-activities'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.timeline'),
    this.toRoute('en.financials'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.timeline'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('en.financials'),
    this.toRoute('en.thank-you'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.table-des-matieres'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.message-du-president-du-conseil'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.message-du-directeur-executif'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.index'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.message-du-president-du-conseil'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.message-du-directeur-executif'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.table-des-matieres'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-president-du-conseil'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-1'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.message-du-directeur-executif'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-2'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-1'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-3'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-2'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-4'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-3'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-5'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-4'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-6'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-5'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.slide-7'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-6'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.slide-8'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-7'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.slide-9'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-8'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.slide-10'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-9'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-10'),
    this.toRoute('fr.slide-11'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-10'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-10'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-10'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-10'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-10'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-10'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-11'),
    this.toRoute('fr.slide-12'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-11'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-11'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-11'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-11'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-11'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-12'),
    this.toRoute('fr.slide-13'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-12'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-12'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-12'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-12'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-13'),
    this.toRoute('fr.publications-et-activites'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-13'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-13'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.slide-13'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.publications-et-activites'),
    this.toRoute('fr.timeline'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.publications-et-activites'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.timeline'),
    this.toRoute('fr.finances'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.timeline'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );

  /* istanbul ignore next */
  this.transition(
    this.fromRoute('fr.finances'),
    this.toRoute('fr.merci'),
    this.use('explode', crossFadeSlide, crossFade),
    this.reverse('explode', crossFadeSlideReverse, crossFadeReverse),
  );
}
