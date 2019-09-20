import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import lolex from 'lolex';
import { module, test } from 'qunit';

module('Unit | Controller | timeline', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.clock = lolex.install();
  });

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    assert.ok(controller);
  });

  test('should have isArticle=false when model.node=null', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: null,
    });

    assert.strictEqual(get(controller, 'isArticle'), false);
  });

  test('should have isArticle=true when model.node.type=article', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'article' },
    });

    assert.strictEqual(get(controller, 'isArticle'), true);
  });

  test('should have isArticle=false when model.node.type=event', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'event' },
    });

    assert.strictEqual(get(controller, 'isArticle'), false);
  });

  test('should have isArticle=false when model.node.type=publication', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'publication' },
    });

    assert.strictEqual(get(controller, 'isArticle'), false);
  });

  test('should have isEvent=false when model.node=null', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: null,
    });

    assert.strictEqual(get(controller, 'isEvent'), false);
  });

  test('should have isEvent=false when model.node.type=article', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'article' },
    });

    assert.strictEqual(get(controller, 'isEvent'), false);
  });

  test('should have isEvent=true when model.node.type=event', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'event' },
    });

    assert.strictEqual(get(controller, 'isEvent'), true);
  });

  test('should have isEvent=false when model.node.type=publication', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'publication' },
    });

    assert.strictEqual(get(controller, 'isEvent'), false);
  });

  test('should have isPublication=false when model.node=null', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: null,
    });

    assert.strictEqual(get(controller, 'isPublication'), false);
  });

  test('should have isPublication=false when model.node.type=article', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'article' },
    });

    assert.strictEqual(get(controller, 'isPublication'), false);
  });

  test('should have isPublication=false when model.node.type=event', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'event' },
    });

    assert.strictEqual(get(controller, 'isPublication'), false);
  });

  test('should have isPublication=true when model.node.type=publication', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: { type: 'publication' },
    });

    assert.strictEqual(get(controller, 'isPublication'), true);
  });

  test('should not filter out any nodes when search=null', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', null);

    assert.deepEqual(get(controller, 'filteredNodes'), [{
      authors: ['Aaron Shull'],
      event_date: '',
      id: '14535',
      image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
      pdf_url: '',
      program: ['Global Economy'],
      published_date: '2018-08-16T14:56:10',
      research_areas: ['Innovation & Productivity'],
      speakers: [],
      subtitle: '',
      subtype: ['Opinion'],
      summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
      title: 'The Charter and Human Rights in the Digital Age',
      type: 'article',
      url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
      word_count: 1126,
    }, {
      authors: ['Bianca Wylie'],
      event_date: '',
      id: '14536',
      image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
      pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
      program: ['Global Economy'],
      published_date: '2018-08-20T13:00:00',
      research_areas: ['Innovation & Productivity'],
      speakers: [],
      subtitle: 'CIGI Paper No. 186',
      subtype: ['CIGI Papers'],
      summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
      title: 'Open Data Endgame: Countering the Digital Consensus',
      type: 'publication',
      url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
      word_count: 14547,
    }, {
      authors: ['Bushra Ebadi'],
      event_date: '',
      id: '14538',
      image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
      pdf_url: '',
      program: ['Global Security & Politics'],
      published_date: '2018-08-20T20:00:59',
      research_areas: ['Innovation & Productivity'],
      speakers: [],
      subtitle: '',
      subtype: ['Opinion'],
      summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
      title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
      type: 'article',
      url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
      word_count: 1210,
    }, {
      authors: ['Catherine Tsalikis'],
      event_date: '',
      id: '14868',
      pdf_url: '',
      program: ['Global Economy'],
      published_date: '2018-11-27T15:00:00',
      research_areas: ['Summits & Institutions'],
      speakers: [],
      subtitle: '',
      subtype: ['Opinion'],
      summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
      title: 'Can the G20 Save Globalization\'s Waning Reputation?',
      type: 'article',
      url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
      word_count: 8079,
    }]);
  });

  test('should filter nodes by title', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', 'human rights');

    assert.deepEqual(get(controller, 'filteredNodes'), [{
      authors: ['Aaron Shull'],
      event_date: '',
      id: '14535',
      image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
      pdf_url: '',
      program: ['Global Economy'],
      published_date: '2018-08-16T14:56:10',
      research_areas: ['Innovation & Productivity'],
      speakers: [],
      subtitle: '',
      subtype: ['Opinion'],
      summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
      title: 'The Charter and Human Rights in the Digital Age',
      type: 'article',
      url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
      word_count: 1126,
    }]);
  });

  test('should filter nodes by authors', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', 'bushra');

    assert.deepEqual(get(controller, 'filteredNodes'), [{
      authors: ['Bushra Ebadi'],
      event_date: '',
      id: '14538',
      image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
      pdf_url: '',
      program: ['Global Security & Politics'],
      published_date: '2018-08-20T20:00:59',
      research_areas: ['Innovation & Productivity'],
      speakers: [],
      subtitle: '',
      subtype: ['Opinion'],
      summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
      title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
      type: 'article',
      url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
      word_count: 1210,
    }]);
  });

  test('should filter nodes by subtype', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', 'cigi papers');

    assert.deepEqual(get(controller, 'filteredNodes'), [{
      authors: ['Bianca Wylie'],
      event_date: '',
      id: '14536',
      image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
      pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
      program: ['Global Economy'],
      published_date: '2018-08-20T13:00:00',
      research_areas: ['Innovation & Productivity'],
      speakers: [],
      subtitle: 'CIGI Paper No. 186',
      subtype: ['CIGI Papers'],
      summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
      title: 'Open Data Endgame: Countering the Digital Consensus',
      type: 'publication',
      url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
      word_count: 14547,
    }]);
  });

  test('should filter nodes by research areas', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', 'summits');

    assert.deepEqual(get(controller, 'filteredNodes'), [{
      authors: ['Catherine Tsalikis'],
      event_date: '',
      id: '14868',
      pdf_url: '',
      program: ['Global Economy'],
      published_date: '2018-11-27T15:00:00',
      research_areas: ['Summits & Institutions'],
      speakers: [],
      subtitle: '',
      subtype: ['Opinion'],
      summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
      title: 'Can the G20 Save Globalization\'s Waning Reputation?',
      type: 'article',
      url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
      word_count: 8079,
    }]);
  });

  test('should filter nodes by summary', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', 'argentina');

    assert.deepEqual(get(controller, 'filteredNodes'), [{
      authors: ['Catherine Tsalikis'],
      event_date: '',
      id: '14868',
      pdf_url: '',
      program: ['Global Economy'],
      published_date: '2018-11-27T15:00:00',
      research_areas: ['Summits & Institutions'],
      speakers: [],
      subtitle: '',
      subtype: ['Opinion'],
      summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
      title: 'Can the G20 Save Globalization\'s Waning Reputation?',
      type: 'article',
      url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
      word_count: 8079,
    }]);
  });

  test('should set search=null on clearSearch action', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'search', 'g20');

    controller.send('clearSearch');

    assert.strictEqual(get(controller, 'search'), null);
  });

  test('should set id=null on closeNode action', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'id', '14868');

    controller.send('closeNode');
    this.clock.tick(505);

    assert.strictEqual(get(controller, 'id'), null);
  });

  test('should set previous id on previousNode action', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: {
        id: '14868',
      },
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', null);

    controller.send('previousNode');

    assert.strictEqual(get(controller, 'id'), '14538');
  });

  test('should set last id on previousNode action when on first id', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: {
        id: '14535',
      },
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', null);

    controller.send('previousNode');

    assert.strictEqual(get(controller, 'id'), '14868');
  });

  test('should set next id on nextNode action', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: {
        id: '14535',
      },
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', null);

    controller.send('nextNode');

    assert.strictEqual(get(controller, 'id'), '14536');
  });

  test('should set first id on nextNode action when on last id', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    set(controller, 'model', {
      node: {
        id: '14868',
      },
      nodes: [{
        authors: ['Aaron Shull'],
        event_date: '',
        id: '14535',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/shutterstock_300344546-2.jpg',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-08-16T14:56:10',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Technology has changed the economy, political system and society can Canadian laws keep up?',
        title: 'The Charter and Human Rights in the Digital Age',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/charter-and-human-rights-digital-age',
        word_count: 1126,
      }, {
        authors: ['Bianca Wylie'],
        event_date: '',
        id: '14536',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/iStock-520648340.jpg',
        pdf_url: 'https://www.cigionline.org/sites/default/files/documents/Paper%20no.186web.pdf',
        program: ['Global Economy'],
        published_date: '2018-08-20T13:00:00',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: 'CIGI Paper No. 186',
        subtype: ['CIGI Papers'],
        summary: 'The core idea explored in this paper is whether human behavioural data may warrant exemption, for the time being, from publication by the government through its open data programs due to the potential for this data to be used to further commodify human behaviour.',
        title: 'Open Data Endgame: Countering the Digital Consensus',
        type: 'publication',
        url_landing_page: 'https://www.cigionline.org/publications/open-data-endgame-countering-digital-consensus',
        word_count: 14547,
      }, {
        authors: ['Bushra Ebadi'],
        event_date: '',
        id: '14538',
        image: 'https://www.cigionline.org/sites/default/files/images/landscape/AP_18181381743658.jpg',
        pdf_url: '',
        program: ['Global Security & Politics'],
        published_date: '2018-08-20T20:00:59',
        research_areas: ['Innovation & Productivity'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'Without a concerted global effort to develop an ethical framework for AI, technologies may be misappropriated',
        title: 'Collaboration Is Necessary for Ethical Artificial Intelligence',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/collaboration-necessary-ethical-artificial-intelligence',
        word_count: 1210,
      }, {
        authors: ['Catherine Tsalikis'],
        event_date: '',
        id: '14868',
        pdf_url: '',
        program: ['Global Economy'],
        published_date: '2018-11-27T15:00:00',
        research_areas: ['Summits & Institutions'],
        speakers: [],
        subtitle: '',
        subtype: ['Opinion'],
        summary: 'On the eve of the G20 Leaders Summit in Argentina, the architects of the international forum reflect on one of the great Canadian inventions.',
        title: 'Can the G20 Save Globalization\'s Waning Reputation?',
        type: 'article',
        url_landing_page: 'https://www.cigionline.org/articles/can-g20-save-globalizations-waning-reputation',
        word_count: 8079,
      }],
    });
    set(controller, 'search', null);

    controller.send('nextNode');

    assert.strictEqual(get(controller, 'id'), '14535');
  });
});
