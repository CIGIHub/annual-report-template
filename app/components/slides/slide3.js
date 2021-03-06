import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default class SlidesSlide3Component extends Component {
  @service backgroundImage;
  @service intl;

  get backgroundStyle() {
    const { fullSizeUrl, thumbnailUrl } = this.backgroundImage.getSlideBackgroundImage('en.slide-3');
    return htmlSafe(`background-image: url('${fullSizeUrl}'), url('${thumbnailUrl}');`);
  }

  get links() {
    return [{
      icon: 'film',
      link: 'https://www.cigionline.org/multimedia/video-canada-india-track-15-dialogue-innovation-growth-and-prosperity',
      title: this.intl.t('slide3.link1'),
      type: this.intl.t('video'),
    }, {
      icon: 'file-alt',
      link: 'https://www.cigionline.org/series/canada-india-track-15-dialogue',
      title: this.intl.t('slide3.link2'),
      type: this.intl.t('paperSeries'),
    }, {
      icon: 'comment-alt-lines',
      link: '',
      title: this.intl.t('slide3.link3'),
      type: this.intl.t('article'),
    }];
  }

  get paragraphs() {
    return [
      this.intl.t('slide3.paragraph1'),
      this.intl.t('slide3.paragraph2'),
      this.intl.t('slide3.paragraph3'),
    ];
  }

  get photoCredit() {
    return this.intl.t('slide3.photoCredit');
  }

  get title() {
    return this.intl.t('slide3.title');
  }
}
