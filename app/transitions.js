import ENV from 'annual-report-2019/config/environment';

export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('table-of-contents'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('chairs-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('presidents-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('governing-the-digital-public-sphere'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('chairs-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('presidents-message'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('governing-the-digital-public-sphere'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('table-of-contents'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('governing-the-digital-public-sphere'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('chairs-message'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('building-closer-ties-between-canada-and-india'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('governing-the-digital-public-sphere'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('presidents-message'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('governing-the-digital-public-sphere'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('building-closer-ties-between-canada-and-india'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('governing-the-digital-public-sphere'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-clarion-call-for-protecting-the-worlds-refugees'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('governing-the-digital-public-sphere'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-cyberspace-during-a-crisis-in-trust'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('governing-the-digital-public-sphere'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('braiding-legal-orders'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('media-and-mass-atrocity-the-rwanda-genocide-and-beyond'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('models-for-data-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('braiding-legal-orders'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('protecting-elections-from-foreign-interference'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('models-for-data-governance'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('protecting-elections-from-foreign-interference'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('informing-the-debate-around-internet-security-and-trust'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('a-bretton-woods-moment-for-the-digital-age'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('informing-the-debate-around-internet-security-and-trust'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('exploring-the-four-internets-and-the-geopolitics-of-digital-governance'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('outputs-and-activities'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('curbing-cultural-appropriation-through-intellectual-property-law'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('outputs-and-activities'),
    this.toRoute('timeline'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('outputs-and-activities'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('timeline'),
    this.toRoute('financials'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('timeline'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
  this.transition(
    this.fromRoute('financials'),
    this.toRoute('thank-you'),
    this.use('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', false, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
    this.reverse('explode', {
      pickNew: '.background-row',
      use: ['crossFadeSlide', true, {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }, {
      use: ['crossFade', {
        duration: ENV.environment === 'test' ? 0 : 500,
      }],
    }),
  );
}
